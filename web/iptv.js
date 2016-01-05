try {
    Functions.processIPTV([
        {
            title: "浙江卫视",
            url: "http://ktv017.cdnak.ds.kylintv.net/nlds/kylin/zhejtvhd/as/live/zhejtvhd_4.m3u8",
            img: "iptv/ztv.jpg"
        },
        {
            title: "江苏卫视",
            url: "http://ktv015.cdnak.ds.kylintv.net/nlds/kylin/kylinlive/as/live/kylinlive_4.m3u8",
            img: "iptv/jstv.jpg"
        },
        {
            title: "湖南国际",
            url: "http://ktv045.cdnak.ds.kylintv.net/nlds/kylin/huntv/as/live/huntv_4.m3u8",
            img: "iptv/hntv.jpg"
        },
        {
            title: "凤凰中文台",
            url: "http://zv.3gv.ifeng.com/zhongwen800k.m3u8",
            img: "iptv/ifeng.jpg"
        },
        {
            title: "凤凰香港台",
            url: "http://zv.3gv.ifeng.com/hongkong800k.m3u8",
            img: "iptv/ifeng.jpg"
        },
        {
            title: "美国中文台",
            url: "http://ktv008.cdnak.ds.kylintv.net/nlds/kylin/snvn/as/live/snvn_4.m3u8",
            img: "iptv/none.png"
        }
    ]);
} catch (e) {
    console.log(e);
}
