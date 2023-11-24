import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderspecific'
})
export class GenderspecificPipe implements PipeTransform {

  transform(name: string,gender: string): string {
    const specific = gender.toLowerCase() === 'male' ? 'Mr.' : 'Mrs.';
    return `${specific} ${name}`;
  }

}
