import {Router} from 'express';

const {userstagDAO} =require ('../dao/userstagDAO');
const {usersDAO} = require('../dao/usersDAO');
const {tagDAO} = require('../dao/tagDAO');

const router = Router();

router.get('/',async(req,res)=>{
    let dao = new userstagDAO();
    let obj=await dao.read();
    res.send(JSON.stringify(obj));
});

router.post('/',async(req,res)=>{
    let dao = new userstagDAO();
    let users = new usersDAO();
    let tag = new tagDAO();
    req.body.acesso = Number(req.body.acesso);
    await dao.insertInto(req.body).then(async (abc)=>{
        await users.UpdateUser(req.body.name)
        await tag.UpdateTag(req.body.tag)
        res.send({
            message:'vinculado com sucesso'
        })
    }).catch(err=>{
        res.send(err)
    })
    res.send({
        message:'ok'
    });
})

export default router