import sqlite3 from 'sqlite3';
import { db } from '../utils/utility.js'
class JurusanModel {
  static viewJurusan(next) {
    // let db = new sqlite3.Database('./university.db');
    let sql = 'SELECT * FROM jurusan';

    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }

      next(rows);
    });
  }

  static cariJurusan(id_jurusan, next) {
    // let db = new sqlite3.Database('./university.db');
    let sql = `SELECT * FROM jurusan WHERE id_jurusan = ?`;

    db.get(sql, [id_jurusan], (err, row) => {
      try {
        next(row);
      } catch (e) {
        console.log(`dosen dengan id_jurusan ` + id_jurusan + ` tidak terdaftar`);
      }
    });
  }

  static addJurusan(id_jurusan, nama_jurusan, next) {
    let db = new sqlite3.Database('./university.db');
    let sql = `INSERT INTO jurusan(id_jurusan,nama_jurusan) VALUES (?,?)`;

    db.run(sql, [id_jurusan, nama_jurusan], (err) => {
      if (err) {
        console.error(err.message);
      }

      next();
    });
  }

  static deleteJurusan(id_jurusan, next) {
    // let db = new sqlite3.Database('./university.db');
    let sql = 'DELETE FROM jurusan WHERE id_jurusan = ?';

    db.run(sql, id_jurusan, (err) => {
      if (err) {
        console.error(err.message);
      }

      next();
    });
  }
}

export { JurusanModel };
