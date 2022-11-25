/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/css';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';

import { connect, useDispatch } from 'react-redux';
import { ReactComponent as Logout } from '../assets/logout.svg';

const DivSvg = styled.div(({ width }) => ({
	width,
	height: 'fit-content',
	margin: '5px',
	border: '1px solid red',
	cursor: 'pointer',
	display: 'inline-block',
}));

const DivContainer = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '1em',
	width: '50em',
}));

const User = ({
	userLogin, products, product, setProduct,
}) => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getProducts());
	// }, []);

	const updateQuery = (e) => {
		const dummy = {
			_id: '1',
			title: e.target.value,
			price: 0,
			description: '',
		};
		setProduct(dummy);
	};
	const debounceOnChange = debounce(updateQuery, 1000);

	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate('/');
		window.location.reload(false);
	};

	return (
		<>
			{/* <Header /> */}
			<h1>
				{`Bonjour ${userLogin.login}`}
				{/* hello */}
			</h1>
			<button css={{ display: 'block' }}> Jouer </button>
			<DivSvg width="3em" height="10em" onClick={() => handleLogout()}>
				<Logout />
				<p> Logout</p>
			</DivSvg>
		</>
	);
};

const mapStateToProps = (state) => ({
	userLogin: state.loginReducer.user,

});

const mapDispatchToProps = {
	// setProduct: productSliceActions.setProduct,

};

export default connect(mapStateToProps, mapDispatchToProps)(User);
