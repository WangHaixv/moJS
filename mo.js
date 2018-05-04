var app=getApp();import {requestUrl,aes_key,aes_iv,basic_theme_color,OSS,CryptoJS} from 'mo_init_set.js';function OSSUp({bucket,filepath,name,key,success,fail,complete}){if(!key){key='${filename}';};if(!name){name='file'};if(!success){success=()=>{};};if(!fail){fail=()=>{};};if(!complete){complete=()=>{};};if(!bucket||!filepath){fail({'errmsg':'Empty data!'});return complete({'errmsg':'OSSUp fail!'})};wx.uploadFile({url:OSS[bucket].url,filePath:filepath,name:name,formData:{name:filepath,key:key,OSSAccessKeyId:OSS[bucket].id,policy:OSS[bucket].policy,signature:OSS[bucket].signature,success_action_status:'200'},success:res=>{success(res);},fail:res=>{fail(res)},complete:res=>{complete(res);}})};JSON:{if(typeof JSON!=="object"){JSON={};}(function(){"use strict";var rx_one = /^[\],:{}\s]*$/;var rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rx_four = /(?:^|:|,)(?:\s*\[)+/g;var rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?"0"+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var gap;var indent;var meta;var rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?"\""+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+"\"":"\""+string+"\"";}function str(key,holder){var i;var k;var v;var length;var mind=gap;var partial;var value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}if(typeof rep==="function"){value=rep.call(holder,key,value);}switch(typeof value){case "string":return quote(value);case "number":return isFinite(value)?String(value):"null";case "boolean":case "null":return String(value);case "object":if(!value){return "null";}gap+=indent;partial=[];if (Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i, value)||"null";}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k, value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}if(typeof JSON.stringify!=="function"){meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else if(typeof space==="string"){indent=space;}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer !== "object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}return str("",{"":value});};}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k;var v;var value = holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v = walk(value, k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function (a){return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}if(rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,""))){j=eval("("+text+")");return(typeof reviver==="function")?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");};}}());}function AESDecrypt(word){var encryptedHexStr=CryptoJS.enc.Hex.parse(word);var srcs=CryptoJS.enc.Base64.stringify(encryptedHexStr);var decrypt=CryptoJS.AES.decrypt(srcs,CryptoJS.enc.Utf8.parse(aes_key),{iv:CryptoJS.enc.Utf8.parse(aes_iv),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});var decryptedStr=decrypt.toString(CryptoJS.enc.Utf8);return decryptedStr.toString();};function AESEncrypt(word){var srcs=CryptoJS.enc.Utf8.parse(word);var encrypted=CryptoJS.AES.encrypt(srcs,CryptoJS.enc.Utf8.parse(aes_key),{iv:CryptoJS.enc.Utf8.parse(aes_iv),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});return encrypted.ciphertext.toString().toUpperCase();};function WxLogin({success,fail,complete}){if(!success){success=()=>{};};if(!fail){fail=()=>{};};if(!complete){complete=()=>{};};wx.showLoading({title:'正在登录中'});wx.login({success:res=>{NormalLogin({code:res.code,success:res=>{success({});},fail:res=>{fail({});},complete:res=>{wx.hideLoading();complete({});}});}});};function NormalLogin({uuid,code,success,fail,complete}){if(!success){success=()=>{}};if(!fail){fail=()=>{}};if(!complete){complete=()=>{};if(!uuid){uuid=''};if(!code){code=''};};wx.request({url:requestUrl+'/login',header:{"Content-Type":"application/x-www-form-urlencoded"},method:'POST',data:{'uuid':uuid,'code':code},success:res=>{if (res.data.code==0||res.data.code){app.globalData.login_info=res.data.user_info;wx.setStorage({key:'login_info',data:res.data.user_info});if(code){wx.setStorage({key:'code',data:code})};success(res);}else{fail(res);};},fail:res=>{fail(res);},complete:res=>{complete(res);}});};function ActToken({newtoken,success,fail,complete}){if(!success){success=()=>{};};if(!fail){fail=()=>{};};if(!complete){complete=()=>{};};if(!newtoken){newtoken='';};wx.getStorage({key:'code',success:res=>{wx.request({url:requestUrl+'/act/token',header:{"Content-Type":"application/x-www-form-urlencoded"},method:'POST',data:{'openid':app.globalData.login_info.openid,'code':res.data,'act_token':newtoken},success:res=>{if(res.data.errcode==0){app.globalData.act_token=res.data.act_token;wx.setStorage({key:'act_token',data:res.data.act_token});success(res);}else{if(res.data.errcode==1){WxLogin({success:res=>{ActToken({});}});}else{app.globalData.act_token='';wx.removeStorage({key:'act_token'});fail({'errmsg':'Undesired response!'});};};}})},fail:res=>{fail(res);},complete:res=>{complete(res);}});};function UpUserInfo({data,success,fail,complete}){if(!success){success=()=>{};};if(!fail){fail=()=>{};};if(!complete){complete=()=>{};};wx.request({url:requestUrl+'/upuserinfo',header:{"Content-Type":"application/x-www-form-urlencoded"},method:'POST',data: {"openid":app.globalData.login_info.openid,"iv":data.iv,"encryptedData": data.encryptedData},success:res=>{if(res.data.errcode==0){success();}else{fail(res);};},fail:res=>{fail(res);},complete:res=>{complete(res);}});};function ThemeColor(that){var theme_color=app.globalData.theme_color;if(theme_color){that.setData({theme_color:theme_color});wx.setNavigationBarColor({frontColor:'#ffffff',backgroundColor:that.data.theme_color[5]})}else{wx.getStorage({key:'theme_color',success:res=>{app.globalData.theme_color=res.data},fail:res=>{app.globalData.theme_color=basic_theme_color},complete:res=>{that.setData({theme_color:app.globalData.theme_color});wx.setNavigationBarColor({frontColor:'#ffffff',backgroundColor:that.data.theme_color[5]});}});};};module.exports={JSON:JSON,AESDecrypt:AESDecrypt,AESEncrypt:AESEncrypt,ThemeColor:ThemeColor,UpUserInfo:UpUserInfo,WxLogin:WxLogin,NormalLogin:NormalLogin,ActToken:ActToken,OSSUp:OSSUp};