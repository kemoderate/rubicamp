import { db } from './connect.js';

export default class MatakuliahModel {
    static viewMatakuliah(next) {
        let sql = 'SELECT * FROM mata_kuliah';
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }            
            next(rows);
        });
        
    }

    static cariMatakuliah(id_matakuliah, next) {
        
        let sql = `SELECT * FROM mata_kuliah WHERE id_matakuliah = ?`;
        db.get(sql, [id_matakuliah], (err, row) => {
            if (err) {
              console.error(err);
            }
            next(row);
          });
        }

    static addMatakuliah(id_matakuliah, nama_MK, sks, next) {
        
        let sql = `INSERT INTO mata_kuliah(id_matakuliah,nama_MK,sks) VALUES (?,?,?)`;
        db.run(sql, [id_matakuliah, nama_MK,sks], (err) => {
            if (err) {
                console.error(err.message);
            }
                next();
            })    
    }

    static deleteMatakuliah(id_matakuliah, next) {
        
        let sql = 'DELETE FROM mata_kuliah WHERE id_matakuliah = ?';
        db.run(sql, id_matakuliah, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Matakuliah dengan id_Matakuliah' + id_matakuliah + 'telah terhapus');
            next();
        });
        
    }
}

