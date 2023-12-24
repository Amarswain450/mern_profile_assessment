import axios from "axios";
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
import { toast } from 'react-toastify';

export const getSectorsAction = () => {
    return async (dispatch) => {
        dispatch({ type: GET_SECTORS_REQUEST });
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/sectors`, {
                withCredentials: true,
            });
            dispatch({
                type: GET_SECTORS_SUCCESS,
                payload: data.sectors
            });
        } catch (error) {
            dispatch({
                type: GET_SECTORS_FAILED,
                payload: error.message && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
    }
}

export const createProfileAction = (createData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_PROFILE_REQUEST });
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                },
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/create-user`, createData, config);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            dispatch({
                type: CREATE_PROFILE_SUCCESS,
                payload: response.data.message
            });
        } catch (error) {
            dispatch({
                type: CREATE_PROFILE_FAILED,
                payload: error.message && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    }
}

export const getProfileAction = () => {
    return async (dispatch) => {
        dispatch({ type: GET_PROFILE_REQUEST });
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, { 
                withCredentials: true, 
            });
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: data.users
            });
        } catch (error) {
            dispatch({
                type: GET_PROFILE_FAILED,
                payload: error.message && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    }
}

export const getSingleProfileAction = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_SINGLE_PROFILE_REQUEST });
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${id}`, {
                withCredentials: true,
            });
            dispatch({
                type: GET_SINGLE_PROFILE_SUCCESS,
                payload: data.user
            });
        } catch (error) {
            dispatch({
                type: GET_SINGLE_PROFILE_FAILED,
                payload: error.message && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    }
}

export const updateProfileAction = (id, editData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PROFILE_REQUEST });
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                },
            }
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/edit-user/${id}`, editData, config);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: response.data.message
            });
        } catch (error) {
            dispatch({
                type: UPDATE_PROFILE_FAILED,
                payload: error.message && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    }
}