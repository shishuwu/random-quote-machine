// CONSTANT
export class Quote {
    constructor(author, text) {
        this.author = author;
        this.text = text;
    }

    toString() {
        return "\"" + this.text + "\" " + this.author + " \#quotes"
    }
}

export const quotes = [
    new Quote('Jason', "Hello world"),
    new Quote('Maggie', 'Hey there'),
    new Quote('Ben', 'Smile is the best cure ;-)')
]