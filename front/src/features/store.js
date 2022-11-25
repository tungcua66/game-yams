import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';

import modalReducer from './modalReducer';
import pageNavigate from './pageNavigate';

const store = configureStore({
	reducer: {
		modalReducer,
		pageNavigate,

		loginReducer,

	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
