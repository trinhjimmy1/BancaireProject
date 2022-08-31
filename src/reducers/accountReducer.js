import {ADD_ACCOUNT} from "../actions/actions.js";

function accountReducer(accounts = [], action) {
    switch (action.type) {
        case ADD_ACCOUNT:
            return [
                ...accounts,
                {
                    id: action.id,
                    user_id: action.user_id,
                    balance: action.balance
                }
            ];
        default:
            return accounts;
    }
}

export default accountReducer;