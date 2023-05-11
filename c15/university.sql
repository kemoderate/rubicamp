DROP TABLE mahasiswa;

CREATE TABLE jurusan (id_jurusan CHARACTER (3) PRIMARY KEY NOT NULL,
nama_jurusan VARCHAR(100) NOT NULL);

INSERT INTO jurusan(id_jurusan,nama_jurusan)
VALUES('J01','sistem informasi');

INSERT INTO jurusan(id_jurusan,nama_jurusan) 
VALUES('J02','teknik komputer');

INSERT INTO jurusan(id_jurusan,nama_jurusan) 
VALUES('J03','teknik informatika');



INSERT INTO mahasiswa(nim,nama,alamat,jurusan) 
VALUES('M01','fahmi','permatabiru','sistem informasi');
 
CREATE TABLE dosen ( 
    nip CHARACTER (3) PRIMARY KEY NOT NULL, 
    nama_dosen VARCHAR(100) NOT NULL);
    
  insert into dosen (nip,nama_dosen)
  VALUES ('D01','suryanto');
  insert into dosen (nip,nama_dosen)
  VALUES ('D02','tono');
  insert into dosen (nip,nama_dosen)
  VALUES ('D03','dadang');
  insert into dosen (nip,nama_dosen)
  VALUES ('D04','irfan');  

CREATE TABLE mata_kuliah ( 
    id_matakuliah CHARACTER (3) PRIMARY KEY NOT NULL, 
    nama_MK VARCHAR(100) NOT NULL, 
    sks CHARACTER (3) NOT NULL
);
insert into mata_kuliah(id_matakuliah,nama_MK,sks) values ('MK001','data mining',3);
 insert into mata_kuliah(id_matakuliah,nama_MK,sks) values ('MK002','PBD',3);
 insert into mata_kuliah(id_matakuliah,nama_MK,sks) values ('MK003','analisa perancangan bisnis',3);
 insert into mata_kuliah(id_matakuliah,nama_MK,sks) values ('MK004','algoritma & struktur data',2);
 insert into mata_kuliah(id_matakuliah,nama_MK,sks) values ('MK005','java & OOP',3);


CREATE TABLE mahasiswa(
nim CHARACTER (3) PRIMARY KEY NOT NULL, 
nama VARCHAR(100) NOT NULL, 
alamat TEXT (255) NOT NULL,
jurusan VARCHAR (100) NOT NULL,
umur INTEGER NOT NULL,
FOREIGN KEY (jurusan) references jurusan(id_jurusan)
);


CREATE TABLE krs (
    id_pengampu INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHARACTER(3) NOT NULL,
    nip CHARACTER(4) NOT NULL,
    id_matakuliah CHARACTER(3) NOT NULL,
    nilai CHARACTER (2) NOT NULL,
    sks CHARACTER (3) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);

ALTER TABLE takes RENAME TO krs;

INSERT INTO mahasiswa(nim,nama,alamat,jurusan,umur)
VALUES('m01','fahmi','bandung','J01','25');

INSERT INTO mahasiswa(nim,nama,alamat,jurusan,umur)
VALUES('m02','yudi','medan','J01','23');

INSERT INTO mahasiswa(nim,nama,alamat,jurusan,umur)
VALUES('m03','gema','bandung','J02','23');

INSERT INTO mahasiswa(nim,nama,alamat,jurusan,umur)
VALUES('m04','rifqi','bandung','J03','19');

-- 1. tampilkan seluruh data mahasiswa beserta nama jurusannya
SELECT 
   nim,
   nama,
   alamat,
   nama_jurusan
FROM
   mahasiswa , jurusan
WHERE
   mahasiswa.jurusan = jurusan.id_jurusan;
--2. Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun.
ALTER TABLE takes ADD COLUMN umur INTEGER;
SELECT 
nim,
nama,
alamat,
jurusan
FROM
mahasiswa
WHERE
umur < 20;
--3. Tampilkan mahasiswa yang memiliki nilai B ke atas.
ALTER TABLE mata_kuliah ADD COLUMN nilai;

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m01','D02','MK001','A',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m02','D02','MK001','B',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m03','D02','MK001','B',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m04','D02','MK001','C',3); 

SELECT 
   id_pengampu,
   nilai,
   nip,
   id_matakuliah,
   nim
FROM
   krs
WHERE
   nilai <= 'B';
--4 tampilkan mahasiswa yang memiliki jumlah sks lebih dari 10

SELECT mahasiswa.*,(mata_kuliah.sks) AS total_sks
FROM mahasiswa LEFT JOIN krs ON mahasiswa.nim = krs.nim
LEFT join mata_kuliah ON krs.id_matakuliah = mata_kuliah.id_matakuliah
GROUP BY mahasiswa.nim HAVING  sum(total_sks) > 10;

SELECT 
   id_pengampu,
   sks,
   nip,
   id_matakuliah,
   nim
FROM
   krs
WHERE
   sks > 10;

--5. tampilkan mahasiswa yang mengontrak mata kuliah 'data mining'
SELECT krs.id_pengampu, krs.nilai, mahasiswa.nama,mata_kuliah.nama_MK
FROM krs 
JOIN mahasiswa ON krs.nim = mahasiswa.nim
JOIN mata_kuliah ON krs.id_matakuliah = mata_kuliah.id_matakuliah
WHERE mata_kuliah.nama_MK = 'data mining';

--6. tampilkan jumlah mahasiswa setiap dosen
SELECT dosen.*, COUNT(DISTINCT(mahasiswa.nim))
AS jumlah_mhs
FROM dosen LEFT JOIN krs ON dosen.nip = krs.nip 
LEFT JOIN mahasiswa ON mahasiswa.nim = krs.nim
GROUP BY dosen.nip;

--7. urutkan mahasiswa berdasarkan umurnya
SELECT * FROM mahasiswa
ORDER BY umur asc;

--8. tampilkan kontrak matakuliah yang harus diulang (nilai D dan E),
--serta tampilkan data mahasiswa jurusan dan dosen secara lengkap. gunakan mode JOIN dan WHERE clause (solusi terdiri dari 2 syntax SQL).
SELECT  mahasiswa.nama, umur, alamat, nilai, nama_dosen, mata_kuliah.nama_MK, nama_jurusan
FROM mahasiswa 
JOIN jurusan ON mahasiswa.jurusan = jurusan.id_jurusan
JOIN krs ON mahasiswa.nim = krs.nim
JOIN mata_kuliah ON mata_kuliah.id_matakuliah = krs.id_matakuliah
JOIN dosen ON dosen.nip = krs.nip;

-- menampilkan nilai dibawah C
INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m01','D02','MK003','D',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m02','D02','MK003','E',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m03','D02','MK003','D',3);

INSERT INTO krs(nim,nip,id_matakuliah,nilai,sks)
VALUES  ('m04','D02','MK003','E',3);

SELECT  mahasiswa.nama, umur, alamat, nilai, nama_dosen, mata_kuliah.nama_MK, nama_jurusan
FROM mahasiswa 
JOIN jurusan ON mahasiswa.jurusan = jurusan.id_jurusan
JOIN krs ON mahasiswa.nim = krs.nim
JOIN mata_kuliah ON mata_kuliah.id_matakuliah = krs.id_matakuliah
JOIN dosen ON dosen.nip = krs.nip
WHERE krs.nilai > 'C';