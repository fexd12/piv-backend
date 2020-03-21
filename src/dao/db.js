import {Client} from 'pg'

function criaClient(){
    // return new Client({
    //     user: 'postgres',
    //     host: 'localhost',
    //     database: 'pi_v',
    //     password: '1234',
    //     port:5432
    // });

    return new Client({
        user: 'piv@serverpiv',
        host: 'serverpiv.postgres.database.azure.com',
        database: 'pi_v',
        password: '#Senac123',
        port:5432,
        ssl:true,
        rejectUnauthorized: true
    });
}

export {
    criaClient
}