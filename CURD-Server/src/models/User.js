import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
	login: {
		type: String,
		required: [true, 'login is required'],
		match: [/^[A-Za-z0-9_-]{5,20}$/, 'login not valid: must be string between 5-20 caracters'],
		unique: [true, 'login already taken'],
	},
	email: {
		type: String,
		required: [true, 'email is required'],
		match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'email not valid!'],
		unique: true,
	},
	mdp: {
		type: String,
		required: [true, 'password is required'],
		unique: true,

	},
});

userSchema.pre('save', async function save(next) {
	const salt = await bcrypt.genSalt();
	this.mdp = await bcrypt.hash(this.mdp, salt);
	next();
});

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);
