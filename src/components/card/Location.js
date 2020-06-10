import React from "react";
import styled from "@emotion/styled";


export default function Location({city , country}) {

    const Location = styled.div`
        text-align: center;
    `
    const City = styled.h1`
        font-family: 'Merriweather' , sans-serif;
        font-size: 1.6rem;
    `
    const Country = styled.h3`
        font-family: 'Fira Sans' , sans-serif;
        font-size: 1.1rem;
    `
  return (
    <Location>
      <City >{city}</City>
      <Country>{country}</Country>
    </Location>
  );
}
