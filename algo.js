// 1528. Shuffle String



// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.







/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

    s.split(' ')
    let index = 0
    let string = ""

    while(string.length < s.length){

        for(let i = 0; i < s.length; i++){

            if(indices[i] == index){
                string += "" + s[i] + ""
                index++
            }else{
                continue
            }
        }
    }

    return string
};