# 介绍

用于日常开发Web时的构建环境,主要用到了Gulp来编译Sass并进行图片和JavaScript,css的压缩合并。启动了一个本地server用来开发时自动监听代码改动并刷新。


# 使用

将项目下载下来,运行下面命令:

- Install Package

```
$npm install 
```

- Run Project

```
$gulp
```

- Build Project

```
$gulp build
```

# 文件结构

- src : 对应开发实际代码
- dist: gulp执行sass，js合并之后的代码
- node_modules: node packages安装路径
- gulpfile.js : 配置gulp的地方

# 其他

- src/sass/sprites.scss和src/config.rb 是用来合成精灵图的示例文件和配置文件,需要安装 `compass`

```
$ gem install compass
```


# TODO

- 使用 jsHint, SCSS-Lint, JSCS进行代码规范检查
- 整合compass到gulp
- codeReview