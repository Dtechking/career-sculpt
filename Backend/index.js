const express= require('express');
const app=express();
const cors= require('cors')
const bodyParser = require('body-parser');

const mongoose= require('mongoose');
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const dburl="mongodb://127.0.0.1:27017/Career";
mongoose.connect( dburl, connectionParams);

const user= require('./router/userlogin');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello');
  });

app.use('/api/User',user);

app.listen(5000,function(req,res){
    console.log('connected to port:5000');
});