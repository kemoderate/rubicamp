const Table = require('cli-table')
const sqlite3 = require('sqlite3').verbose();


class Dosen {
    viewDosen(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM dosen';
        this.table = new Table({
            head: ['nip', 'nama'],
            colWidths: [50,100]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].nip, rows[i].nama]);
            }
            console.log(this.table.toString());
            next();
        });
        db.close();
    }
    cariDosen(nip, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM dosen WHERE nip = ?`;
        db.get(sql, [nip], (err, row) => {
            try {
                this.table = new Table({
                    head: ['nip', 'nama', 'alamat', 'jurusan', 'birthdate'],
                    colWidths: [10, 10, 20, 10, 20]
                });
                this.table.push([row.nip, row.nama, row.alamat, row.jurusan, row.birthdate]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`dosen dengan nip ` + nip + ` tidak terdaftar`);
            }
            next();
        })
        db.close();
    }
    addDosen(nip,nama,next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO mahasiswa(nim,nama,alamat,jurusan,birthdate) VALUES (?,?,?,?,?)`;
        let sql2 = `SELECT * FROM mahasiswa`;
        db.run(sql,[nim,nama,alamat,jurusan,birthdate],(err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['nim','nama','alamat','jurusan','birthdate'],
                colWidths: [50,100]
            });
            db.all(sql2, [], (err,rows)=>{
                if (err) {
                    console.error(err);
                }
                for (let i=0;i<rows.length;i++) {
                    this.table.push([rows[i].nim,rows[i].nama,rows[i].alamat,rows[i].jurusan,rows[i].birthdate]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        db.close();
    }

}