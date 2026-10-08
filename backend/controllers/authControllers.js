const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
};


// REGISTER USER
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        if (user) {
            // Generate 6-digit OTP
            const otp = Math.floor(
                100000 + Math.random() * 900000
            ).toString();

            const message = `Welcome to Shopzy, ${name}!

Thank you for registering with us.

Your OTP for Shopzy registration is: ${otp}`;

            await sendEmail(
                email,
                "Welcome to Shopzy - Your OTP for registration",
                message
            );

            console.log(message);

            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            return res.status(400).json({
                message: "Invalid user data"
            });
        }

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};


// LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        // Compare entered password with hashed password
        if (user && await bcrypt.compare(password, user.password)) {

            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });

        } else {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};


const getUsers=async(req,res)=>{
    try{
        const users=await User.find({}).select('-password');
        res.json(users);

    }catch(error){
        res.status(500).json({message:'server error'})
    }
}


// EXPORT BOTH CONTROLLERS
module.exports = {
    registerUser,
    loginUser,
    getUsers
};