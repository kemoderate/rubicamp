import { db } from "./connect.js";

export default class JurusanModel {
  static viewJurusan(next) {
    let sql = 'SELECT * FROM jurusan';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }
      next(rows);
    });
  }

  static cariJurusan(id_jurusan, next) {
    let sql = 'SELECT * FROM jurusan WHERE id_jurusan = ?';
    db.get(sql, [id_jurusan], (err, row) => {
      // console.log(row)
      if (err) {
        console.error(err);
      }
      next(row);
    });
  }

  static addJurusan(id_jurusan, nama_jurusan, next) {
    let sql = 'INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES (?, ?)';
    db.run(sql, [id_jurusan, nama_jurusan], (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }

  static deleteJurusan(id_jurusan, next) {
    let sql = 'DELETE FROM jurusan WHERE id_jurusan = ?';
    db.run(sql, id_jurusan, (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }
}