var checkContainsAnyText = require ('../support/check/checkContainsAnyText');
var checkIsEmpty = require ('../support/check/checkIsEmpty');
var checkContainsText = require ('../support/check/checkContainsText');
var checkCookieContent = require ('../support/check/checkCookieContent');
var checkCookieExists = require ('../support/check/checkCookieExists');
var checkDimension = require ('../support/check/checkDimension');
var checkElementExists = require ('../support/check/checkElementExists');
var checkEqualsText = require ('../support/check/checkEqualsText');
var checkModal = require ('../support/check/checkModal');
var checkOffset = require ('../support/check/checkOffset');
var checkProperty = require ('../support/check/checkProperty');
var checkSelected = require ('../support/check/checkSelected');
var checkTitle = require ('../support/check/checkTitle');
var checkUrl = require ('../support/check/checkURL');
var closeAllButFirstTab = require ('../support/action/closeAllButFirstTab');
var compareText = require ('../support/check/compareText');
var isEnabled = require ('../support/check/isEnabled');
var isVisible = require ('../support/check/isVisible');
var openWebsite = require ('../support/action/openWebsite');
var resizeScreenSize = require ('../support/action/resizeScreenSize');


module.exports = function given() {
    this.Given(
        /^I open the (url|site|page) "([^"]*)?"$/,
        openWebsite
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* visible$/,
        isVisible
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* selected$/,
        checkSelected
    );

    this.Given(
        /^the checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    );

    this.Given(
        /^there is (an|no) element "([^"]*)?" on the page$/,
        checkElementExists
    );

    this.Given(
        /^the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.Given(
        /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
        compareText
    );

    this.Given(
        /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
        checkEqualsText
    );

    this.Given(
        /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        checkContainsText
    );

    this.Given(
        /^the (button|element) "([^"]*)?"( not)* contains any text$/,
        checkContainsAnyText
    );

    this.Given(
        /^the (button|element) "([^"]*)?" is( not)* empty$/,
        checkIsEmpty
    );

    this.Given(
        /^the page url is( not)* "([^"]*)?"$/,
        checkUrl
    );

    this.Given(
        /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        checkProperty
    );

    this.Given(
        /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
        checkCookieContent
    );

    this.Given(
        /^the cookie "([^"]*)?" does( not)* exist$/,
        checkCookieExists
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    );

    this.Given(
        /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
        resizeScreenSize
    );

    this.Given(
        /^I have closed all but the first (window|tab)$/,
        closeAllButFirstTab
    );

    this.Given(
        /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );
};
