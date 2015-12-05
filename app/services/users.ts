//a simple service
import {Injectable} from 'angular2/angular2';
import {BehaviorSubject, Subject} from '@reactivex/rxjs/dist/cjs/Rx';
import {Http} from 'angular2/http';

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const POPULATE_USERS = 'POPULATE_USERS';

const userReducer = (state, action) => {
  switch(action.type) {
    case ADD_USER:
      return state.concat([action.payload]);
    case DELETE_USER:
     return state.filter(user => user.id !== action.payload.id);
    case POPULATE_USERS:
     return action.payload;
    default:
     return state;
  }
};


@Injectable()
export class UsersService {
  users;
  loadUsers = new Subject();
  deleteUser = new Subject();
  addUser = new Subject();

  private _dispatcher: BehaviorSubject<any>;

  constructor(private http:Http) {

    //initial state
    this._dispatcher = new BehaviorSubject([]);

    //all state contained here!
    this.users = this._dispatcher.scan(userReducer).share();

    //actions
    this.loadUsers
      .switchMap(() => this.http.get('http://little-pond-7454.getsandbox.com/users'))
      .map(res => res.json())
      .map(payload => ({type: POPULATE_USERS, payload}))
      .subscribe(this._dispatcher);

    this.deleteUser
      .map(id => ({type: DELETE_USER, payload: {id}}))
      .subscribe(this._dispatcher);

    this.addUser
      .map(payload => ({type: ADD_USER, payload}))
      .subscribe(this._dispatcher);
  }
}
