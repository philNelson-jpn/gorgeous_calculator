export default class Calculator {
    constructor(primaryOperandDisplay, secondaryOperandDisplay, operationDisplay){
        this.primaryOperandDisplay = primaryOperandDisplay
        this.secondaryOperandDisplay = secondaryOperandDisplay
        this.operationDisplay = operationDisplay

        this.clear()
    }

    get primaryOperand(){
        return parseFloat(this.primaryOperandDisplay.dataset.value)
    }

    set primaryOperand(value){
        this.primaryOperandDisplay.dataset.value = value ?? ""
        this.primaryOperandDisplay.textContent = displayNumber(value)
    }

    set secondaryOperand(value){
        this.secondaryOperandDisplay.dataset.value = value ?? ""
        this.secondaryOperandDisplay.textContent = displayNumber(value)
    }
    
    set operation(value){
        this.operationDisplay.textContent = value ?? ""
    }


    addDigit(digit){
        if(this.primaryOperand === 0){
            this.primaryOperand = digit
            return
        }
        this.primaryOperand = this.primaryOperand.toString() + digit
    }

    clear(){
        this.primaryOperand = 0
        this.secondaryOperand = null
        this.operation = null
    }

}

const NUMBER_FORMATTER =  new Intl.NumberFormat("en", {
    maximumFractionDigits: 20
})

function displayNumber(number){
    return NUMBER_FORMATTER.format(number)
}