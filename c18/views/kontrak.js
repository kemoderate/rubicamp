import Table from 'cli-table';

export default class KontrakView {
  static cetakKontrak(rows) {
    const table = new Table({
      head: ['id_kontrak', 'nim', 'nama', 'nama_MK', 'nama dosen', 'nilai'],
      colWidths: [20, 10, 20, 20, 20, 10],
    });

    rows.forEach((row) => {
      const formattedRow = [
        row.id_kontrak || '',
        row.nim || '',
        row.nama || '',
        row.nama_MK || '',
        row.nama_dosen || '',
        row.nilai || '',
      ];
      table.push(formattedRow);
    });

    console.log(table.toString());
  }

  static cariKontrak(rows,search_kontrak) {
    const table = new Table({
        head: ['ID', 'NIM', 'Kode Mata Kuliah', 'NIP', 'Nilai']
    });
    rows.forEach((row) => {
      const formattedRow = [
        row.id_kontrak || '',
        row.nim || '',
        row.id_matakuliah || '',
        row.nip || '',
        row.nilai || '',
      ];
      table.push(formattedRow);
    });
    if (rows.length > 0) {
        console.log(`Daftar kontrak mahasiswa dengan NIM ${rows[0].nim} adalah :`)
        console.log(table.toString());
    } else {
        console.log(`Kontrak dengan NIM ${search_kontrak} tidak terdaftar`)
    }
}
}