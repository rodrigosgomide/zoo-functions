const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa o retorno quando não é passado nenhum parametro', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const result = getOpeningHours();
    expect(result).toEqual(expected);
  });

  it('Testa se ao passar um dia invalido retorna um erro', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Segunda')).toThrow(expected);
  });

  it('Testa se ao passar uma hora invalida retorna um erro', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Tuesday', '13:00-pm')).toThrow(expected);
  });

  it('Testa se ao passar um minuto invalido retorna um erro', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '12:60-pm')).toThrow(expected);
  });

  it('Testa se ao passar um horario em que o zoologico esteja fechado rentorna "The zoo is closed"', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '08:30-am')).toEqual(expected);
    expect(getOpeningHours('Thursday', '09:00-am')).toEqual(expected);
  });

  it('Testa se ao passar um horario em que o zoologico esteja aberto rentorna "The zoo is open"', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Wednesday', '08:30-am')).toEqual(expected);
    expect(getOpeningHours('Thursday', '11:00-am')).toEqual(expected);
  });

  it('Testa se ao passar uma string no lugar da hora retorna "The hour should represent a number"', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Tuesday', 'aa:00-pm')).toThrow(expected);
  });

  it('Testa se ao passar uma string no lugar do minuto retorna "The minutes should represent a number"', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Tuesday', '11:aa-pm')).toThrow(expected);
  });

  it('Testa se ao passar uma abreviation difertente de AM/PM "The minutes should represent a number"', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Tuesday', '10:00-xm')).toThrow(expected);
  });

  it('testa o retorno da função nos seguintes senário', () => {
    const expected = 'The zoo is closed';
    const result = getOpeningHours('Tuesday', '12:12-am');
    expect(result).toBe(expected);

    const expected2 = 'The zoo is open';
    const result2 = getOpeningHours('Tuesday', '12:12-pm');
    expect(result2).toBe(expected2);
  });
});
