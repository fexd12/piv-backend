import {Router} from 'express';

const {usersDAO} = require('../dao/usersDAO');

const router = Router();

router.get('/all',async(req,res)=>{
    let dao = new usersDAO();

    let obj = await dao.readAll();
    res.send(JSON.stringify(obj));
});

router.get('/',async (req,res)=>{
    let dao = new usersDAO();

    let obj = await dao.read();
    res.send(JSON.stringify(obj));
})

router.get('/userstag',async (req,res)=>{
    let dao = new usersDAO();

    let obj = await dao.readUsersTag();
    res.send(JSON.stringify(obj));
})

router.post('/',async(req,res)=>{
    let dao = new usersDAO;
    await dao.insertInto(req.body);
    res.send({})

})

router.put('/:id',async (req,res)=>{
    let dao = new usersDAO;
    await dao.update(req.body);
    res.send({});
})

router.delete('/:id',async (req,res)=>{
    let dao = new usersDAO;
    
    await dao.delete(req.params.id);
    res.send({});
})

export default router