import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls:["./test.component.scss"]
})
export class TestComponent {

  public list = [
    {firstName:'Francis', lastName:'Kafka', roleNumber:1},
    {firstName:'George', lastName:'Orwell', roleNumber:2},
    {firstName:'Mary', lastName:'Shelly', roleNumber:3},
    {firstName:'Anne', lastName:'Frank', roleNumber:4},
  ]

  public selectedItem:string;
  public selectedItemNew:string;
  public selectedItems:any = []

}
