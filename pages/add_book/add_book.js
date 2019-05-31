// pages/add_book/add_book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  sao: function(){
    var user=wx.getStorageSync('user');
    wx.request({
      url: 'https://mysen.cn/wechat/findmyinfo.php',
      data: {
        openid: user.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
        if(res.data['0'].phone){
          wx.redirectTo({
            url: '../addbook/addbook',
          })
        }else{
          wx.showModal({
            content: '请先填写个人信息',
              showCancel: false,
              success: function (res) {
                  if (res.confirm){
                      console.log('用户点击确定')
                      wx.switchTab({
                        url: '../my/my',
                      })
                  }
                }
          })
        }
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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