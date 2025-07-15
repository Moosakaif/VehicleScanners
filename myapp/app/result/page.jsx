"use client";

import emailjs from "@emailjs/browser"; // Add EmailJS
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const InnerPage = () => {
  const searchParams = useSearchParams();
  const formRef = useRef(null);

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [paymentToken, setPaymentToken] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false); // loading state
  // const [isTokenLoading, setIsTokenLoading] = useState(true); // loading state

  useEffect(() => {
    const regNumber = searchParams.get("reg");
    if (regNumber) {
      setRegistrationNumber(regNumber);
    }
  }, [searchParams]);

  // Removed Authorize.net token handling
  // useEffect(() => {
  //   handleGetPaymentToken()
  //     .then((data) => setPaymentToken(data))
  //     .catch((err) => alert(err))
  //     .finally(() => setIsTokenLoading(false));
  // }, []);

  // Removed Authorize.net handleGetPaymentToken function
  // const handleGetPaymentToken = async () => {
  //   const params = {
  //     getHostedPaymentPageRequest: {
  //       merchantAuthentication: {
  //         name: process.env.NEXT_PUBLIC_API_LOGIN_ID,
  //         transactionKey: process.env.NEXT_PUBLIC_TRANSACTION_KEY,
  //       },
  //       transactionRequest: {
  //         transactionType: "authCaptureTransaction",
  //         amount: "29.99",
  //       },
  //       hostedPaymentSettings: {
  //         setting: [
  //           {
  //             settingName: "hostedPaymentReturnOptions",
  //             settingValue: `{"showReceipt": true, "url": "${process.env.NEXT_PUBLIC_BASE_URL}", "urlText": "Continue", "cancelUrl": "${process.env.NEXT_PUBLIC_BASE_URL}", "cancelUrlText": "Cancel"}`,
  //           },
  //           {
  //             settingName: "hostedPaymentButtonOptions",
  //             settingValue: '{"text": "Pay"}',
  //           },
  //           {
  //             settingName: "hostedPaymentStyleOptions",
  //             settingValue: '{"bgColor": "blue"}',
  //           },
  //           {
  //             settingName: "hostedPaymentPaymentOptions",
  //             settingValue:
  //               '{"cardCodeRequired": true, "showCreditCard": true, "showBankAccount": true}',
  //           },
  //           {
  //             settingName: "hostedPaymentSecurityOptions",
  //             settingValue: '{"captcha": false}',
  //           },
  //           {
  //             settingName: "hostedPaymentShippingAddressOptions",
  //             settingValue: '{"show": false, "required": false}',
  //           },
  //           {
  //             settingName: "hostedPaymentBillingAddressOptions",
  //             settingValue: '{"show": false, "required": false}',
  //           },
  //           {
  //             settingName: "hostedPaymentCustomerOptions",
  //             settingValue:
  //               '{"showEmail": false, "requiredEmail": false, "addPaymentProfile": false}',
  //           },
  //           {
  //             settingName: "hostedPaymentOrderOptions",
  //             settingValue:
  //               '{"show": true, "merchantName": "Vehicle Scanners"}',
  //           },
  //         ],
  //       },
  //     },
  //   };

  //   const response = await axios.post(
  //     process.env.NEXT_PUBLIC_API_ENDPOINT,
  //     params,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (response?.data?.messages?.resultCode == "Ok") {
  //     return response?.data?.token;
  //   } else {
  //     console.error(response?.data?.messages?.message[0]?.text);
  //     throw new Error("Payment Initialization Failed!");
  //   }
  // };

  const handleGetReport = async () => {
    // e.preventDefault(); // No longer needs to prevent default as it's not a form submission

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!fullName || !email || !phone || !registrationNumber) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: fullName,
        from_email: email,
        phone: phone,
        message: registrationNumber,
      };

      await emailjs.send(
        "service_xd6n37r",
        "template_cu7vlfe",
        templateParams,
        "k3B55Mf9wXRT4wOU2"
      );

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Something went wrong while sending email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    // Ensure the PayPal script is loaded before rendering buttons
    if (typeof window !== "undefined" && window.paypal) {
      const paypalButtonContainer = document.getElementById("paypal-button-container");
      if (paypalButtonContainer) {
        // Clear any existing buttons to prevent duplicates on re-renders
        paypalButtonContainer.innerHTML = "";

        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "29.99", // Ensure this matches your product price
                    currency_code: "GBP", // Set currency to GBP
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            return actions.order.capture().then(async (details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              await handleGetReport();
            });
          },
          onError: (err) => {
            console.error("PayPal Checkout Error:", err);
            alert("PayPal transaction failed. Please try again.");
          },
        }).render("#paypal-button-container");
      }
    }
  }, [fullName, email, phone, registrationNumber]); // Dependencies to re-render if form fields change

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Progress Steps */}
      <div className="flex items-center px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            1
          </div>
          <span className="ml-2 text-sm font-medium">Precheck</span>
        </div>
        <div className="h-px bg-gray-300 w-8 mx-2"></div>
        <div className="flex items-center text-gray-500">
          <div className="bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">
            2
          </div>
          <span className="ml-2 text-sm font-medium">Payment</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold">
                Success! We've detected this vehicle and its previous data
                records.
              </h2>
              <div className="mt-4">
                <span className="bg-black text-white text-sm px-3 py-1 inline-block">
                  VIN/REG: {registrationNumber}
                </span>
              </div>
            </div>

            <div className="bg-gray-400 p-6 rounded">
              <h3 className="text-lg font-bold mb-4">Let's Get Started</h3>

              <form>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-white rounded"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 bg-white rounded"
                    value={email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEmail(val);

                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailRegex.test(val)) {
                        setEmailError("Please enter a valid email address.");
                      } else {
                        setEmailError("");
                      }
                    }}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                  <input
                    type="tel"
                    placeholder="Phone (No spaces)"
                    className="w-full p-3 bg-white rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="VIN/REG"
                    className="w-full p-3 bg-white rounded"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                  />
                </div>
                {/* Removed the form submission button and added PayPal button container */}
                {/* <button
                  type="submit"
                  onClick={handleGetReport}
                  className="mt-6 bg-black text-white py-3 px-6 rounded-lg text-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating Report..." : "Get Report"}
                </button> */}
              </form>
              <div id="paypal-button-container" className="mt-6"></div> {/* PayPal button container */}
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5">
            <div className="bg-white p-6 border rounded">
              <h3 className="text-lg mb-4">
                With Vehicle Scanners you may get:
              </h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  "Mileage Check",
                  "Road Tax History",
                  "Technical Specs",
                  "NCT/CRW/MOT History",
                  "Stolen Vehicle Check",
                  "Previous Usage Check",
                  "Vehicle Valuation",
                  "Owner History",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border p-4 rounded">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="checkReport"
                    className="mr-2 h-5 w-5"
                  />
                  <label htmlFor="checkReport" className="font-medium">
                    Check Report
                  </label>
                </div>

                <div className="mb-2">
                  <span className="text-2xl font-bold">£29.99</span>
                  <span className="text-sm"> report</span>
                </div>

                <div className="text-sm mb-2">
                  You pay £29.99 <span className="line-through">£33.00</span>
                </div>

                <div className="bg-red-300 text-red-700 w-16 text-center py-1 mb-4 rounded">
                  -31.77%
                </div>

                <div className="border-t pt-4 flex items-center text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-800">
                      ✓
                    </span>
                    You'll get report
                  </div>
                  <div className="ml-auto bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center text-gray-400">
                    i
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              {/* Removed the payment token check and PayPal button */}
              {/* {paymentToken ? (
                <form
                  method="post"
                  action={process.env.NEXT_PUBLIC_PAYMENT_ENDPOINT}
                  onSubmit={handleGetReport}
                  ref={formRef}
                >
                  <input type="hidden" name="token" value={paymentToken} />
                  <button
                    disabled={isLoading || emailError}
                    className={`bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium ${
                      isLoading || emailError
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {isLoading ? "Sending..." : "Get Report"}
                  </button>
                </form>
              ) : (
                <div
                  className={`text-black px-6 py-2 rounded font-medium ${
                    isTokenLoading
                      ? "bg-yellow-400 opacity-50 cursor-not-allowed"
                      : "bg-red-400"
                  }`}
                >
                  {isTokenLoading
                    ? "Loading..."
                    : "We cannot process your request right now!"}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerPage />
    </Suspense>
  );
};

export default Page;
