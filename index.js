const express = require('express'); 
const path = require('path');
const app = express();
 
app.use(express.static(__dirname + '/client/dist/'));
app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})
 

const port = process.env.PORT || 5000;
app.listen(port,()=> {
    console.log("server running...")
});