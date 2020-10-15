const oneRepMax = require('./1rm');
const wilksCalculator = require('./wilksCalculator');
const userGenerator = require('./user');
const fs = require('fs');
const { create } = require('domain');

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('user.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

const readUserInfo = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    if(user){
        console.log(user);
    } else {
        console.log("No user found!")
    }
}

const createUser = () => {
    const users = loadUsers();
    const newUserID = users.length + 1;
    const newUser = new User(newUserID);
    users.push(newUser);
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('user.json', dataJSON);
}

const editUser = () => {

}

const deleteUser = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    if(user){
        users.pop(user);
    } else {
        console.log('No user found!')
    }
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('user.json', dataJSON);
}

const getUserWilksScore = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id)
    if(user){
        const wilksScore = wilksCalculator.setWilksScore(user.sex, user.powerTotal, user.weight);
        console.log(wilksScore);
    } else {
        console.log("No user found!")
    }
}

const addLift = (user) => {
    lift = {
        date: 0,
        type: '',
        weight: 0,
        reps: 0,
        repMax: oneRepMax.getOneRepMax(weight, reps, user.unit)
    }
    user.lifts.push(lift);
}

class User {
    constructor(id){
        this.id = id;
        this.fname = 'Kasey';
        this.lname = 'Clary';
        this.sex = 'male';
        this.unit = 'lb';
        this.weight = 190;
        this.maxBench = 265,
        this.maxSquat = 365,
        this.maxDeadlift = 410,
        this.lifts = [],
        this.powerTotal = this.maxBench + this.maxSquat + this.maxDeadlift,
        this.wilksScore = wilksCalculator.setWilksScore(this.sex, this.powerTotal, this.weight)
    }
}

createUser();