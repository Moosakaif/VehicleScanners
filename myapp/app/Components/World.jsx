import React from 'react';

const countries = {
  Europe: [
    "United Kingdom", "Ireland", "Lithuania", "Estonia", "Latvia", "Poland", "Romania", "Hungary",
    "France", "Ukraine", "Sweden", "Belgium", "Czech Republic", "Croatia", "Bulgaria", "Slovakia",
    "Serbia", "Finland", "Slovenia", "Germany", "Italy", "Switzerland", "Denmark", "Spain", "Portugal", "Greece"
  ],
  Oceania: ["Australia"]
};

const countryToFlag = {
  "United States": "us.png",
  "Mexico": "mexico.png",
  "United Kingdom": "uk.png",
  "Ireland": "ireland.png",
  "Lithuania": "lithuania.png",
  "Estonia": "estonia.png",
  "Latvia": "lativia.png",
  "Poland": "poland.png",
  "Romania": "romania.png",
  "Hungary": "hungary.png",
  "France": "france.png",
  "Ukraine": "ukraine.png",
  "Sweden": "sweden.png",
  "Belgium": "belgium.png",
  "Czech Republic": "czech-republic.png",
  "Croatia": "croatia.png",
  "Bulgaria": "bulgaria.png",
  "Slovakia": "slovakia.png",
  "Serbia": "serbia.png",
  "Finland": "finland.png",
  "Slovenia": "slovenia.png",
  "Germany": "germany.png",
  "Italy": "italy.png",
  "Switzerland": "switzerland.png",
  "Denmark": "denmark.png",
  "Spain": "spain.png",
  "Portugal": "portugal.png",
  "Greece": "greece.png",
  "Australia": "australia.png"
};

const World = () => {
  return (
    <div id='about' className="relative text-black py-16 px-6 md:px-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/world.jpeg')" }}
      ></div>

      <div className="absolute inset-0 z-0 bg-white/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/2">
          <h1  className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering the <br /> Future of Automotive Data
          </h1>
          <p className="text-lg max-w-md">
            Since our establishment in 2016, we have expanded our services to 28 countries and are continuously striving to reach even more.
            Our VehiclesCheck reports are now accessible in these countries.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {Object.entries(countries).map(([region, countryList]) => (
            <div key={region}>
              <h2 className="text-xl font-bold mb-2">{region}</h2>
              <div className="flex flex-wrap gap-2">
                {countryList.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border text-sm"
                  >
                    <img
                      src={`/${countryToFlag[country] || 'default.png'}`}
                      alt={`${country} flag`}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default World;
