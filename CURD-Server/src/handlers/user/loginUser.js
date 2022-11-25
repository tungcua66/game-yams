import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';
import createToken from '../../helpers/createToken.js';
import User from '../../models/User.js';

export default async (request) => {
	try {
		const loginExists = await User.exists({ login: request.payload.login });
		if (loginExists) {
			const user = await User.findOne({ login: request.payload.login });
			const isValid = await bcrypt.compare(request.payload.password, user.mdp);
			let token;
			if (isValid) {
				token = createToken(user.admin);
				const res = { login: user.login, token };
				return res;
			}
		}
	} catch (error) {
		return Boom.badRequest('You entered bad request! Please verify syntax!');
	}
};
