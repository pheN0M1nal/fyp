const express = require('express');
const router = express.Router();
const { registerUser, loginUser, allUsers} =  require('../controllers/userControllers')




router.get('/', (req, res) => {
    res.send('<h1>Hello World Node JS</h1>') 
})

router.post('/registerUser', registerUser)
router.post('/loginUser', loginUser)
router.get('/allUsers', allUsers)



module.exports = router;