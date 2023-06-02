// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
export interface Employee {
  id?: string;
  name: string;
  email: string;
}
@Injectable({
     providedIn: 'root'
   })
export class EmployeeService {
  private employeeCollection: AngularFirestoreCollection<Employee>;
  private employees$: Observable<Employee[]>;

  constructor(private afs: AngularFirestore) {
    this.employeeCollection = this.afs.collection<Employee>('employee');
    this.employees$ = this.employeeCollection.valueChanges({ idField: 'id' });
  }

  getEmployees(): Observable<Employee[]> {
    return this.employees$;
  }

  addEmployee(employee: Employee): Observable<any> {
    return new Observable((observer) => {
      this.employeeCollection
        .add(employee)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  updateEmployee(employee: Employee): Observable<any> {
    return new Observable((observer) => {
      this.employeeCollection
        .doc(employee.id)
        .update(employee)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return new Observable((observer) => {
      this.employeeCollection
        .doc(employeeId)
        .delete()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
