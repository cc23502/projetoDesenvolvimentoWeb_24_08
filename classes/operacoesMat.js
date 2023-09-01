class OperacoesMat{
    static divisao(a, b){
        return a / b;
    }

    static raizQuadrada(a){
        if(a >= 0){
            return Math.sqrt(a);
        }
    }

    static multiplicacao(a, b){
        return a * b;
    }
    
    static potencia(a, x){
        return a * Math.pow(x, 2);
    }

    static subtracao(a, b){
        return a - b;
    }

    static adicao(a, b){
        return a + b;
    }

    static umDivididoPorX(x){
        return 1 / x;
    }
}

module.exports = OperacoesMat;