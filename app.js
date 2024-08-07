const express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const app = express();
const cors = require("cors");
app.use(cors());

// Connect to MongoDB
async function main(){
    await mongoose.connect('mongodb://localhost:27017/quizApp');
    console.log('db is connected');
}
main();
// Middleware
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
