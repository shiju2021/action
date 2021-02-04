/*
更新时间: 2021-01-31 19:00
赞赏:中青邀请码`46308484`,农妇山泉 -> 有点咸，万分感谢
本脚本仅适用于中青看点极速版领取青豆

*/

let s = 1000 //各数据接口延迟
const $ = new Env("中青看点")
let notifyInterval = $.getdata("notifytimes")||50 //通知间隔，默认抽奖每50次通知一次，如需关闭全部通知请设为0
const YOUTH_HOST = "https://kd.youth.cn/WebApi/";
const notify = $.isNode() ? require('./sendNotify') : '';
const withdrawcash = $.getdata('zqcash')||30 //提现金额
let withdrawUrl =$.getdata('cashurl_zq')
let withdrawBody =$.getdata('cashbody_zq')

let logs = $.getdata('zqlogs')||false, rotaryscore=0,doublerotary=0,signresult; 
let cookiesArr = [], signheaderVal = '',
    readArr = [], articlebodyVal ='',
    timeArr = [], timebodyVal = '',
    redpArr = [], redpbodyVal = '',
    detail = ``, subTitle = ``;
let CookieYouth = [], ARTBODYs = [], 
    REDBODYs  = [], READTIME = [];
if ($.isNode()) {
  if (process.env.YOUTH_HEADER && process.env.YOUTH_HEADER.indexOf('#') > -1) {
  CookieYouth = process.env.YOUTH_HEADER.split('#');
  } else {
      CookieYouth = process.env.YOUTH_HEADER.split()
  };
  
  if (process.env.YOUTH_ARTBODY && process.env.YOUTH_ARTBODY.indexOf('&') > -1) {
  ARTBODYs = process.env.YOUTH_ARTBODY.split('&');
  } else {
      ARTBODYs = process.env.YOUTH_ARTBODY.split()
  };
  
  if (process.env.YOUTH_REDBODY && process.env.YOUTH_REDBODY.indexOf('&') > -1) {
  REDBODYs = process.env.YOUTH_REDBODY.split('&');
  } else {
      REDBODYs = process.env.YOUTH_REDBODY.split()
  };
  
  if (process.env.YOUTH_TIME && process.env.YOUTH_TIME.indexOf('&') > -1) {
  READTIME = process.env.YOUTH_TIME.split('&');
  }else {
      READTIME = process.env.YOUTH_TIME.split()
  };
}
    
if ($.isNode()) {
    Object.keys(CookieYouth).forEach((item) => {
        if (CookieYouth[item]) {
          cookiesArr.push(CookieYouth[item])
        }
      })
    Object.keys(ARTBODYs).forEach((item) => {
        if (ARTBODYs[item]) {
          readArr.push(ARTBODYs[item])
        }
      })
    Object.keys(REDBODYs).forEach((item) => {
        if (REDBODYs[item]) {
          redpArr.push(REDBODYs[item])
        }
      })
    Object.keys(READTIME).forEach((item) => {
        if (READTIME[item]) {
          timeArr.push(READTIME[item])
        }
      })
      console.log(`============ 共${cookiesArr.length}个中青账号  =============\n`)
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
    } else {
  cookiesArr.push($.getdata('youthheader_zq'));
    redpArr.push($.getdata('red_zq'));
    readArr.push($.getdata('read_zq'));
    timeArr.push($.getdata('readtime_zq'));
}

const firstcheck = $.getdata('signt');
const runtimes = $.getdata('times');
const opboxtime = $.getdata('opbox');

if (isGetCookie = typeof $request !== 'undefined') {
   GetCookie();
   $.done()
} 

 !(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取中青看点一cookie')
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      signheaderVal = cookiesArr[i];
      articlebodyVal = readArr[i];
      timebodyVal = timeArr[i];
      redpbodyVal = redpArr[i];
      $.index = i + 1;
      console.log(`-------------------------\n\n开始【中青看点${$.index}】`)
    }
  await sign();
  await signInfo();
  await friendsign();
  await comApp();
  await ArticleShare();
  await openbox();
  await getAdVideo();
  await gameVideo();
  await readArticle();
  await Articlered();
  await readTime();
for (k=0;k<5;k++){
  await $.wait(1000);
  await rotary();
if (rotaryres.status == 0) {
      rotarynum = ` 转盘${rotaryres.msg}🎉`;
      break
   } else if(rotaryres.status == 1){
 console.log("等待1s进行开始转盘任务")
     rotaryscore += rotaryres.data.score
   $.log("进行"+Number(100-rotaryres.data.remainTurn)+"次转盘，获得"+rotaryres.data.score+"青豆")
     rotarytimes = rotaryres.data.remainTurn
  }
 if (rotaryres.status == 1 && rotaryres.data.doubleNum !== 0) {
              await TurnDouble();
           if (Doubleres.status == 1) {
              doublerotary += Doubleres.data.score
           }
      }
}

if (rotaryres.status == 1) {
  detail += `【转盘抽奖】+${rotaryscore}个青豆 剩余${rotaryres.data.remainTurn}次\n`
$.log(`转盘抽奖: 共计+${rotaryscore}个青豆 剩余${rotaryres.data.remainTurn}次\n`)
}
if (rotaryres.status !== 0&&rotaryres.data.doubleNum !== 0){
  detail += `【转盘双倍】+${doublerotary}青豆 剩余${rotaryres.data.doubleNum}次\n`
$.log(`转盘双倍: +${doublerotary}青豆 剩余${rotaryres.data.doubleNum}次`)
}
  await earningsInfo();
  await showmsg();
  if ($.isNode()&&rotaryres.code !== '10010')
    if( rotarytimes && (100-rotarytimes)%95 == 0 && cash >= 10){
       await notify.sendNotify($.name + " " + nick, "您的余额约为"+cash+"元，已可以提现"+'\n'+`【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元\n${detail}`)
    }
 }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function GetCookie() {
   if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/TaskCenter\/(sign|getSign)/)) {
   const signheaderVal = JSON.stringify($request.headers)
    if (signheaderVal)        $.setdata(signheaderVal,'youthheader_zq')
    $.log(`${$.name} 获取Cookie: 成功,signheaderVal: ${signheaderVal}`)
    $.msg($.name, `获取Cookie: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/complete/)) {
   const articlebodyVal = $request.body
    if (articlebodyVal)        $.setdata(articlebodyVal,'read_zq')
    $.log(`${$.name} 获取阅读: 成功,articlebodyVal: ${articlebodyVal}`)
    $.msg($.name, `获取阅读请求: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/v5\/user\/app_stay/)) {
   const timebodyVal = $request.body
    if (timebodyVal)        $.setdata(timebodyVal,'readtime_zq')
    $.log(`${$.name} 获取阅读: 成功,timebodyVal: ${timebodyVal}`)
    $.msg($.name, `获取阅读时长: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/red_packet/)) {
   const redpbodyVal = $request.body
    if (redpbodyVal)        $.setdata(redpbodyVal, 'red_zq')
    $.log(`${$.name} 获取惊喜红包: 成功,redpbodyVal: ${redpbodyVal}`)
    $.msg($.name, `获取惊喜红包请求: 成功🎉`, ``)
  }
else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/withdraw\d?\.json/)) {
   const withdrawVal = $request.body
   const withdrawUrl = $request.url
    if (withdrawVal)        $.setdata(withdrawVal, 'cashbody_zq')
    if (withdrawUrl)        $.setdata(withdrawUrl, 'cashurl_zq')
    $.log(`${$.name} 获取提现请求: 成功,withdrawUrl: ${withdrawUrl}`)
    $.log(`${$.name} 获取提现请求: 成功,withdrawBody: ${withdrawVal}`)
    $.msg($.name, `获取提现请求: 成功🎉`, ``)
  }
 }
function sign() {
    return new Promise((resolve, reject) => {
        const signurl = {
            url: 'https://kd.youth.cn/TaskCenter/sign',
            headers: JSON.parse(signheaderVal),
        }
        $.post(signurl, (error, response, data) => {
            signres = JSON.parse(data)
            if (signres.status == 2) {
                signresult = `签到失败，Cookie已失效‼️`;
                $.msg($.name, signresult, "");
                return;
            } else if (signres.status == 1) {
                 signresult = `【签到结果】成功 🎉 明日+${signres.nextScore} `
                //detail = `【签到结果】成功 🎉 青豆: +${signres.score}，明日青豆: +${signres.nextScore}\n`
            } else if (signres.status == 0) {
                signresult = `【签到结果】重复`;
                detail = "";
            }
           resolve() 
        })
    })
}
      
function signInfo() {
    return new Promise((resolve, reject) => {
        const infourl = {
            url: 'https://kd.youth.cn/TaskCenter/getSign',
            headers: JSON.parse(signheaderVal),
        }
        $.post(infourl, async(error, response, data) => {
            signinfo = JSON.parse(data);
          //$.log(formatJson(data))
            if (signinfo.status == 1) {
              cash = signinfo.data.user.money
              signday = signinfo.data.sign_day
                subTitle = `【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元`;
                if( parseInt(cash) >= withdrawcash && !withdrawBody == "false"){
                await withDraw()
               }
                nick = `账号: ${signinfo.data.user.nickname}`;
                $.setdata(nick,"zq_nick")
                detail = `${signresult}(今天+${signinfo.data.sign_score}青豆) 已连签${signday}天\n<本次收益>：\n`;
            if(signday==7){
              await SevCont();
             }
            } else {
                subTitle = `${signinfo.msg}`;
                detail = ``;
            }
            resolve()
        })
    })
}

function withDraw() {
    return new Promise((resolve, reject) => {
        const url = {
            url: withdrawUrl,
            headers: {
            'User-Agent': 'KDApp/1.8.2 (iPhone; iOS 14.2; Scale/3.00)'
            },
            body: withdrawBody,
        }
        $.post(url, (error, response, data) => {
            withDrawres = JSON.parse(data)
            if (withDrawres.error_code == 0) {
              detail += `【自动提现】提现${withdrawcash}元成功\n`
            }else if(withDrawres.error_code == "10002"){
              $.log( `自动提现失败，${withDrawres.homeTime.text}`)
            }
            else {
              $.log( `自动提现失败，${withDrawres.message}`)
            }
            resolve()
        })
    })
}



//打卡分享
function Cardshare() {
    return new Promise((resolve, reject) => {
        const starturl = {
            url: `${YOUTH_HOST}PunchCard/shareStart?`,
            headers: JSON.parse(signheaderVal),
        }
        $.post(starturl, (error, response, data) => {
            sharestart = JSON.parse(data)
            //detail += `【打卡分享】${sharestart.msg}\n`
            if (sharestart.code == 1) {
                setTimeout(() => {
                    let endurl = {
                        url: `${YOUTH_HOST}PunchCard/shareEnd?`,
                        headers: JSON.parse(signheaderVal)
                    }
                    $.post(endurl, (error, response, data) => {
                        shareres = JSON.parse(data)
                        if (shareres.code == 1) {
                            detail += `+${shareres.data.score}青豆\n`
                        } else {
                            //detail += `【打卡分享】${shareres.msg}\n`
                         //$.log(`${shareres.msg}`)
                        }
                        resolve()
                    })
                  },s*2);
            }
        })
    })
}

function SevCont() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.post({url: `${YOUTH_HOST}PunchCard/luckdraw?`,
              headers: JSON.parse(signheaderVal),
            }, async(error, response, data) => {
                sevres = JSON.parse(data)
                if (sevres.code == 1) {
                    detail += `【七日签到】+${sevres.data.score}青豆 \n`
                }else if (sevres.code == 0){
                     //detail += `【七日签到】${sevres.msg}\n`
                    $.log(`七日签到: ${sevres.msg}`)
                }
                resolve()
            })
        },s)
    })
}

function ArticleShare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KmdjzYCBXDRQtZ2Kkl8aMQLb6BeXxq2kEr&uid=46746961&phone_code=c6dcf2a3056a5183edc85313fdbf3e6e&scid=35902988&time=1611338382&app_version=1.8.2&sign=0b8019551761cc3ebf0b4775701fd16e`,
                headers: JSON.parse(signheaderVal),
            }
            $.post(url, async(error, response, data) => {
                //boxres = JSON.parse(data)
                resolve()
            })
        },s)
    })
}


//开启时段宝箱
function openbox() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${YOUTH_HOST}invite/openHourRed`,
                headers: JSON.parse(signheaderVal),
            }
            $.post(url, async(error, response, data) => {
                boxres = JSON.parse(data)
                if (boxres.code == 1) {
                  boxretime = boxres.data.time
                  $.setdata(boxretime, 'opbox')
                    detail += `【开启宝箱】+${boxres.data.score}青豆 下次奖励${boxres.data.time / 60}分钟\n`
                      await boxshare();
                }else{
                    //detail += `【开启宝箱】${boxres.msg}\n`
                   $.log(`开启宝箱 :${boxres.msg}`)
                }
                resolve()
            })
        },s)
    })
}

//宝箱分享
function boxshare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${YOUTH_HOST}invite/shareEnd`,
                headers: JSON.parse(signheaderVal),
            }
            $.post(url, (error, response, data) => {
   
                shareres = JSON.parse(data)
                if (shareres.code == 1) {
                    detail += `【宝箱分享】+${shareres.data.score}青豆\n`
                }else{
                    //detail += `【宝箱分享】${shareres.msg}\n`
                  //$.log(`${shareres.msg}`)
                }
                resolve()
            })
        },s*2);
    })
}

function friendsign() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://kd.youth.cn/WebApi/ShareSignNew/getFriendActiveList`,
            headers: JSON.parse(signheaderVal)
        }
        $.get(url, async(error, response, data) => {
            let addsign = JSON.parse(data)
            if (addsign.error_code == "0"&& addsign.data.active_list.length>0) {
             friendsitem = addsign.data.active_list
             for(friends of friendsitem){
            if(friends.button==1){
               await friendSign(friends.uid)
              }
             }
            }
           resolve()
        })
    })
}


function friendSign(uid) {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://kd.youth.cn/WebApi/ShareSignNew/sendScoreV2?friend_uid=${uid}`,
            headers: JSON.parse(signheaderVal)
        }
        $.get(url, (error, response, data) => {
            friendres = JSON.parse(data)
            if (friendres.error_code == "0") {
                detail += `【好友红包】+${friendres.data[0].score}个青豆\n`
               console.log(`好友签到，我得红包 +${friendres.data[0].score}个青豆`)
            }
            resolve()
        })
    })
}


//看视频奖励
function getAdVideo() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://kd.youth.cn/taskCenter/getAdVideoReward`,
            headers: JSON.parse(signheaderVal),
            body: 'type=taskCenter'
        }
        $.post(url, (error, response, data) => {
            adVideores = JSON.parse(data)
            if (adVideores.status == 1) {
                detail += `【观看视频】+${adVideores.score}个青豆\n`
              $.log("观看视频广告"+ adVideores.num +"次 +"+adVideores.score+"青豆")
            }
            resolve()
        })
    })
}
// 激励视频奖励
function gameVideo() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/Game/GameVideoReward.json`,
            body: articlebodyVal,
        }
        $.post(url, (error, response, data) => {
            gameres = JSON.parse(data)
            if (gameres.success == true) {
                detail += `【激励视频】${gameres.items.score}\n`
                $.log("激励视频 "+gameres.items.score)
            }else{
                if(gameres.error_code == "10003"){
                    //detail += `【激励视频】${gameres.message}\n`
                $.log("激励视频 "+gameres.message)
                }
            }
            resolve()
        })
    })
}
function comApp() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/mission/msgRed.json`,
            headers: {
            'User-Agent': 'KDApp/1.8.0 (iPhone; iOS 14.2; Scale/3.00)'
            },
            body: articlebodyVal,
        }
        $.post(url, (error, response, data) => {
            redres = JSON.parse(data)
            if (redres.success == true) {
                detail += `【回访奖励】+${redres.items.score}个青豆\n`
            }else{
                if(redres.error_code == "100009"){
                   $.log( `回访奖励: ${redres.message}`)
                }
            }
            resolve()
        })
    })
}

//阅读奖励
function readArticle() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/article/complete.json`,
            headers: {
            'User-Agent': 'KDApp/1.8.2 (iPhone; iOS 14.2; Scale/3.00)'
            },
            body: articlebodyVal,
        }
        $.post(url, (error, response, data) => {
           readres = JSON.parse(data);
     if (typeof readres.items.read_score === 'number'&&readres.items.read_score!=0)  {
              detail += `【阅读奖励】+${readres.items.read_score}个青豆\n`;
             $.log(`阅读奖励 +${readres.items.read_score}个青豆\n`)
            } 
    else if (readres.items.max_notice == '看太久了，换1篇试试') {
              //detail += `【阅读奖励】看太久了，换1篇试试\n`;
              //$.log(readres.items.max_notice)
           }
            resolve()
        })
    })
}
//惊喜红包
function Articlered() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/article/red_packet.json`,
            headers: {
            'User-Agent': 'KDApp/1.8.2 (iPhone; iOS 14.2; Scale/3.00)'
            },
            body: redpbodyVal,
        }
        $.post(url, (error, response, data) => {
            redres = JSON.parse(data)
            if (redres.success == true) {
              detail += `【惊喜红包】+${redres.items.score}个青豆\n`
              $.log(`惊喜红包 +${redres.items.score}个青豆，`+ redres.items.alert)
            }else if(redres.error_code == "100001"){
               //detail += `【惊喜红包】${redres.message}\n`
            }
            resolve()
        })
    })
}

function readTime() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/user/stay.json`,
            headers: {
            'User-Agent': 'KDApp/1.8.2 (iPhone; iOS 14.2; Scale/3.00)'
            },
            body: timebodyVal,
         }
        $.post(url, (error, response, data) => {
            let timeres = JSON.parse(data)
            if (timeres.error_code == 0) {
                readtimes = timeres.time / 60
                detail += `【阅读时长】共计` + Math.floor(readtimes) + `分钟\n`
              $.log(`阅读时长共计` + Math.floor(readtimes) + `分钟`)
            } else {
                if (timeres.error_code == 200001) {
                    detail += `【阅读时长】❎ 未获取阅读时长请求\n`
                }else{
                    detail += `【阅读时长】❎ ${timeres.msg}\n`
                $.log(`阅读时长统计失败，原因:${timeres.msg}`)
                }
            }
            resolve()
        })
    })
}

//转盘任务
function rotary() {
   const rotarbody = signheaderVal.split("&")[15] + '&' + signheaderVal.split("&")[8]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = new Date().getTime()
            const url = {
                url: `${YOUTH_HOST}RotaryTable/turnRotary?_=${time}`,
                headers: JSON.parse(signheaderVal),
                body: rotarbody
            }
            $.post(url,async (error, response, data) => {
                try{
                      rotaryres = JSON.parse(data)
              await rotaryCheck()
                     } catch (e) {
                   $.logErr(e, resp);
                   } finally {
                  resolve()
                }
            })
        }, s);
    })
}

//转盘宝箱判断
function rotaryCheck() {
    return new Promise(async(resolve) => {
        if (rotaryres.code == 10010) {
            return resolve();
        }

        let i = 0;
        while (i <= 3) {
            if (100 - rotaryres.data.remainTurn >= rotaryres.data.chestOpen[i].times&&rotaryres.data.chestOpen[i].received==0) {
                await runRotary(i + 1)
            }
            i++;
        }
      resolve();
    })
}

//开启宝箱
function runRotary(index) {
    return new Promise((resolve, reject) => {
        const rotarbody = signheaderVal.split("&")[15] + '&' + signheaderVal.split("&")[8] + '&num=' + index;
        const time = new Date().getTime();
        const url = {
            url: `${YOUTH_HOST}RotaryTable/chestReward?_=${time}`,
            headers: JSON.parse(signheaderVal),
            body: rotarbody
        }
        $.post(url, (error, response, data) => {
        const rotaryresp = JSON.parse(data);
            if (rotaryresp.status == 1) {
                detail += `【转盘宝箱${index}】+${rotaryresp.data.score}个青豆\n`;
            }else{
                if(rotaryresp.code == "10010"){
                    detail += `【转盘宝箱${index}】+今日抽奖完成\n`;
                }
            }
            resolve();
        })
    })
}

//转盘双倍奖励
function TurnDouble() {
    const rotarbody = signheaderVal.split("&")[15] + '&' + signheaderVal.split("&")[8]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          let time = (new Date()).getTime()
            const url = {
                url: `${YOUTH_HOST}RotaryTable/toTurnDouble?_=${time}`,headers: JSON.parse(signheaderVal),body: rotarbody}
            $.post(url, (error, response, data) => { 
              try{
                Doubleres = JSON.parse(data)
                     } catch (e) {
                   $.logErr(e, resp);
                   } finally {
                  resolve()
                }
             resolve()
            })
        },s)
    })
}
function earningsInfo() {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `https://kd.youth.cn/wap/user/balance?${JSON.parse(signheaderVal)['Referer'].split("?")[1]}`,
                headers: JSON.parse(signheaderVal),
            }
        $.get(url, (error, response, data) => {
              infores = JSON.parse(data)
                if (infores.status == 0) {
                    detail += `<收益统计>：\n`
                    for (i = 0; i < infores.history[0].group.length; i++) {
                        detail += '【' + infores.history[0].group[i].name + '】' + infores.history[0].group[i].money + '个青豆\n'
                    }
                    detail += '<今日合计>： ' + infores.history[0].score + " 青豆"
                }
                resolve()
            })
        },s)
    })
}
async function showmsg() {
       if (rotaryres.status == 1 && rotarytimes >= 97) {
            $.msg($.name + " " + nick, subTitle, detail)  //默认前三次为通知
        }else if (rotaryres.status == 1 && rotarytimes % notifyInterval == 0) {
        $.msg($.name + " " + nick, subTitle, detail) //转盘次数/间隔整除时通知;
        }else if (rotaryres.code == 10010 && notifyInterval != 0) {
         rotarynum = ` 转盘${rotaryres.msg}🎉`
         $.msg($.name+"  "+nick+" "+rotarynum,subTitle,detail)//任务全部完成且通知间隔不为0时通知;
        } 
     else {
       console.log(`【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元\n`+ detail)
   }
}
function formatJson(json,options){var reg=null,formatted='',pad=0,PADDING='    ';options=options||{};options.newlineAfterColonIfBeforeBraceOrBracket=(options.newlineAfterColonIfBeforeBraceOrBracket===true)?true:false;options.spaceAfterColon=(options.spaceAfterColon===false)?false:true;if(typeof json!=='string'){json=JSON.stringify(json);}else{json=JSON.parse(json);json=JSON.stringify(json)};json=json.replace(/([\{\}])/g,'\r\n$1\r\n');json=json.replace(/([\[\]])/,'\r\n$1\r\n');json=json.replace(/(\,)/g,'$1\r\n');json=json.replace(/(\r\n\r\n)/g,'\r\n');json=json.replace(/\r\n\,/g,',');if(!options.newlineAfterColonIfBeforeBraceOrBracket){json=json.replace(/\:\r\n\{/g,':{');json=json.replace(/\:\r\n\[/g,':[')};if(options.spaceAfterColon){json=json.replace(/\:/g,':')};(json.split('\r\n')).forEach(function(node,index){var i=0,indent=0,padding='';if(node.match(/\{$/)||node.match(/\[$/)){indent=1}else if(node.match(/\}/)||node.match(/\]/)){if(pad!==0){pad-=1}}else{indent=0};for(i=0;i<pad;i++){padding+=PADDING};formatted+=padding+node+'\r\n';pad+=indent});return formatted}


function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env
    }

    send(opts, method = 'GET') {
      opts = typeof opts === 'string' ? { url: opts } : opts
      let sender = this.get
      if (method === 'POST') {
        sender = this.post
      }
      return new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) reject(err)
          else resolve(resp)
        })
      })
    }

    get(opts) {
      return this.send.call(this.env, opts)
    }

    post(opts) {
      return this.send.call(this.env, opts, 'POST')
    }
  }

  return new (class {
    constructor(name, opts) {
      this.name = name
      this.http = new Http(this)
      this.data = null
      this.dataFile = 'box.dat'
      this.logs = []
      this.isMute = false
      this.isNeedRewrite = false
      this.logSeparator = '\n'
      this.startTime = new Date().getTime()
      Object.assign(this, opts)
      this.log('', `🔔${this.name}, 开始!`)
    }

    isNode() {
      return 'undefined' !== typeof module && !!module.exports
    }

    isQuanX() {
      return 'undefined' !== typeof $task
    }

    isSurge() {
      return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
    }

    isLoon() {
      return 'undefined' !== typeof $loon
    }

    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str)
      } catch {
        return defaultValue
      }
    }

    toStr(obj, defaultValue = null) {
      try {
        return JSON.stringify(obj)
      } catch {
        return defaultValue
      }
    }

    getjson(key, defaultValue) {
      let json = defaultValue
      const val = this.getdata(key)
      if (val) {
        try {
          json = JSON.parse(this.getdata(key))
        } catch {}
      }
      return json
    }

    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key)
      } catch {
        return false
      }
    }

    getScript(url) {
      return new Promise((resolve) => {
        this.get({ url }, (err, resp, body) => resolve(body))
      })
    }

    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
        let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
        httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
        const [key, addr] = httpapi.split('@')
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: { script_text: script, mock_type: 'cron', timeout: httpapi_timeout },
          headers: { 'X-Key': key, 'Accept': '*/*' }
        }
        this.post(opts, (err, resp, body) => resolve(body))
      }).catch((e) => this.logErr(e))
    }

    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
          try {
            return JSON.parse(this.fs.readFileSync(datPath))
          } catch (e) {
            return {}
          }
        } else return {}
      } else return {}
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        const jsondata = JSON.stringify(this.data)
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata)
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        }
      }
    }

    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result = source
      for (const p of paths) {
        result = Object(result)[p]
        if (result === undefined) {
          return defaultValue
        }
      }
      return result
    }

    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
      path
        .slice(0, -1)
        .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
        path[path.length - 1]
      ] = value
      return obj
    }

    getdata(key) {
      let val = this.getval(key)
      // 如果以 @
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objval = objkey ? this.getval(objkey) : ''
        if (objval) {
          try {
            const objedval = JSON.parse(objval)
            val = objedval ? this.lodash_get(objedval, paths, '') : val
          } catch (e) {
            val = ''
          }
        }
      }
      return val
    }

    setdata(val, key) {
      let issuc = false
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objdat = this.getval(objkey)
        const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
        try {
          const objedval = JSON.parse(objval)
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        } catch (e) {
          const objedval = {}
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        }
      } else {
        issuc = this.setval(val, key)
      }
      return issuc
    }

    getval(key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(key)
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        return this.data[key]
      } else {
        return (this.data && this.data[key]) || null
      }
    }

    setval(val, key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(val, key)
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(val, key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        this.data[key] = val
        this.writedata()
        return true
      } else {
        return (this.data && this.data[key]) || null
      }
    }

    initGotEnv(opts) {
      this.got = this.got ? this.got : require('got')
      this.cktough = this.cktough ? this.cktough : require('tough-cookie')
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {}
        if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
          opts.cookieJar = this.ckjar
        }
      }
    }

    get(opts, callback = () => {}) {
      if (opts.headers) {
        delete opts.headers['Content-Type']
        delete opts.headers['Content-Length']
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, { 'X-Surge-Skip-Scripting': false })
        }
        $httpClient.get(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, { hints: false })
        }
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts)
          .on('redirect', (resp, nextOpts) => {
            try {
              if (resp.headers['set-cookie']) {
                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                if (ck) {
                  this.ckjar.setCookieSync(ck, null)
                }
                nextOpts.cookieJar = this.ckjar
              }
            } catch (e) {
              this.logErr(e)
            }
            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
          })
          .then(
            (resp) => {
              const { statusCode: status, statusCode, headers, body } = resp
              callback(null, { status, statusCode, headers, body }, body)
            },
            (err) => {
              const { message: error, response: resp } = err
              callback(error, resp, resp && resp.body)
            }
          )
      }
    }

    post(opts, callback = () => {}) {
      // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
      if (opts.body && opts.headers && !opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      if (opts.headers) delete opts.headers['Content-Length']
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, { 'X-Surge-Skip-Scripting': false })
        }
        $httpClient.post(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        opts.method = 'POST'
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, { hints: false })
        }
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const { url, ..._opts } = opts
        this.got.post(url, _opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => {
            const { message: error, response: resp } = err
            callback(error, resp, resp && resp.body)
          }
        )
      }
    }
    /**
     *
     * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
     *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
     * @param {*} fmt 格式化参数
     *
     */
    time(fmt) {
      let o = {
        'M+': new Date().getMonth() + 1,
        'd+': new Date().getDate(),
        'H+': new Date().getHours(),
        'm+': new Date().getMinutes(),
        's+': new Date().getSeconds(),
        'q+': Math.floor((new Date().getMonth() + 3) / 3),
        'S': new Date().getMilliseconds()
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (new Date().getFullYear() + '').substr(4 - RegExp.$1.length))
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      return fmt
    }

    /**
     * 系统通知
     *
     * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
     *
     * 示例:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title 标题
     * @param {*} subt 副标题
     * @param {*} desc 通知详情
     * @param {*} opts 通知参数
     *
     */
    msg(title = name, subt = '', desc = '', opts) {
      const toEnvOpts = (rawopts) => {
        if (!rawopts) return rawopts
        if (typeof rawopts === 'string') {
          if (this.isLoon()) return rawopts
          else if (this.isQuanX()) return { 'open-url': rawopts }
          else if (this.isSurge()) return { url: rawopts }
          else return undefined
        } else if (typeof rawopts === 'object') {
          if (this.isLoon()) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
            let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
            return { openUrl, mediaUrl }
          } else if (this.isQuanX()) {
            let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
            let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
            return { 'open-url': openUrl, 'media-url': mediaUrl }
          } else if (this.isSurge()) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
            return { url: openUrl }
          }
        } else {
          return undefined
        }
      }
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(title, subt, desc, toEnvOpts(opts))
        } else if (this.isQuanX()) {
          $notify(title, subt, desc, toEnvOpts(opts))
        }
      }
      if (!this.isMuteLog) {
        let logs = ['', '==============📣系统通知📣==============']
        logs.push(title)
        subt ? logs.push(subt) : ''
        desc ? logs.push(desc) : ''
        console.log(logs.join('\n'))
        this.logs = this.logs.concat(logs)
      }
    }

    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs]
      }
      console.log(logs.join(this.logSeparator))
    }

    logErr(err, msg) {
      const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
      if (!isPrintSack) {
        this.log('', `❗️${this.name}, 错误!`, err)
      } else {
        this.log('', `❗️${this.name}, 错误!`, err.stack)
      }
    }

    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }

    done(val = {}) {
      const endTime = new Date().getTime()
      const costTime = (endTime - this.startTime) / 1000
      this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
      this.log()
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(val)
      }
    }
  })(name, opts)
}
