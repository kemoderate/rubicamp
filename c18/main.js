
import sqlite3 from 'sqlite3';
import { Mahasiswa } from "./mahasiswa.js";
import { Jurusan } from './jurusan.js';
import { Dosen } from './dosen.js';
import { Matakuliah } from './matakuliah.js';
import { Kontrak } from './kontrak.js';






function Awal() {

    username()
}

function username() {
   
}

function password(user) {
    
}





function menuJurusan() {
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

function menuDosen() {
    printPembatas();
    console.log(`Silahkan pilih opsi di bawah ini:
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali`);
    printPembatas();
    rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
        // let mahasiswa = new Mahasiswa();
        switch (answer) {
            case '1':
                Dosen.viewDosen(() => {
                    menuDosen();
                });
                break;
            case '2':
                printPembatas();
                // console.log("detail Dosen :")
                rl.question("masukkan Kode Dosen : ", (answer) => {
                    let DosAnswer = answer;
                    DosAnswer.toLowerCase();
                    Dosen.cariDosen(DosAnswer, () => {
                        menuDosen();
                    });
                });
                break;

            case '3':
                printPembatas();
                Dosen.viewDosen();
                console.log('lengkapi data di bawah ini :')



                rl.question("NIP : ", (answer1) => {
                    let nip = answer1;
                    rl.question("nama_Dosen : ", (answer2) => {
                        let namados = answer2;

                        Dosen.addDosen(nip, namados, () => {
                            menuDosen();
                        });
                    })
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan NIP Dosen yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Dosen.deleteDosen(idjur, () => {
                        menuDosen();
                    });
                })
                break;
            case '5':
                mainMenu();
                break;
            default:
                menuDosen();
                break;
        }
        // menuMahasiswa();
    });
}

function menuMatakuliah() {
    printPembatas();
    console.log(`Silahkan pilih opsi di bawah ini:
[1] Daftar Mata Kuliah
[2] Cari Mata Kuliah
[3] Tambah Mata Kuliah
[4] Hapus Mata Kuliah
[5] Kembali`);
    printPembatas();
    rl.question("Masukkan salah satu nomor dari opsi di atas: ", (answer) => {
        // let mahasiswa = new Mahasiswa();
        switch (answer) {
            case '1':
                Matakuliah.viewMatakuliah(() => {
                    menuMatakuliah();
                });
                break;
            case '2':
                printPembatas();
                // console.log("detail Matakuliah :")
                rl.question("masukkan Kode Matakuliah : ", (answer) => {
                    let MKAnswer = answer;
                    MKAnswer.toLowerCase();
                    Matakuliah.cariMatakuliah(MKAnswer, () => {
                        menuMatakuliah();
                        // printPembatas();
                    });
                });
                break;

            case '3':
                printPembatas();
                Matakuliah.viewMatakuliah();
                console.log('lengkapi data di bawah ini :')



                rl.question("ID matkul : ", (answer1) => {
                    let idmk = answer1;
                    rl.question("nama_Matakuliah : ", (answer2) => {
                        let namamk = answer2;
                        rl.question("masukkan sks : ", (answer3) => {
                            let sksmk = answer3;
                            Matakuliah.addMatakuliah(idmk, namamk, sksmk, () => {
                                printPembatas();

                            }); menuMatakuliah();
                        });
                    });
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan ID Matakuliah yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Matakuliah.deleteMatakuliah(idjur, () => {
                        menuMatakuliah();
                    });
                    // printPembatas();

                })
                break;
            case '5':
                mainMenu();
                break;
            default:
                menuMatakuliah();
                break;
        }
        // menuMahasiswa();
    });
}

function menuKontrak() {
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
        // let mahasiswa = new Mahasiswa();
        switch (answer) {
            case '1':
                Kontrak.viewKontrak(() => {
                    menuKontrak();
                });
                break;
            case '2':
                printPembatas();
                // console.log("detail Kontrak :")
                rl.question("masukkan id kontrak mahasiswa : ", (answer) => {
                    let KAnswer = answer;
                    KAnswer.toLowerCase();
                    Kontrak.cariKontrak(KAnswer, () => {
                        menuKontrak();
                        printPembatas();
                    });
                });
                break;

            case '3':
                printPembatas();
                Kontrak.viewKontrak();
                console.log('lengkapi data di bawah ini :')



                rl.question("No Kontrak : ", (answer1) => {
                    let noktrk = answer1;
                    rl.question("nama_Kontrak : ", (answer2) => {
                        let namaktrk = answer2;

                        Kontrak.addKontrak(noktrk, namaktrk, () => {
                            menuKontrak();

                        });
                    })
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan id Kontrak yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Kontrak.deleteKontrak(idjur, () => {
                        menuKontrak();
                    });
                })
                break;

            case '5':
                printPembatas();
                rl.question('Masukkan id yang akan dirubah nilainya : ', (answer1) => {
                    let IDnilai = answer1;
                    rl.question('tulis nilai yang baru :', (answer2) => {
                        let nilaiBaru = answer2;
                        Kontrak.updateNilai(IDnilai, nilaiBaru, () => {
                            menuKontrak();
                        });
                    });
                });
                break;
            case '6':
                mainMenu();
                break;
            default:
                menuKontrak();
                break;
        }
        // menuMahasiswa();
    });
}

Awal()