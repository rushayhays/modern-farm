console.log("Welcome to the main module")

//<script src="./file2.js" type="module">

import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

// console.log(yearlyPlan);

// //adding in code to test successful deployment of module
//import all the seeds
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

//create the seeds
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()

//here we run the field test

// addPlant(wheatSeed);
// addPlant(asparagusSeed);
// addPlant(cornSeed);
// let mainFieldArr = usePlants();

//This is where the tractor/ sowing stuff starts

// console.log(mainFieldArr);
import { plantSeeds } from "./tractor.js";
import { harvestForMarket } from "./harvester.js"
plantSeeds(yearlyPlan);
console.log("This is the yearly plan " + yearlyPlan);
console.log("___________________________________________________________________________________-")
let mainFieldArr = usePlants();
console.log("This is what was planted in the field " + mainFieldArr);
console.log("___________________________________________________________________________________-")
const allPlantsHarvestedForMarket = harvestForMarket(mainFieldArr)
console.log(allPlantsHarvestedForMarket)

import { cataloger } from "./catalog.js";
cataloger(allPlantsHarvestedForMarket);