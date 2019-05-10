// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    book: {}
  },
  onLoad: function () {
    var that=this;
    wx.request({
      url: 'http://39.106.92.62/wechat/getbooklist.php',
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: res=>{
        console.log(res);
        wx.setStorage({
          key: 'book',
          data: res.data
        }),
        that.setData({
          book: res.data
        })
      },
    })
    // var that = this
    // var bookdetail = wx.getStorageSync('book')
    // if (bookdetail) {
    //   that.setData({
    //     book: bookdetail
    //   })
    // } else {
    //   console.log('获取新闻内容失败');
    // }
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['original', 'compressed'],
    //   sourceType: ['album', 'camera'],
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     const tempFilePaths = res.tempFilePaths
    //   }
    // })
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