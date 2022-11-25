import 'react-toastify/dist/ReactToastify.css';
import { connect, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginReducerSliceSliceActions } from '../features/loginReducer';
import { submitLoginForm } from '../features/thunks/loginThunk';

const SignUp = ({
	userLogin, setUserLogin, setFormValue, loginFormValue, sta,
}) => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(submitLoginForm(loginFormValue));
	};

	const handleChange = (event) => {
		setFormValue({
			...loginFormValue,
			[event.target.name]: event.target.value,
		});
	};
	if (userLogin.login) {
		return <Navigate to="/user" />;
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>Sign up</p>
			<input
				type="login"
				name="login"
				placeholder="enter a login"
				value={loginFormValue.login}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="enter a password"
				value={loginFormValue.password}
				onChange={handleChange}
			/>
			<button
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

const mapStateToProps = (state) => ({
	userLogin: state.loginReducer.user,
	loginFormValue: state.loginReducer.value,
	sta: state.loginReducer.value.status,
});

const mapDispatchToProps = {
	setFormValue: loginReducerSliceSliceActions.setFormValue,
	setUserLogin: loginReducerSliceSliceActions.setUserLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
