/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return  s.replace(/\s/g,"%")
};
console.log(replaceSpace("We are happy."))