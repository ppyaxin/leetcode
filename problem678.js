/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left=0
    let star=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            left++
        }else if(s[i]=='*'){
            star++
            //console.log("star"+star)
        }else if(s[i]==')'){
            if(left>0){
                left--
            }else if(star>0){
                star--
            }else{
                return false
            }
        }
    }
    let right=0
    let star1=0
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==')'){
            right++
           // console.log("right:"+right)
        }else if(s[i]=='*'){
            star1++
           // console.log("star1"+star1)
        }else if(s[i]=='('){
            if(right>0){
                right--
            }else if(star1>0){
                star1--
            }else{
                return false
            }
        }
    }
    if(left<=star&&right<=star1){
        return true
    }
    return false
};

console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))