import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {add_user} from "../actions/actions.js";

const initialValues = {
    id: '',
    name: '',
    firstname: '',
    age: '',
    sex: ''
};

export const Users = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const users = useSelector(state => state.users);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch(add_user(values.id, values.name, values.firstname, values.age, values.sex));
        setValues({id: "", name: "", firstname: "", age: "", sex: ""});
    }

    return (
        <div>
            <h3>Add a user</h3>

            <form onSubmit={handleSubmission}>
                ID: <br/>
                <input
                    type="text"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                />
                <br/>
                name: <br/>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                ></input>
                <br/>
                firstname: <br/>
                <input
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                ></input>
                <br/>
                age: <br/>
                <input
                    type="text"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                ></input>
                <br/>
                sex: <br/>
                <input
                    type="text"
                    name="sex"
                    value={values.sex}
                    onChange={handleChange}
                ></input>
                <br/>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}