import { Awal, printPembatas, rl } from "../views/util.js";
import User from "../models/user.js";

export default class UserController {

    static start() {
        Awal();
        UserController.askUsername()

    }
    static askUsername() {
        rl.question('username: ', answer => {
            User.username((rows) => {
                if (rows.length == 0) {
                    console.log('username not found')
                    UserController.askUsername()
                } else {
                    password(rows[0])
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
                default:
                    mainMenu();
                    break;
            }
        })
    }
}


