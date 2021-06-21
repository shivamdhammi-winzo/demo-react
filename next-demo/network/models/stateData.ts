import Data from "./dataModels"

export default interface stateData {
    dataReducer: {
        data: { [key: string]: Data }
    };
}