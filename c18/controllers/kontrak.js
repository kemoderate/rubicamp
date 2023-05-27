// "./controller/kontrak.js
import { rl, printPembatas } from "../views/util.js";
import KontrakModel from "../models/kontrak.js";
import UserController from "./user.js";
import KontrakView from "../views/kontrak.js";
import MahasiswaModel from "../models/mahasiswa.js";
import MahasiswaView from "../views/mahasiswa.js";
import JurusanModel from "../models/jurusan.js";
import JurusanView from "../views/jurusan.js";
import MatakuliahView from "../views/matakuliah.js";
import MatakuliahModel from "../models/matakuliah.js";
import DosenModel from "../models/dosen.js";
import DosenView from "../views/dosen.js";


export default class KontrakController {

  static menuKontrak() {
    printPembatas();
    console.log(`Silahkan pilih opsi di bawah ini:
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Update Nilai
[6] Kembali`);
    printPembatas();
    rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
      // let Kontrak = new Kontrak();
      switch (answer) {
        case '1':
          KontrakModel.viewKontrak((rows) => {
            KontrakView.cetakKontrak(rows);
            KontrakController.menuKontrak();
          });
          break;
        case '2':
          MahasiswaModel.viewMahasiswa((rows) => {
            MahasiswaView.daftarMahasiswa(rows);
            rl.question("Masukkan NIM mahasiswa: ", (answer) => {

              KontrakModel.cariKontrak(answer, (row) => {
                if (row) {
                  KontrakView.cariKontrak(row);
                } else {
                  // console.log(`Kontrak dengan id ${answer} tidak ditemukan`);
                }
                KontrakController.menuKontrak();
              });
            });
          })
          break;

        case '3':
          MahasiswaModel.viewMahasiswa((rows) => {
            MahasiswaView.daftarMahasiswa(rows);
            console.log('lengkapi data di bawah ini :')
            
              rl.question("NIM : ", (answer1) => {
                let noktrk = answer1;
                MatakuliahModel.viewMatakuliah((rows) => {
                  MatakuliahView.daftarMatakuliah(rows);

                  rl.question("kode MK : ", (answer2) => {
                    let namaktrk = answer2;

                    DosenModel.viewDosen((rows) => {
                      DosenView.daftarDosen(rows);
                      rl.question("NIP dosen : ", (answer3) => {
                        let dosenktrk = answer3;

                        KontrakModel.addKontrak(noktrk, namaktrk, dosenktrk, () => {
                          KontrakModel.viewKontrak((rows) => {
                            console.log('kontrak telah di tambahkan')
                            KontrakView.cetakKontrak(rows);
                              KontrakController.menuKontrak();
                            

                          })
                        });
                      })
                    })
                  })
                })
              })
          })
          break;


        case '4':
          printPembatas();
          rl.question('Masukkan id Kontrak yang akan di hapus : ', (answer) => {
            let idjur = answer;

            Kontrak.deleteKontrak(idjur, () => {
              KontrakController.menuKontrak();
            });
          })
          break;

        case '5':
          // KontrakModel.viewKontrak((rows) => { yg di comment belum beres
          //   KontrakView.cetakKontrak(rows);
          rl.question('masukkan NIM mahasiswa yang akan di edit :', (answer1) => {
            let nimNilai = answer1;
            rl.question('Masukkan id yang akan dirubah nilainya : ', (answer2) => {
              let IDnilai = answer2;
              rl.question('tulis nilai yang baru :', (answer3) => {
                let nilaiBaru = answer3;
                KontrakModel.updateNilai(IDnilai, nilaiBaru, () => {
                  KontrakModel.viewKontrak((rows) => {
                    KontrakView.cetakKontrak(rows);
                    KontrakController.menuKontrak();
                  })
                });
              });
            });
          })
          break;
        case '6':
          UserController.mainMenu();
          break;
        default:
          KontrakController.menuKontrak();
          break;
      }
      // menuKontrak();
    });
  }
}