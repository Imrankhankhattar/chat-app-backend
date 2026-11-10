


const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Users = require('../Domain/Resources/Users');
const DataService = require('../SystemLayer/DataLayers');

router.post('/create-user', jsonParser, async (request, response,next) => {
  try{
      const res = await new Users.AddUserHandler(new DataService(request.body)).execute(request.body);
      response.send(res);
  }
  catch(err){
    next(err)
  }

});
router.post('/verify-user', jsonParser, async (request, response,next) => {
  try{
  const res = await new Users.VerifyUserHandler(new DataService(request.body)).execute(request.body);
  response.send(res);
  }
  catch(err){
    next(err)
  }

});
router.post('/login-user', jsonParser, async (request, response,next) => {
  try{
      const res = await new Users.LoginUserHandler(new DataService(request.body)).execute(request.body);
  response.send(res);
  }
  catch(err){
    next(err)
  }

});

module.exports = router;


