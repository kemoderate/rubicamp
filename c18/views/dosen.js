import Table from 'cli-table';

export default class DosenView {

static printPembatas() {
  console.log("===========================================");
}

static daftarDosen(rows) {
  const table = new Table({
    head: ['nip', 'nama dosen'],
    colWidths: [20, 20]
  });

  rows.forEach((row) => {
    table.push([row.nip, row.nama_dosen]);
  });

  console.log(table.toString());
  }

}
