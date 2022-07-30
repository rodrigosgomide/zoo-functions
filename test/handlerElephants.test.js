const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Testa se ao não passar nenhum parametro o retorno é undefined', () => {
        const expected = undefined;
        const result = handlerElephants()
        expect(result).toBe(expected)
    })

    const params = [
        { },
        [],
        true,
        null
    ] 

    it.each(params)('Testa se o tipo do parametro passado é uma string, e retorna "Parâmetro inválido, é necessário uma string", caso nao seja',(param) => {
        const expected = 'Parâmetro inválido, é necessário uma string'
        expect(handlerElephants(param)).toBe(expected)
    })

    
    it('Testa se ao passar os parametros "location", "popularity", "availability" retorna o valor da respectiva chave',() => {
        {
            const expected = 'NW';
            const result = handlerElephants('location');
            expect(result).toBe(expected)
        }
        {
            const expected = 5;
            const result = handlerElephants('popularity');
            expect(result).toBe(expected)
        }
        {
            const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
            const result = handlerElephants('availability');
            expect(result).toEqual(expected)
        }
    })

    it('Testa se ao passar os parametros "count", "names", "averageAge" retorna o valor devido',() => {
        {
            const expected = 4;
            const result = handlerElephants('count');
            expect(result).toBe(expected)
        }
        {
            const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson']
            const result = handlerElephants('names');
            expect(result).toEqual(expected)
        }
        {
            const expected = 10.5;
            const result = handlerElephants('averageAge');
            expect(result).toBe(expected)
        }
    })
});
