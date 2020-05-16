import {Router} from 'express';

import {salasDAO} from '../dao/salasDAO';

const router = Router();

router.get('/all',async(req,res)=>{
    let dao = new salasDAO();

   let obj= await dao.readAll();
    res.status(200).send(JSON.stringify(obj));
    
});

router.get('/',async (req,res)=>{
    let dao = new salasDAO();

    let obj = await dao.read();
    res.status(200).send(JSON.stringify(obj));
})

router.post('/status',async (req,res)=>{
    let dao = new salasDAO();
    let obj={
        data:req.body.data,
        hora_inicial:req.body.hora_inicio,
        hora_final:req.body.hora_final
    }
    let response = await dao.readStatus(obj);
    res.status(200).send(JSON.stringify(response));
})

router.post('/',async(req,res)=>{
    let dao = new salasDAO;
    await dao.insertInto(req.body);
    res.send({})

})

// router.put('/:id',async (req,res)=>{
//     let dao = new salasDAO;
//     await dao.update(req.body).catch((a)=>{
//         res.send(a)
//     })
// })

// router.delete('/:id',async (req,res)=>{
//     let dao = new salasDAO;
    
//     await dao.delete(req.params.id).catch((a)=>{
//         res.send(a)
//     })
// })

export default router