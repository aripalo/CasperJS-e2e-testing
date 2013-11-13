# run with `mocha-casperjs with-casper-mocha-chai.coffee`
describe "Searching Google for 'casperjs'", ->
  before ->
    casper.start "http://www.google.com/"

  it "should retrieve 10 or more results", ->

    expectedHomePageTitle = "Google"
    expectedSearchForm = "form[action=\"/search\"]"

    casper.then ->
      expectedHomePageTitle.should.matchTitle
      expectedSearchForm.should.be.inDOM.and.be.visible
      @fill( expectedSearchForm, { q: "casperjs" }, true )

    casper.waitForUrl /q=casperjs/, ->
      (/casperjs/).should.matchTitle


