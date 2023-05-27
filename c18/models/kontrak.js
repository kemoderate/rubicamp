import { db } from "./connect.js";
import KontrakView from "../views/kontrak.js";

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

    static cariKontrak(search_kontrak, next) {
        const sql = `SELECT * FROM kontrak WHERE kontrak.NIM LIKE '%${search_kontrak}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            KontrakView.cariKontrak(rows, search_kontrak)
            next();
        });
    }

    static detailKontrak(detail_kontrak, next) {
        const sql = `
          SELECT kontrak.id_kontrak, matakuliah.nama_MK, kontrak.nilai
          FROM kontrak
          INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah
          WHERE kontrak.NIM LIKE '%${detail_kontrak}%'
        `;
      
        db.all(sql, (err, rows) => {
          if (err) throw err;
          KontrakView.cetakKontrak(rows);
          KontrakView.PrintdetailKontrak(rows, detail_kontrak);
          next();
        });
      }


    static addKontrak(nim, id_matakuliah,nip, next) {
        
        let sql = `INSERT INTO kontrak(nim, id_matakuliah,nip) VALUES (?,?,?)`;
        db.run(sql, [nim, id_matakuliah,nip], (err) => {
            if (err) {
                console.error(err.message);
            }
            next();
        })
        
    }
    static deleteKontrak(id_kontrak, next) {
        
        let sql = 'DELETE FROM kontrak WHERE id_kontrak = ?';
        db.run(sql, id_kontrak, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Kontrak dengan id' + id_kontrak + 'telah terhapus');
            next();
        });
        
    }

    
    static updateNilai(nilai,id_kontrak,next) { 
        let sql = 'UPDATE kontrak SET nilai = ? WHERE id_kontrak = ?';
        // let sql2 = `SELECT * FROM kontrak`;
        db.run(sql,[id_kontrak,nilai], (err) => {
            if (err){
                console.error(err.message);
            }
            console.log('nilai dengan id kontrak' + id_kontrak + 'dan nilai '+ nilai + ' telah berhasil di update');
            next();
        })
        }
    }

    // static updateNilai(nilai,id_kontrak) {
        
    // let sql = 'UPDATE kontrak SET nilai = ? WHERE id_kontrak = ? AND nim = ?' ;
    // // let sql2 = `SELECT * FROM kontrak`;
    // db.run(sql,[nilai,id_kontrak], (err) => {
    //     if (err){
    //         console.error(err.message);
    //     }
    //     console.log('nilai dengan id kontrak' + id_kontrak + 'dan nilai '+ nilai + ' telah berhasil di update');
    // })
    // // next();
    // }




