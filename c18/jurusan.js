import Table from 'cli-table';
import sqlite3 from 'sqlite3';

class Jurusan {
 static viewJurusan(next) {
    let db = new sqlite3.Database('../c15/university.db');
    let sql = 'SELECT * FROM jurusan';
    this.table = new Table({
      head: ['id_jurusan', 'nama_jurusan'],
      colWidths: [40, 40]
    });
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
      }
      for (let i = 0; i < rows.length; i++) {
        this.table.push([rows[i].id_jurusan, rows[i].nama_jurusan]);
      }
      console.log(this.table.toString());
      // next();
    });
    db.close();
  }

 static  cariJurusan(id_jurusan, next) {
    let db = new sqlite3.Database('../c15/university.db');
    let sql = `SELECT * FROM jurusan WHERE id_jurusan = ?`;
    db.get(sql, [id_jurusan], (err, row) => {
      try {
        this.table = new Table({
          head: ['id_jurusan', 'nama_jurusan'],
          colWidths: [40, 80]
        });
        this.table.push([row.id_jurusan, row.nama_jurusan]);
        console.log(this.table.toString());
      } catch (e) {
        console.log(`dosen dengan id_jurusan ` + id_jurusan + ` tidak terdaftar`);
      }
      next();
    });
    db.close();
  }

 static addJurusan(id_jurusan, nama_jurusan, next) {
    let db = new sqlite3.Database('../c15/university.db');
    let sql = `INSERT INTO jurusan(id_jurusan,nama_jurusan) VALUES (?,?)`;
    let sql2 = `SELECT * FROM jurusan`;
    db.run(sql, [id_jurusan, nama_jurusan], (err) => {
      if (err) {
        console.error(err.message);
      }
      this.table = new Table({
        head: ['id_jurusan', 'nama_jurusan'],
        colWidths: [40, 40]
      });
      db.all(sql2, [], (err, rows) => {
        if (err) {
          console.error(err);
        }
        for (let i = 0; i < rows.length; i++) {
          this.table.push([rows[i].id_jurusan, rows[i].nama_jurusan]);
        }
        console.log(this.table.toString());
        // next();
      });
    });
    db.close();
  }

static  deleteJurusan(id_jurusan, next) {
    let db = new sqlite3.Database('../c15/university.db');
    let sql = 'DELETE FROM jurusan WHERE id_jurusan = ?';
    db.run(sql, id_jurusan, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Jurusan dengan id_jurusan' + id_jurusan + 'telah terhapus');
      // next();
    });
    db.close();
  }
}

export { Jurusan };
