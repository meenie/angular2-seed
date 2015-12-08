import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {NameList} from '../../services/name_list';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class AboutCmp {
  constructor(public list: NameList) {
    list.loadUsers.next();
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(newname): boolean {
    this.list.addUser.next(newname.value);
    newname.value = '';
    return false;
  }
}
