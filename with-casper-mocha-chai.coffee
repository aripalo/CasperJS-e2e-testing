# run with `mocha-casperjs with-casper-mocha-chai.coffee`
describe "Google searching", ->
  before ->
    casper.start "http://www.google.com/"

  it "should retrieve 10 or more results", ->
    casper.then ->
      "Google".should.matchTitle
      "form[action=\"/search\"]".should.be.inDOM.and.be.visible
      @fill( "form[action=\"/search\"]", { q: "casperjs" }, true )

    casper.waitForUrl /q=casperjs/, ->
      (/casperjs/).should.matchTitle


