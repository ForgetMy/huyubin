let Mock = require("mockjs")
let data = [
        {title:"中国 npm 镜像源升级公告",name:"fengmk2",num:46498,reply:11},
        {title:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",name:"atian25",num:78656,reply:13},
        {title:"Node.js 2021年开发者报告解读：健康稳步的发展中",name:"i5ting",num:168871,reply:10},
        {title:"【2021/11/26】请大家遵纪守法，勿发布不合规内容",name:"thonatos",num:176927,reply:226},
        {title:"NestJs目前周下载量已经达到120万了 用nestjs开发的人多吗",name:"phonegap100",num:24050,reply:11},
        {title:"node+vue3+vite+ts开源免费的后台管理系统",name:"cool-team-official",num:46498,reply:8},
        {title:"请问大家用什么框架搭建静态服务器比较好啊？",name:"enzeberg",num:4649,reply:0},
        {title:"μWebSockets.js 介绍",name:"yviscool",num:64342,reply:7},
        {title:"冒个泡，过完年面试奇虎360、",name:"dyjiang",num:10654,reply:13},
        {title:"[noty.js] 沉迷造轮子，无法自拔！又写了一个通知组件~",name:"daGaiGuanYu",num:18684,reply:6},
    ]
//获取
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})

//删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    data.forEach(function(item,index){
        item.id = index
    })
    return data
})
