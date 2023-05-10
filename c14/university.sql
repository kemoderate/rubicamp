CREATE TABLE jurusan (id_jurusan CHARACTER (3) PRIMARY KEY NOT NULL,
nama jurusan VARCHAR(100) NOT NULL);

INSERT INTO jurusan(id_jurusan,nama_jurusan) VALUES('SI1','sistem informasi');

CREATE TABLE mahasiswa 
(
nim CHARACTER (3) PRIMARY KEY NOT NULL, 
nama VARCHAR(100) NOT NULL, 
alamat TEXT (255) NOT NULL,
jurusan VARCHAR (100) NOT NULL,
FOREIGN KEY (jurusan) references jurusan(id_jurusan)
);

INSERT INTO mahasiswa(nim,nama,alamat,jurusan) 
VALUES('M01','fahmi','permatabiru','sistem informasi');
 
CREATE TABLE dosen ( 
    nip CHARACTER (3) PRIMARY KEY NOT NULL, 
    nama_dosen VARCHAR(100) NOT NULL);

INSERT INTO dosen (nip,nama_dosen)
VALUES('D01','BAJURI');


CREATE TABLE mata_kuliah ( 
    id_matakuliah CHARACTER (3) PRIMARY KEY NOT NULL, 
    nama_MK VARCHAR(100) NOT NULL, 
    sks CHARACTER (3) NOT NULL
);
INSERT INTO mata_kuliah (id_matakuliah,nama_MK,sks)
VALUES('001','Perancangan Basis Data 1','3');

INSERT INTO mata_kuliah (id_matakuliah,nama_MK,sks)
VALUES('002','Perancangan Basis Data 2','3')


CREATE TABLE takes (
    id_pengampu INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHARACTER(3) NOT NULL,
    nip CHARACTER(4) NOT NULL,
    id_matakuliah CHARACTER(3) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);

INSERT INTO takes (id_pengampu)
VALUES('001')
    


