var join = function(a,b){
    return a + b;
};
var isNotSlot = function(v){
    return typeof v !== 'string';
};
export default {
    join:join,
    isNotSlot:isNotSlot
};
