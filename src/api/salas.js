import {Router} from 'express';

const {salasDAO}= require('../dao/salasDAO');

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
    let result  = dao.readbyid(req.body.nome);
    if(!result){
        await dao.insertInto(req.body);    
        res.send({});
    }
    else{
        res.send('nome de sala já cadastrada');
    }
})

router.get('/agendamento/:sala_id',async(req,res)=>{
    let dao = new salasDAO;
    let id = req.params.sala_id;
    let result = await dao.readAgendamento(id);
    res.send(result);
})

export default router