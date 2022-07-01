const express = require('express');
const app = express();
var path = require('path');
var public_dir = path.join(__dirname+'/Page&Script');
console.log(public_dir);
app.use(express.static(public_dir));
app.get('/', (req, res)=>{
    res.sendFile(path.join(public_dir+'/signuppage.html'));
})
app.listen(3000, () => {
    console.log("Server listening at port 3000");
})
