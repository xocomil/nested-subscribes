import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { MergeMapSortedComponent } from './components/merge-map-sorted/merge-map-sorted.component';
import { NestedSubscribeComponent } from './components/nested-subscribe/nested-subscribe.component';
import { OneObservableComponent } from './components/one-observable/one-observable.component';
import { SwitchMapObservablesComponent } from './components/switch-map-observables/switch-map-observables.component';

const createComponent = createComponentFactory({
  component: AppComponent,
  declarations: [
    MockComponent(NestedSubscribeComponent),
    MockComponent(SwitchMapObservablesComponent),
    MockComponent(OneObservableComponent),
    MockComponent(MergeMapSortedComponent),
  ],
});

describe('AppComponent', () => {
  it('should create the app', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
    expect(spectator.fixture).toMatchSnapshot();
  });

  it(`should have as title 'nested-subscribes'`, () => {
    const spectator = createComponent();

    expect(spectator.component.title).toEqual('nested-subscribes');
  });
});
