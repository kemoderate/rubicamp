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
}
