import {bootstrap}    from 'angular2/platform/browser'
import {IndexComponent}   from './index.component';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy}       from 'angular2/router';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(IndexComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy})
]);
