import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  start?: Date;
  end?: Date;
  displayRange: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.start = this.range.get('start')?.value;
    this.end = this.range.get('end')?.value;
    if (this.start && this.end){
      this.displayRange = true;
    }
  }

}
