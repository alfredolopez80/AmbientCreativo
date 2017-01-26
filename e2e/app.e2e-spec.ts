import { AmbientesCreativosPage } from './app.po';

describe('ambientes-creativos App', function() {
  let page: AmbientesCreativosPage;

  beforeEach(() => {
    page = new AmbientesCreativosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('acca works!');
  });
});
