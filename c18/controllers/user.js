import { Awal, printPembatas, rl } from "../views/util.js";
import User from "../models/user.js";
import MahasiswaController from "./mahasiswa.js";
import JurusanController from "./jurusan.js";
import DosenController from "./dosen.js";
import MatakuliahController from "./matakuliah.js";
import KontrakController from "./kontrak.js";

export default class UserController {

    static start() {
        Awal();
        UserController.askUsername()

    }
    static askUsername() {
        rl.question('username: ', (answer) => {
            User.username(answer,(rows) => {
                if (rows.length == 0) {
                    console.log('username not found')
                    UserController.askUsername()
                } else {
                   UserController.askPassword(rows[0])
                }
            })
        })

    }

    static askPassword(user) {
        rl.question('password: ', answer => {
            if (user.password === answer) {
                printPembatas()
                console.log(`welcome ${user.username}. Your access level is : ${user.roles}`)
                printPembatas()
                UserController.mainMenu()
            } else {
                console.log('password salah')
              UserController.askPassword(user)
            }
        })
    }

    static mainMenu() {
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
                   MahasiswaController.menuMahasiswa();
                    break;

                case '2':
                   JurusanController.menuJurusan();
                    break;

                case '3':
                    DosenController.menuDosen();
                    break;

                case '4':
                    MatakuliahController.menuMatakuliah();
                    break;

                case '5':
                    KontrakController.menuKontrak();
                    break;

                case '6':
                    printPembatas();
                    console.log('Anda telah Keluar')
                    printPembatas();
                    process.exit(0)
                default:
                    mainMenu();
                    break;
            }
        })
    }
}


