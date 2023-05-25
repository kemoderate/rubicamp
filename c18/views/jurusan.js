import Table from 'cli-table';

class JurusanView {
  static displayJurusan(rows) {
    const table = new Table({
      head: ['id_jurusan', 'nama_jurusan'],
      colWidths: [40, 40]
    });

    for (let i = 0; i < rows.length; i++) {
      table.push([rows[i].id_jurusan, rows[i].nama_jurusan]);
    }

    console.log(table.toString());
  }

  static displayJurusanDetail(row) {
    try {
      const table = new Table({
        head: ['id_jurusan', 'nama_jurusan'],
        colWidths: [40, 80]
      });
      table.push([row.id_jurusan, row.nama_jurusan]);
      console.log(table.toString());
    } catch (e) {
      console.log(`dosen dengan id_jurusan ` + id_jurusan + ` tidak terdaftar`);
    }
  }
}

export { JurusanView };
