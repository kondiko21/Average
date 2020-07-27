import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponentComponent } from './editor-component/editor-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { EditGradeComponentComponent } from './edit-grade-component/edit-grade-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponentComponent,
    ListComponentComponent,
    InfoComponentComponent,
    EditGradeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
