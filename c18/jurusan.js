const Table = require('cli-table')
const sqlite3 = require('sqlite3').verbose();

class Jurusan {
    viewJurusan(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM jurusan';
        this.table = new Table({
            head: ['id_jurusan', 'nama_jurusan'],
            colWidths: [40,80]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].id_jurusan, rows[i].nama_jurusan]);
            }
            console.log(this.table.toString());
            next();
        });
        db.close();
    }
    cariJurusan(id_jurusan, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM jurusan WHERE id_jurusan = ?`;
        db.get(sql, [id_jurusan], (err, row) => {
            try {
                this.table = new Table({
                    head: ['id_jurusan', 'nama_jurusan'],
                    colWidths: [40,80]
                });
                this.table.push([row.id_jurusan, row.nama_jurusan, row.alamat, row.jurusan, row.birthdate]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`dosen dengan id_jurusan ` + id_jurusan + ` tidak terdaftar`);
            }
            next();
        })
        db.close();
    }
    addJurusan(id_jurusan,nama_jurusan,next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO jurusan(id_jurusan,nama_jurusan) VALUES (?,?)`;
        let sql2 = `SELECT * FROM jurusan`;
        db.run(sql,[id_jurusan,nama_jurusan],(err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['id_jurusan','nama_jurusan'],
                colWidths: [50,100]
            });
            db.all(sql2, [], (err,rows)=>{
                if (err) {
                    console.error(err);
                }
                for (let i=0;i<rows.length;i++) {
                    this.table.push([rows[i].id_jurusan,rows[i].nama_jurusan]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        db.close();
    }
    deleteJurusan(id_jurusan, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM jurusan WHERE id_jurusan = ?';
        db.run(sql, id_jurusan, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Jurusan dengan id_jurusan' + id_jurusan + 'telah terhapus');
            next();
        });
        db.close();
    }
}

export { Jurusan };