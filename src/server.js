const express = require('express')
const app = express();
const dotenv = require('dotenv')
const webAPI = require("./WebAPI/user")
const connectDB = require('./bin/db')
require('./Services/redis')
dotenv.config();

const PORT = process.env.PORT || 3000;
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{
  console.log('request:', req.body,req.url);
  next()
})
app.use('/users', webAPI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
