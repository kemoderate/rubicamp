import Table from 'cli-table';

export default class KontrakView {

static printPembatas() {
  console.log("===========================================");
}

static daftarKontrak(rows) {
  const table = new Table({
    head: ['id_kontrak', 'nim', 'nip', 'id_matakuliah', 'nilai', 'sks'],
    colWidths: [10, 10, 20, 10, 20, 10]
  });

  rows.forEach((rows) => {
    table.push([rows.id_kontrak, rows.nim, rows.nip, rows.id_matakuliah, rows.nilai, rows.sks]);
  });

  console.log(table.toString());
  }

}
