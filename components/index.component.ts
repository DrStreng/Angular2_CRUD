import {Component} from 'angular2/core'
import {LekComponent} from './lek/lek.component'
import {aaaComponent} from './aaa/aaa.component'
import {TypeComponent} from './type/type.component'
import {RouteConfig, ROUTER_DIRECTIVES}     from 'angular2/router'

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: aaaComponent,
    useAsDefault: true
  },
  {
    path: '/AddLek',
    name: 'AddLek',
    component: LekComponent,
  },
  {
    path: '/AddType',
    name: 'AddType',
    component: TypeComponent,
  }
])

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
  directives: [LekComponent, ROUTER_DIRECTIVES]
})

export class IndexComponent {

}
