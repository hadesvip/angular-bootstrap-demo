##业务风控-六道
1.模块划分
- 用户管理
	* 用户登录，登出
	* 权限系统
	* 用户查询，添加
- 配置管理
- 黑白名单

2.数据库设计
- 权限表设计
  * 用户信息表
  * 角色表
  * 资源表

3.项目技术架构
* 前端
	- bootstrap3.2
	- angularjs1.5.6
* 服务端
	- 基准框架
	  * springMVC4+Mybatis3
	- 数据库
	  * Mysql 5.7
	  * Redis 3.2
	  * Mongodb 3.2
	- 权限接入
	  * Shiro控制权限
	- 日记接入
	  * Elasticsearch


## angular-bootstrap-demo
1. 环境搭建
  * 预先安装nodejs,grunt,bower,yoman
  * 前端使用angularjs+bootstrap
  * angularjs调试工具AngularJS Batarang
  * 前后端分离测试工具http-server npm install http-server

2. 注意点

  * bootstrap 中字体替换成FontAwesome,在bower.json文件中添加"font-awesome":"^3.2.1"，然后bower install