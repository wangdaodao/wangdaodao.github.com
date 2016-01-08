---
date: 2016-01-04
layout: post
comments: yes
code: yes
title: JavaScript闭包
categories: 笔记
tags: [js]
---

## 什么是闭包？

闭包是什么?闭包是Closure，这是静态语言所不具有的一个新特性。但是闭包也不是什么复杂到不可理解的东西，简而言之，闭包就是：

> 闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。  
> 闭包就是就是函数的“堆栈”在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。  
> 当在一个函数内定义另外一个函数就会产生闭包

上面的第二定义是第一个补充说明，抽取第一个定义的主谓宾——**闭包是函数的‘局部变量’集合**。只是这个局部变量是可以在函数返回后被访问。（这个不是官方定义，但是这个定义应该更有利于你理解闭包）

做为局部变量都可以被函数内的代码访问，这个和静态语言是没有差别。闭包的差别在于局部变变量可以在函数执行结束后仍然被函数外的代码访问。这意味 着函数必须返回一个指向闭包的“引用”，或将这个”引用”赋值给某个外部变量，才能保证闭包中局部变量被外部代码访问。当然包含这个引用的实体应该是一个 对象，因为在Javascript中除了基本类型剩下的就都是对象了。可惜的是，ECMAScript并没有提供相关的成员和方法来访问闭包中的局部变 量。但是在ECMAScript中，函数对象中定义的内部函数(inner function)是可以直接访问外部函数的局部变量，通过这种机制，我们就可以以如下的方式完成对闭包的访问了。

    function greeting(name) {
        var text = 'Hello ' + name; // local variable
        // 每次调用时，产生闭包，并返回内部函数对象给调用者
        return function() { 
            alert(text); 
        };
    }
    var sayHello=greeting( "Closure" );
    sayHello()  // 通过闭包访问到了局部变量text

上述代码的执行结果是：Hello Closure，因为sayHello()函数在greeting函数执行完毕后，仍然可以访问到了定义在其之内的局部变量text。

好了，这个就是传说中闭包的效果，闭包在Javascript中有多种应用场景和模式，比如Singleton，Power Constructor等这些Javascript模式都离不开对闭包的使用。

## 闭包的样列

例子1:闭包中局部变量是引用而非拷贝

    function say667() {
        // Local variable that ends up within closure
        var num = 666;
        var sayAlert = function() { alert(num); }
        num++;
        return sayAlert;
    }
      
    var sayAlert = say667();
    sayAlert()

例子2：多个函数绑定同一个闭包，因为他们定义在同一个函数内。

    function setupSomeGlobals() {
        // Local variable that ends up within closure
        var num = 666;
        // Store some references to functions as global variables
        gAlertNumber = function() { alert(num); }
        gIncreaseNumber = function() { num++; }
        gSetNumber = function(x) { num = x; }
    }
    setupSomeGolbals(); // 为三个全局变量赋值
    gAlertNumber(); //666
    gIncreaseNumber();
    gAlertNumber(); // 667
    gSetNumber(12);//
    gAlertNumber();//12

例子3：当在一个循环中赋值函数时，这些函数将绑定同样的闭包

    function buildList(list) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            var item = 'item' + list[i];
            result.push( function() {alert(item + ' ' + list[i])} );
        }
        return result;
    }
      
    function testList() {
        var fnlist = buildList([1,2,3]);
        // using j only to help prevent confusion - could use i
        for (var j = 0; j < fnlist.length; j++) {
            fnlist[j]();
        }
    }

例子4：外部函数所有局部变量都在闭包内，即使这个变量声明在内部函数定义之后。

    function sayAlice() {
        var sayAlert = function() { alert(alice); }
        // Local variable that ends up within closure
        var alice = 'Hello Alice';
        return sayAlert;
    }
    var helloAlice=sayAlice();
    helloAlice();

例子5：每次函数调用的时候创建一个新的闭包

    function newClosure(someNum, someRef) {
        // Local variables that end up within closure
        var num = someNum;
        var anArray = [1,2,3];
        var ref = someRef;
        return function(x) {
            num += x;
            anArray.push(num);
            alert('num: ' + num +
            '\nanArray ' + anArray.toString() +
            '\nref.someVar ' + ref.someVar);
        }
    }
    closure1=newClosure(40,{someVar:'closure 1'});
    closure2=newClosure(1000,{someVar:'closure 2'});
      
    closure1(5); // num:45 anArray[1,2,3,45] ref:'someVar closure1'
    closure2(-10);// num:990 anArray[1,2,3,990] ref:'someVar closure2'

## 闭包的应用

Singleton 单件：

    var singleton = function () {
        var privateVariable;
        function privateFunction(x) {
            ...privateVariable...
        }
      
        return {
            firstMethod: function (a, b) {
                ...privateVariable...
            },
            secondMethod: function (c) {
                ...privateFunction()...
            }
        };
    }();