/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-20 10:32:38
 * @version $Id$
 */
require.config({
	//define all js file path base on this base path
	//actually this can setting same to data-main attribute in script tag
	//定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
	baseUrl: "./scripts",

		//define each js frame path, not need to add .js suffix name
		//定义各个JS框架路径名,不用加后缀 .js
	paths: {
		"jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery", "lib/jquery/jquery-1.8.3.min.js"],
		"workjs01": "work/works01",
		"workjs02": "work/works2"
	},
	shim: {

	}
	
});