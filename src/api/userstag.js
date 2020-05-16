import {Router} from 'express';

import {userstagDAO} from '../dao/userstagDAO';
import {usersDAO} from '../dao/usersDAO';
import {tagDAO} from '../dao/tagDAO';

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
    
    await dao.insertInto(req.body).then(async (abc)=>{
        await users.UpdateUser(req.body.name)
        await tag.UpdateTag(req.body.tag)
    })
    res.send({});
})

export default router