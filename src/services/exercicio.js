class ServicoExercicio {
    Somar(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 + num2
    
        return resultado;
    }

    Salario(vh, qh) {
        console.log('ENTROU NA FUNÇÃO')
        if(isNaN(vh) || IsNaN(qh)){
            throw new Error("Favor informar valores")
        }
        const resultado = vh * qh

        return resultado;
    }

    MediaPesos(peso1, peso2, peso3, peso4, peso5) {
        console.log('ENTROU NA FUNÇÃO')
        if(isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)){
            throw new Error("Favor informar valores válidos")
        }
        const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

        return resultado;
    }
} 

module.exports = ServicoExercicio