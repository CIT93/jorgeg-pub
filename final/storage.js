const saveLS = (sleepData) => {
    const serializedData = JSON.stringify(sleepData);
    localStorage.setItem("sleepData", serializedData);
};

const getLS = () => {
    const retrievedData = localStorage.getItem("sleepData");
    if (retrievedData !== null) {
        return JSON.parse(retrievedData);
    } else {
        return [];
    }
};

const sleepData = getLS();

export { sleepData, saveLS, getLS };