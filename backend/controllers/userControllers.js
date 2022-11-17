const User = require('../models/users')
const asyncHandler = require('express-async-handler') 
const bcrypt = require('bcrypt')

const registerUser = asyncHandler(async (req, res) => {

    const {myName, email, password}  = req.body
    const userExists = await User.findOne({ email })
    const saltRounds = 10;
    if (userExists) {
		res.status(400)
		throw new Error('User already exist.')
	}
    else{
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, password) {
                // Store hash in your password DB.
                const user = new User(
                    {
                        myName,
                        email,
                        password
                    }
                )

                user.save()
                .then((result) => {
                    res.send(result)
                })
                .catch((err) => {
                    console.log(err)
                })
            });
        });
        
    }
})
    

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
	const user = await User.findOne({ email })
    flag = false;
    if (user){
        const flag = await bcrypt.compare(password, user.password);

        if(flag){
            res.json({
                myNname: user.myName,
                email: user.email,
                password: password
            })
        }
        else {
            res.status(401)
            throw new Error('Invalid Password')
            
        }

    }
	else {
		res.status(401)
		throw new Error('Invalid Email')
	}
})
    
 
module.exports = {registerUser, loginUser};