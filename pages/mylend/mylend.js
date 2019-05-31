// pages/mylend/mylend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mylendlist: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var user=wx.getStorageSync('user')
    wx.request({
      url: 'https://mysen.cn/wechat/mylendlist.php',
      data: {
        openid: user.openid
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: res=>{
        console.log(res);
        that.setData({
          mylendlist: res.data
        })
      },
    })
  },
  return: function(){
    wx.showModal({
      content: '请还书后联系书友扫码确认！',
      showCancel: false,
      success: function (res) {
          if (res.confirm){
              console.log('用户点击确定')
              wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1)
              })({
                url: '../my/my',
              })
          }
        }
    });
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