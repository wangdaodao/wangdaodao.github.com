//批量读取豆瓣的图书和电影
//by justin 20120316
//http://fejustin.com
//--dbapi.begin--
var $ = jQuery;
var dbapi = {
    appendScript:function(url){
        if ((url)&&(url.length > 0))
            $("<script/>").attr("src",url).attr("charset","utf-8").appendTo($("head")[0]);
    },
    /**
     * 解析json数据为数组
     */
    parseJSON:function(json){
        var items=[];
            $.each(json.entry,function(i,item){
                var link = {};
                link.title = item["db:subject"]["title"]["$t"];             
                link.link = item["db:subject"]["link"][1]["@href"];//硬编码
                link.src = item["db:subject"]["link"][2]["@href"];//硬编码
                items.push(link);
            });         
        return items;
    },
    render:function(items){
        var html='';        
        $.each(items,function(i,item){
            html+='<a href="'
                +item.link+'" ><img src="'
                +item.src+'" alt="'+item.title
                +'" title="'+item.title+'" /></a>';
        });
        return html;
    },
    /**
     * todo: bookurl 和 movieurl 可以合并简化
     */
    bookurl:function(stus,begin,end){
        return this.allurl("book",stus,begin,end);
    },
    // movieurl:function(stus,begin,end){
    //     return this.allurl("movie",stus,begin,end);
    // },
    allurl:function  (typ,stus,begin,end) {
        if (end ===0) return;
        if(!dbapi[typ + stus +"_SHOW"]){
            dbapi[typ + stus +"_SHOW"] = function (json) {
                var mainplace = $("#"+this.opts.place);
                if (mainplace.length ===0){
                    mainplace = $("<div/>").attr("id",this.opts.place).prependTo($("body"));
                }
                if ($("#"+typ+stus).length === 0){
                    var title = this.defaults[typ+stus+"title"]?this.defaults[typ+stus+"title"]:
                                 ">>>"+typ.toUpperCase() +"-"+stus.toUpperCase()+">>>";
                    $("<h3/>").addClass("douban-title").text(title).appendTo(mainplace);
                    $("<div/>").attr("id",typ+stus).addClass("douban-list").appendTo(mainplace);                    
                }                   
                $("#"+typ+stus).append(this.render(this.parseJSON(json)));              
            }
        }
        return this.apiurl(typ,this.opts.user,this.opts.api,stus,begin,end);
    },
    apiurl:function(typ,user,key,stus,begin,end){
        var url = "http://api.douban.com/people/"+user+"/collection?cat="+typ+"&start-index="+
            begin+"&max-results="+end+"&status="+stus+"&alt=xd&callback=dbapi."+typ+stus+"_SHOW";
        if (key.length > 0)
            url += "&apikey="+key;
        return url;
    },
    /**
     * 将num按50分段生成数组集合
     * @param  {[type]} num 显示项目的个数
     * @return {[type]} 按50分段的数组
     */ 
    fixNum:function(num){
        var len = num;      
        var index = 1;
        var fixnums=[];
        if (50>len> 0){
            fixnums.push({begin:index,end:len})
        }else{
            while (len > 0) {
                fixnums.push({begin:index,end:index+49})
                len -= 50;
                index +=50;
            };  
        }
        return fixnums;
    },
    /**
     * 根据配置项显示豆瓣的图书和电影
     * @param  {[Object]} options [可选配置项]
     */
    show:function(options){
        this.opts = $.extend({}, this.defaults, options);
        var books = [];
        // var movies = [];
        $.each(this.opts.book,function (i,item) {
            books.push({stus:item.stus,indexs:dbapi.fixNum(item.maxnum)});  
        });
        // $.each(this.opts.movie,function (i,item) {
        //     movies.push({stus:item.stus,indexs:dbapi.fixNum(item.maxnum)}); 
        // });

        $.each(books,function(i,item){  
            $.each(item.indexs,function(t,idx){
                setTimeout(dbapi.appendScript(dbapi.bookurl(item.stus,idx.begin,idx.end)),300);
            });             
        });

        // $.each(movies,function(i,item){ 
        //     $.each(item.indexs,function(t,idx){
        //         setTimeout(dbapi.appendScript(dbapi.movieurl(item.stus,idx.begin,idx.end)),1000);
        //     });             
        // });     
    },
    /**
     * 可选配置项
     * @type {Object}
     * todo:可以进一步把book和movie合并到一起，通过类型区分。
     */
    defaults:{
        place:"douban",
        user:"",
        api:"",
        book:[{stus:"reading",maxnum:100},{stus:"read",maxnum:100}],
        // book:[{stus:"reading",maxnum:100},{stus:"read",maxnum:100},{stus:"wish",maxnum:100}],
        // movie:[{stus:"watched",maxnum:500},{stus:"wish",maxnum:200}],
        bookreadingtitle:"正读...",
        bookreadtitle:"读过..."
        // bookwishtitle:"想读...",
        // moviewatchedtitle:"看过...",
        // moviewishtitle:"想看..."
    }
}
//--dbapi.end--
