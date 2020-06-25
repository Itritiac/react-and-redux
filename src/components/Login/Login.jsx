import React from 'react';
import { reduxForm, Field, Fields } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validation/validation';

const LoginForm = (props) => {
    return(
        <div>
            <h3>Welcome</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'Login'} name={"login"} component={Input} type="text"
                            validate={[required]}/>
                </div>

                <div>
                    <Field  placeholder={'Password'} name={"password"} component={Input} type="text"
                            validate={[required]}/>
                </div>

                <div>
                    <Field component={Input} name={"rememberMe"} type="checkbox"/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return(
        <LoginReduxForm onSubmit={onSubmit} />
    )
}

export default Login;