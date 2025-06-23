import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";


const abc = {
    loading: false,
    data: null,
    error: null,
}


function reducer(state = abc, action) {

    switch (action.type) {
        case "start":
            return {
                ...state,
                loading: true
            }
            // break;
        case "Insert":
            return {
                ...state,
                loading: false,
            }
            // break;
        case "fail":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            // break;

        default:
            return state;
            // break;
    }

}


function Inq(name, email, subject, number, massage) {

    return async (dis) => {
        dis({
            type: "start"
        })
        try {

            await axios.post("https://g-b9eg.onrender.com/inquiry", { name, email, subject, number, massage }).then(function(response){
                 if (response.data.status === "seccess") {
                alert("massge was sent.")
            }
            });

            dis({
                type: "Insert"
            })
        }
        catch (error) {
            dis({
                type: "fail",
                payload: error
            })
        }


    }

}


function ser(name, email, service, date, time, notes, number) {

    return async (dis) => {
        dis({
            type: "start"
        })
        try {

            await axios.post("https://g-b9eg.onrender.com/servicebook", { name, email, service, date, time, notes, number }).then(function(response){
                 if (response.data.status === "seccess") {
                alert("we are contact you soon as possible.")
            }
            });

            dis({
                type: "Insert"
            })
        }
        catch (error) {
            dis({
                type: "fail",
                payload: error
            })
        }


    }

}
function plan(name, email, serviceplan, date, time, number, price) {

    return async (dis) => {
        dis({
            type: "start"
        })
        try {

            await axios.post("https://g-b9eg.onrender.com/serviceplan", { name, email, serviceplan, date, time, number, price }).then(function (response) {
            if (response.data.status === "seccess") {
                alert("we are contact you soon as possible")
            }
        });

            dis({
                type: "Insert"
            })
        }
        catch (error) {
            dis({
                type: "fail",
                payload: error
            })
        }


    }

}




const st = createStore(reducer, applyMiddleware(thunk));


export { st, Inq, ser, plan };