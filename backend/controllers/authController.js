const { createUser, findUserById } = require('./userController');

const registerUser = async ({ id, username, password, email, role, photoURL}) => {
    try {
        const userExists = await findUserById(id);

        if (userExists) {
            return {
                status: 400,
                data: { message: 'User already exists' }
            };
        }

        await createUser(id, username, password, email, role, photoURL);
        return {
            status: 201,
            data: { message: 'User created successfully' }
        };
    } catch (err) {
        console.error('Error in registerUser:', err);
        return {
            status: 500,
            data: { message: 'Internal Server Error' }
        };
    }
};

module.exports = {
    registerUser
};