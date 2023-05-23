import Table from 'cli-table';
import sqlite3 from 'sqlite3';


class Dosen {
    static viewDosen() {
        let db = new sqlite3.Database('../c15/university.db');
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
            // next();
        });
        db.close();
    }
    static cariDosen(nip) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM dosen WHERE nip = ?`;
        db.get(sql, [nip], (err, row) => {
            try {
                this.table = new Table({
                    head: ['nip', 'nama_dosen'],
                    colWidths: [40, 50]
                });
                this.table.push([row.nip, row.nama_dosen]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`dosen dengan nip ` + nip + ` tidak terdaftar`);
            }
            // next();
        })
        db.close();
    }
    static addDosen(nip, nama_dosen) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO dosen(nip,nama_dosen) VALUES (?,?)`;
        let sql2 = `SELECT * FROM dosen`;
        db.run(sql, [nip, nama_dosen], (err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['nip', 'nama_dosen'],
                colWidths: [40, 50]
            });
            db.all(sql2, [], (err, rows) => {
                if (err) {
                    console.error(err);
                }
                for (let i = 0; i < rows.length; i++) {
                    this.table.push([rows[i].nip, rows[i].nama_dosen]);
                }
                console.log(this.table.toString());

            })
        })
        db.close();
    }
    static deleteDosen(nip) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM dosen WHERE nip = ?';
        db.run(sql, nip, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Dosen dengan nip' + nip + 'telah terhapus');
            // next();
        });
        db.close();
    }
}

export { Dosen };