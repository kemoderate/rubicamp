import readline from 'readline';
import sqlite3 from 'sqlite3';
import { Mahasiswa } from "./mahasiswa.js";
import { Jurusan } from './jurusan.js';
import { Dosen } from './dosen.js';
import { Matakuliah } from './matakuliah.js';
import { Kontrak } from './kontrak.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function printPembatas() {
    console.log('===============================================')
}

function Awal() {
    printPembatas()
    console.log('Welcome to Universitas Pendidikan Indonesia');
    console.log('Jl. Dr. Setiabudi no. 255')
    printPembatas()
    username()
}

function username() {
    rl.question('username: ', answer => {
        let db = new sqlite3.Database('../c15/university.db');
        db.all('SELECT * FROM users WHERE username = ?', [answer], (err, rows) => {
            if (err) throw err
            if (rows.length == 0) {
                console.log('username not found')
                username()
            } else {
                password(rows[0])
            }

        })
    })
}

function password(user) {
    rl.question('password: ', answer => {
        if (user.password === answer) {
            printPembatas()
            console.log(`welcome ${user.username}. Your access level is : ${user.roles}`)
            printPembatas()
            mainMenu()
        } else {
            console.log('password salah')
            password(user)
        }
    })
}

function mainMenu() {
    console.log(`
silahkan pilih opsi di bawah ini :
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
    `)
    printPembatas()
    rl.question('masukkan salah satu no. dari opsi di atas: ', answer => {
        switch (answer) {
            case '1':
                menuMahasiswa();
                break;

            case '2':
                menuJurusan();
                break;

            case '3':
                menuDosen();
                break;

            case '4':
                menuMatakuliah();
                break;

            case '5':
                menuKontrak();
                break;

            case '6':
                printPembatas();
                console.log('Anda telah Keluar')
                printPembatas();
                process.exit(0)
                break;

            default:
                mainMenu();
                break;
        }
    })
}

function menuMahasiswa() {
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
                printPembatas();
                Mahasiswa.viewMahasiswa();
                printPembatas();
                menuMahasiswa();
                break;
            case '2':
                printPembatas();
                // console.log("detail mahasiswa :")
                rl.question("masukkan nim mahasiswa : ", (answer) => {
                    let nimAnswer = answer;
                    nimAnswer.toLowerCase();
                    Mahasiswa.cariMahasiswa(nimAnswer, () => {

                        printPembatas();
                    }); menuMahasiswa();
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
                                        printPembatas();

                                    }); menuMahasiswa();
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

                    });
                    printPembatas();
                    menuMahasiswa();
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
                printPembatas();
                Jurusan.viewJurusan();
                printPembatas();
                menuJurusan();
                break;
            case '2':
                printPembatas();
                // console.log("detail Jurusan :")
                rl.question("masukkan Kode Jurusan : ", (answer) => {
                    let jurAnswer = answer;
                    jurAnswer.toLowerCase();
                    Jurusan.cariJurusan(jurAnswer, () => {

                        printPembatas();
                    }); menuJurusan();
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
                            printPembatas();

                        }); menuJurusan();
                    })
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan Jurusan yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Jurusan.deleteJurusan(idjur, () => {

                    });
                    printPembatas();
                    menuJurusan();
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
                printPembatas();
                Dosen.viewDosen();
                printPembatas();
                menuDosen();
                break;
            case '2':
                printPembatas();
                // console.log("detail Dosen :")
                rl.question("masukkan Kode Dosen : ", (answer) => {
                    let DosAnswer = answer;
                    DosAnswer.toLowerCase();
                    Dosen.cariDosen(DosAnswer, () => {

                        printPembatas();
                    }); menuDosen();
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
                            printPembatas();

                        }); menuDosen();
                    })
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan NIP Dosen yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Dosen.deleteDosen(idjur, () => {

                    });
                    printPembatas();
                    menuDosen();
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
                printPembatas();
                Matakuliah.viewMatakuliah();
                printPembatas();
                menuMatakuliah();
                break;
            case '2':
                printPembatas();
                // console.log("detail Matakuliah :")
                rl.question("masukkan Kode Matakuliah : ", (answer) => {
                    let MKAnswer = answer;
                    MKAnswer.toLowerCase();
                    Matakuliah.cariMatakuliah(MKAnswer, () => {

                        printPembatas();
                    }); menuMatakuliah();
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
                        rl.question("masukkan sks : ", (answer3) =>{
                        let sksmk = answer3;
                        Matakuliah.addMatakuliah(idmk, namamk,sksmk, () => {
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

                    });
                    printPembatas();
                    menuMatakuliah();
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
                printPembatas();
                Kontrak.viewKontrak();
                printPembatas();
                menuKontrak();
                break;
            case '2':
                printPembatas();
                // console.log("detail Kontrak :")
                rl.question("masukkan id kontrak mahasiswa : ", (answer) => {
                    let KAnswer = answer;
                    KAnswer.toLowerCase();
                    Kontrak.cariKontrak(KAnswer, () => {

                        printPembatas();
                    }); menuKontrak();
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
                            printPembatas();

                        }); menuKontrak();
                    })
                })
                break;
            case '4':
                printPembatas();
                rl.question('Masukkan id Kontrak yang akan di hapus : ', (answer) => {
                    let idjur = answer;

                    Kontrak.deleteKontrak(idjur, () => {

                    });
                    printPembatas();
                    menuKontrak();
                })
                break;

                case '5':
                printPembatas();
                rl.question('Masukkan id yang akan dirubah nilainya : ',(answer1)=>{
                    let IDnilai = answer1;
                    rl.question('tulis nilai yang baru :' ,(answer2)=>{
                        let nilaiBaru = answer2;
                        Kontrak.updateNilai(IDnilai,nilaiBaru, () => {
                            printPembatas();
                        }); menuKontrak();
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