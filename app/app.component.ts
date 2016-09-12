import {Component,ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {MyDropDownComponent} from './dropdown/my-drop-down';

@Component({
  selector: 'my-app',
  directives: [MyDropDownComponent],
  template: `
  <div id='container'>
    <my-drop-down-cmp [list]='list' [selectId]='list[0].id' (selectChange)='onChangeSelect($event)'></my-drop-down-cmp>
    <p style='background-color:red;' *ngIf='selectId === 1'>香蕉、西瓜</p>
    <p style='background-color:green;' *ngIf='selectId === 2'>猴子、老虎</p>
  </div>
  `,
  styles:[`
      #container {
        padding-top:100px;
        height:600px;
        width:400px;
        margin:0 auto;
      }
      p {
        margin-top:100px;
      }
    `]
})
export class AppComponent {
  list = [
    {id:1,text:'水果'},
    {id:2,text:'动物'}
  ]
  selectId = 1;
  onChangeSelect(e:any) {
    this.selectId = e.id;
  }
}
