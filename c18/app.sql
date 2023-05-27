SELECT kontrak.id_kontrak,kontrak.nim,mahasiswa.nama,mata_kuliah.nama_MK,dosen.nama_dosen,kontrak.nilai  FROM kontrak JOIN mahasiswa ON kontrak.nim = mahasiswa.nim JOIN mata_kuliah ON kontrak.id_matakuliah = mata_kuliah.id_matakuliah JOIN dosen ON kontrak.nip = dosen.nip

SELECT * FROM kontrak WHERE kontrak.NIM LIKE %${search_kontrak}%


CREATE TABLE kontrak (
    id_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHARACTER(3) NOT NULL,
    nip CHARACTER(4) NOT NULL,
    id_matakuliah CHARACTER(3) NOT NULL,
    nilai CHARACTER (2) ,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)

 