import Table from 'cli-table';
import sqlite3 from 'sqlite3';

class Mahasiswa {
  static viewMahasiswa(next) {
    let db = new sqlite3.Database('../c15/university.db'); 
    let sql = 'SELECT * FROM mahasiswa';
    this.table = new Table({
      head: ['nim', 'nama', 'alamat', 'jurusan', 'umur'],
      colWidths: [10, 10, 20, 10, 10] 
    });
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }
      for (let i = 0; i < rows.length; i++) {
        this.table.push([rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan, rows[i].umur]);
      }
      console.log(this.table.toString());
      // next();
    });
    db.close();
    // menuMahasiswa();
  }

  static cariMahasiswa(nim, next) {
    let db = new sqlite3.Database('../c15/university.db'); 
    let sql = `SELECT * FROM mahasiswa WHERE mahasiswa.nim = ?`;
    db.get(sql, [nim], (err, row) => {
      try {
        this.table = new Table({
          head: ['nim', 'nama', 'alamat', 'jurusan', 'umur'],
          colWidths: [10, 10, 20, 10, 10] 
        });
        this.table.push([row.nim, row.nama, row.alamat, row.jurusan, row.umur]);
        console.log(this.table.toString());
      } catch (e) {
        console.log(`Mahasiswa dengan nim ` + nim + ` tidak terdaftar`);
      }
    });
    db.close();
    // menuMahasiswa();
  }

  static addMahasiswa(nim, nama, alamat, jurusan, umur, next) {
    let db = new sqlite3.Database('../c15/university.db'); 
    let sql = `INSERT INTO mahasiswa (nim,nama,alamat,jurusan,umur) VALUES (?,?,?,?,?)`;
    let sql2 = `SELECT * FROM mahasiswa`;
    
    db.run(sql, [nim, nama, alamat, jurusan, umur], (err) => {
      if (err) {
        console.error(err.message);
      }
      this.table = new Table({
        head: ['nim', 'nama', 'alamat', 'jurusan', 'umur'],
        colWidths: [10, 10, 20, 10, 10] 
      });
      db.all(sql2, [], (err, rows) => {
        if (err) {
          console.error(err);
        }
        for (let i = 0; i < rows.length; i++) {
          this.table.push([rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan, rows[i].umur]);
        }
        console.log(this.table.toString());
      });
    });
    db.close();
  }

  static deleteMahasiswa(nim, next) {
    let db = new sqlite3.Database('../c15/university.db'); 
    let sql = 'DELETE FROM mahasiswa WHERE nim = ?';
    db.run(sql, nim, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Mahasiswa dengan nim ' + nim + ' telah terhapus'); 
    });
    db.close();
  }
}

export { Mahasiswa };
