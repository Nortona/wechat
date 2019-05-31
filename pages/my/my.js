

const app = getApp()


Page({
  data: {
    nickName: '',
    avatarUrl: '',
    showGetUser: 'swipershow',
    userInfo: {}, // 存放用户信息
    isHide: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },
  onLoad: function (options) {
    var that = this
    var tempUs = 'swipershow'
    if (app.globalData.userInfo != null) {
      tempUs = 'swiperhid'
    }
    //调用应用实例的方法获取全局数据  
    that.setData({
      showGetUser: tempUs
    });
    var that = this
    //调用应用实例的方法获取全局数据
    that.setData({
      userInfo: app.globalData.userInfo
    })
    // getuserMsg(that.data.userInfo)
    
  },
  //借来 
  myprelend: function(){
    var that = this
    wx.navigateTo({
      url: '../../pages/prelend/prelend'  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀'../test/test?id=1&page=4',
    })
  },
  mylend: function (e) {
    var that = this
    // console.log("拨打电话成功！")
    wx.navigateTo({
      url: '../../pages/mylend/mylend'  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀'../test/test?id=1&page=4',
    })
  },
  //设置用户信息
  settingInfo: function (e) {
    var that = this
    wx.navigateTo({
      url: '../../pages/upmyinfo/upmyinfo'
    })
  },
  //添加
  add: function (e) {
    var that = this
    wx.navigateTo({
      url: '../../pages/add_book/add_book'
    })
  },
  //发布 
  mybr: function (e) {
    var that = this
    wx.navigateTo({
      url: '../../pages/mybr/mybr'
    })
  },

})