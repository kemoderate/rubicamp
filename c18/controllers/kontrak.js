import { rl, printPembatas } from "../views/util.js";
import KontrakModel from "../models/kontrak.js";
import UserController from "./user.js";
import KontrakView from "../views/kontrak.js";


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
            KontrakView.daftarKontrak(rows);
            KontrakController.menuKontrak();
          });
          break;
        case '2':
          printPembatas();
          rl.question("Masukkan id Kontrak: ", (answer) => {
            let nimAnswer = answer;
            KontrakModel.cariKontrak(nimAnswer, (row) => {
              if (row) {
                KontrakView.daftarKontrak([row]);
              } else {
                console.log(`Kontrak dengan id ${nimAnswer} tidak ditemukan`);
              }
              KontrakController.menuKontrak();
            });
          });
          break;

        case '3':
          KontrakModel.viewKontrak((rows) => {
            KontrakView.daftarKontrak(rows);
            console.log('lengkapi data di bawah ini :')



            rl.question("NIM : ", (answer1) => {
              let noktrk = answer1;
              rl.question("kode MK : ", (answer2) => {
                let namaktrk = answer2;
                rl.question("NIP dosen : ", (answer3) => {
                  let dosenktrk = answer3;

                  KontrakModel.addKontrak(noktrk, namaktrk, dosenktrk, () => {
                    KontrakModel.viewKontrak((rows) => {
                      KontrakView.daftarKontrak(rows);
                      KontrakController.menuKontrak();

                    })
                  });
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
          KontrakModel.viewKontrak((rows) => {
            KontrakView.daftarKontrak(rows);
          rl.question('Masukkan id yang akan dirubah nilainya : ', (answer1) => {
            let IDnilai = answer1;
            rl.question('tulis nilai yang baru :', (answer2) => {
              let nilaiBaru = answer2;
              KontrakModel.updateNilai(IDnilai, nilaiBaru, () => {
                KontrakModel.viewKontrak((rows) =>{
                  KontrakView.daftarKontrak(rows);
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