/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/css';
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

const SpanDice = styled.span(({ width = '2px', height = '2px' }) => ({
	width,
	height,
	border: '1px solid red',
}));

const DivContainer = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '1em',
	width: '50em',
}));

const User = ({
	userLogin,
}) => {
	const dispatch = useDispatch();

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
			<div css={{ display: 'block', margin: '10px' }}>
				<SpanDice> 1</SpanDice>
				<SpanDice> 2</SpanDice>
				<SpanDice> 3</SpanDice>
				<SpanDice> 4</SpanDice>
				<SpanDice> 5</SpanDice>
			</div>
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

};

export default connect(mapStateToProps, mapDispatchToProps)(User);
