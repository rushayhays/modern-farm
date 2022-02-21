console.log("Welcome to the main module")

//<script src="./file2.js" type="module">

import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

console.log(yearlyPlan);

// //adding in code to test successful deployment of module
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

// //test wheat
import { createWheat } from "./seeds/wheat.js"

 const wheatSeed = createWheat()
 console.log(wheatSeed)

//test corn
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

//test potato
import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

//test soybean
import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

//test sunflower
import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

//here we run the field test
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

addPlant(wheatSeed);
addPlant(asparagusSeed);
addPlant(cornSeed);
let mainFieldArr = usePlants();

//This is where the tractor/ sowing stuff starts

console.log(mainFieldArr);
import { plantSeeds } from "./tractor.js";
plantSeeds(yearlyPlan);
