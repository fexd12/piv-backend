import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import tempo from './api/tempo';
import tag from './api/tag';
import users from  './api/users';
import userstag from './api/userstag';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/tempo',tempo);
app.use('/tag',tag);
app.use('/users',users);
app.use('/userstag',userstag);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000')
);