import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreSiteModule} from './core-site/core-site.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, CoreSiteModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
// TODO remove momentjs
