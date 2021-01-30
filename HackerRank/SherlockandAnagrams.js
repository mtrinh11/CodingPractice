function sherlockAndAnagrams(s) {

    // get all substrings 
    function getAllSubstrings(mainString){
        let substrings = []
        for (let outer = 0; outer < mainString.length; outer++){
            for (let inner = outer + 1; inner <= mainString.length; inner++){
                substrings.push(mainString.slice(outer, inner))
            }
        }
        return substrings
    }

    //make a thing to see if anagram
    function isAnagram(string1, string2){
        let stringToArray = string1.split('')
        let charHash = {}
        for (let char of stringToArray){
            if (charHash[char]){
                charHash[char]++
            } else {
                charHash[char] = 1
            }
        }
        stringToArray = string2.split('')
        for (let char of stringToArray){
            if (charHash[char]){
                charHash[char]--
            } else{
                return false   
            }
        }
        return true
    }
    
    //make counter
    function counter(str, substringBank){
        let counter = 0
        for (let s of substringBank){
            if (str.length === s.length && isAnagram(str, s)){
                counter ++
            }
        }
        return counter
    }
    
    let allSubstrings = getAllSubstrings(s)
    let ans = 0
    
    for (let i = 0; i < allSubstrings.length; i++){
        ans += counter(allSubstrings[i], allSubstrings.slice(i+1))
    }
    
    return ans
}