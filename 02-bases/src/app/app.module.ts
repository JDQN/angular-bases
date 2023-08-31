import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Módulos
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

//Componentes
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
