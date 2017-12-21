const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/dist'));
app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
})

port = process.env.PORT || 5000;

app.listen(5000,()=> {
    console.log("server running...")
})