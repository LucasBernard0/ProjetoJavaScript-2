const ServicoExercicio = require("../services/exercicio")

const servico = new ServicoExercicio()

class ControllerExercicio {
    Somar(req, res) {
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Salario(req, res) {
        try {
            const result = servico.Salario(req.body.vh, req.body.qh)
            res.status(200).json({
                message : `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não "})
        }
    }

    MediaPesos(req, res) {
        try {
            const result = servico.MediaPesos(req,body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }
}

module.exports = ControllerExercicio