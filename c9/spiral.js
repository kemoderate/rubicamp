function spiral(size) {
  const matriks = []
  let hitung = 0

  for (let i = 0; i < size; i++) {
      matriks[i] = []
      for (let j = 0; j < size; j++) {
          matriks[i][j] = hitung
          hitung++
      }

  }
 
  let x = 0
  let y = 0
  let batasAtas = size
  let batasBawah = 0
  let result = []
  while (result.length < size * size) {


      // ke kanan
      for (; x < batasAtas; x++) {
          // console.log(y,x)
          result.push(matriks[y][x])
      }
      x--
      y++
      // ke bawah

      for (; y < batasAtas; y++) {
          // console.log(y,x)
          result.push(matriks[y][x])
      }
      // ke kiri
      y--
      x--
      for (; x >= batasBawah; x--) {
          // console.log(y,x)
          result.push(matriks[y][x])

      }
      // ke atas
      x++
      y--
      for (; y > batasBawah; y--) {
          // console.log(y,x)
          result.push(matriks[y][x])
      }
      x++
      y++
      batasAtas--
      batasBawah++

  }
  console.log(result)
}
spiral(5)
// spiral(6)
// spiral(7)