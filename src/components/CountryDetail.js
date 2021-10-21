import React from 'react';

const CountryDetail = ({selectedCountry}) => {



    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>Capital city: {selectedCountry.capital}</p>
            <p>Flag:</p>
            <img src={selectedCountry.flags.png} alt="Country flag"></img>

            
        </div>
    )
}

export default CountryDetail;