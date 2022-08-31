import {createStore} from "redux";
import reducer from '../reducers/reducer.js'

const initialState = {
    users: [
        {id: 1, name: 'John', firstname: 'DOE', age: '15', sex: 'M'},
        {id: 2, name: 'Truc', firstname: 'Machin', age: '55', sex: 'F'}
    ],
    accounts: [
        {id: 1, user_id: 1, balance: 1500},
        {id: 2, user_id: 2, balance: 5000}
    ]
};

export default createStore(
    reducer,
    initialState
);