// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  },
  more: function(e){
     wx.navigateTo({
         url: '../detail/detail'
     })
  },
  onSearch: function(event){
    var value=event.detail
    console.log(value)
    wx.navigateTo({
      url: '../search/search?id='+value,
    })
  }
})