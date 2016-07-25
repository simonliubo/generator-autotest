# 前端自动化测试
------

## 一、安装环境
1.安装nodejs：http://www.nodejs.org/

2.安装git：

3.安装nightwatch,git bash输入：npm install -g nightwatch

4.安装grunt：git bash输入：npm install -g grunt

  安装grunt命令行：git bash输入：npm install -g grunt-cli

5.git bash输入：npm install


## 二、执行用例

1.执行一个用例
nightwatch -e/env 环境名称 -t/-test 用例路径（eg: nightwatch -e win7-chrome-wanghui -t case/App_Message/send_message.js）

2.执行所有用例
nightwatch -e/env 环境名称 (eg: nightwatch -e win7-chrome-wanghui)

3.执行一组用例
nightwatch -e/env 环境名称 -g 组名 (eg: nightwatch -e win7-chrome-wanghui -g App_Message)

4.指定条件对测试进行过滤
nightwatch -e/env 环境名称 -f test*.js (eg: nightwatch -e win7-chrome-wanghui -f send*.js)

5.指定标签进行测试
nightwatch -e/env 环境名称 --tag 标签名 (eg: nightwatch -e win7-chrome-wanghui --tag Level1)


## 三、不同浏览器执行case/demo/example.js用例(环境命名规则：系统-浏览器-姓名)

1.nightwatch -e win7-chrome-wanghui -t case/demo/example.js

2.nightwatch -e win8-ie-wanghui -t case/demo/example.js

3.nightwatch -e xp-firefox-wanghui -t case/demo/example.js


## 四、查看测试报告
grunt read-report

## 五、远程服务器
#### hub服务器: 10.129.7.217
#### xp系统IP : 10.129.7.218
#### win7-ie8系统IP : 10.129.7.219
#### win7-ie9系统IP : 10.129.7.220
#### win7-ie10系统IP : 10.129.7.221
#### win8-ie11系统IP : 10.129.7.222

nightwatch.json配置

    "win7-chrome-wanghui" : {
        "launch_url" : "http://teacher.xx.com",  //测试网址
        "selenium_host" : "10.129.7.72",				 //hub服务器
        "selenium_port" : 4100,							 //端口
        "silent" : true,
        "disable_colors": false,
        "screenshots" : {
            "enabled" : false,
            "path" : "./screenshots"
        },
        "desiredCapabilities" : {
            "platform": "VISTA",
            "browserName" : "chrome",					 //指定浏览器
            "version": "11",                             //指定版本号
            "javascriptEnabled" : true,
            "acceptSslCerts" : true
        }
    }

global.json配置

    "win7-chrome-wanghui" : {
        "loginname": "xxx"			//系统登录用户名
        ,"password": "xxx"		            //系统登录密码
        ,"username": "xxx" 		            //用户名
        ,"email": "xxx@163.com"		        //用户邮箱
    }

## 六、端口分配
4000            liubo

C4系统
4100            wanghui

Tita
5000            sujie

招聘系统
6001            kangyanyan
6002            yicui

继任&绩效系统
7000            chenbinlan

工具类产品
8000            yiweiyi
