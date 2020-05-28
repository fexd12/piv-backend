import {Router} from 'express';

const {agendamentoDAO}=require('../dao/agendamentoDAO');
const {salasDAO}= require('../dao/salasDAO')
import moment from 'moment';
import { json } from 'body-parser';

const router = Router();

router.post('/',async (req,res)=>{   
    let dao = new agendamentoDAO();
    let sala = new salasDAO();
    // console.log(req.body);
    await dao.insertInto(req.body).then(async ()=>{
        await sala.updateStatus(req.body.sala)
    });
    res.send({});
});

router.get('/',async (req,res)=>{
    let tag = req.query.tag
    let dao = new agendamentoDAO();
    let date = moment().utcOffset('-0300');

    let result = await dao.read(tag);

    if(result == undefined){
        res.status(200).send('tag nao possui agendamento')
    }else{
        // console.log(result)
        result.usuario = result.usuario.trim();
        result.sala = result.sala.trim();
        result.data = result.data.trim();
        result.horario_inicial = result.horario_inicial.trim();
        result.horario_final = result.horario_final.trim();
        result.data_atual = date.format('DD-MM-YYYY');
        result.hora_atual = date.format('HH:mm');
        res.status(200).send(result);
    }
 
});

export default router