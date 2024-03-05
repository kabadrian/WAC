import { newE2EPage } from '@stencil/core/testing';

describe('xkabac-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkabac-ambulance-wl-app></xkabac-ambulance-wl-app>');

    const element = await page.find('xkabac-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
