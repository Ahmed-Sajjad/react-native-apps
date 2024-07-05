import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./types";
// import { environments } from '../environments/environment';
import AsyncStorage from '@react-native-community/async-storage';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER, payload: true });
        
        if(email === "abc" && password === "abc") {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: { firstName: "Demha", lastName: "Dajjas" } });
            return ;
        }

        dispatch({ type: LOGIN_USER_FAIL });

        return ;
        
        // fetch(environments.NODE_API_ENDPOINT+'auth', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: JSON.stringify({ email, password })
        // })
        // .then(res => {
        //     if(res.status === 400) {
        //         dispatch({ type: LOGIN_USER_FAIL });
        //     }
        //     return res.json()
        // })
        // .then(response => {
        //     storeData(response).then(() => dispatch({ type: LOGIN_USER_SUCCESS, payload: response }))
        //     .catch((err) => console.log(err));
        // });
    };
};

const storeData = async (auth) => {
    try {
        await AsyncStorage.setItem("auth", JSON.stringify(auth));
    }
    catch(error) {
        console.log(error);
    }
};