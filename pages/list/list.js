// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    book: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://mysen.cn/wechat/getbooklist.php',
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
    var valuem=e.target.dataset.value
     wx.navigateTo({
        url: '../detail/detail?isbn=' + valuem,
     })
  },
  onPullDownRefreash:function(e){
    wx.request({
      url: 'https://mysen.cn/wechat/getbooklist.php',
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
      }
  })
  },


  search: function(event){
    var value=event.detail
    console.log(value)
    wx.showModal({
      content: '正在快马加鞭完善中',
      showCancel: false,
      success: function (res) {
          if (res.confirm){
              console.log('用户点击确定')
              wx.switchTab({
                url: '../list/list',
              })
          }
        }
    })
  },
    // wx.request({
    //   url: 'https://mysen.cn/wechat/search.php',
    //   data: {
    //     value: value
    //   },
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function(res){
    //     // success
    //     console.log(res.data)
    //     if(res.data){
    //       wx.navigateTo({
    //       url: '../search/search?value' + value,
    //     })
    //     }else{
    //       wx.showModal({
    //         content: '该书暂未收录',
    //         showCancel: false,
    //         success: function (res) {
    //             if (res.confirm){
    //                 console.log('用户点击确定')
    //                 wx.switchTab({
    //                   url: '../list/list',
    //                 })
    //             }
    //           }
    //       });
    //     }
    //   },
  showInput: function () {
    this.setData({
        inputShowed: true
    });
},
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  }
})