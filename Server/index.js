import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://cung:GIXOfTrmsg0dujUX@cluster0.5qb0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb' }));
app.use(cors());

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("Connected to db");
    app.listen(PORT, () => {   // khi bat dau ket noi voi server
        console.log(`server is running on ${PORT}`);
    });
    
}).catch(err => {
    console.log(err)
})
//
app.use('/posts', posts);
//
