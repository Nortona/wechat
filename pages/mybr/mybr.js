// pages/mybr/mybr.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mybrbooks: {}
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
      url: 'https://mysen.cn/wechat/mybr.php',
      data: {
        openid: user.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data);
        that.setData({
          mybrbooks: res.data
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
  return: function(e){
    var isbn=e.target.dataset.value
    console.log(e.target.dataset.value)
    var user=wx.getStorageSync('user')
    wx.scanCode({        //扫描API
      success: function(res){
        console.log(res);    //输出回调信息
        if(isbn==res.result){
          wx.request({
            url: 'https://mysen.cn/wechat/returnbook.php',
            data: {
              isbn: res.result,
              openid: user.openid
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
              'content-type': 'application/json'
            }, // 设置请求的 header
            success: function(res){
              console.log(res.data)
              if(res.data=='1'){
                wx.showModal({
                  content: '确定已归还',
                  showCancel: false,
                  success: function (res) {
                      if (res.confirm){
                          console.log('用户点击确定')
                          wx.switchTab({
                            url: '../my/my',
                          })
                      }
                    }
                });
            }
              else{
                wx.showModal({
                  content: '归还失败',
                  showCancel: false,
                  success: function (res) {
                      if (res.confirm){
                          console.log('用户点击确定')
                          wx.switchTab({
                            url: '../my/my',
                          })
                      }
                    }
                });
                wx.switchTab({
                  url: '../my/my',
                })
              }
            },
            fail: function() {
  
            },
            complete: function() {
              // complete
            }
          })
        }

      }
    })
  },
  remove: function(e){
    var isbn=e.target.dataset.value
    var user=wx.getStorageSync('user')
    wx.request({
      url: 'https://mysen.cn/wechat/remove.php',
      data: {
        isbn: isbn,
        openid: user.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        if(res.data=='1'){
          wx.showModal({
            content: '下架成功',
            showCancel: false,
            success: function (res) {
                if (res.confirm){
                    console.log('用户点击确定')
                    wx.switchTab({
                      url: '../my/my',
                    })
                }
              }
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  delete: function(e){
    var isbn=e.target.dataset.value
    wx.request({
      url: 'https://mysen.cn/wechat/delete.php',
      data: {
        isbn: isbn
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        if(res.data=='1'){
          wx.showModal({
            content: '删除成功',
            showCancel: false,
            success: function (res) {
                if (res.confirm){
                    console.log('用户点击确定')
                    wx.switchTab({
                      url: '../my/my',
                    })
                }
              }
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  readd: function(e){
    var isbn=e.target.dataset.value
    wx.request({
      url: 'https://mysen.cn/wechat/readd.php',
      data: {
        isbn: isbn
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        if(res.data=='1'){
          wx.showModal({
            content: '上线成功',
            showCancel: false,
            success: function (res) {
                if (res.confirm){
                    console.log('用户点击确定')
                    wx.switchTab({
                      url: '../my/my',
                    })
                }
              }
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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