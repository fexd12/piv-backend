import {criaClient} from './db'

class salasDAO{
    
    constructor() {
        this.config = { 
            table: 'sala',
            sequence: 'sala_sequence',
            fields: [
              'id',
              'nome',
              'quantidade'
            ],
            pk: 'id'
          };
    }

    async readAll(){
        let client =  criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table}`;
        let result = await client.query(_query);
        await client.end();
        return result.rowCount
    }

    async read(){
        let client =  criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table}`;
        let result = await client.query(_query);
        await client.end();
        return result.rows
    }
    
    async readStatus(){
        let client =  criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} where status = 's'`;
        let result = await client.query(_query);
        await client.end();
        return result.rows
    }

    async delete(id){
        let client = criaClient();
        await client.connect();
        let _query = `DELETE FROM ${this.config.table} WHERE ${this.config.pk} = $1`;
        let result = await client.query(_query,[id])
        return result
    }

    async update(questionario){
        let client = criaClient();
        await client.connect();
        let _query = `UPDATE ${this.config.table} SET nome=$1, quantidade=$2 WHERE ${this.config.pk} = $3`;
        let result = await client.query(_query,[questionario.nome,questionario.quantidade,questionario.id])
        
        return result
    }

    async readbyid(id){
        let client = criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ${id}`;
        let result = await client.query(_query);
        await client.end();
        return result.rows
    }

    async insertInto(questionario){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        let client = criaClient();
        await client.connect();
        let _query = `INSERT INTO ${this.config.table} (nome,quantidade,status) values ($1,$2,'s')`;
        let values = [questionario.nome,questionario.quantidade];
        await client.query(_query,values);
        return true
    }
}

export{salasDAO}