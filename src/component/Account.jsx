import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {add_account, add_user} from "../actions/actions.js";

const initialValues = {
    id: '',
    user_id: '',
    balance: '',
};

export const Account = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const users = useSelector(state => state.accounts);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch(add_account(values.id, values.user_id, values.balance));
        setValues({id: "", user_id: "", balance: ""});
    }

    return (
        <div>
            <h3>Add a account</h3>

            <form onSubmit={handleSubmission}>
                ID: <br/>
                <input
                    type="text"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                />
                <br/>
                user_id: <br/>
                <input
                    type="text"
                    name="name"
                    value={values.user_id}
                    onChange={handleChange}
                ></input>
                <br/>
                balance: <br/>
                <input
                    type="text"
                    name="balance"
                    value={values.balance}
                    onChange={handleChange}
                ></input>
                <br/>
                <button type="submit">Add Account</button>
            </form>
        </div>
    )
}