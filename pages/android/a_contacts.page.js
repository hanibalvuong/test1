const I = actor();

module.exports = {
  selectTeamTab() {
    I.waitForElement('~chat.team');
    I.tap('~chat.team');
  },

  enterContactToSearch(name) {
    I.waitForElement('~contact_search', 15);
    I.fillField('~contact_search', name);
  },

  selectThe1stResult(name) {
    I.waitForElement('~' + name + ' ' + name, 20);
    I.tap('~' + name + ' ' + name);
  },
};
