

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
              printMahasiswa(rows);
              MahasiswaController.menuJurusan();
            });
            break;
          case '2':
            printPembatas();
            rl.question("Masukkan id Jurusan: ", (answer) => {
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
  