//import json server
const jsonServer =require('json-server');
//create a server application
const restServer =jsonServer.create();
//path for db.json
const router =jsonServer.router('db.json')
//middleware
const middilware=jsonServer.defaults()
//port
const port=3001
//use in server
restServer.use(middilware)
restServer.use(router)

//to run  the server
restServer.listen(port,()=>{
    console.log("restserver listening on port"+port);
})