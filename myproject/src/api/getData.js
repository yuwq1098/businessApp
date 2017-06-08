import axios from 'axios'

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//1.查询抢购线索列表接口
const getClueLists = function(data){

    const url = '/api/clue/clueLists';

    return axios.get(url).then((res) => {
        return setpromise(res.data)
    })
}
//2.查询我的线索列表接口

//3.查询地区列表接口

//4.查询品牌、系列列表接口

//5.查询类别列表接口

//6.微信支付商品列表

//7.生成微信jsApi预支付订单

//8.编辑我的线索

//9.购买线索

//10.获取跟进记录

//11.添加跟进记录

//12.发送手机验证码

//13.绑定已有账号

//14.注册第一步 验证手机号

//15.注册第二步 上传身份证

//16.注册第三步 等待审核

//17.上传图片

//18.用户充值记录列表

//19.用户可用金币余额

//20.联系人列表

//21.添加联系人

//22.编辑联系人



//获取B2B大厅车辆列表
const getB2BCarList = function(params) {
    
	const url = '/api/action2/B2BCarList.ashx';
	let data = {
        PageSize: 8,
        PageIndex: 1,
        CarInCity: false,
	}
    return axios.post(url,data).then((res) => {
        return setpromise(res.data)
    })
}

export{getClueLists,getB2BCarList}