import { isNull } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employee:any,searchKey:any){
    if(!searchKey || searchKey === ""|| !employee) {
      return employee;
    } else {
      searchKey = searchKey.toLowerCase();
      const filtered_employee=[];
      console.log(employee);
      for(let emp of employee){
          if(
            emp['empName'].toLowerCase().match(searchKey) ||
            emp['empId'].toString().toLowerCase() === searchKey ||
            emp['empRole'].toLowerCase().match(searchKey)
           ){
            filtered_employee.push(emp);
          }
      }
      return filtered_employee;
    }
  }

}
