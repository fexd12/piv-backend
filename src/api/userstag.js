import {Router} from 'express';

import {userstagDAO} from '../dao/userstagDAO';
import {usersDAO} from '../dao/usersDAO';
import {tagDAO} from '../dao/tagDAO';

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
    let users = new usersDAO();
    let tag = new tagDAO();
    
    await dao.insertInto(req.body).then(async (abc)=>{
        await users.UpdateUser(req.body.name).catch((abc)=>{
            res.send(abc);
        })
        await tag.UpdateTag(req.body.tag).catch((abc)=>{
            res.send(abc);
        })
    })   
    
})

export default router