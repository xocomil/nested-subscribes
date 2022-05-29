import { createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

const createComponent = createComponentFactory({ component: AppComponent });

describe('AppComponent', () => {
  it('should create the app', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });

  it(`should have as title 'nested-subscribes'`, () => {
    const spectator = createComponent();

    expect(spectator.component.title).toEqual('nested-subscribes');
  });
});
