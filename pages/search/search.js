
  Page({

    data:{  
      msgList:[], // 存储文章列表信息  
      searchLogList:[], // 存储搜索历史记录信息  
      hidden:true, // 加载提示框是否显示  
      scrollTop : 0, // 居顶部高度  
      inputShowed: false, // 搜索输入框是否显示  
      inputVal: "", // 搜索的内容  
      searchLogShowed: false // 是否显示搜索历史记录  
    },  
    onLoad: function(options){  
      // 页面初始化 options为页面跳转所带来的参数  
    //   var that = this;  
    //   wx.getSystemInfo({  
    //     success: function(res) {  
    //       that.setData( {  
    //         windowHeight: res.windowHeight,  
    //         windowWidth: res.windowWidth  
    //       })  
    //     }
    //   }
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