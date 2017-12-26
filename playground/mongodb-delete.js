// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name: 'Mill'}).then((result)=> {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
    //     console.log(result);
    // });
     db.collection('Users').findOneAndDelete({
            _id: new ObjectID("5a3d7ca6fabfe176ba94bfc6")
        }).then((result)=> {
            console.log(JSON.stringify(result, undefined, 2));
    });

    // client.close();
});
