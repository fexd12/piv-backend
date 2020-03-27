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

    await dao.readAll().then((result)=>{
        //console.log(result);
        res.status(200).send(JSON.stringify(result));
    }).catch((a)=>{
        //console.log(a);
        res.send(a)
    })
    
});

router.get('/', async (req, res) => {
    let dao = new tagDAO();

    await dao.read().then((result)=>{
        //console.log(result);
        res.status(200).send(JSON.stringify(result));
    }).catch((a)=>{
        //console.log(a);
        res.send(a)
    })
    
});


export default router