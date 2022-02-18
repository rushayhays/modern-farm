console.log("Welcome to the main module")

//<script src="./file2.js" type="module">

import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

console.log(yearlyPlan);

//adding in code to test successful deployment of module
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

//test wheat
import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed)

//test corn
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)