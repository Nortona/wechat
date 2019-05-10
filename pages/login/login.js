var app = getApp()
var userInfo = null;
Page({
  globalData: {
    appid: 'wx20d7fb4be7368b83', //appid需自己提供
    secret: 'df73de826cb1945d210bc4b1716eb616', //secret需自己提供
  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var that = this;
    if (this.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      this.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          this.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          }),
          wx.switchTab({
            url: '../list/list'
          })
        }
      })
    }
    //登录凭证校验。通过 wx.login() 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。
    wx.login({
      
      success: function(res) {
        if (res.code) {
          console.log("res.code:" + res.code);
          var d = that.globalData; //这里存储了appid、secret、token串  
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            data: {},
            method: 'GET',
            success: function(res) {
              var obj = {};
              obj.openid = res.data.openid;
              console.log("openid:" + obj.openid);
              console.log("session_key:" + res.data.session_key);
              obj.expires_in = Date.now() + res.data.expires_in;
              wx.setStorageSync('user', obj); //存储openid 
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    this.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPostTap: function(event) {
    //授权登录之后实现页面之间的跳转
    wx.navigateTo({
      url: "../list/list"
    })
  }
})