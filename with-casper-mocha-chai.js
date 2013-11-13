// run with `mocha-casperjs with-casper-mocha-chai.js`
describe("Searching Google for 'casperjs'", function() {
  before(function() {
    casper.start('http://www.google.com/')
  })

  it('should retrieve 10 or more results', function() {

    casper.then(function() {
      "Google".should.matchTitle
      "form[action=\"/search\"]".should.be.inDOM.and.be.visible
      this.fill( "form[action=\"/search\"]", { q: 'casperjs' }, true )
    })

    casper.waitForUrl(/q=casperjs/, function() {
      (/casperjs/).should.matchTitle
    })
  })
})
