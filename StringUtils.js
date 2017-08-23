/**
 * Created by Yizixi on 2017/7/25.
 */

var String = {

/****** 限制一个输入框最大字符数（中英文） **********
	element - [element,'this'] - 页面元素Input
	limit - [Nunber] - 限制最大输入多少位
	return:字符范围内的值
****************************************************/
	limitLength:function (element,limit) {
	    var str = element.value;
	    var len = 0, i = 0;
	    while (len < limit && i < str.length) {
	        len += 1;
	        if (str.substring(i, i + 1).match(/[\u4e00-\u9fa5]/)) len += 1; //一个中文是相当于2个英文
	        i += 1;
	    }
	    return str.substring(0, i);
	},


/****** 判断一个包含中英文字符串的长度 **********
	str - [String] - 原字符串
	return:字符串长度
*************************************************/
	getStrLength_EnCn:function(str) {
	    var cArr = str.match(/[^\x00-\xff]/ig);
	    return str.length + (cArr == null ? 0 : cArr.length);
	}

};//@ End of String

