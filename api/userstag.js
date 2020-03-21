import {Router} from 'express';

import {userstagDAO} from '../dao/userstagDAO';

const router = Router();

router.get('/',async(req,res)=>{
    let dao = new userstagDAO();
    await dao.read().then((result)=>{
        res.status(200).send(JSON.stringify(result))
    }).catch((a)=>{
        res.send(a)
    })

});

router.post('/',async(req,res)=>{
    let dao = new userstagDAO();

    await dao.insertInto(req.body).catch((a)=>{
        res.send(a)
    })
})

export default router