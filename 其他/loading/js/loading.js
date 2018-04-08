/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-28 09:01:46
 * @version $Id$
 */

function  Loading(b,t) {
    	  if(b){
    	  	    var text =  $("#loadingPage").find(".loading-content");
    	  		if(t){
		          		text.html(t)
		               $("#loadingPage").show();
				         var left = text.width();
				         text.css("marginLeft",-text.width()/2);
    	  		}else {
    	  			    text.html("数据加载中，请稍候…")
		                $("#loadingPage").show();
				         var left = text.width();
				         text.css("marginLeft",-text.width()/2);
    	  		}
    	  }else {
    	  	 $("#loadingPage").hide();  
    	  }
}