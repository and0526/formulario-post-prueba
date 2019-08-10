import { Router } from 'express';
import db from '../src/database/index.js';

const router = Router();

router.get('/', (req,res)=>{
    /*let name = req.body.name;
    let age = req.body.age;
    console.log(name);
    console.log(age);*/
    db.any("SELECT * FROM teacher").then((data) => {
        res.send(data);
    }).catch(e => console.log(e));
    //res.send({name,age});
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    let name = req.body.name;

    let age = req.body.age;
    const query = 'INSERT INTO teacher (fullname,age) VALUES ($1,$2)';

    db.none(query, [name,age]).then(()=>{
        res.send({message: 'ok'});
    }).catch(e => {
        console.log(e);
        console.log(req.body);
        res.send({message: 'error'});
    })
})
export default router; 
