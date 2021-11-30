import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class DisplayBooleanPipe implements PipeTransform {

  transform(aBoolean: boolean, lang: string = "en"): string {
    if(lang === "en"){
    return aBoolean ? "YES" : "NO";
    } else {
      return "IDK"
    }
  }

}
