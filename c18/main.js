const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const users = {
    'fahmi': '1234',
    'gema': '1234',
    'yudi': '1234',
    'rifqi': '1234'
}

console.log('=============================================================')
console.log('Welcome to Universitas Pendidikan Indonesia')
console.log('Jl.Setiabudhi No.255')
console.log('=============================================================')

rl.prompt();

rl.on('line', (input) => {
    const trimmedInput = input.trim();

    if (!username) {
        const username = trimmedInput;
        if (users.hasOwnProperty(username)) {
            rl.setPrompt('Enter your password:');
            rl.prompt();
        } else {
            console.log('Invalid username');
            rl.close();
        }
    } else {
        const password = trimmedInput;
        const storedPassword = users[username];
        if (password === storedPassword) {
            console.log(`welcome ${username} . Your  access level is : ADMIN `);
            console.log(`silahkan pilih opsi di bawah ini : 
                        [1] Mahasiswa
                        [2] Jurusan
                        [3] Dosen
                        [4] Mata Kuliah
                        [5] Kontrak
                        [6] Keluar   `)
            switch (input) {
                case "1":
                    console.log(`silahkan pilih opsi di bawah ini : 
                        [1] Daftar Mahasiswa
                        [2] Cari Mahasiswa
                        [3] Tambah Mahasiswa
                        [4] Hapus Mahasiswa
                        [5] Kontrak
                        [6] Keluar   `)
            }


            rl.prompt();

        } else {
            console.log('Invalid password');
        }

    }
});
