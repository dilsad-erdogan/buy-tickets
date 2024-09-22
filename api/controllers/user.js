const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../models/User');
const sendToken = require('../utils/sendToken');

const register = catchAsyncError(async (req, res) => {
    const { name, email, phone, password } = req.body;

    if(!name || !email || !phone || !password) {
        return res.status(400).json({ success: false, error: 'All fields are required!' });
    };

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(400).json({ success: false, error: 'This email is already exist. Try again please!'});
    }

    const user = await User.create({ name: name, email: email, phone: phone, password: password });
    sendToken(user, 201, res, 'Acoount created succesfully!');
});

const login = catchAsyncError(async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ success: false, error: 'Please enter the email and password fields.' });
    };

    try{
        const user = await User.findOne({ email: email });
        console.log(user);

        if(!user){
            return res.status(400).json({ success: false, error: 'Invalid email or password.' });
        }

        if (password !== user.password) {
            return res.status(400).json({ success: false, error: 'Invalid email or password.' });
        }

        sendToken(user, 201, res, 'Login successfully!');
    } catch(error) {
        return res.status(500).json({ success: false, error: 'Internal server error!' });
    }
});

module.exports = {
    register,
    login
};