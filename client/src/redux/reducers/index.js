import { combineReducers } from "redux";
import { 
    createProfileReducer, 
    getProfileReducer, 
    getSectorReducer, 
    getSingleProfileReducer,
    updateProfileReducer
} from "./userReducer";

const rootReducer = combineReducers({
    getSector: getSectorReducer,
    createProfile: createProfileReducer,
    getProfile: getProfileReducer,
    getSingleProfile: getSingleProfileReducer,
    updateProfile: updateProfileReducer
});

export default rootReducer;