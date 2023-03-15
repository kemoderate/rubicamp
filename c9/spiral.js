function spiral(size) {
  const matriks = [];
  let hitung = 0;

  for (let i = 0; i < size; i++) {
    matriks[i] = []
    for (let j = 0; j < size; j++) {
      matriks[i][j] = hitung
      hitung++
    }
  }

    let x = 0;
    let y = 0;
    let batasAtas = size;
    let batasBawah = 0;
    let result = [];

    while (result.length < size * size) {
      // ke kanan
      while (x < batasAtas) {
        result.push(matriks[y][x]);
        x++;
      }
      x--;
      y++;
      // ke bawah
      while (y < batasAtas) {
        result.push(matriks[y][x]);
        y++;
      }
      // ke kiri
      y--;
      x--;
      while (x >= batasBawah) {
        result.push(matriks[y][x]);
        x--;
      }
      // ke atas
      x++;
      y--;
      while (y > batasBawah) {
        result.push(matriks[y][x]);
        y--;
      }
      x++;
      y++;
      batasAtas--;
      batasBawah++;
    }

    console.log(result);
  }

  spiral(5);
  spiral(6);
  spiral(7);