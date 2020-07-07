import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer/app-actions';

import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div>
				<HeaderContainer />
				<Switch>
					<Redirect exact from='/' to='/login' />
					<div className='app-wrapper'>
						<div className='app-wrapper-content'>
							<Route
								path='/welcome'
								render={() => <div>asdasd</div>} />
							<Route
								path='/dialogs'
								render={() => <DialogsContainer />} />
							<Route
								path='/home'
								render={() => <ProfileContainer />} />
							<Route
								path='/profile/:userId?'
								render={() => <ProfileContainer />} />
							<Route
								path='/users'
								render={() => <UsersContainer />} />
							<Route
								path='/login'
								render={() => <Login />} />
						</div>
					</div>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);