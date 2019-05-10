//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // function userLogin() {
    //   wx.checkSession({
    //     success: function () {
    //       wx.reLaunch({
    //         url: '../index/index'
    //       });
    //     },
    //     fail: function () {
    //       //不存在登陆态
    //       onLogin()
    //     }
    //   })
    // }
     
    // function onLogin() {
    //   wx.login({
    //     success: function (res) {
    //       if (res.code) {
    //         //发起网络请求
    //         wx.request({
    //           url: 'Our Server ApiUrl',
    //           data: {
    //             code: res.code
    //           },
    //           success: function (res) {
    //             const self = this
    //             if (逻辑成功) {
    //               //获取到用户凭证 存儲 3rd_session 
    //               var json = JSON.parse(res.data.Data)
    //               wx.setStorage({
    //                 key: "third_Session", 
    //                 data: json.third_Session
    //               })
    //               getUserInfo()
    //             }
    //             else {
     
    //             }
    //           },
    //           fail: function (res) {
     
    //           }
    //         })
    //       }
    //     },
    //     fail: function (res) {
      
    //     }
    //   })
     
    // }
     
    // function getUserInfo() {
    //   wx.getUserInfo({
    //     success: function (res) {
    //       var userInfo = res.userInfo
    //       userInfoSetInSQL(userInfo)
    //     },
    //     fail: function () {
    //       userAccess()
    //     }
    //   })
    // }
     
    // function userInfoSetInSQL(userInfo) {
    //   wx.getStorage({
    //     key: 'third_Session',
    //     success: function (res) {
    //       wx.request({
    //         url: 'http://39.1106.92.62/wechat/usersetinsql.php',
    //         data: {
    //           third_Session: res.data,
    //           nickName: userInfo.nickName,
    //           avatarUrl: userInfo.avatarUrl,
    //           gender: userInfo.gender,
    //           province: userInfo.province,
    //           city: userInfo.city,
    //           country: userInfo.country
    //         },
    //         success: function (res) {
    //           if (逻辑成功) {
    //             //SQL更新用户数据成功
    //           }
    //           else {
    //             //SQL更新用户数据失败
              },
  globalData: {
    // userInfo: null,
    // book: null
  }
})