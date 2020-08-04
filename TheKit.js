const thekit = {};
thekit.firstUpper = function(str){
  return str.substr(0,1).toUpperCase()+str.substr(1);
}
thekit.trim = function (str) {
    return str.replace(/^\s+|\s+$/gm,'');
};
thekit.color = function(string) {
  var str = string;
  if (!str) {
    return null;
  }
  switch (str) {
    case "transparent":
      return "#00000000";
    case "black":
      return "#000000FF";
    default:
      break;
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length == 7) {
      str += "FF";
    }
    return str;
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
  var array = str.split(",");
  if (array.length == 3) {
    array.push(1);
  }
  var color = thekit.color.rgba2str(array[0], array[1], array[2], array[3] * 255+"");
  return color;
};
thekit.rgba2str = function(r, g, b, a) {
  function componentToHex(c) {
    c = thekit.trim(c);
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)+ componentToHex(a);
};
thekit.str2array = function(str) {
  return [parseInt(str.substr(1, 2), 16),
  parseInt(str.substr(3, 2), 16),
  parseInt(str.substr(5, 2), 16),
  parseInt(str.substr(7, 2), 16)];
};
thekit.array2str = function(array) {
  function f(v){
    var s =  v.toString(16);
    if(s.length==1){s="0"+s;}
    return s;
  }
  var str= "#"+f(array[0])+f(array[1])+f(array[2])+f(array[3]);
  return str;
};
module.exports = thekit;