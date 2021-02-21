const $ = new Env('睡眠赚');
status = (status = ($.getval("bsxqstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符



let sjurl = 'http://sleep.zouluzhuan.com/api/member/randCoin'
const sjhd = {"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "close","Content-Length": "110","Content-Type": "application/x-www-form-urlencoded","Cookie": "PHPSESSID=4976ea34f4d1e6b84d0b7f090531c4fd","Host": "sleep.zouluzhuan.com","User-Agent": "SMMon/1.0.7 (iPhone; iOS 14.4; Scale/3.00)"}

var zz = ''
var zzz =''
var bzz=''
var bb2=''

!(async () => {
  if (typeof $request !== "undefined") {
    
  } else {
 
          for (let i = 0; i < 10; i++) {

          $.index = i + 1;
          console.log(`\n开始【睡眠金币金币${$.index}】`)
          await smjbb($.index);
          await $.wait(45000);
          await sx();
          await drink($.index);
        if(zzz==1){break;}


      }
      
     }
  
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
/*

!(async () => {
  if (typeof $request !== "undefined") {
 
  } else {

 
for (let i = 0; i < 99; i++) {

          $.index = i + 1;
          console.log(`\n开始【抽奖金币${$.index}】`)
          await tab();
          await $.wait(35000);
        if(bzz==1){
        break;
        }
      
      }
    

     for (let i = 0; i < 6; i++) {

          $.index = i + 1;
          console.log(`\n开始【碎片金币${$.index}】`)
          await sp();
          await sp2();
          await $.wait(10000);
      if(bb=1){break;}
      }
    


for (let i = 0; i < 5; i++) {

          $.index = i + 1;
          console.log(`\n开始【睡眠赚随机金币${$.index}】`)
          await sjjb();
          await sjjb2();
          await $.wait(20000);
          await sx();
        if(zz==1){
        break;
        }
      }

     }
  
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
*/
/*
  //宝石星球数据获取
function bsxqck() {
   if ($request.url.indexOf("batch-diggle?") > -1){
  const bsxqurl = $request.url.split('?')[1]
  if(bsxqurl)     $.setdata(bsxqurl,`bsxqurl${status}`)
    $.log(bsxqurl)
    const bsxqheader = JSON.stringify($request.headers)
        if(bsxqheader)    $.setdata(bsxqheader,`bsxqheader${status}`)
$.log(bsxqhd)
   $.msg($.name,"","宝石星球${status}: 数据获取成功！")
  }
}
*/

//http://api.fragment.zouluzhuan.com/api/fragment/addLuckDraw?project_id=94378963&uid=1281538

//碎片体力增加
function sptl(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://api.fragment.zouluzhuan.com/api/fragment/addLuckDraw?project_id=94378963&uid=1281538',
        headers : {"Accept": "application/json, text/javascript, */*; q=0.01","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Cookie": "PHPSESSID=687021f1a3566488702f93f88b7aab0f; UM_distinctid=177bd7af2ae983-0a81239e01400c-754c1351-4a574-177bd7af2afcf0","Host": "api.fragment.zouluzhuan.com","Referer": "http://api.fragment.zouluzhuan.com/api/fragment/index?project_id=94378963&uid=1281538&device=ios&source=ios","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"},
        body : '',}
        $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('体力增加回执:成功🌝 ')
                    }
                     if(result.code == 2001){
                      bb2=1；
                        console.log('没有体力'}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}

//碎片2
function sp2(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://api.fragment.zouluzhuan.com/api/fragment/double?project_id=94378963&uid=1281538',
        headers : {"Accept": "application/json, text/javascript, */*; q=0.01","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Cookie": "PHPSESSID=687021f1a3566488702f93f88b7aab0f; UM_distinctid=177bd7af2ae983-0a81239e01400c-754c1351-4a574-177bd7af2afcf0","Host": "api.fragment.zouluzhuan.com","Referer": "http://api.fragment.zouluzhuan.com/api/fragment/index?project_id=94378963&uid=1281538&device=ios&source=ios","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"},
        body : '',}
        $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('碎片2回执:成功🌝 ')
                    }
                     if(result.code == 2001){
                        
                        console.log('碎片翻倍失败回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}





//
function sp(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://api.fragment.zouluzhuan.com/api/fragment/luckDraw?project_id=94378963&uid=1281538&is_watch=1',
        headers : {"Accept": "application/json, text/javascript, */*; q=0.01","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Cookie": "PHPSESSID=687021f1a3566488702f93f88b7aab0f; UM_distinctid=177bd7af2ae983-0a81239e01400c-754c1351-4a574-177bd7af2afcf0","Host": "api.fragment.zouluzhuan.com","Referer": "http://api.fragment.zouluzhuan.com/api/fragment/index?project_id=94378963&uid=1281538&device=ios&source=ios","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"},
        body : '',}
        $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('碎片回执:成功🌝 ')
                    }
                     if(result.code == 2009){
                        await sptl();
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}



//转盘
function tab(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://sleep.zouluzhuan.com/api/turntable/turntableCoin?imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&device=ios',
        headers : sjhd,
        body : '',}
        $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('随机回执:成功🌝 ')
                    }
                     if(result.code == 2001){
                        bzz = 1
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}







//喝水

function drink(Drinkid) {
  return new Promise((resolve) => {
let url = {
        url : 'http://sleep.zouluzhuan.com/api/home/drink',
        headers : sjhd,
        body : `coin=25&cupid=${Drinkid}&device=ios&double=1&imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&uid=1281538&version=1.0.7`,}
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('喝水成功回执:成功🌝 ')
                    }
                     if(result.code == 1001){
                       
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
  })
}





//http://sleep.zouluzhuan.com/api/home/getsleepcoin

//shuaxin
function sx(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://sleep.zouluzhuan.com/api/version/index',
        headers : sjhd,
        body : 'device=ios&imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&uid=1281538&version=1.0.7&version_code=1.0.7&version_device=2',}
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('刷新回执:成功🌝 ')
                    }
                     if(result.code == 1){
                       
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}


//睡眠金币
function smjbb(smid) {
  return new Promise((resolve) => {
  
let url = {
        url : `http://sleep.zouluzhuan.com/api/home/getsleepcoin`,
        headers : sjhd,
        body : `bubbleid=${smid}&coin=3000&device=ios&double=1&imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&type=1&uid=1281538&version=1.0.7`,}
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('睡眠回执:成功🌝 ')
                    }
                     if(result.code == 1001){
                        zzz = 1
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
  })
}



//首页随机金币双倍
function sjjb2(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : 'http://sleep.zouluzhuan.com/api/advertisement/incentive',
        headers : sjhd,
        body : 'action=double&device=ios&imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&uid=1281538&version=1.0.7',}
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('双倍回执:成功🌝 ')
                    }
                     if(result.code == 1){
                        zz = 1
                        console.log('双倍回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}



//首页随机金币
function sjjb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let url = {
        url : sjurl,
        headers : sjhd,
        body : 'coin=10&device=ios&double=1&imei=caa6285a2dcfc67dc4ba6ee49203d6e2b4ac8432&source=ios&uid=1281538&version=1.0.7',}
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                    if(result.code == 200){
                    console.log('随机回执:成功🌝 ')
                    }
                     if(result.code == 1){
                        zz = 1
                        console.log('回执:失败🚫 '+result.msg+"别着急，还没出矿呢。")}
                        } catch (e) {
                     $.logErr(e, resp);
                             } finally {
          resolve()
        }
      })
    },timeout)
  })
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
