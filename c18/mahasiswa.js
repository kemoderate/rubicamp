const Table = require('cli-table')
const sqlite3 = require('sqlite3').verbose();




class Mahasiswa {
    viewMahasiswa(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM mahasiswa';
        this.table = new Table({
            head: ['nim', 'nama', 'alamat', 'jurusan', 'tanggallahir'],
            colWidths: [10, 10, 20, 10, 20]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan, rows[i].tanggallahir]);
            }
            console.log(this.table.toString());
            next();
        });
        db.close();
    }
    cariMahasiswa(nim,next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM mahasiswa WHERE nim = ?`;
        db.get(sql, [nim], (err,row) => {
            try {
                this.table = new Table({
                    head: ['nim','nama','alamat','jurusan','tanggallahir'],
                    colWidths: [10,10,20,10,20]
                });
                this.table.push([row.nim,row.nama,row.alamat,row.jurusan,row.tanggallahir]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`Mahasiswa dengan nim ` + nim + ` tidak terdaftar`);
            }
            next();
        })
        db.close();
    }

    addMahasiswa(nim,nama,alamat,jurusan,tanggallahir,next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO mahasiswa(nim,nama,alamat,jurusan,tanggallahir) VALUES (?,?,?,?,?)`;
        let sql2 = `SELECT * FROM mahasiswa`;
        db.run(sql,[nim,nama,alamat,jurusan,tanggallahir],(err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['nim','nama','alamat','jurusan','tanggallahir'],
                colWidths: [10,10,20,10,20]
            });
            db.all(sql2, [], (err,rows)=>{
                if (err) {
                    console.error(err);
                }
                for (let i=0;i<rows.length;i++) {
                    this.table.push([rows[i].nim,rows[i].nama,rows[i].alamat,rows[i].jurusan,rows[i].tanggallahir]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        db.close();
    }
    deleteMahasiswa(nim, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM mahasiswa WHERE nim = ?';
        db.run(sql, nim, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Mahasiswa dengan nim' + nim + 'telah terhapus');
            next();
        });
        db.close();
    }
}


export { Mahasiswa };