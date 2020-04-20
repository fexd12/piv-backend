import {Router} from 'express';
import moment from 'moment';

const router = Router();

router.get('/',async (req,res) => {
    const date = moment();
    res.send(date.format('HH:mm'));
})

export default router