const db = require('../util/database');

module.exports = class Post {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll(status, solicitante, descricao) {
    let query = `SELECT * FROM solicitacoes`

    if(!!status || !!solicitante || !!descricao){
      query = query + " WHERE"
    }

    if(!!solicitante){
      query = query + ` nomeSolicitante like '${solicitante}'${!!descricao || !!status ? " AND" : ""}`
    }

    if(!!descricao){
      query = query + ` descricao like '${descricao}'${!!status ? " AND" : ""}`
    }

    if(!!status){
      query = query + ` status = '${status}'`
    }

    return db.execute(query);
  }

  static findByUserId(id) {
    return db.execute(`SELECT * FROM solicitacoes WHERE userId = ${id}`);
  }

  static findById(id) {
    return db.execute(`SELECT * FROM solicitacoes WHERE id = ${id}`);
  }

  static changeStatus(id, status, observacao) {
    if(!!observacao) db.execute(`UPDATE solicitacoes SET observacao = '${observacao}' WHERE id = ${id}`)
    return db.execute(`UPDATE solicitacoes SET status = ${status} WHERE id = ${id}`)
  }

  static save(post) {
    return db.execute(
        'INSERT INTO solicitacoes (userId, nomeSolicitante, preco, descricao, status) VALUES (?, ?, ?, ?, ?)',
        [post.userId, post.nomeSolicitante, post.preco, post.descricao, post.status]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM posts WHERE id = ?', [id]);
  }
};
