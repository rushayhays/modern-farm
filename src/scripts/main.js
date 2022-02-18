console.log("Welcome to the main module")

<script src="./file2.js" type="module">

import { createPlan } from "./plan";

const yearlyPlan = createPlan();

console.log(yearlyPlan);