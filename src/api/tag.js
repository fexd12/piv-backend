import {Router} from 'express';

import {tagDAO} from '../dao/tagDAO';

const router = Router();

router.post('/',async (req,res)=>{
    
    let tag = req.body.tag;
    let dao = new tagDAO();
    
    await dao.insertInto(tag).then(()=>{

    }).catch((a)=>{
        //console.log(a);
        res.send(a)
    })
    //console.log(tag);
    // try{
    //     await dao.readbyid(tag).then(async(d)=>{
    //         if(d === undefined){
    //             await dao.insertInto(tag);
    //         }
    //         }).catch((a)=>{
    //         })
    //     res.send('tag cadastrada');
    // }catch(err){
    //     res.send(err);
    // }
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