import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './type';
@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(contacts: Partial<Contact>[], search: string): Partial<Contact>[] {
    return contacts?.filter(contact => contact.firstName.toLowerCase().startsWith(search.toLowerCase()));
  }

}
