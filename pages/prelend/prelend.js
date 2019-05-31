// pages/prelend/prelend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myprelend: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var user=wx.getStorageSync('user')
    wx.request({
      url: 'https://mysen.cn/wechat/myprelend.php',
      data: {
        openid: user.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        that.setData({
          myprelend: res.data
        })
      },
      fail: function() {
        // fail
      },
    })
  },
  getinfo: function(e){
    var isbn=e.target.dataset.value
    wx.request({
      url: 'https://mysen.cn/wechat/getowerinfo.php',
      data: {
        isbn: isbn
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data['0'])
        var user_name=res.data['0'].user_name;
        var qq=res.data['0'].qq;
        var phone=res.data['0'].phone;
        var addr=res.data['0'].addr;
        wx.navigateTo({
          url: '../owerinfo/owerinfo?user_name=' +user_name + '&qq=' + qq+'&phone=' + phone +'&addr=' +addr,
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
  cancel: function(e){
    var isbn=e.target.dataset.value
    wx.showModal({
      title: '提示',
      content: '是否取消预约',
      success(res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击确定');
          wx.request({
            url: 'https://mysen.cn/wechat/cancel.php',
            data: {
              isbn: isbn
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              console.log(res)
              if(res.data=='1'){
                wx.showModal({
                  content: '您已成功取消预约',
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
                console.log('0')
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
        else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  sao: function(e){
    var isbn=e.target.dataset.value
    console.log(e.target.dataset.value)
    var user=wx.getStorageSync('user')
    wx.scanCode({        //扫描API
      success: function(res){
        console.log(res);    //输出回调信息
        if(isbn==res.result){
          wx.request({
            url: 'https://mysen.cn/wechat/lendbook.php',
            data: {
              isbn: res.result,
              openid: user.openid
              //openid: res.data['openid']
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
              'content-type': 'application/json'
            }, // 设置请求的 header
            success: function(res){
              console.log(res.data)
              if(res.data=='1'){
                wx.showModal({
                  content: '您已成功借到该书',
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
                  content: '借书失败',
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
  }

})