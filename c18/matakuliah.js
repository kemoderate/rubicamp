import Table from 'cli-table';
import sqlite3 from 'sqlite3';

class Matakuliah {
    static viewMatakuliah(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM mata_kuliah';
        this.table = new Table({
            head: ['id_matakuliah', 'nama_MK','sks'],
            colWidths: [20, 20, 20]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].id_matakuliah, rows[i].nama_MK,rows[i].sks]);
            }
            console.log(this.table.toString());
            
            // next();
        });
        db.close();
    }

    static cariMatakuliah(id_matakuliah, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM mata_kuliah WHERE id_matakuliah = ?`;
        db.get(sql, [id_matakuliah], (err, row) => {
            try {
                this.table = new Table({
                    head: ['id_matakuliah', 'nama_mk','sks'],
                    colWidths: [20, 20, 20]
                });
                this.table.push([row.id_matakuliah, row.nama_MK,row.sks]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`mata kuliah dengan id_matakuliah ` + id_Matakuliah + ` tidak terdaftar`);
            }
            // next();
        })
        db.close();
    }
    static addMatakuliah(id_matakuliah, nama_MK, sks, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO mata_kuliah(id_matakuliah,nama_MK,sks) VALUES (?,?,?)`;
        let sql2 = `SELECT * FROM mata_kuliah`;
        db.run(sql, [id_matakuliah, nama_MK,sks], (err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['id_matakuliah', 'nama_mk','sks'],
                colWidths: [20, 20, 20]
            });
            db.all(sql2, [], (err, rows) => {
                if (err) {
                    console.error(err);
                }
                for (let i = 0; i < rows.length; i++) {
                    this.table.push([rows[i].id_matakuliah, rows[i].nama_MK, rows[i].sks]);
                }
                console.log(this.table.toString());
                // next();
            })
        })
        db.close();
    }
    static deleteMatakuliah(id_matakuliah, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM mata_kuliah WHERE id_matakuliah = ?';
        db.run(sql, id_matakuliah, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Matakuliah dengan id_Matakuliah' + id_matakuliah + 'telah terhapus');
            // next();
        });
        db.close();
    }
}

export { Matakuliah };