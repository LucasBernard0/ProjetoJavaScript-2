const { describe, expect, it } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicio")

describe('Testes do primeiro exercício', () => {
   
   const servico = new ServicoExercicio()

   it('Should sum two numbers', () => {
      const result = servico.Salario(40, 9)
      
      expect(result).toBe(360);
   })

   it('Should error', () => {
      const result = () => servico.Salario(100, "c")
      console.log('AQUIIIII')
      
      expect(result).toThrowError("Favor informar números");
   })

})