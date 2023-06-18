const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('returns entire schedule when no parameter is passed', () => {
    expect(getOpeningHours()).toStrictEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });

  it('informs the zoo is closed on Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toStrictEqual('The zoo is closed');
  });

  it('informs the zoo is open on Friday 9am', () => {
    expect(getOpeningHours('Friday', '03:00-PM')).toStrictEqual('The zoo is open');
  });

  it('informs the zoo is closed on Friday 9pm', () => {
    expect(getOpeningHours('Friday', '09:00-PM')).toStrictEqual('The zoo is closed');
  });

  it('throws an error when hour is invalid', () => {
    expect((() => getOpeningHours('Monday', '22:00-AM'))).toThrow('The hour must be between 0 and 12');
  });

  it('throws an error when minutes are invalid', () => {
    expect((() => getOpeningHours('Monday', '02:70-AM'))).toThrow('The minutes must be between 0 and 59');
  });

  it('throws an error when hour is not a number', () => {
    expect((() => getOpeningHours('Monday', 'duas:70-AM'))).toThrow('The hour should represent a number');
  });

  it('throws an error when abbreviation is invalid', () => {
    expect((() => getOpeningHours('Monday', '02:00-sm'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('throws an error when weekday is invalid', () => {
    expect((() => getOpeningHours('Invalid', '02:00-AM'))).toThrow('The day must be valid. Example: Monday');
  });
});
