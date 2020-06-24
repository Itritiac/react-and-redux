import React from 'react';
import { reduxForm, Field, Fields } from 'redux-form';

const LoginForm = (props) => {
    return(
        <div>
            <h3>Welcome</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'Login'} name={"login"} component={'input'} type="text"/>
                </div>

                <div>
                    <Field  placeholder={'Password'} name={"password"} component={'input'} type="text"/>
                </div>

                <div>
                    <Field component={'input'} name={"rememberMe"} type="checkbox"/>Remember me
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