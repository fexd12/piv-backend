import {Router} from 'express';

import {salasDAO} from '../dao/salasDAO';

const router = Router();

router.post('/',async (req,res)=>{   
    console.log(req.body)
})

export default router