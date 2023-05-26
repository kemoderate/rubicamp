import { rl, printPembatas } from "../views/util.js";
import MahasiswaModel from "../models/mahasiswa.js";
import UserController from "./user.js";
import MahasiswaView from "../views/mahasiswa.js";
import JurusanView from "../views/jurusan.js";
import JurusanModel from "../models/jurusan.js";

export default class MahasiswaController {
  static menuMahasiswa() {
    printPembatas();
    console.log(`Silahkan pilih opsi di bawah ini:
    [1] Daftar Mahasiswa
    [2] Cari Mahasiswa
    [3] Tambah Mahasiswa
    [4] Hapus Mahasiswa
    [5] Kembali`);
    printPembatas();
    rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
      switch (answer) {
        case '1':
          MahasiswaModel.viewMahasiswa((rows) => {
            MahasiswaView.daftarMahasiswa(rows);
            MahasiswaController.menuMahasiswa();
          });
          break;
        case '2':
          printPembatas();
          rl.question("Masukkan NIM mahasiswa: ", (answer) => {
            let nimAnswer = answer.toLowerCase();
            MahasiswaModel.cariMahasiswa(nimAnswer, (row) => {
              if (row) {
                MahasiswaView.daftarMahasiswa([row]);
              } else {
                console.log(`Mahasiswa dengan nim ${nimAnswer} tidak ditemukan`);
              }
              MahasiswaController.menuMahasiswa();
            });
          });
          break;
        case '3':
          printPembatas();
          MahasiswaModel.viewMahasiswa((rows) => {
            MahasiswaView.daftarMahasiswa(rows);
            //  MahasiswaController.menuMahasiswa();
            console.log('lengkapi data di bawah ini :')

            rl.question("nim : ", (answer1) => {
              let nimmhs = answer1;
              rl.question("nama : ", (answer2) => {
                let namamhs = answer2;

                rl.question("alamat : ", (answer3) => {
                  let alamatmhs = answer3;

                  JurusanModel.viewJurusan((rows) => {
                    JurusanView.printJurusan(rows);

                    rl.question("jurusan : ", (answer4) => {
                      let jurusanmhs = answer4;

                      rl.question("umur : ", (answer5) => {
                        let umurmhs = answer5;

                        MahasiswaModel.addMahasiswa(nimmhs, namamhs, alamatmhs, jurusanmhs, umurmhs, () => {
                          MahasiswaModel.viewMahasiswa((rows) => {
                            MahasiswaView.daftarMahasiswa(rows);
                            MahasiswaController.menuMahasiswa();

                          });
                        });
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
          rl.question("Masukkan NIM mahasiswa yang akan dihapus: ", (answer) => {
            const nim = answer.trim();
            MahasiswaModel.deleteMahasiswa(nim, () => {
              console.log(`Mahasiswa dengan nim ${nim} telah dihapus`);
              MahasiswaController.menuMahasiswa();
            });
          });
          break;
        case '5':
          UserController.mainMenu();
          break;
        default:
          MahasiswaController.menuMahasiswa();
          break;
      }
    });
  }
}
