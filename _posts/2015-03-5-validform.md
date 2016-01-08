---
date: 2015-03-05
layout: post
comments: yes
code: yes
title: 表单验证插件Validform
categories: 笔记
tags: [html,css,js]
---

## 初始化参数

    var demo;
    $(".demo").Validform({
        btnSubmit:"#btn_sub", 
        btnReset:".btn_reset",
        tiptype:1, //1=> 自定义弹出框提示；2=> 侧边提示(会在当前元素的父级的next对象的子级查找显示提示信息的对象，表单以ajax提交时会弹出自定义提示框显示表单提交状态)；3=> 侧边提示(会在当前元素的siblings对象中查找显示提示信息的对象，表单以ajax提交时会弹出自定义提示框显示表单提交状态)；4=> 侧边提示(会在当前元素的父级的next对象下查找显示提示信息的对象，表单以ajax提交时不显示表单的提交状态)；
        ignoreHidden:false,
        dragonfly:false,
        tipSweep:true,
        label:".label",
        showAllError:false,
        postonce:true,
        ajaxPost:true,
        datatype:{
            "*6-20": /^[^\s]{6,20}$/,
            "z2-4" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
            "username":function(gets,obj,curform,regxp){
                //参数gets是获取到的表单元素值，obj为当前表单元素，curform为当前验证的表单，regxp为内置的一些正则表达式的引用;
                var reg1=/^[\w\.]{4,16}$/,
                    reg2=/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,8}$/;
     
                if(reg1.test(gets)){return true;}
                if(reg2.test(gets)){return true;}
                return false;
     
                //注意return可以返回true 或 false 或 字符串文字，true表示验证通过，返回字符串表示验证失败，字符串作为错误提示显示，返回false则用errmsg或默认的错误提示;
            },
            "phone":function(){
                // 5.0 版本之后，要实现二选一的验证效果，datatype 的名称 不 需要以 "option_" 开头;    
            },
            "paynum":function(gets,obj,curform,regxp){
                var pay_num = /^\d+(\.\d{1,2})?$/;
                if ((gets>0)&&(pay_num.test(gets))) {
                    return true;
                }
                    return false;
            }
        },
        usePlugin:{
            swfupload:{},
            datepicker:{},
            passwordstrength:{},
            jqtransform:{
                selector:"select,input"
            }
        },
        beforeCheck:function(curform){
            //在表单提交执行验证之前执行的函数，curform参数是当前表单对象。
            //这里明确return false的话将不会继续执行验证操作;    
        },
        beforeSubmit:function(curform){
            //在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
            //这里明确return false的话表单将不会提交;    
        },
        callback:function(data){
            //返回数据data是json对象，{"info":"demo info","status":"y"}
            //info: 输出提示信息;
            //status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
            //你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
            //ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；
     
            //这里执行回调操作;
            //注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
        }
    });
    demo.addRule([
        {
            ele: "select",
            datatype: "s",
            errormsg: "请选择！",
            nullmsg: "不能为空！"
        },
        {
            ele: ":checkbox:first",
            datatype: "*",
            errormsg: "请选择！",
            nullmsg: "不能为空！"
        }
    ]);

## 对富文本框的验证

    beforeCheck:function(curform){
        $("#id").html(textarea.html());
    }

然后

    demo.addRule([
        {
            ele:"#id",
            datatype:"*",
            nullmsg:"不能为空！"
        }
    ]);

以上只是作为一个简单记录，更多文档请查阅[http://validform.rjboy.cn/document.html](http://validform.rjboy.cn/document.html)