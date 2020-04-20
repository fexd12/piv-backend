import {Router} from 'express';
import moment from 'moment';

const router = Router();

router.get('/',async (req,res) => {
    const date = moment();
    let obj = {
        hora:date.format('HH:mm')
    }
    res.send(obj);
})

export default router