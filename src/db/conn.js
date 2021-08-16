const mongoose = require("mongoose");


 mongoose.connect("mongodb://localhost:27017/Mydb",{

    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
   console.log(`connection successful`);
}).catch((error)=>{
    console.log(`no connection`)
});

// mongodb+srv://kashishjain609:kashishjain609@cluster0.liwew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017/Mydb';

// // Database Name
// // const dbName = 'myproject';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });
