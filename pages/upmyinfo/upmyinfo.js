// pages/upmyinfo/upmyinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var user=wx.getStorageSync('user') 
    //console.log(app.globalData.openid);
    console.log(user.openid);
    wx.request({
      url: 'https://mysen.cn/wechat/findmyinfo.php',
      data: {
        openid: user.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data);
        that.setData({
          userdata: res.data
        })
        wx.setStorageSync('userdata', res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  change: function(){
    wx.navigateTo({
      url: '../myinfo/myinfo',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})