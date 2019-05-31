// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    isbn: ''
  },
  onLoad: function (options) {
    var that=this;
    var isbn=options.isbn;
    var user=wx.getStorageSync('user')
    this.setData({
      isbn: options.isbn
    })
    wx.request({
      url: 'https://mysen.cn/wechat/getbookdetail.php',
      data: {
        isbn: isbn
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        that.setData({
          book: res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  prelend: function(e){
    var valuem=e.target.dataset.value
    console.log(e.target.dataset.value)
    var user=wx.getStorageSync('user')
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
          wx.request({
            url: 'https://mysen.cn/wechat/prelend.php',
            data: {
              isbn: valuem,
              openid: user.openid
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              if(res.data=='1'){
                wx.showModal({
                  content: '您已成功预约该书',
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
        }else{
          wx.showModal({
            content: '请您先完善身份信息',
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
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})