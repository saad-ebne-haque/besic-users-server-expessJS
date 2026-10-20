import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('users are coming soon......');
})

const users = [
    {id:1, name:'Saad', email:'saad@example.com'},
    {id:2, name:'Ali', email:'ali@example.com'},
    {id:3, name:'Ahmed', email:'ahmed@example.com'},
    {id:4, name:'Ayesha', email:'ayesha@example.com'}
];

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(PORT,()=>{
    console.log(`Server in running on port ${PORT}`)
})
