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

  // static addMahasiswa(nim, nama, alamat, jurusan, tanggallahir, next) {
  //   let db = new sqlite3.Database('./university.db'); 
  //   let sql = `INSERT INTO mahasiswa (nim,nama,alamat,jurusan,tanggallahir) VALUES (?,?,?,?,?)`;
  //   let sql2 = `SELECT * FROM mahasiswa`;
    
  //   db.run(sql, [nim, nama, alamat, jurusan, tanggallahir], (err) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     this.table = new Table({
  //       head: ['nim', 'nama', 'alamat', 'jurusan', 'tanggallahir'],
  //       colWidths: [10, 10, 20, 10, 20] 
  //     });
  //     db.all(sql2, [], (err, rows) => {
  //       if (err) {
  //         console.error(err);
  //       }
  //       for (let i = 0; i < rows.length; i++) {
  //         this.table.push([rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan, rows[i].tanggallahir]);
  //       }
  //       console.log(this.table.toString());
  //       next();
  //     });
  //   });
  //   // db.close();
  // }

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
