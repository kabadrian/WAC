import { newSpecPage } from '@stencil/core/testing';
import { XkabacAmbulanceWlList } from '../xkabac-ambulance-wl-list';

describe('xkabac-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkabacAmbulanceWlList],
      html: `<xkabac-ambulance-wl-list></xkabac-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xkabac-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkabac-ambulance-wl-list>
    `);
  });
});
