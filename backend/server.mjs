import Express from 'express';
import config from './config.js';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';


// dotenv.config();
const mongodburl = config.MONGODB_URL;

mongoose.connect(mongodburl,{
    useNewUrlParser:true,
}).then(() => {console.log("MongoDBConnected")})
   .catch(error=>console.log(error.reason));

 const data ={
     products:[
    {
     name:"Cotton Fit Shirt",
     categories:"shirts",
     _id:"1",
     image:"/images/d1.jpg",
     price:59,
     brand:"Lacoste",
     rating:4.5,
     Numreviews:13,
     description:"Nice Shirt",
     constInStocks:5
    },
    {
        name:"Classic Shirt",
        categories:"shirts",
        _id:"2",
        image:"/images/d1.jpg",
        price:79,
        brand:"Nike",
        rating:4.5,
        Numreviews:66,
        description:"Nice Shirt",
        constInStocks:5,
    },
    {
        name:"Slim Shirts",
        categories:"shirts",
        _id:"3",
        image:"/images/d1.jpg",
        price:60,
        brand:"Nike",
        rating:4.5,
        Numreviews:10,
        description:"Nice Shirt",
        constInStocks:5
    },
    {
     name:"Cotton Fit Shirt",
     categories:"shirts",
     _id:"4",
     image:"/images/d1.jpg",
     price:59,
     brand:"Lacoste",
     rating:4.5,
     Numreviews:13,
     description:"Nice Shirt",
     constInStocks:5
    },
    {
        name:"Classic Shirt",
        categories:"shirts",
        _id:"5",
        image:"/images/d1.jpg",
        price:79,
        brand:"Nike",
        rating:4.5,
        Numreviews:66,
        description:"Nice Shirt",
        constInStocks:5
    },
    {
        name:"Slim Shirts",
        categories:"shirts",
        _id:"6",
        image:"/images/d1.jpg",
        price:60,
        brand:"Nike",
        rating:4.5,
        Numreviews:10,
        description:"Nice Shirt",
        constInStocks:5
    }
   ]
 }

const app = Express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/users",userRoute);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });   



app.get("/api/products",(req,res)=>{
    res.send(data.products);
    console.log("ALLPRODUCT",data);
})

app.get("/api/products/:id",(req,res)=>{
    const productId=req.params.id;
    console.log("productId",productId);
    const Requestproduct=data.products.find(x=>x._id===productId);
    console.log("fetch product",Requestproduct);
    if(Requestproduct){
        res.send(Requestproduct);
    }
    else{
        res.status(404).send({msg:"Product Not Found"})
    }
})





app.listen(5000,()=>{console.log("server start at http:localhost:5000")})