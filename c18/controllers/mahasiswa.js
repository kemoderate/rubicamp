
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
            // let mahasiswa = new Mahasiswa();
            switch (answer) {
                case '1':
                    MahasiswaController.viewMahasiswa(() => {
                        menuMahasiswa();
                    });
                    break;
                case '2':
                    printPembatas();
                    // console.log("detail mahasiswa :")
                    rl.question("masukkan nim mahasiswa : ", (answer) => {
                        let nimAnswer = answer;
                        nimAnswer.toLowerCase();
                        Mahasiswa.cariMahasiswa(nimAnswer, () => {
                            menuMahasiswa();
                            // printPembatas();
                        });
                    });
                    break;
    
                case '3':
                    printPembatas();
                    Mahasiswa.viewMahasiswa();
                    console.log('lengkapi data di bawah ini :')
    
    
    
                    rl.question("nim : ", (answer1) => {
                        let nimmhs = answer1;
                        rl.question("nama : ", (answer2) => {
                            let namamhs = answer2;
    
                            rl.question("alamat : ", (answer3) => {
                                let alamatmhs = answer3;
    
                                Jurusan.viewJurusan();
                                rl.question("jurusan : ", (answer4) => {
                                    let jurusanmhs = answer4;
    
                                    rl.question("umur : ", (answer5) => {
                                        let umurmhs = answer5;
    
                                        Mahasiswa.addMahasiswa(nimmhs, namamhs, alamatmhs, jurusanmhs, umurmhs, () => {
                                            menuMahasiswa();
                                        });
                                    })
                                })
                            })
                        })
                    })
                    break;
                case '4':
                    printPembatas();
                    rl.question('Masukkan NIM yang akan di hapus : ', (answer) => {
                        let nimmhs = answer;
    
                        Mahasiswa.deleteMahasiswa(nimmhs, () => {
                            menuMahasiswa();
                        });
                        // printPembatas();
    
                    })
                    break;
                case '5':
                    mainMenu();
                    break;
                default:
                    menuMahasiswa();
                    break;
            }
            // menuMahasiswa();
        });
    }

}