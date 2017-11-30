// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sqrt'
// })
// export class SqrtPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return value * value;
//   }

// }
import { Pipe,PipeTransform } from '@angular/core'

@Pipe({
  name: 'cube'
})

export class SqrtPipe implements PipeTransform {
  transform(value: any ): any {
    return value * value * value;
  } 
}