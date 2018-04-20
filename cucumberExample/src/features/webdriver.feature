Feature: Use browser inside steps

  As a developer
  I want to have webdriver available to me in my steps
  So that I don't have to configure my world object and I focus on testing

  @not-watch
  Scenario: Visit Google
    When  I open the url "http://www.google.com"
    Then I see the title of "Google"
    And I add "apples" to the inputfield "#lst-ib"
    And I click on the element "#sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input"
    And I clear the inputfield "#lst-ib"    

  @not-watch
  Scenario: Visit Prodigy
    When I open the url "http://www.prodigygame.com"
    Then I see the title of "Prodigy Math Game - Learn Math for Free. Forever."

  @watch
  Scenario: Log in
    When I open the url "http://www.prodigygame.org"
    And I click on the button "#login-link"
    And I add "patrick.priestley+parent3@prodigygame.com" to the inputfield "#login-username"
    And I add "prodigy1" to the inputfield "#login-password"
    And I click on the button "#login-form > div:nth-child(2) > button"
    Then I wait on element "#root > div > div.sc-kfGgVZ.VnQBK > div.sc-eTuwsz.gEYwkP > div.sc-CtfFt.dJlRQn > a > span" for 10000ms to exist
    #Then I expect the url to contain "/parent/my-children"

  @not-watch
  Scenario: Visit Github
    When  I open the url "http://www.github.com"
    Then  I see the title of "The world's leading software development platform · GitHub"
