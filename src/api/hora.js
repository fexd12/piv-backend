import {Router} from 'express';
import moment from 'moment';

const router = Router();

router.get('/',async (req,res) => {
    const date = moment();
    console.log(date.format('HH:mm'));
    res.send(date.format('HH:mm'));
})

export default router