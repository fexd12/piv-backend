import {Router} from 'express';
import request from 'request';

const router = Router();

router.get('/',async (req,res)=>{
    var options = {
        'method': 'GET',
        'url': 'http://api.openweathermap.org/data/2.5/weather?q=sao%20paulo&appid=e5b93aa8dbade30b9fc108971ae5717a',
        'headers': {
        }
    };
    request(options, function (err, response) { 
        if(err)res.send(err);

        res.send(JSON.parse(response.body));
        
    });
      

});

export default router;