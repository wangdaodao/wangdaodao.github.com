---
date: 2015-04-21
layout: post
comments: yes
code: yes
title: 前端构建工具gulp入门教程
categories: 笔记
tags: [front_end]
---

## 第1步：安装Node

首先，最基本也最重要的是，我们需要搭建node环境。访问[http://nodejs.org](http://nodejs.org)，然后点击大大的绿色的 `install` 按钮，下载完成后直接运行程序，就一切准备就绪。[npm](https://www.npmjs.com/)会随着安装包一起安装，稍后会用到它。

为了确保Node已经正确安装，我们执行几个简单的命令。

    node -v
    npm -v

如果这两行命令没有得到返回，可能node就没有安装正确，进行重装。

## 第2步：安装gulp

首先我们要全局安装一遍：

    npm install -g gulp

运行时注意查看命令行有没有错误信息，安装完成后，你可以使用下面的命令查看gulp的版本号以确保gulp已经被正确安装。

    gulp -v

接着我们要进去到项目的根目录再安装一遍

    npm install gulp --save-dev

## 第3步：新建gulpfile.js文件

我们将要使用Gulp插件来完成我们以下任务：

> 1. sass的编译（gulp-sass）
> 2. 自动添加css前缀（gulp-autoprefixer）
> 3. 压缩css（gulp-minify-css）
> 4. js代码校验（gulp-jshint）
> 5. 合并js文件（gulp-concat）
> 6. 压缩js代码（gulp-uglify）
> 7. 压缩图片（gulp-imagemin）
> 8. 自动刷新页面（gulp-livereload）
> 9. 图片缓存，只有图片替换了才压缩（gulp-cache）
> 10. 更改提醒（gulp-notify）

安装这些插件需要运行如下命令：

    npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev

更多插件可以看这里[http://gulpjs.com/plugins/](http://gulpjs.com/plugins/)

接着我们要创建一个gulpfile.js在根目录下，gulp只有四个[API](https://github.com/gulpjs/gulp/blob/master/docs/API.md)： `task`，`watch`，`src`，和 `dest`

> `task` 这个API用来创建任务，在命令行下可以输入 `gulp test` 来执行test的任务。
> `watch` 这个API用来监听任务。
> `src` 这个API设置需要处理的文件的路径，可以是多个文件以数组的形式[main.scss, vender.scss]，也可以是正则表达式/**/*.scss。
> `dest` 这个APIAPI设置生成文件的路径，一个任务可以有多个生成路径，一个可以输出未压缩的版本，另一个可以输出压缩后的版本。

### 3.1 加载插件：

    // Load plugins
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify'),
        cache = require('gulp-cache'),
        livereload = require('gulp-livereload');

### 3.2 建立任务：

#### 3.2.1 编译sass、自动添加css前缀和压缩

首先我们编译sass，添加前缀，保存到我们指定的目录下面，还没结束，我们还要压缩，给文件添加 `.min` 后缀再输出压缩文件到指定目录，最后提醒任务完成了：

    // Styles任务
    gulp.task('styles', function() {
        //编译sass
        return gulp.src('stylesheets/main.scss')
        .pipe(sass())
        //添加前缀
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        //保存未压缩文件到我们指定的目录下面
        .pipe(gulp.dest('stylesheets'))
        //给文件添加.min后缀
        .pipe(rename({ suffix: '.min' }))
        //压缩样式文件
        .pipe(minifycss())
        //输出压缩文件到指定目录
        .pipe(gulp.dest('assets'))
        //提醒任务完成
        .pipe(notify({ message: 'Styles task complete' }));
    });

#### 3.2.2 js代码校验、合并和压缩

    // Scripts任务
    gulp.task('scripts', function() {
        //js代码校验
        return gulp.src('javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //js代码合并
        .pipe(concat('all.js'))
        //给文件添加.min后缀
        .pipe(rename({ suffix: '.min' }))
        //压缩脚本文件
        .pipe(uglify())
        //输出压缩文件到指定目录
        .pipe(gulp.dest('assets'))
        //提醒任务完成
        .pipe(notify({ message: 'Scripts task complete' }));
    });

#### 3.2.3 图片压缩

    // Images
    gulp.task('images', function() {
      return gulp.src('images/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('images'))
        .pipe(notify({ message: 'Images task complete' }));
    });

#### 3.2.4 事件监听

    // Watch
    gulp.task('watch', function() {
      // Watch .scss files
      gulp.watch('stylesheets/*.scss', ['styles']);
      // Watch .js files
      gulp.watch('javascripts/*.js', ['scripts']);
      // Watch image files
      gulp.watch('images/*', ['images']);
      // Create LiveReload server
      livereload.listen();
      // Watch any files in assets/, reload on change
      gulp.watch(['assets/*']).on('change', livereload.changed);
    });

完整代码：

    /*!
     * gulp
     * $ npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
     */
    // Load plugins
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify'),
        cache = require('gulp-cache'),
        livereload = require('gulp-livereload');
    // Styles
    gulp.task('styles', function() {
        return gulp.src('stylesheets/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('stylesheets'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('assets'))
        .pipe(notify({ message: 'Styles task complete' }));
    });
    // Scripts
    gulp.task('scripts', function() {
      return gulp.src('javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('assets'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });
    // Images
    gulp.task('images', function() {
      return gulp.src('images/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('images'))
        .pipe(notify({ message: 'Images task complete' }));
    });
    // Default task
    gulp.task('default', function() {
        gulp.start('styles', 'scripts', 'images');
    });
    // Watch
    gulp.task('watch', function() {
      // Watch .scss files
      gulp.watch('stylesheets/*.scss', ['styles']);
      // Watch .js files
      gulp.watch('javascripts/*.js', ['scripts']);
      // Watch image files
      gulp.watch('images/*', ['images']);
      // Create LiveReload server
      livereload.listen();
      // Watch any files in assets/, reload on change
      gulp.watch(['assets/*']).on('change', livereload.changed);
    });

## 第4步：运行

可以运行单独的任务，例如

    gulp default
    gulp watch

也可以运行整个任务

    gulp

## 总结

> 1. 安装Node
> 2. 安装gulp
> 3. 新建gulpfile.js文件
> 4. 运行

最后是我自己设置的项目文件路径

    |--/assets/--------压缩后样式和脚本存放的目录
    |--/images/--------图片存放目录
    |--/javascripts/---脚本存放目录
    |--/stylesheets/---样式存放目录
    |--gulpfile.js

参考链接：[http://markgoodyear.com/2014/01/getting-started-with-gulp/](http://markgoodyear.com/2014/01/getting-started-with-gulp/)