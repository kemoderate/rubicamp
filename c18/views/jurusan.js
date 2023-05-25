import Table from 'cli-table';

export function printPembatas() {
  console.log("===========================================");
}

export function printJurusan(rows) {
  const table = new Table({
    head: ['id_jurusan', 'nama_jurusan'],
    colWidths: [10, 20]
  });

  rows.forEach((row) => {
    table.push([row.id_jurusan, row.nama_jurusan]);
  });

  console.log(table.toString());
}
