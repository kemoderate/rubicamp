import Table from 'cli-table';

export default class MatakuliahView {

static printPembatas() {
  console.log("===========================================");
}

static daftarMatakuliah(rows) {
  const table = new Table({
    head: ['id_matakuliah', 'nama_MK','sks'],
    colWidths: [30, 30, 10]
  });

  rows.forEach((row) => {
    table.push([row.id_matakuliah, row.nama_MK,row.sks]);
  });

  console.log(table.toString());
  }

}
