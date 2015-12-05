import {Component} from 'angular2/angular2';

import {UsersService} from '../../services/users';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html'
})
export class AboutCmp {
  constructor(public users: UsersService) {
  }

 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(newname): boolean {
    this.users.addUser.next(newname.value);
    newname.value = '';
    return false;
  }
}
