const {addUser, getUsers, deleteUser, getUser, updateUser} = require("./repository");


const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route

router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search)
    res.send(users)
})


router.get('/:id', async (req, res) => {
    const userId = req.params.id
    let user = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }

})

router.delete('/:id', async (req, res) => {
    const userId = req.params.id
    await deleteUser(userId)
    res.send(204)

})

router.post('/', async (req, res) => {
    const name = req.body.name
    await addUser(name)
    res.send({success: true})
})

router.put('/', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    await updateUser(id, name)
})


module.exports = router




