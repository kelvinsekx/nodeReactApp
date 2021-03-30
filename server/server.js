import express from "express"
import devBundle from './devBundle'

const app = express();
devBundle.compile(app)

import path from 'path'
const cwd = process.cwd();

app.use('/dist', express.static(path.join(cwd, 'dist')))

import template from "./../template";
app.get('/', (req, res)=>{
    res.status(200).send(template())
})

let port = process.env.PORT || 3002
app.listen(port, function onStart(err){
    if(err) console.log(err)
    console.info('server start on port %s.', port)
});

import {MongoClient} from 'mongodb';
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
MongoClient.connect(url, (err, db)=>{
    console.log('Connected to mongo');
    db.close()
})
