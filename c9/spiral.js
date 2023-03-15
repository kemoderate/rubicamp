function spiralMatrix(n) {
  let result = []
  let hitung = 0;

  for (let i = 0; i < n; i++) {
    result[i] = [];
    // console.log(result)
    for (let j = 0; j < n; j++) {
      result[i][j] = hitung;
      hitung++
    }
    // return spiralMatrix(result);
  }
  // console.log(result)
  // console.log(result[0][4])
  // console.log(result[1][4])
  // console.log(result[2][4])
  // console.log(result[3][4])
  console.log(result[4][4])

   let x = 0;
   let y = 0;

// ke kanan 
  for (let i = x; x < n; x++){
    // console.log(y,x)
  }
  x--
  y++
  // ke bawah
  for(let i = y; y < n; y++){
    // console.log(y,x)
  }
  y--
  x--
  for(let i = y ;y > n; y--){
    console.log(y,x)
  }
  

      
      
    
    
  

}
spiralMatrix(5);

