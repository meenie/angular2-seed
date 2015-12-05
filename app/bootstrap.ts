import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppCmp} from './components/app/app';

bootstrap(AppCmp, [
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE + APP_DEST %>' } ),
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
