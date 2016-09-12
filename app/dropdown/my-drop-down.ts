import { Component,Input,Output,EventEmitter } from '@angular/core';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'my-drop-down-cmp',
	templateUrl: 'my-drop-down.html',
	styles: [`
		ul.pull-left {
		  left:0 !important;
		}

		.drop-down-container {
		  display: inline-block !important;
		}`
	],
	directives: [DROPDOWN_DIRECTIVES],
	exportAs: 'myDropDown'
})

export class MyDropDownComponent {
	// 默认选择第一个
	@Input('selectId') private selectId: boolean;
	// 父组件传递进来的参数
	@Input('list') private list:any;
	// 当改变了选择时给父组件发送事件
	@Output('selectChange') private selectChange = new EventEmitter();
	private text = '';
	private id:any;

	ngOnInit () {
		if (this.selectId) {
			for (let i=0;i<this.list.length;i++) {
				if (this.list[i].id === this.selectId) {
					this.text = this.list[i].text;
					this.id = this.list[0].id;
				}
			}
		}
	}

	public getId () {
		return this.id;
	}

	public changeSelect(id: any,text: any,i: any) {
		this.text = text;
		this.id = id;
		this.selectChange.emit({id:id,text:text,index:i})
	}

}
