import {
	BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import { loginReducerSliceSliceActions } from './features/loginReducer';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';
import User from './pages/User';

const App = ({ userLogin, setUserLogin }) => {
	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setUserLogin(foundUser);
		}
	}, []);

	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route
					path="/"
					element={(
						<>
							<Login />
							{/* <SignUp /> */}
						</>
					)}
				/>
				{!userLogin.isAdmin && (
					<Route
						path="/user"
						element={(
							<User />
						)}
					/>
				)}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

const mapStateToProps = (state) => ({
	userLogin: state.loginReducer.user,
});

const mapDispatchToProps = {
	setUserLogin: loginReducerSliceSliceActions.setUserLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
