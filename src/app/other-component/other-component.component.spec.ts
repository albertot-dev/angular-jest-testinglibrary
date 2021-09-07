import { render, screen } from '@testing-library/angular';
import { OtherComponentComponent } from './other-component.component';
describe('OtherComponentComponent', () => {
  it('should create', async () => {
    await render(OtherComponentComponent);
    expect(screen.getByText('other-component works!'));
  });
});
