const Table = require('cli-table')
const sqlite3 = require('sqlite3').verbose();

class Matakuliah {
    viewMatakuliah(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM Matakuliah';
        this.table = new Table({
            head: ['id_Matakuliah', 'nama_mk'],
            colWidths: [40,80]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].id_Matakuliah, rows[i].nama_mk]);
            }
            console.log(this.table.toString());
            next();
        });
        db.close();
    }
    cariMatakuliah(id_Matakuliah, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM Matakuliah WHERE id_Matakuliah = ?`;
        db.get(sql, [id_Matakuliah], (err, row) => {
            try {
                this.table = new Table({
                    head: ['id_Matakuliah', 'nama_mk'],
                    colWidths: [40,80]
                });
                this.table.push([row.id_Matakuliah, row.nama_mk, row.alamat, row.Matakuliah, row.birthdate]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`dosen dengan id_Matakuliah ` + id_Matakuliah + ` tidak terdaftar`);
            }
            next();
        })
        db.close();
    }
    addMatakuliah(id_Matakuliah,nama_mk,next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO Matakuliah(id_Matakuliah,nama_mk) VALUES (?,?)`;
        let sql2 = `SELECT * FROM Matakuliah`;
        db.run(sql,[id_Matakuliah,nama_mk],(err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['id_Matakuliah','nama_mk'],
                colWidths: [50,100]
            });
            db.all(sql2, [], (err,rows)=>{
                if (err) {
                    console.error(err);
                }
                for (let i=0;i<rows.length;i++) {
                    this.table.push([rows[i].id_Matakuliah,rows[i].nama_mk]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        db.close();
    }
    deleteMatakuliah(id_Matakuliah, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM Matakuliah WHERE id_Matakuliah = ?';
        db.run(sql, id_Matakuliah, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Matakuliah dengan id_Matakuliah' + id_Matakuliah + 'telah terhapus');
            next();
        });
        db.close();
    }
}

export { Matakuliah };