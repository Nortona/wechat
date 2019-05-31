Page({
  data:{
    qRCodeMsg:'',
    bookdetail: {}
  },
  onLoad: function(){
    var _this = this;
    var user=wx.getStorageSync('user')
    wx.scanCode({        //扫描API
      success: function(res){
        console.log(res);    //输出回调信息
        _this.setData({
          qRCodeMsg: res.result
        });
        wx.request({
          url: 'https://mysen.cn/wechat/findbook.php',
          data: {
            id: res.result,
            openid: user.openid
            //openid: res.data['openid']
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          success: function(res){
            console.log(res.data)
            _this.setData({
              mybr: res.data
            })
            if(res.data=='0'){
              wx.showModal({
                content: '您已成功添加该书',
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
          }else{
            wx.showModal({
              content: '添加失败',
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
            });
          }
        },
          fail: function() {

          },
          complete: function() {
            // complete
          }
        })
      }
    })
  },
})