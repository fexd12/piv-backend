import {criaClient} from './db'

class usersDAO{
    
    constructor() {
        this.config = { 
            table: 'users',
            sequence: 'users_sequence',
            fields: [
              'id',
              'name',
              'created_at',
              'update_at'
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

    async readUsersTags(){
        let client  = criaClient();
        await client.connect();
        let _query = `SELECT ut.id,u.name, t.tag, ut.acesso
        FROM users_tag as ut
    INNER JOIN tags as t
        ON t.id = ut.id_tag
    INNER JOIN users as u
        on u.id = ut.id_users`;
        let result = await client.query(_query);
        await client.end();
        return result.rows

    }

    async readbyid(id){
        let client = criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ${id}`;
        let result = await client.query(_query);
        await client.end();
        return result.rows
    }

    async insertInto(tag){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        let client = criaClient();
        await client.connect();
        let _query = `INSERT INTO ${this.config.table} (${this.config.fields.join(',')}) values ?`;
        await client.query
    }
}

export{usersDAO}