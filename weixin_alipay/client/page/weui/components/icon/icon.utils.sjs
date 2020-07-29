var double = function(a){
    return 2 * a;
};
var ifSpecialIcon = function(v){
    return v === 'arrow' || v === 'back';
};
export default {
    double:double,
    ifSpecialIcon:ifSpecialIcon
};
