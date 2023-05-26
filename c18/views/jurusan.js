import Table from 'cli-table';


export default class JurusanView {

 static printPembatas() {
  console.log("===========================================");
}

 static daftarJurusan(rows) {
  const table = new Table({
    head: ['id jurusan', 'nama jurusan'],
    colWidths: [30, 20]
  });

  rows.forEach((row) => {
    table.push([row.id_jurusan, row.nama_jurusan]);
  });

  console.log(table.toString());
}

}