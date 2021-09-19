import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MaterialModule } from './material.module';
import { NestedSubscribeComponent } from './components/nested-subscribe/nested-subscribe.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, NestedSubscribeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
