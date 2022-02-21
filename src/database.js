import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafejony';
const url = 'mongodb+srv://rollingtest:rollingtest123@clustertest.4oulm.mongodb.net/test';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})