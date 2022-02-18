//Now we do some field tests
//creat an array, create an exported function that fills the array with seedObj
//create an exported function that returns the filled array

let fieldArr = [];


export const addPlant = (seedObj) => {
    let CornSensor = Array.isArray(seedObj);
    if (CornSensor === true) {
        fieldArr.push(seedObj[0]);
        fieldArr.push(seedObj[1]);
    } else {
        fieldArr.push(seedObj);
    }
    
}



export const usePlants = () => {
    return fieldArr;
}