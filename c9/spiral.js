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
    }
    console.log(result)
    //  console.log(hitung)

     console.log(result[3][0])

     let x = result[0]
     let y = result[4]
    
  


     
    
  }
  spiralMatrix(5);
  
  