<!--
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:29
 * @LastEditTime: 2021-04-05 19:52:24
 * @FilePath: /viewBooks/src/assets/DevelopmentSpecification.md
 * @Description: 前端开发规范
-->
# 前端开发规范

## 项目规范
## 网上总结，持续更新ing
```
1、使用git管理
2、文件夹使用大写驼峰，文件名使用小写驼峰
3、API放在统一的文件夹
4、fix需要本地拉一个分支，然后push
5、版本号，小修改第三位加1，新增功能第二位加1，大更新第一位加1（0.001.0001）
6、vue-cli+vue-router+vuex+axios+elementUI
```

## 代码规范
```
1、缩进使用4个空格
2、方法前必须加注释
3、操作方法约定：add***,del***,search***,edit***，增删查改，jumpTo***,跳页面
4、单个文件500行，大于需要切换为组件或者函数（不要影响其他业务逻辑）***
5、当行200行换行，编辑器设置
6、不能有行内样式
7、常量，使用大写字母和下划线组合
8、PascalCase (单词首字母大写命名)是最通用的声明约定，kebab-case (短横线分隔命名) 是最通用的使用约定
9、method 方法命名命名规范
    驼峰式命名，统一使用动词或者动词+名词形式-jumpToPage
    请求数据方法，以 data 结尾-postListData
    函数方法常用的动词:
    get 获取/set 设置,
    add 增加/remove 删除
    create 创建/destory 移除
    start 启动/stop 停止
    open 打开/close 关闭,
    read 读取/write 写入
    load 载入/save 保存,
    create 创建/destroy 销毁
    begin 开始/end 结束,
    backup 备份/restore 恢复
    import 导入/export 导出,
    split 分割/merge 合并
    inject 注入/extract 提取,
    attach 附着/detach 脱离
    bind 绑定/separate 分离,
    view 查看/browse 浏览
    edit 编辑/modify 修改,
    select 选取/mark 标记
    copy 复制/paste 粘贴,
    undo 撤销/redo 重做
    insert 插入/delete 移除,
    add 加入/append 添加
    clean 清理/clear 清除,
    index 索引/sort 排序
    find 查找/search 搜索,
    increase 增加/decrease 减少
    play 播放/pause 暂停,
    launch 启动/run 运行
    compile 编译/execute 执行,
    debug 调试/trace 跟踪
    observe 观察/listen 监听,
    build 构建/publish 发布
    input 输入/output 输出,
    encode 编码/decode 解码
    encrypt 加密/decrypt 解密,
    compress 压缩/decompress 解压缩
    pack 打包/unpack 解包,
    parse 解析/emit 生成
    connect 连接/disconnect 断开,
    send 发送/receive 接收
    download 下载/upload 上传,
    refresh 刷新/synchronize 同步
    update 更新/revert 复原,
    lock 锁定/unlock 解锁
    check out 签出/check in 签入,
    submit 提交/commit 交付
    push 推/pull 拉,
    expand 展开/collapse 折叠
    begin 起始/end 结束,
    start 开始/finish 完成
    enter 进入/exit 退出,
    abort 放弃/quit 离开
    obsolete 废弃/depreciate 废旧,
    collect 收集/aggregate 聚集
10、vue 文件基本结构
    
11、多个特性的元素应该分多行撰写，每个特性一行
12、元素特性的顺序，原生属性放前面，指令放后面
    - class
    - id,ref
    - name
    - data-*
    - src, for, type, href,value,max-length,max,min,pattern
    - title, alt，placeholder
    - aria-*, role
    - required,readonly,disabled
    - is
    - v-for
    - key
    - v-if
    - v-else-if
    - v-else
    - v-show
    - v-cloak
    - v-pre
    - v-once
    - v-model
    - v-bind,:
    - v-on,@
    - v-html
    - v-text
13、组件选项顺序
    - components
    - props
    - data
    - computed
    - created
    - mounted
    - metods
    - filter
    - watch
```


## 注释规范 *****
```
    代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明
    1、单行注释
    // 检索
    const id = 1;
    2、多行注释
    编辑器，插件可配置
    组件使用说明，和调用说明
      /**
      * 组件名称
      * @module 组件存放位置
      * @desc 组件描述
      * @author 组件作者
      * @date 2017年12月05日17:22:43
      * @param {Object} [title]    - 参数说明
      * @param {String} [columns] - 参数说明
      * @example 调用示例
      *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
      **/
    3、源码风格
        1、使用 ES6 风格编码
            定义变量使用 let ,定义常量使用 const
            静态字符串一律使用单引号或反引号，动态字符串使用反引号
            箭头函数，需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this
            v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
            避免 v-if 和 v-for 同时用在一个元素上（性能问题）
            将数据替换为一个计算属性，让其返回过滤后的列表
            调试信息 console.log() debugger 使用完及时删除
            除了三目运算，if 对应的 else 等禁止简写
```

## Vuex *****
```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```