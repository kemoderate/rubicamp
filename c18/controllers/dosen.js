import { rl,printPembatas } from "../views/util.js";
import DosenModel from "../models/dosen.js";
import DosenView from "../views/dosen.js";
import UserController from "./user.js";

export default class DosenController {
    static menuDosen() {
      printPembatas();
      console.log(`Silahkan pilih opsi di bawah ini:
      [1] Daftar Dosen
      [2] Cari Dosen
      [3] Tambah Dosen
      [4] Hapus Dosen
      [5] Kembali`);
      printPembatas();
      rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
        switch (answer) {
          case '1':
            DosenModel.viewDosen((rows) => {
             DosenView.daftarDosen(rows);
              DosenController.menuDosen();
            });
            break;
          case '2':
            printPembatas();
            rl.question("Masukkan NIP Dosen: ", (answer) => {
              let nimAnswer = answer;
              DosenModel.cariDosen(nimAnswer, (row) => {
                if (row) {
                DosenView.daftarDosen([row]);
                } else {
                  console.log(`Dosen dengan nip ${nimAnswer} tidak ditemukan`);
                }
                DosenController.menuDosen();
              });
            });
            break;
          case '3':
            printPembatas();
            DosenModel.viewDosen((rows) => {
              DosenView.daftarDosen(rows);
              //  MahasiswaController.menuMahasiswa();
                  console.log('lengkapi data di bawah ini :')
  
                  rl.question("nip : ", (answer1) => {
                      let idjur = answer1;
                      rl.question("nama Dosen: ", (answer2) => {
                          let namajur = answer2;
  
                                      DosenModel.addDosen(idjur, namajur, () => {
                                        DosenModel.viewDosen((rows) => {
                                          DosenView.daftarDosen(rows);
                                        DosenController.menuDosen();

                                  })   
                              })
                          })
                      })
                  })
            
                  break;
                  
          case '4':
            printPembatas();
            rl.question("Masukkan NIM Dosen yang akan dihapus: ", (answer) => {
              const nim = answer.trim();
              DosenModel.deleteDosen(nim, () => {
                console.log(`Dosen dengan nip ${nim} telah dihapus`);
                DosenController.menuDosen();
              });
            });
            break;
          case '5':
            UserController.mainMenu();
            break;
          default:
            DosenController.menuDosen();
            break;
        }
      });
    }
  }
  