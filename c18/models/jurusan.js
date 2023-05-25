import { db } from "./connect.js";

export default class JurusanModel {
  static viewJurusan(next) {
    let sql = 'SELECT * FROM Jurusan';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }
      next(rows);
    });
  }

  static cariJurusan(id_jurusan, next) {
    let sql = 'SELECT * FROM Jurusan WHERE id_jurusan = ?';
    db.get(sql, [id_jurusan], (err, row) => {
      if (err) {
        console.error(err);
      }
      next(row);
    });
  }

  static addJurusan(id_jurusan, nama_jurusan, next) {
    let sql = 'INSERT INTO Jurusan (id_jurusan, nama_jurusan) VALUES (?, ?)';
    db.run(sql, [id_jurusan, nama_jurusan, alamat, jurusan, tanggallahir], (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }

  static deleteJurusan(id_jurusan, next) {
    let sql = 'DELETE FROM Jurusan WHERE id_jurusan = ?';
    db.run(sql, id_jurusan, (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }
}