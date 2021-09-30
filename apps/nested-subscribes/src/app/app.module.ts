import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NestedSubscribeComponent } from './components/nested-subscribe/nested-subscribe.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SwitchMapObservablesComponent } from './components/switch-map-observables/switch-map-observables.component';
import { MaterialModule } from './material.module';
import { OneObservableComponent } from './components/one-observable/one-observable.component';
import { MergeMapSortedComponent } from './components/merge-map-sorted/merge-map-sorted.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    NestedSubscribeComponent,
    SwitchMapObservablesComponent,
    OneObservableComponent,
    MergeMapSortedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
