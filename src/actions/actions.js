export const ADD_USER = 'ADD_USER';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const DO_PAYMENT = 'DO_PAYMENT';
export const SHOW_TRANSACTION = 'SHOW_TRANSACTION';

export function add_user(id, name, firstname, age, sex) {
    return { type: ADD_USER, id: id, name: name, firstname: firstname, age: age, sex: sex};
}

export function add_account(id, user_id, balance) {
    return { type: ADD_USER, id: id, user_id: user_id, balance: balance};
}

export function show_transaction() {
    return { type: SHOW_TRANSACTION };
}

