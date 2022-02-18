//some code

export const plantSeeds = (yearlyPlanArr) => {
    for(let x = 0; x<yearlyPlanArr.length; x++){
        for(let y = 0; y <yearlyPlanArr[x].length; y++){
            console.log(yearlyPlanArr[x][y]);
        }
        
    }
    
}

// switch(yearlyPlanArr[x][y]) {
//     case "Asparagus":
//         const asparagusSeed = createAsparagus();
//         addPlant(asparagusSeed);
//         break;
//     case "Wheat":
//         const wheatSeed = createWheat();
//         addPlant(wheatSeed);
//         break;
//     case "Soybean":
//         const soybeanSeed = createSoybean();
//         addPlant(soybeanSeed);
//         break;
//     case "Corn":
//         const cornSeed = createCorn();
//         addPlant(cornSeed);
//         break;
//     case "Potato":
//         const potatoSeed = createPotato();
//         addPlant(potatoSeed)
//         break;
//     default:
//         console.log("something went wrong")
//   }