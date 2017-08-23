/**
 * Created by Yizixi on 2017/6/17.
**/

//@ 算术，算法
var arithmetic = {


}; //@ End of arithmetic

//@ 数字处理
var numberHandle = {
/****** 保留几位小数，截断，非四舍五入 **********
	num - [Number,String] - 源数字
	floatLen - [Nunber] - 小数点后保留几位
	unit - [String] - 单位
************************************************/
    formatNum:function (num, floatLen, unit) {
    var aNum = (num + '').split('.');
    var aStr = [], aNewStr = [];
    aStr = aNum[0].split('');

    var floatStr = '';
    if (floatLen) {
        if (aNum[1]) {
            aNum[1] += "000000001";
        } else {
            aNum[1] = "000000001";
        }
        floatStr = aNum[1] ? '.' + aNum[1].substr(0, floatLen) : '';
    }
    return aStr.join('') + floatStr + (unit ? unit : '');
	}



}; //@ End of numberHandle
