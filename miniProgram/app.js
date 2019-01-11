//app.js

App({
    onLaunch: function () {
        console.log("App Launch");
    },
    onShow: function () {
        console.log("App Show");
        let url = '../roomlist/roomlist';
        wx.navigateTo({
            url
        });
    },
    onHide: function () {
        console.log("App Hide");
    },
})