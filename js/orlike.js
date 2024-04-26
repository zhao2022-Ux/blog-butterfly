const version="V0.1.33";function setCookie(e,i,t){var s=new Date;s.setTime(s.getTime()+24*t*60*60*1e3);var o="expires="+s.toGMTString();document.cookie=e+"="+i+"; "+o}function getCookie(e){for(var i=e+"=",t=document.cookie.split(";"),s=0;s<t.length;s++){var o=t[s].trim();if(0==o.indexOf(i))return o.substring(i.length,o.length)}return""}function createLink(e){let i=$(document.createElement("link"));i.attr("href",e),i.attr("rel","stylesheet"),i.attr("type","text/css"),$("link").last().after(i)}function OrLike({serverUrl:e="",el:i="",days:t=30,style:s="",ifont:o="",icon:r={like:"fa fa-thumbs-up",dislike:"fa fa-thumbs-down"}}={}){this.serverUrl=e,this.el=i,this.style=s,this.ifont=o,this.days=t,this.icon=r,this.ckid="",this.prepare(),this.init()}OrLike.prototype.prepare=function(){$(this.el).addClass("orlike-loading"),""!=this.style&&createLink(this.style),""!=this.ifont&&createLink(this.ifont)},OrLike.prototype.init=function(){server_url=this.serverUrl,obj=this,$.ajax({type:"GET",url:server_url+"/tmp",dataType:"jsonp",jsonp:"callback",jsonpCallback:"success",xhrFields:{withCredentials:!0},async:!0,crossDomain:!0,success:function(e){let i=$(e.template),t=i.siblings("a.likeit.orlike").children("i"),s=i.siblings("a.dislikeit.orlike").children("i");t.attr("class",obj.icon.like),s.attr("class",obj.icon.dislike),0==obj.icon.like&&t.remove(),0==obj.icon.dislike&&s.remove(),$(obj.el).removeClass("orlike-loading"),$(obj.el).html(i),obj.ckusr(obj),$("a.likeit.orlike").click({obj:obj},obj.like),$("a.dislikeit.orlike").click({obj:obj},obj.dislike)}})},OrLike.prototype.ckusr=function(e){server_url=this.serverUrl,$.ajax({type:"GET",url:server_url+"/ckusr",dataType:"jsonp",jsonp:"callback",jsonpCallback:"success",xhrFields:{withCredentials:!0},async:!1,crossDomain:!0,success:function(i){"ok"==i.stat&&""!=i.uid?(e.ckid=i.ckid,getCookie(i.ckid)||setCookie(i.ckid,i.uid,e.days),e.query()):console.error("connect orlike failed!!!")}})},OrLike.prototype.query=function(){server_url=this.serverUrl,$.ajax({type:"GET",url:server_url+"/qry?link="+window.location.pathname,dataType:"jsonp",jsonp:"callback",jsonpCallback:"success",xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){"ok"==e.stat?($("a.likeit.orlike i span").text(e.like),$("span.post-meta-orlike a span").text(e.like),$("a.dislikeit.orlike i span").text(e.dislike)):console.error("query orlike failed!!!")}})},OrLike.prototype.orl=function(e,i){server_url=e.serverUrl,req_url=server_url+"/orl?method="+i+"&link="+window.location.pathname+"&"+e.ckid+"="+getCookie(e.ckid),$.ajax({type:"GET",url:req_url,dataType:"jsonp",jsonp:"callback",jsonpCallback:"success",xhrFields:{withCredentials:!0},crossDomain:!0,success:function(i){e.query()}})},OrLike.prototype.like=function(e){obj=e.data.obj,obj.orl(obj,"like")},OrLike.prototype.dislike=function(e){obj=e.data.obj,obj.orl(obj,"dislike")};