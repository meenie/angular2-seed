import {Component} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {UsersService} from '../../services/users';

@Component({
  selector: 'app',
  providers: [UsersService],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {}
