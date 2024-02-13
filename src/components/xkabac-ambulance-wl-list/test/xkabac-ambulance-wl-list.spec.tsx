import { newSpecPage } from '@stencil/core/testing';
import { XkabacAmbulanceWlList } from '../xkabac-ambulance-wl-list';

describe('xkabac-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkabacAmbulanceWlList],
      html: `<xkabac-ambulance-wl-list></xkabac-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XkabacAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
    
  });
});
