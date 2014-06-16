---
date: 2014-06-16
layout: post
comments: no
title: 在ubuntu下工作（01）
categories: 工作
tags: [ubuntu]
---

由于工作需要，所以由此蛋疼的在ubuntu下开始折腾……

总结了几个自己常用的命令，以后可以当做笔记

###文件/文件夹管理

    ls 列出当前目录文件（不包括隐含文件） 
    ls -a 列出当前目录文件（包括隐含文件） 
    ls -l 列出当前目录下文件的详细信息 
    cd .. 回当前目录的上一级目录 
    cd - 回上一次所在的目录 
    cd ~ 或 cd 回当前用户的宿主目录
    cp 将给出的文件或目录拷贝到另一文件或目录中 
    mkdir 目录名 创建一个目录 
    rmdir 空目录名 删除一个空目录 
    rm 文件名 文件名 删除一个文件或多个文件 
    rm -rf 非空目录名 删除一个非空目录下的一切 
    mv 路经/文件 /经/文件移动相对路经下的文件到绝对路经下 
    mv 文件名 新名称 在当前目录下改名 
    find 路经 -name “字符串” 查找路经所在范围内满足字符串匹配的文件和目录
    pwd 查看自己所在目录
    touch 改变文件时间戳,默认包括修改时间和创建时间,默认修改为当前时间,默认如果文件不存在就新建

###打包/解压

    tar -c 创建包 –x 释放包 -v 显示命令过程 –z 代表压缩包 
    tar –cvf benet.tar /home/benet 把/home/benet目录打包 
    tar –zcvf benet.tar.gz /mnt 把目录打包并压缩 
    tar –zxvf benet.tar.gz 压缩包的文件解压恢复 
    tar –jxvf benet.tar.bz2 解压缩

###apt命令

    apt-cache search package 搜索包 
    apt-cache show package 获取包的相关信息，如说明、大小、版本等 
    sudo apt-get install package 安装包 
    sudo apt-get install package - - reinstall 重新安装包 
    sudo apt-get -f install 修复安装”-f = –fix-missing” 
    sudo apt-get remove package 删除包 
    sudo apt-get remove package - - purge 删除包，包括删除配置文件等 
    sudo apt-get update 更新源 
    sudo apt-get upgrade 更新已安装的包 
    sudo apt-get dist-upgrade 升级系统 
    sudo apt-get dselect-upgrade 使用 dselect 升级 
    apt-cache depends package 了解使用依赖 
    apt-cache rdepends package 是查看该包被哪些包依赖 
    sudo apt-get build-dep package 安装相关的编译环境 
    apt-get source package 下载该包的源代码 
    sudo apt-get clean && sudo apt-get autoclean 清理无用的包 
    sudo apt-get check 检查是否有损坏的依赖 
    sudo apt-get clean 清理所有软件缓存（即缓存在/var/cache/apt/archives目录里的deb包）