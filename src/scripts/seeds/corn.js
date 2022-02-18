// let's export some seeds

export const createCorn = () => {
    const cornObj = {
        type: "Corn",
        height:180,
        output:6
    };
    const cornArr = [cornObj, cornObj]
    return cornArr;
}