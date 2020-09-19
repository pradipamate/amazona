import express from 'express';
import User from '../models/userModel.js';
import {getToken} from '../util.js';

const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            name: 'basir',
            email: 'basirjafarazeh@gmail.com',
            password: '1234',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
    }
});

// for signing//
   router.post('/signin', async (req, res) => {
   const siginUser=await User.findOne({
       email:req.body.email,
       password:req.body.password
   });
   if(siginUser){
       res.send({
           _id:siginUser.id,
           name:siginUser.name,
           email:siginUser.email,
           isAdmin:siginUser.isAdmin,
           token:getToken(siginUser)
       })
   }
   else{
     res.status(401).send({message:'Invalid Email Or Password'})
   }
})

// for Register//
   router.post('/register', async (req, res) => {
   const user=new User({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password,
       confirmpassword:req.body.confirmpassword
   });
   const Newuser=await user.save();
   if(Newuser){
       res.send({
           _id:Newuser.id,
           name:Newuser.name,
           email:Newuser.email,
           isAdmin:Newuser.isAdmin,
           token:getToken(Newuser)
       })
   }
   else{
     res.status(401).send({message:'Invalid User Data'})
   }
})


export default router;