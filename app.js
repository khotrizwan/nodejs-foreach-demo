// Requiring module
const express = require('express');
const forEachTest = require('./forEachTest');

//const addNum = (a, b) => { return a + b ;}
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    var JSON = [{"myname":"cat"}, {"myname":"dog"}];

    res.send('A simple Node.js <b>For Each</b> demo is '
        + 'running on this server ')
    forEachTest.forEachTest(JSON);
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5010;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));