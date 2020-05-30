import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database:SQLiteObject;
  constructor(private sqlitePorter:SQLitePorter,private http:HttpClient) { }
  fillDatabase(){
    this.http.get('assets/base.sql',{responseType:'text'})
    .subscribe((sql)=>{
      this.sqlitePorter.importSqlToDb(this.database,sql).then(()=>{
        //vo load le database
      }).catch(err=>{
        console.log('error');
      })
    })
  }
}
