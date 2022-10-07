const {addUser, getUsers} = require("./repository");


const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route

router.get('/', async (req, res) => {
    let users = await getUsers()
    if(!!req.query.search) {
        users = users.filter(el => el.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
})


router.get('/:id', async (req, res) => {
    const userId = req.params.id
    let users = await getUsers()
    const user = users.find(el => el.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }

})

router.post('/', async (req, res) => {
    const name = req.body.name
    let result = await addUser(name)
    res.send({success: true})
})


module.exports = router




