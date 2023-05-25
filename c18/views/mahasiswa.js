import Table from 'cli-table';

export function printPembatas() {
  console.log("===========================================");
}

export function printMahasiswa(rows) {
  const table = new Table({
    head: ['nim', 'nama', 'alamat', 'jurusan', 'tanggallahir'],
    colWidths: [10, 10, 20, 10, 20]
  });

  rows.forEach((row) => {
    table.push([row.nim, row.nama, row.alamat, row.jurusan, row.tanggallahir]);
  });

  console.log(table.toString());
}
