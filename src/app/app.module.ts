import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminModule} from "./admin/admin.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}