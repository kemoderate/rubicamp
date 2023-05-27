
import { db } from './connect.js';




export default class DosenModel {

    static viewDosen(next) {
        let sql = 'SELECT * FROM dosen';
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            
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
         db.run(sql, [nip, nama_dosen], (err) => {
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
