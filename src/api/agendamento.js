import {Router} from 'express';

const {agendamentoDAO}=require('../dao/agendamentoDAO');
const {salasDAO}= require('../dao/salasDAO')
import moment from 'moment';

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

        let hora_atual  = date.format("HH:mm");
        result.horario_inicial = result.horario_inicial.trim();
        let horaConferir = moment(result.horario_inicial,"HH:mm",true);
        horaConferir.subtract(15,'minutes');

        result.horario_final = result.horario_final.trim();
        let HoraFInal = moment(result.horario_final,"HH:mm",true);

        let data_atual = date.format("DD-MM-YYYY");//conferir data
        result.data = result.data.trim()
        let dataConferir = moment(result.data,"DD-MM-YYYY",true);//conferir data

        console.log(horaConferir);
        console.log(hora_atual);

        if(result.acesso == 1  && dataConferir.isSame(moment(data_atual,"DD-MM-YYYY")) && moment(hora_atual,"HH:mm").isSameOrBefore(horaConferir) ){
            let obj={
                acende:1
            }
            res.send(obj);
        }
        else if(result.acesso === 0  && dataConferir.isSame(moment(data_atual,"DD-MM-YYYY")) && moment(hora_atual,"HH:mm").isSameOrBefore(horaConferir) ){
            let obj={
                acende:0
            }
            res.send(obj);
        }else{
            res.send('tag nao possui agendamento')
        }
    }
 
});

export default router