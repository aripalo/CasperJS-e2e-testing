# CasperJS testing

Examples where we load Google and do a search, then we test if we are on a right results page and did we get enough results.

## Prequisites

Requires [PhantomJS](http://phantomjs.org/) to be installed. You can check it by typing `phantomjs -v` in your terminal.

## Installation

Run `npm install` on this project's root folder

## Usage

You have 2 different ways of testing:
- [Pure CasperJS way](http://docs.casperjs.org/en/latest/testing.html) by running `casperjs test with-pure-casper.coffee`
- CasperJS with [Mocha](http://visionmedia.github.io/mocha/) & [Chai](http://chaijs.com/) via [CasperJS Mocha plugin](https://github.com/nathanboktae/mocha-casperjs) by running `mocha-casperjs with-casper-mocha-chai.coffee`

Also for the sake of example, both CoffeeScript and vanilla JavaScript versions are provided.
