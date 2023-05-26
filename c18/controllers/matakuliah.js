import { rl, printPembatas } from "../views/util.js";
import UserController from "./user.js";
import MatakuliahModel from "../models/matakuliah.js";
import MatakuliahView from "../views/matakuliah.js";

export default class MatakuliahController {
  static menuMatakuliah() {
    printPembatas();
    console.log(`Silahkan pilih opsi di bawah ini:
    [1] Daftar Matakuliah
    [2] Cari Matakuliah
    [3] Tambah Matakuliah
    [4] Hapus Matakuliah
    [5] Kembali`);
    printPembatas();
    rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
      switch (answer) {
        case '1':
          MatakuliahModel.viewMatakuliah((rows) => {
           MatakuliahView.daftarMatakuliah(rows);
            MatakuliahController.menuMatakuliah();
          });
          break;
        case '2':
          printPembatas();
          rl.question("Masukkan ID Matakuliah: ", (answer) => {
            let nimAnswer = answer;
            MatakuliahModel.cariMatakuliah(nimAnswer, (row) => {
              if (row) {
              MatakuliahView.daftarMatakuliah([row]);
              } else {
                console.log(`Matakuliah dengan ID ${nimAnswer} tidak ditemukan`);
              }
              MatakuliahController.menuMatakuliah();
            });
          });
          break;
        case '3':
            printPembatas();
            MatakuliahModel.viewMatakuliah((rows) => {
              MatakuliahView.daftarMatakuliah(rows);
              //  MahasiswaController.menuMahasiswa();
                  console.log('lengkapi data di bawah ini :')
  
                  rl.question("id Matakuliah : ", (answer1) => {
                      let idjur = answer1;
                      rl.question("nama Matakuliah: ", (answer2) => {
                          let namajur = answer2;
                          rl.question("jumlah sks: ", (answer3) => {
                            let sks = answer3;
  
                                      MatakuliahModel.addMatakuliah(idjur, namajur,sks, () => {
                                        MatakuliahModel.viewMatakuliah((rows) => {
                                          MatakuliahView.daftarMatakuliah(rows);
                                        MatakuliahController.menuMatakuliah();

                                    })   
                                })
                             })
                          })
                      })
                  })

                break;
                
        case '4':
          printPembatas();
          rl.question("Masukkan  id Matakuliah yang akan dihapus: ", (answer) => {
            const nim = answer.trim();
            MatakuliahModel.deleteMatakuliah(nim, () => {
              console.log(`Matakuliah dengan id ${nim} telah dihapus`);
              MatakuliahController.menuMatakuliah();
            });
          });
          break;
        case '5':
          UserController.mainMenu();
          break;
        default:
          MatakuliahController.menuMatakuliah();
          break;
      }
    });
  }
}
