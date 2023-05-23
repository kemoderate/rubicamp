import Table from 'cli-table';
import sqlite3 from 'sqlite3';

class Kontrak {
    static viewKontrak(next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'SELECT * FROM kontrak';
        this.table = new Table({
            head: ['id_kontrak', 'nama_mk'],
            colWidths: [40, 50]
        });
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            for (let i = 0; i < rows.length; i++) {
                this.table.push([rows[i].id_kontrak, rows[i].nama_mk]);
            }
            console.log(this.table.toString());
            next();
        });
        db.close();
    }
    static cariKontrak(id_kontrak, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `SELECT * FROM kontrak WHERE id_kontrak = ?`;
        db.get(sql, [id_kontrak], (err, row) => {
            try {
                this.table = new Table({
                    head: ['id_kontrak', 'nama_mk'],
                    colWidths: [40, 50]
                });
                this.table.push([row.id_kontrak, row.nama_mk, row.alamat, row.kontrak, row.birthdate]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`dosen dengan id_kontrak ` + id_kontrak + ` tidak terdaftar`);
            }
            next();
        })
        db.close();
    }
    static addKontrak(id_kontrak, nama_mk, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = `INSERT INTO kontrak(id_kontrak,nama_mk) VALUES (?,?)`;
        let sql2 = `SELECT * FROM kontrak`;
        db.run(sql, [id_kontrak, nama_mk], (err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['id_kontrak', 'nama_mk'],
                colWidths: [40, 50]
            });
            db.all(sql2, [], (err, rows) => {
                if (err) {
                    console.error(err);
                }
                for (let i = 0; i < rows.length; i++) {
                    this.table.push([rows[i].id_kontrak, rows[i].nama_mk]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        db.close();
    }
    static deleteKontrak(id_kontrak, next) {
        let db = new sqlite3.Database('../c15/university.db');
        let sql = 'DELETE FROM kontrak WHERE id_kontrak = ?';
        db.run(sql, id_kontrak, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Kontrak dengan id_kontrak' + id_kontrak + 'telah terhapus');
            next();
        });
        db.close();
    }
}

export { Kontrak };