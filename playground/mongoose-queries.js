const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a4a99a2b5e2510af808b3431';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid.');
// }

// Todo.find(
//     {_id: id}
// ).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne(
//     {_id: id}
// ).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var userId = '5a480c258bfb5032341fd5ca';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('user not found.');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));



