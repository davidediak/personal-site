import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from './route-animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [slider],
})
export class AppComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet?.activatedRouteData?.animation;
    }
}
