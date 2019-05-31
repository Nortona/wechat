var app = getApp()
var userInfo = null;
Page({

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var that = this;
    wx.login({      
      success: function(res) {
        if (res.code) {
          console.log("res.code:" + res.code);
          wx.request({
            url: 'https://mysen.cn/wechat/getopenid.php',
            data: {
              code: res.code
            },
            method: 'GET',
            success: function(res) {
              console.log(res);
              wx.setStorageSync('user', res.data); //存储openid 
              wx.switchTab({
                url: '../list/list'
              })
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
})