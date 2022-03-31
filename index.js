function wordRank(str) {
    
        //array de letras em ordem alfabética
        const alphabet = [
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z'
        ]     
        //cria array de palavras incluindo apenas letras   
        const words = str.split(/\W+/)    
            
        /* mapeia as palavras do array, passa as letras para minúsculo, separa as letras das palavras,
        indexa as letras do alfabeto e realiza a soma das letras de cada palavra retornando um array com os valores*/
        const getWords = words.map(word => {
            
            return word.toLowerCase().split('').reduce((previousValue, currentValue)=>{
                const numberIndex = alphabet.indexOf(currentValue)+1
                return previousValue + numberIndex
            },0)
        })

        //função para encontrar o maior valor do array
        const maxSum = Math.max(...getWords)

        //utiliza o indice do maior valor do array para buscar a palavra correspondente
        const findWord = words[getWords.indexOf(maxSum)]    

        return findWord
}	