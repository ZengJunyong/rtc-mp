Page({
    data: {
        roomName: '123',
        roomID: '123',
        loginType: 'anchor', // 主播：anchor；观众：audience
    },

    // 输入的房间 ID
    bindKeyInput: function (e) {
        this.setData({
            roomID: e.detail.value,
            roomName: e.detail.value,
        })
    },

    // 创建房间（即主播首次登录房间）
    onCreateRoom: function () {
        console.log('>>>[liveroom-roomList] onCreateRoom, roomID is: ' + this.data.roomID);

        if (this.data.roomID.length === 0) {
            wx.showToast({
                title: '创建失败，房间 ID 不可为空',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        if (this.data.roomID.match(/^[ ]+$/)) {
            wx.showToast({
                title: '创建失败，房间 ID 不可为空格',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        let url = '../room/room?roomId=' + this.data.roomID + '&roomName=' + this.data.roomID + '&loginType=' + this.data.loginType;
        wx.navigateTo({
            url
        });

    }
})