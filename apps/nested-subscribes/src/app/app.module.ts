import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NestedSubscribeComponent } from './components/nested-subscribe/nested-subscribe.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MaterialModule } from './material.module';
import { MergedObservablesComponent } from './components/merged-observables/merged-observables.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, NestedSubscribeComponent, MergedObservablesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
