import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import tag from './api/tag';
import users from  './api/users';
import userstag from './api/userstag';
import salas from './api/salas';
import agendamento from './api/agendamento';
import hora from './api/hora';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/tag',tag);
app.use('/users',users);
app.use('/userstag',userstag);
app.use('/salas',salas);
app.use('/agendamento',agendamento);
app.use('/hora',hora);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

let port = process.env.port || 3000;

app.listen(port, () =>
    console.log('Servidor rodando na porta 3000')
);