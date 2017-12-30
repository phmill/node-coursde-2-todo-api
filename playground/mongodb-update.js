// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5a429b0a075eb0b0bd77d8c0') }, 
        { $set: { completed: true } },
        {  returnOriginal: false }
    ).then ((result) => {
        console.log(result);
    });
    
    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5a3c45a017aa8c4a3067c2df') }, 
        { $set: { name: 'Mill' },
          $inc: { age: 1 } 
        },
        {  returnOriginal: false }
    ).then ((result) => {
        console.log(result);
    });
    // client.close();
});
