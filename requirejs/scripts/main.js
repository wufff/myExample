
//2，about load each js code basing on different dependency
require(["jquery","workjs01","workjs02"],function($,w1,w2){
 	 w1.loadTip("1模块jiaz")
 	 console.log(w2.moduleName);
});
