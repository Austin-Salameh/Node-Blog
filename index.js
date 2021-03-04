const path = require('path') //provides utilities for working with file and directory paths
const express = require('express') //imports the express module 
const app = new express() //creates a new express application
const expressEdge = require('express-edge');
const mongoose = require('mongoose');

app.use(express.static('public'))

//once this app is launched, mongoose connect to this database (localhost/node-js-blog) 
mongoose.connect('mongodb://localhost/node-js-blog')

app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

   //res.render(index) we are telling express to come to the views directory and fetch the index.edge file, render it in html and send it to the browser
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})