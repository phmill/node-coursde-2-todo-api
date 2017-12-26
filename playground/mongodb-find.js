// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

//    db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//         console.log('Unable to fetch todos', err);
//    })
// 
// db.collection('Todos').find().count().then( (count) => {
//     console.log(`Todos: ${count}`);
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

db.collection('Users').find().count().then( (count) => {
    console.log(`Todos: ${count}`);
}, (err) => {
    console.log('Unable to fetch users', err);
});

db.collection('Users').find({name: 'Harry'}).toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch users', err);
})

    // client.close();
});
