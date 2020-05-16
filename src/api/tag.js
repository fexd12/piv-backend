import {Router} from 'express';

import {tagDAO} from '../dao/tagDAO';

const router = Router();

router.post('/',async (req,res)=>{
    
    let tag = req.body.tag;
    // console.log(tag);
    let dao = new tagDAO();
    
    await dao.readbyid(tag).then(async (result)=>{
        if(result === undefined){
            await dao.insertInto(tag);
            res.send('tag cadastrada com sucesso');
        }
        else{
            res.send('tag ja Cadastrada');
        }
    }).catch((a)=>{
        res.send(a);
    })
    
});

router.get('/all',async(req,res)=>{
    let dao = new tagDAO();

    let obj = await dao.readAll()
    res.status(200).send(JSON.stringify(obj));
    
});

router.get('/', async (req, res) => {
    let dao = new tagDAO();

    let obj = await dao.read();
    res.status(200).send(JSON.stringify(obj));
    
});

router.get('/userstag', async (req, res) => {
    let dao = new tagDAO();

    let obj = await dao.readUsersTag();
    res.status(200).send(JSON.stringify(obj));
    
});


export default router