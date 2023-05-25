import { db } from "./connect.js"

export default class User {
   static username(answer,next){
        db.all('SELECT * FROM users WHERE username = ?', [answer], (err, rows) => {
            if (err) throw err;
            next(rows) 
    });
}
}