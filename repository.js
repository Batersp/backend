const fs = require("fs")
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");


const getUsers = () => {
    return readJsonFromFile("bd")
}

const addUser = async (name) => {
    const users = await getUsers()
    users.push({name: name})

    return writeJsonToFile("bd", users)
}

exports.getUsers = getUsers
exports.addUser = addUser