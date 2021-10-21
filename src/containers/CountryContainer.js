import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelect';



const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    // const onMunroClick = function(munro) {
    //     setSelectedMunro(munro);
    // }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    return (
        <div className="main-container">
            {/* <MunroList munros={munros} onMunroClick={onMunroClick} /> */}
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
            {/* <MunroDetail munro={selectedMunro} /> */}
            
        </div>
    )
}

export default CountryContainer;

