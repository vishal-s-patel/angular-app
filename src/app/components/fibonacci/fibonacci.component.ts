import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  limit = new FormControl('', Validators.required);
  fiboSeries: number[] = [];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.commonService.getFibonacciSeries(this.limit.value).subscribe({
      next: (response) => {
        this.fiboSeries = response.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
