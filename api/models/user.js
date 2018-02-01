const { Model, Schema } = require('@bakjs/mongo');
const { User } = require('@bakjs/auth');


class IUser extends User {
	// Additional properties
}

module.exports = IUser.$model;