import { newSpecPage } from '@stencil/core/testing';
import { XkabacAmbulanceWlApp } from '../xkabac-ambulance-wl-app';

describe('xkabac-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XkabacAmbulanceWlApp],
      html: `<xkabac-ambulance-wl-app base-path="/"></xkabac-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xkabac-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XkabacAmbulanceWlApp],
      html: `<xkabac-ambulance-wl-app base-path="/ambulance-wl/"></xkabac-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xkabac-ambulance-wl-list");
  });
});