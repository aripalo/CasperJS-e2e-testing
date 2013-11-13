// run with `mocha-casperjs with-casper-mocha-chai.js`
describe("Searching Google for 'casperjs'", function() {
  before(function() {
    casper.start('http://www.google.com/')
  })

  it('should retrieve 10 or more results', function() {

    var expectedHomePageTitle = "Google";
    var expectedSearchForm = "form[action=\"/search\"]";

    casper.then(function() {
      expectedHomePageTitle.should.matchTitle
      expectedSearchForm.should.be.inDOM.and.be.visible
      this.fill( expectedSearchForm, { q: 'casperjs' }, true )
    })

    casper.waitForUrl(/q=casperjs/, function() {
      (/casperjs/).should.matchTitle
    })
  })
})
