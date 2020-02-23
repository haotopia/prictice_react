# 社会实践查询系统
此处为前端部分


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# 社会实践平台

## 1. 可行性分析报告

### 1.1 项目简介

#### 1.1.1 项目目标

表1-1项目背景规划

| 项目名称                 | 项目委托单位 | 任务提出者       | 项目承担单位 |
| ------------------------ | ------------ | ---------------- | ------------ |
| 计算机系团委社会实践平台 | 计算机系团委 | 计算机团委管理员 | 信安1601小组 |

本系统针对计算机系团委针对全系社会实践的统计申报查询工作进行简化，简化新生信息导入优化实践信息导出。

#### 1.1.2 系统的简要描述，主要功能

该项目开发以协助计算机系团委进行日常的工作，主题分为个功能模块：

1、学生和团委管理员登录验证

2、实践小队主题申请录入

3、实践小队个人信息录入

5、实践小队主题申请修改

6、实践小队个人信息修改

7、实践内容的自动审核

8、实践内容信息查看。

  

### 1.2 对现有系统的分析  

#### 1.2.1 处理流程和数据流程(系统流程图)

图1-1项目系统流程图

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/01.png)

#### 1.2.2 对现有系统的其他说明

为了完成计算机系团委社会实践平台，我们组建了一个临时团队，如表2-2所示。

表1-2项目人员表

| 姓名   | 负责内容                                           |
| ------ | -------------------------------------------------- |
| 刘鑫   | 项目的界面、接口、服务器                           |
| 张明哲 | 项目可行性、软件需求规格说明、设计说明、数据库设计 |
| 王世润 | 项目测试设计、项目实际测试                         |
| 朱烜宏 | 收集各类资料                                       |

 

​    

### 1.3 技术可行性分析

​    前后端分离，以API服务器为主，为网页提供接口，采用主流的AuthO2方式认证。因为以API服务器为主进行开发提供了未来向PC程序，APP，小程序移植的可能性，前端开发使用React作为框架，可移植性很强，能兼顾本地开发。

### 1.4 经济可行性分析 

开发：工作人员薪金:0元（内部开发）；开发软件：0元（教育支持）；

部署：服务器：256元/年，域名：120元/年；

差旅，培训及其他费用：0元；

可行性较高。

### 1.5 社会因素可行性分析    

#### 1.5.1 法律因素

本项目程序遵循MIT开源协议

协议地址：https://github.com/haotopia/prictice_backend/blob/master/LICENSE

​        https://github.com/haotopia/prictice_react/blob/master/LICENSE

#### 1.5.2 用户使用可行性 

本项目系统经过严格的权限控制，对不同级别用户设定不同功能权限和数据查看权限，有极高的安全性。本项目系统操作简单，功能性强，用户可以很轻松的使用本项目软件，用户使用可行性强。

### 1.6 可供选择的方案 

1. 实践平台界面以网页形式供学生填写个人实践信息，并实践信息在平台上进行实践内容审核，之后生成实践鉴定单。将数据上传至服务器，以便学生查阅实践内容以及相关教师进行管理实践内容。

2. 实践平台以微信小程序形式和已有的有关学生信息管理系统进行关联，更加方便学生对自己的信息进行查阅，且方便相关教师进行管理。

3. 实践平台以手机app形式供学生填写个人实践信息，并实践信息在平台上进行实践内容审核，之后生成实践鉴定单。将数据上传至服务器，以便学生查阅实践内容以及相关教师进行管理实践内容。



 

### 1.7 需求概述

1）该项目开发以协助计算机系团委进行日常的工作，主题分为三个模块，1、社会实践查询，申报，2、团活动申报与反馈，3、团员信息录入；本次开发重点在第一模块），本程序将挂在在微信公众号是进行使用，面向全体计算机系学生（未来或将面向全校同学）。团委工作期间，我部思索社会实践的申报，审核，查询一直是一个比较复杂而且难以协调的工作,目前存在同学难以查询到自己社会实践分数，团委难以管理实践数据，毕业同学难以查询的问题。本软件独立开发，项目自含。本项目是团委工作平台下的第一部分，工作平台集中整合，几个部分各自独立，面向相同的用户群体。

2）运行环境：

服务器：单核CPU ，2GB内存，1Mbit/s弹性公网，CentOS7.5 64位操作系统，40GSSD    

客户机：所有可正常连接互联网，且浏览器内核高于IE6的设备。

### 1.8 功能需求

​    

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/02.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/03.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/04.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/05.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/06.png)

### 1.9 数据描述 

表2-1数据词典——实践申请表

| 文件名：实践申请表                                           |
| ------------------------------------------------------------ |
| 组成：{实践主题+{实践号}+实践单位名称+实践地点+实践单位联系人+联系方式+实践起止时间+等级} |
| 组织：按系、专业和班级编号从大到小排序                       |
| 备注：实践申请表由实践小队的队长填写                         |

表2-2数据词典——个人信息表

| 文件名：个人信息表                                           |
| ------------------------------------------------------------ |
| 组成：{名字+性别+政治面貌+院系+班级+邮箱+联系方式+{学号}+年级} |
| 组织：按系、专业和班级编号从大到小排序                       |
| 备注：个人信息表由实践小队的各个队员填写                     |

表2-3数据词典——实践鉴定表

| 文件名：实践鉴定表                                           |
| ------------------------------------------------------------ |
| 组成：{名字+性别+政治面貌+院系+班级+邮箱+联系方式+{学号}+年级+实践主题+{实践号}+实践单位名称+实践地点+实践单位联系人+联系方式+实践起止时间+等级} |
| 组织：按系、专业和班级编号从大到小排序                       |
| 备注：实践鉴定表由实践申请表和个人信息表结合，完善后生成     |

表2-4加工说明——审查有效性

| 加工名：审查有效性                                           |
| ------------------------------------------------------------ |
| 加工编码：3.2                                                |
| 简要描述：按实践申请主题号在实践鉴定表中检索实践鉴定单。有审查通知时按照表单验证进行审核（没有通知会自动审核），审核完毕后，学生和团委管理员可以查看实践鉴定单。 |
| 输入数据流：审核通知、实践鉴定表                             |
| 输出数据流：实践鉴定单                                       |

 

### 1.10 性能需求  

1) 数据精确度

​    表2-4数据精确度说明

| 数据名           | 数据最大长度 | 数据名   | 数据最大长度 |
| ---------------- | ------------ | -------- | ------------ |
| 主题名           | 80           | 联系方式 | 20           |
| 主题id           | 20           | 邮箱     | 80           |
| 实践单位联系人   | 20           | 姓名     | 20           |
| 实践地点         | 80           | 院系     | 20           |
| 实践单位联系方式 | 20           | 年级     | 20           |
| 实践起止时间     | 100          | 学号     | 12           |
| 等级             | 2            | 用户名   | 20           |
| 性别             | 20           | 密码     | 20           |
| 政治面貌         | 20           |          |              |

 

其中所有数据的长度都大于或等于1，学号的数据长度固定为12，密码的长度大于或等于6，等级值为小于5的正浮点数。

2) 时间特性    

当用户网络质量正常情况下保证2秒以内进行响应。

 

3) 适应性

1.预计用户数量为1440+-100浮动，用户信息每年增长量为320人左右（入学），社会实践每年两次增加单次增加量为暑假1080条+50~-200，寒假560+-100。

2.同时数据吞吐量峰值不超过100条/小时。

3.数据存储年份为30年（已毕业同学的一份来自系团委的回忆），约11040条用户信息，49200条实践信息。

### 1.11 运行需求  

1)   用户界面 

浏览器IE内核6以上，不向下兼容。

2)   硬件接口   

服务器：单核CPU ，2GB内存，1Mbit/s弹性公网，CentOS7.5 64位操作系统，40GSSD

3)   软件接口   

微信登陆接口

4)   故障处理   

硬件损坏造成损失由服务提供商赔偿。数据遗漏由团委同学人工进行记录。

### 1.12 其它需求  

 

## 2. 软件需求规格说明书

### 2.1 软件模块结构图

 ![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/07.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/08.png)

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/09.png)

### 2.2 文件结构和全局数据

ER图：

![img](https://github.com/haotopia/prictice_react/blob/master/%E8%BD%AF%E5%B7%A5/10.png)

 

全局数据：

（1）数据表：

​    ![img](file:///C:/Users/lflx1/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)

（2）数据表管理表：

![img](file:///C:/Users/lflx1/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

（3）实践数据表：

![img](file:///C:/Users/lflx1/AppData/Local/Temp/msohtmlclip1/01/clip_image028.jpg)

（4）用户表：

![img](file:///C:/Users/lflx1/AppData/Local/Temp/msohtmlclip1/01/clip_image030.jpg)

（5）数据说明表：

| 数据名           | 数据类型 | 数据最大长度 |
| ---------------- | -------- | ------------ |
| 主题名           | varchar  | 80           |
| 主题id           | int      | 20           |
| 实践单位联系人   | varchar  | 20           |
| 实践地点         | varchar  | 80           |
| 实践单位联系方式 | varchar  | 20           |
| 实践起止时间     | varchar  | 100          |
| 等级             | float    | 2            |
| 性别             | varchar  | 20           |
| 政治面貌         | varchar  | 20           |
| 联系方式         | varchar  | 20           |
| 邮箱             | varchar  | 80           |
| 姓名             | varchar  | 20           |
| 院系             | varchar  | 20           |
| 年级             | varchar  | 20           |
| 学号             | int      | 12           |
| 用户名           | varchar  | 20           |
| 密码             | varchar  | 20           |

 
