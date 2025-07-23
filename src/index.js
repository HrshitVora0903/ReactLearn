import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";
// import { use } from "react";
// import animals, { useAnimal } from "./data";

//DESTRUCTURE ARRAYS
// const [cat,dog] = animals;
 
// const [animal, makeSound] = useAnimal(cat);
// console.log(animal);
// makeSound();
// //console.log(cat);
// const {sound,name} = cat;
// console.log(name);


// DESTRUCTRE OBJECTS
// const {name, sound, feedingRequirements} = cat;
// console.log(feedingRequirements);

const [honda ,tesla] = cars;
const {speedStats:{topSpeed: teslaTopSpeed}} = tesla;
const {speedStats:{topSpeed: hondaTopSpeed}} = honda;
const {coloursByPopularity: [teslaTopColour, secondcolor]}= tesla;
const {coloursByPopularity: [hondaTopColour]}= honda;


const root = createRoot(document.getElementById('root'));
root.render( <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
