const User = require('../models/users')
const asyncHandler = require('express-async-handler') 

const registerUser = asyncHandler(async (req, res) => {

    const {myName, email, password}  = req.body
    const userExists = await User.findOne({ email })
    if (userExists) {
		res.status(400)
		throw new Error('User already exist.')
	}
    else{

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
        
    }
})
    

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
	const user = await User.findOne({ email })
    if (user && user.password == password){
		res.json({
			myNname: user.myName,
			email: user.email,
			password: user.password
        })
    }
	else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})
    
 
module.exports = {registerUser, loginUser};