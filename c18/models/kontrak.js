import { db } from "./connect.js";


export default class KontrakModel {

    static viewKontrak(next) {

        let sql = 'SELECT kontrak.id_kontrak,kontrak.nim,mahasiswa.nama,mata_kuliah.nama_MK,dosen.nama_dosen,kontrak.nilai  FROM kontrak JOIN mahasiswa ON kontrak.nim = mahasiswa.nim JOIN mata_kuliah ON kontrak.id_matakuliah = mata_kuliah.id_matakuliah JOIN dosen ON kontrak.nip = dosen.nip';
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
            }
            next(rows);
        });
    }
    
    static cariKontrak(id_kontrak, next) {
        
        let sql = `SELECT * FROM kontrak WHERE id_kontrak = ?`;
        console.log(sql, id_kontrak);
        db.get(sql, [id_kontrak], (err, rows) => {
            try {
                this.table = new Table({
                    head: ['id_kontrak', 'nim', 'nip', 'id_matakuliah', 'nilai', 'sks'],
                    colWidths: [10, 10, 20, 10, 10, 10]
                });
                this.table.push([rows.id_kontrak, rows.nim, rows.nip, rows.id_matakuliah, rows.nilai, rows.sks]);
                console.log(this.table.toString());
            } catch (e) {
                console.log(`mahasiswa dengan id_kontrak ` + id_kontrak + ` tidak terdaftar`);
            }
            next();
        })
        
    }
    static addKontrak(id_kontrak, nama_mk, next) {
        
        let sql = `INSERT INTO kontrak(id_kontrak,nama_mk) VALUES (?,?)`;
        let sql2 = `SELECT * FROM kontrak`;
        db.run(sql, [id_kontrak, nama_mk], (err) => {
            if (err) {
                console.error(err.message);
            }
            // console.log("A row has been successfully inserted.");
            this.table = new Table({
                head: ['id_kontrak', 'nim', 'nip', 'id_matakuliah', 'nilai', 'sks'],
                colWidths: [10, 10, 20, 10, 10, 10]
            });
            db.all(sql2, [], (err, rows) => {
                if (err) {
                    console.error(err);
                }
                for (let i = 0; i < rows.length; i++) {
                    this.table.push([rows[i].id_kontrak, rows[i].nim, rows[i].nip, rows[i].id_matakuliah, rows[i].nilai, rows[i].sks]);
                }
                console.log(this.table.toString());
                next();
            })
        })
        
    }
    static deleteKontrak(id_kontrak, next) {
        
        let sql = 'DELETE FROM kontrak WHERE id_kontrak = ?';
        db.run(sql, id_kontrak, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Kontrak dengan id_kontrak' + id_kontrak + 'telah terhapus');
            next();
        });
        
    }
    static updateNilai(nilai,id_kontrak) {
        
    let sql = 'UPDATE kontrak SET nilai = ? WHERE id_kontrak = ?';
    // let sql2 = `SELECT * FROM kontrak`;
    db.run(sql,[id_kontrak,nilai], (err) => {
        if (err){
            console.error(err.message);
        }
        console.log('nilai dengan id kontrak' + id_kontrak + 'dan nilai '+ nilai + ' telah berhasil di update');
    })
    }
}



