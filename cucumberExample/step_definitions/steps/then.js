var checkClass = require ('../support/check/checkClass');
var checkContainsAnyText = require ('../support/check/checkContainsAnyText');
var checkIsEmpty = require ('../support/check/checkIsEmpty');
var checkContainsText = require ('../support/check/checkContainsText');
var checkCookieContent = require ('../support/check/checkCookieContent');
var checkCookieExists = require ('../support/check/checkCookieExists');
var checkDimension = require ('../support/check/checkDimension');
var checkEqualsText = require ('../support/check/checkEqualsText');
var checkFocus = require ('../support/check/checkFocus');
var checkInURLPath = require ('../support/check/checkInURLPath');
var checkIsOpenedInNewWindow = require ('../support/check/checkIsOpenedInNewWindow');
var checkModal = require ('../support/check/checkModal');
var checkModalText = require ('../support/check/checkModalText');
var checkNewWindow = require ('../support/check/checkNewWindow');
var checkOffset = require ('../support/check/checkOffset');
var checkProperty = require ('../support/check/checkProperty');
var checkSelected = require ('../support/check/checkSelected');
var checkTitle = require ('../support/check/checkTitle');
var checkURL = require ('../support/check/checkURL');
var checkURLPath = require ('../support/check/checkURLPath');
var checkWithinViewport = require ('../support/check/checkWithinViewport');
var compareText = require ('../support/check/compareText');
var isEnabled = require ('../support/check/isEnabled');
var isExisting = require ('../support/check/isExisting');
var isVisible = require ('../support/check/isVisible');
var waitFor = require ('../support/action/waitFor');
var waitForVisible = require ('../support/action/waitForVisible');
var checkIfElementExists = require ('../support/lib/checkIfElementExists');


module.exports = function then() {
    this.Then(
        /^I expect that the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
        checkIfElementExists
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* visible$/,
        isVisible
    );

    this.Then(
        /^I expect that element "([^"]*)?" becomes( not)* visible$/,
        waitForVisible
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
        checkWithinViewport
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* exist$/,
        isExisting
    );

    this.Then(
        /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
        compareText
    );

    this.Then(
        /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
        checkEqualsText
    );

    this.Then(
        /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        checkContainsText
    );

    this.Then(
        /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
        checkContainsAnyText
    );

    this.Then(
        /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
        checkIsEmpty
    );

    this.Then(
        /^I expect that the url is( not)* "([^"]*)?"$/,
        checkURL
    );

    this.Then(
        /^I expect that the path is( not)* "([^"]*)?"$/,
        checkURLPath
    );

    this.Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        checkInURLPath
    );

    this.Then(
        /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        checkProperty
    );

    this.Then(
        /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* selected$/,
        checkSelected
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
        checkCookieContent
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* exists$/,
        checkCookieExists
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    );

    this.Then(
        /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
        checkClass
    );

    this.Then(
        /^I expect a new (window|tab) has( not)* been opened$/,
        checkNewWindow
    );

    this.Then(
        /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
        checkIsOpenedInNewWindow
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* focused$/,
        checkFocus
    );

    this.Then(
        /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
        {
            wrapperOptions: {
                retry: 3,
            },
        },
        waitFor
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
        checkModalText
    );
};
