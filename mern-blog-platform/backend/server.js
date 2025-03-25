require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const morgan=require('morgan');
const blogRoutes=require('./routes/blogRoutes');



const app=express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use("/blogs",blogRoutes);
app.use("/image", express.static("image"));

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

app.get('/',(req,res)=>res.send('MERN blog platform running '));
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

