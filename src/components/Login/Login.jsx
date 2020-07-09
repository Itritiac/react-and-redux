import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validation/validation';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/actions'
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/FormControls.module.css'
import style from './login.module.css'

function LoginForm ({ handleSubmit, error }) {
  return (
    <form className={style.LoginForm} onSubmit={handleSubmit}>
      <h3>Welcome</h3>
      <div>
        <Field className={style.FormInput} placeholder={'Email'} name={"email"} component={Input} type="text"
          validate={[required]} />
      </div>
      <div>
        <Field className={style.FormInput} placeholder={'Password'} name={"password"} component={Input} type="password"
          validate={[required]} />
      </div>
      <div className={style.RememberMe}>
        <Field component={Input} name={"rememberMe"} type="checkbox" />Remember me
            </div>
      {error &&
        <div className={styles.formSummaryError}>
          {error}
        </div>
      }
      <div className={style.FormButton}>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

function Login  (props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return (
      <Redirect to={"/home"} />
    )
  }
  return (
    <LoginReduxForm onSubmit={onSubmit} />
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
