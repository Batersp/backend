const {addUser, getUsers} = require("./repository");
exports.usersController = async (req, res) => {
    if(req.method === "POST") {
        let result = await addUser('LOH')
        res.write(JSON.stringify({success: true}))
        res.end();
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }

}