import React from "react";
import Favourite from "./CountryFavourite";

const FavouriteList = ({countires}) => {

  const favouriteNodes = countires.map(country => {
    return (
      <Favourite country={country.name} key={country.id}>{country.text}</Favourite>
    );
  });

  return(
    <ul id="country-list">
      {favouriteNodes}
    </ul>
  )

}

export default FavouriteList;