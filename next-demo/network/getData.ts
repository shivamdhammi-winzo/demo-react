import Data from "../network/models/dataModels";

const getData: any = async () => {

    const testData = await fetch(
    "https://next-demo-ed22d-default-rtdb.firebaseio.com/.json"
    ).then((response) => {
        // console.log("friebase data " + JSON.stringify(response.json()));
        return response.json();
    });

    // const dataJSON = JSON.parse(JSON.stringify(data));
    const testDataJSON = JSON.parse(JSON.stringify(testData));

    let AllData: { [key: string]: Data } = {};

    for (let key in testDataJSON) {
        let value = testDataJSON[key];
        AllData[key] = value;
    }
    // console.log("getData")
    // console.log(AllData)

    
    return AllData
}

export default getData