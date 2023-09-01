// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

// action-home datas
export const GET_COMPARE = 'GET_COMPARE';
export const GET_VALUE = 'GET_VALUE';


import axios from "axios";

export const getValue = data => dispatch => {
    axios.post("http://localhost:7000/freelancing/api/home-value",data)
            .then(res => dispatch({
                            type: GET_VALUE,
                            payload: res.data,
                        }))
} 