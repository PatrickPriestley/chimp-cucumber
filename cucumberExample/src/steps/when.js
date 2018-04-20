var clearInputField = require ('../support/action/clearInputField');
var clickElement = require ('../support/action/clickElement');
var closeLastOpenedWindow = require ('../support/action/closeLastOpenedWindow');
var deleteCookie = require ('../support/action/deleteCookie');
var dragElement = require ('../support/action/dragElement');
var focusLastOpenedWindow = require ('../support/action/focusLastOpenedWindow');
var handleModal = require ('../support/action/handleModal');
var moveToElement = require ('../support/action/moveToElement');
var pause = require ('../support/action/pause');
var pressButton = require ('../support/action/pressButton');
var scroll = require ('../support/action/scroll');
var selectOption = require ('../support/action/selectOption');
var selectOptionByIndex = require ('../support/action/selectOptionByIndex');
var setCookie = require ('../support/action/setCookie');
var setInputField = require ('../support/action/setInputField');
var setPromptText = require ('../support/action/setPromptText');
var submitForm = require ('../support/action/submitForm');


  module.exports = function when() {
    this.When(
        /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
        clickElement
    );

    this.When(
        /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        setInputField
    );

    this.When(
        /^I clear the inputfield "([^"]*)?"$/,
        clearInputField
    );

    this.When(
        /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
        dragElement
    );

    this.When(
        /^I submit the form "([^"]*)?"$/,
        submitForm
    );

    this.When(
        /^I pause for (\d+)ms$/,
        pause
    );

    this.When(
        /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
        setCookie
    );

    this.When(
        /^I delete the cookie "([^"]*)?"$/,
        deleteCookie
    );

    this.When(
        /^I press "([^"]*)?"$/,
        pressButton
    );

    this.When(
        /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
        handleModal
    );

    this.When(
        /^I enter "([^"]*)?" into the prompt$/,
        setPromptText
    );

    this.When(
        /^I scroll to element "([^"]*)?"$/,
        scroll
    );

    this.When(
        /^I close the last opened (window|tab)$/,
        closeLastOpenedWindow
    );

    this.When(
        /^I focus the last opened (window|tab)$/,
        focusLastOpenedWindow
    );

    this.When(
        /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
        selectOptionByIndex
    );

    this.When(
        /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        selectOption
    );

    this.When(
        /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
        moveToElement
    );
};
