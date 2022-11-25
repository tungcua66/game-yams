/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { connect } from 'react-redux';
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
	margin: '2px',
}));

const User = ({
	userLogin,
}) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate('/');
		window.location.reload(false);
	};
	const [dice, setDice] = useState([0, 0, 0, 0, 0]);

	const handleOnClick = () => {
		setDice([
			Math.floor(Math.random() * (7 - 1)) + 1,
			Math.floor(Math.random() * (7 - 1)) + 1,
			Math.floor(Math.random() * (7 - 1)) + 1,
			Math.floor(Math.random() * (7 - 1)) + 1,
			Math.floor(Math.random() * (7 - 1)) + 1,

		]);
	};

	return (
		<>
			{/* <Header /> */}
			<h1>
				{`Bonjour ${userLogin.login}`}
				{/* hello */}
			</h1>
			<button css={{ display: 'block' }} onClick={handleOnClick}> Jouer </button>
			<div css={{ display: 'block', margin: '10px' }}>
				<SpanDice>
					{dice[0]}
				</SpanDice>
				<SpanDice>
					{dice[1]}
				</SpanDice>
				<SpanDice>
					{dice[2]}
				</SpanDice>
				<SpanDice>
					{dice[3]}
				</SpanDice>
				<SpanDice>
					{dice[4]}
				</SpanDice>
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
