import {Router} from 'express';

import {agendamentoDAO} from '../dao/agendamentoDao';
import {salasDAO} from '../dao/salasDAO'
import moment from 'moment';

const router = Router();

router.post('/',async (req,res)=>{   
    let dao = new agendamentoDAO();
    let sala = new salasDAO();
    // console.log(req.body);
    await dao.insertInto(req.body).then(async ()=>{
        await sala.updateStatus(req.body.sala).catch((a)=>{
            console.log(a)
            res.send(a)
        })
    }).catch((a)=>{
        res.send(a)
    })
});

router.get('/',async (req,res)=>{
    let tag = req.query.tag
    let dao = new agendamentoDAO();
    let date = moment();

    await dao.read(tag).then((result)=>{
        if(result == undefined){
            res.status(200).send('tag nao possui agendamento')
        }else{
            console.log(result)
            result.usuario = result.usuario.trim();
            result.sala = result.sala.trim();
            result.data = result.data;
            result.horario_inicial = String(result.horario_inicial).slice(15,21).trim();
            result.horario_final = String(result.horario_final).slice(15,21).trim();
            result.data_atual = date.format('YYYY-MM-DD');
            result.hora_atual = date.format('HH:mm');
            console.log(result);
            res.status(200).send(result);
        }
    })
    .catch((a)=>{
        console.log(a);
        res.send(a);
    })
});

export default router