import { rl, printPembatas } from "../views/util.js";
import MahasiswaModel from "../models/mahasiswa.js";
import UserController from "./user.js";
import { printMahasiswa } from "../views/mahasiswa.js";

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
            printMahasiswa(rows);
            MahasiswaController.menuMahasiswa();
          });
          break;
        case '2':
          printPembatas();
          rl.question("Masukkan NIM mahasiswa: ", (answer) => {
            let nimAnswer = answer.toLowerCase();
            MahasiswaModel.cariMahasiswa(nimAnswer, (row) => {
              if (row) {
                printMahasiswa([row]);
              } else {
                console.log(`Mahasiswa dengan nim ${nimAnswer} tidak ditemukan`);
              }
              MahasiswaController.menuMahasiswa();
            });
          });
          break;
        case '3':
          printPembatas();
          rl.question("Masukkan data mahasiswa (nim, nama, alamat, jurusan, tanggallahir) dipisahkan oleh koma: ", (answer) => {
            const [nim, nama, alamat, jurusan, tanggallahir] = answer.split(",").map((item) => item.trim());
            MahasiswaModel.addMahasiswa(nim, nama, alamat, jurusan, tanggallahir, () => {
              console.log("Mahasiswa berhasil ditambahkan");
              MahasiswaController.menuMahasiswa();
            });
          });
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
