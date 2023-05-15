class Car {
    constructor(mesin, warna, pintu, merkban, tahun, garansi) {
        this.mesin = mesin;
        this.warna = warna;
        this.pintu = pintu;
        this.ban = new Tyre(merkban);
        this.tahun = tahun;
        this.garansi = garansi;
    }
}

class Tyre {
    constructor(merk, size) {
        this.merk = merk;
        this.size = size || 17;
    }
}

class Agya extends Car {
    constructor(tahun) {
        super('1500cc', 'silver', 4, 'Dunlop', tahun, 3);
        this.type = 'Agya';
    }
}

class Avanza extends Car {
    constructor(tahun) {
        super('1300cc', 'hitam', 4, 'Michelin', tahun, 5);
        this.type = 'Avanza';
    }
}

class Rush extends Car {
    constructor(tahun) {
        super('2500cc', 'putih', 4, 'Bridgestone', tahun, 5);
        this.type = 'Rush';
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    static acak() {
        return Math.floor(Math.random() * 9);
    }

    produksi(tahun) {
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Agya(tahun));
        }
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Avanza(tahun));
        }
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Rush(tahun));
        }
    }

    warranty(year) {
        console.log('Daftar mobil yang telah diproduksi:');
        this.cars.forEach((content) => {
            console.log(`
            Nama Mobil: ${content.type}
            Warna: ${content.warna}
            Kapasitas Mesin: ${content.mesin}
            Jumlah Pintu: ${content.pintu}
            Merk Ban: ${content.ban.merk}
            Tahun Pembuatan: ${content.tahun}
            Garansi: ${content.garansi} Tahun
            Masa berlaku garansi: ${year - content.tahun > content.garansi ? 'Tidak berlaku' : 'Masih berlaku'}
            ===================================
            `);
        });
    }
}

let pabrik = new CarFactory();

pabrik.produksi(2020);
pabrik.warranty(2025);
