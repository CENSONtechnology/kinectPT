import { KinectPTPage } from './app.po';

describe('kinect-pt App', function() {
  let page: KinectPTPage;

  beforeEach(() => {
    page = new KinectPTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
