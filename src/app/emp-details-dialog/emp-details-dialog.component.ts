// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-emp-details-dialog',
//   templateUrl: './emp-details-dialog.component.html',
//   styleUrls: ['./emp-details-dialog.component.css']
// })
// export class EmpDetailsDialogComponent {

// }

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-emp-details-dialog',
  templateUrl: './emp-details-dialog.component.html',
  styleUrls: ['./emp-details-dialog.component.css']
})
export class EmpDetailsDialogComponent implements OnInit {



 
  employee: Employee = { name: '', email: '' };

  constructor(
    public dialogRef: MatDialogRef<EmpDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {}

  ngOnInit() {
    if (this.data) {
      this.employee = { ...this.data };
    }
  }
}
