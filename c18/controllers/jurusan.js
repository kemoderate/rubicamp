
export default class MahasiswaController {

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
      // let mahasiswa = new Mahasiswa();
      switch (answer) {
          case '1':
              // printPembatas();
              Jurusan.viewJurusan(() => {
                  menuJurusan();
              });
              // printPembatas();
              // menuJurusan();
              break;
          case '2':
              printPembatas();
              // console.log("detail Jurusan :")
              rl.question("masukkan Kode Jurusan : ", (answer) => {
                  let jurAnswer = answer;
                  jurAnswer.toLowerCase();
                  Jurusan.cariJurusan(jurAnswer, () => {
                      menuJurusan();
                  });
              });
              break;

          case '3':
              printPembatas();
              Jurusan.viewJurusan();
              console.log('lengkapi data di bawah ini :')



              rl.question("id_jurusan : ", (answer1) => {
                  let idjur = answer1;
                  rl.question("nama_jurusan : ", (answer2) => {
                      let namajur = answer2;

                      Jurusan.addJurusan(idjur, namajur, () => {
                          menuJurusan();

                      });
                  })
              })
              break;
          case '4':
              printPembatas();
              rl.question('Masukkan Jurusan yang akan di hapus : ', (answer) => {
                  let idjur = answer;

                  Jurusan.deleteJurusan(idjur, () => {
                      menuJurusan();
                  });
              })
              break;
          case '5':
              mainMenu();
              break;
          default:
              menuJurusan();
              break;
      }
      // menuMahasiswa();
  });
}
}