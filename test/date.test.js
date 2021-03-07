const date = require('../src/date');


// Date tests

test('gets current day', () => {
    // TODO implemente
    expect(date.getCurrentDay()).toBe(
        new Date().getDay()
    );
});

test('gets current month', () => {
    expect(date.getCurrentMonth()).toBe(
        new Date().getMonth());
});

test('gets current year', () => {
    expect(date.getCurrentYear()).toBe(
        new Date().getFullYear()
    );
});
