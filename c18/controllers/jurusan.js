import { rl,printPembatas } from "../views/util.js";
import UserController from "./user.js";
import JurusanModel from "../models/jurusan.js";
import JurusanView from "../views/jurusan.js";

export default class JurusanController {

    static menuJurusan() {
      printPembatas();
      console.log(`Silahkan pilih opsi di bawah ini:
      [1] Daftar Jurusan
      [2] Cari Jurusan
      [3] Tambah Jurusan
      [4] Hapus Jurusan
      [5] Kembali`);
      printPembatas();
      rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
        switch (answer) {
          case '1':
            JurusanModel.viewJurusan((rows) => {
             JurusanView.daftarJurusan(rows);
             JurusanController.menuJurusan();
            });
            break;
          case '2':
            printPembatas();
            rl.question("Masukkan id Jurusan: ", (answer) => {
              let JurAnswer = answer;
              JurusanModel.cariJurusan(JurAnswer, (row) => {
                if (row) {
                  JurusanView.daftarJurusan([row]);
                } else {
                  console.log(`jurusan dengan ID ${JurAnswer} tidak ditemukan`);
                }
                JurusanController.menuJurusan();
              });
            });
            break;
          case '3':
            printPembatas();
            JurusanModel.viewJurusan((rows) => {
              JurusanView.daftarJurusan(rows);
              //  MahasiswaController.menuMahasiswa();
                  console.log('lengkapi data di bawah ini :')
  
                  rl.question("id jurusan : ", (answer1) => {
                      let idjur = answer1;
                      rl.question("nama jurusan: ", (answer2) => {
                          let namajur = answer2;
  
                                      JurusanModel.addJurusan(idjur, namajur, () => {
                                        JurusanModel.viewJurusan((rows) => {
                                          JurusanView.daftarJurusan(rows);
                                        JurusanController.menuJurusan();

                                  })   
                              })
                          })
                      })
                  })
                  break;
            
          case '4':
            printPembatas();
            rl.question("Masukkan ID jurusan yang akan dihapus: ", (answer) => {
              const nim = answer.trim();
              JurusanModel.deleteJurusan(nim, () => {
                console.log(`Jurusan dengan id ${nim} telah dihapus`);
                JurusanController.menuJurusan();
              });
            });
            break;
          case '5':
            UserController.mainMenu();
            break;
          default:
            JurusanController.menuJurusan();
            break;
        }
      });
    }
  }
  