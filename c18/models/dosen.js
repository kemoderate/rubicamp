import Table from 'cli-table';
import { db } from './connect.js';




export default class DosenModel {

    static viewDosen(next) {
        let sql = 'SELECT * FROM dosen';
        this.table = new Table({
            head: ['nip', 'nama_dosen'],
            colWidths: [40, 50]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].nip, rows[i].nama_dosen]);
            }
            console.log(this.table.toString());
            next(rows);
        });
        
    }
    static cariDosen(nip,next) {
        let sql = `SELECT * FROM dosen WHERE nip = ?`;
            db.get(sql, [nip], (err, row) => {
                if (err) {
                  console.error(err);
                }
                next(row);
              });
            }

    static addDosen(nip, nama_dosen,next) {
        let sql = `INSERT INTO dosen(nip,nama_dosen) VALUES (?,?)`;
         db.run(sql, [ni, nama_dosen], (err) => {
      if (err) {
        console.error(err.message);
      }
      next();
    });
  }
    static deleteDosen(nip,next) {
        let sql = 'DELETE FROM dosen WHERE nip = ?';
        db.run(sql, nip, (err) => {
            if (err) {
              console.error(err.message);
            }
            next();
          });
        }
}
