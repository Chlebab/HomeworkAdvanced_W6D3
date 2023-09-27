class PangramFinder{
  constructor(phrase) {
    this.phrase = phrase
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  }

  isPangram(){
    
    const inputSentence = this.phrase.toLowerCase()
    const lowerCaseSentence = inputSentence.split('')
    
    const noSpaces = lowerCaseSentence.filter((letter) => letter != ' ')
    let uniques = new Set(noSpaces)
    const noSpacesFinal = Array.from(uniques)
    console.log(noSpacesFinal)

    let stripped = []
    noSpacesFinal.forEach((character) => 
    {
      if (this.alphabet.includes(character)){
        stripped.push(character)
      }
    })

    console.log(stripped)
    if (stripped.length == 26)
    {
      return true
    } else{
      return false
    }
  }
}

module.exports = PangramFinder;
