class UpperCaser{
    constructor(words){
        this.words = words
    }

    toUpperCase(){
        const newArray = this.words.map((element) => element.toUpperCase())
        console.log(newArray)
        return newArray
    }
}

module.exports = UpperCaser;
