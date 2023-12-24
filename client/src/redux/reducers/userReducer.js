import {
    CREATE_PROFILE_FAILED,
    CREATE_PROFILE_REQUEST,
    CREATE_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_SECTORS_FAILED,
    GET_SECTORS_REQUEST,
    GET_SECTORS_SUCCESS,
    GET_SINGLE_PROFILE_FAILED,
    GET_SINGLE_PROFILE_REQUEST,
    GET_SINGLE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILED,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS
} from "../types/constant";

const initialState = {
    loading: false,
    createResponse: "",
    errorMessage: "",
    sectors: [],
    profiles: [],
    profile: {},
    updateResponse: ""
}

export const getSectorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SECTORS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_SECTORS_SUCCESS:
            return {
                ...state,
                loading: false,
                sectors: action.payload
            }

        case GET_SECTORS_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}


export const createProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                createUserReducer: action.payload
            }

        case CREATE_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export const getProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profiles: action.payload
            }

        case GET_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export const getSingleProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_SINGLE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }

        case GET_SINGLE_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export const updateProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateResponse: action.payload
            }

        case UPDATE_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}