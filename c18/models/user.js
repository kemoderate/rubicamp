import { db } from "./connect.js"

export default class User {
   static username(next){
        db.all('SELECT * FROM users WHERE username = ?', [answer], (err, rows) => {
            if (err) throw err 
            console.log(
                "username tidak ditemukan"
            );
            next(rows)
    })
}
}