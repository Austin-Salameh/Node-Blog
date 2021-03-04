//import mongoose 
const mongoose = require('mongoose');


//create a new object with the schema of what all the documents in this schema should look like
//for each document in the post collection, it should have these three criteria:

const PostSchema = new mongoose.Schema({
    
    title: String,
    
    description: String,

    content: String


})

//this is the model itself which will communicate with our DB.  The schema (PostSchema) represents the structure of the documents in this specific collection.
const Post = mongoose.model('Post', PostSchema)


module.exports = Post