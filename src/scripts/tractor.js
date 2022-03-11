//some code

//some imports
//test asparagus
import { createAsparagus } from "./seeds/asparagus.js"

// //test wheat
import { createWheat } from "./seeds/wheat.js"

//test corn
import { createCorn } from "./seeds/corn.js"

//test potato
import { createPotato } from "./seeds/potato.js"

//test soybean
import { createSoybean } from "./seeds/soybean.js"

//test sunflower
import { createSunflower } from "./seeds/sunflower.js"

//here comes addPlant
import { addPlant } from "./field.js";




export const plantSeeds = (yearlyPlanArr) => {
    for(let x = 0; x<yearlyPlanArr.length; x++){
        for(let y = 0; y <yearlyPlanArr[x].length; y++){
            switch(yearlyPlanArr[x][y]) {
                case "Asparagus":
                    const asparagusSeed = createAsparagus();
                    addPlant(asparagusSeed);
                    break;
                case "Wheat":
                    const wheatSeed = createWheat();
                    addPlant(wheatSeed);
                    break;
                case "Soybean":
                    const soybeanSeed = createSoybean();
                    addPlant(soybeanSeed);
                    break;
                case "Corn":
                    const cornSeed = createCorn();
                    addPlant(cornSeed);
                    break;
                case "Potato":
                    const potatoSeed = createPotato();
                    addPlant(potatoSeed)
                    break;
                case "Sunflower":
                    const sunflowerSeed = createSunflower();
                    addPlant(sunflowerSeed)
                    break;
                default:
                    console.log("something went wrong")
              }
            // console.log(yearlyPlanArr[x][y]);
        }
        
    }
    
}
