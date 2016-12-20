"use strict";
function scope(){

};
scope.prototype.$watch = function(obj,func){
   func(obj);
}
var opp = new scope();
opp.a = 4;
opp.$watch(opp.a,function(old,ne){
  console.log(old);
});
