const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const isItFriday = day => (day === 'Friday' ? 'TGIF' : 'Nope');

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

Given('today is Friday', function () {
  this.today = 'Friday';
});
