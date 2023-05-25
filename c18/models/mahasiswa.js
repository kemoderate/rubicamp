import { db } from "./connect.js";

export default class MahasiswaModel {
  static viewMahasiswa(next) {
    let sql = 'SELECT * FROM mahasiswa';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }
      next(rows);
    });
  }

  static cariMahasiswa(nim, next) {
    let sql = 'SELECT * FROM mahasiswa WHERE nim = ?';
    db.get(sql, [nim], (err, row) => {
      if (err) {
        console.error(err);
      }
      next(row);
    });
  }

  static addMahasiswa(nim, nama, alamat, jurusan, tanggallahir, next) {
    let sql = 'INSERT INTO mahasiswa (nim, nama, alamat, jurusan, tanggallahir) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [nim, nama, alamat, jurusan, tanggallahir], (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }

  static deleteMahasiswa(nim, next) {
    let sql = 'DELETE FROM mahasiswa WHERE nim = ?';
    db.run(sql, nim, (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }
}
