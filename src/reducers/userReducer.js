import {ADD_USER} from "../actions/actions.js";


function userReducer(users = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...users,
                {
                    id: action.id,
                    name: action.name,
                    firstname: action.firstname,
                    age: action.age,
                    sex: action.sex
                }
            ];
        default:
            return users
    }
}

export default userReducer;