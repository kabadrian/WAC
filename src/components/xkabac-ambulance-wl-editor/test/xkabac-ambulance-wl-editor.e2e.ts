import { newE2EPage } from '@stencil/core/testing';

describe('xkabac-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkabac-ambulance-wl-editor></xkabac-ambulance-wl-editor>');

    const element = await page.find('xkabac-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
