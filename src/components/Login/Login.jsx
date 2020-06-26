import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validation/validation';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return(
        <div>
            <h3>Welcome</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field  placeholder={'Email'} name={"email"} component={Input} type="text"
                            validate={[required]}/>
                </div>

                <div>
                    <Field  placeholder={'Password'} name={"password"} component={Input} type="password"
                            validate={[required]}/>
                </div>

                <div>
                    <Field component={Input} name={"rememberMe"} type="checkbox"/>Remember me
                </div>
                { error &&
                    <div className={styles.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return(
            <Redirect to={"/profile"} />
        )
    }

    return(
        <LoginReduxForm onSubmit={onSubmit} />
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);