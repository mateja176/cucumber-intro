const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// eslint-disable-next-line
const isItFriday = day => 'Nope';

Given('today is Sunday', () => ({
  today: 'Sunday',
}));

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
