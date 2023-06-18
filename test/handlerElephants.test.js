const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('returns undefined if parameter is passed', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('returns message if parameter is not string', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('returns information about elephants', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('return all elephants names', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('return the count of elephants', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('return the average age of elephants', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('returns null when the parameter is not an information described', () => {
    expect(handlerElephants('weight')).toBe(null);
  });
});
