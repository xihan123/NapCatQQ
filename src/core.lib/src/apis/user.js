const _0x575f53=_0x6e09;(function(_0x553b7c,_0xe7eeb4){const _0xf28eda=_0x6e09,_0x43b833=_0x553b7c();while(!![]){try{const _0x5d393b=-parseInt(_0xf28eda(0x181))/0x1*(parseInt(_0xf28eda(0x155))/0x2)+parseInt(_0xf28eda(0x162))/0x3*(-parseInt(_0xf28eda(0x17f))/0x4)+-parseInt(_0xf28eda(0x13e))/0x5+-parseInt(_0xf28eda(0x142))/0x6+-parseInt(_0xf28eda(0x146))/0x7*(parseInt(_0xf28eda(0x168))/0x8)+parseInt(_0xf28eda(0x178))/0x9*(-parseInt(_0xf28eda(0x16f))/0xa)+-parseInt(_0xf28eda(0x149))/0xb*(-parseInt(_0xf28eda(0x14c))/0xc);if(_0x5d393b===_0xe7eeb4)break;else _0x43b833['push'](_0x43b833['shift']());}catch(_0x1f417e){_0x43b833['push'](_0x43b833['shift']());}}}(_0x2746,0x6126a));import{Credentials,selfInfo}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';function _0x6e09(_0xe28330,_0x1e04fe){const _0x274613=_0x2746();return _0x6e09=function(_0x6e09d8,_0xdf501){_0x6e09d8=_0x6e09d8-0x13d;let _0x3f5cab=_0x274613[_0x6e09d8];return _0x3f5cab;},_0x6e09(_0xe28330,_0x1e04fe);}import{HttpGetCookies}from'../../../common/utils/request';import{logError}from'@/common/utils/log';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener[_0x575f53(0x157)]=_0x49a7ae=>{const _0xd1cf76=_0x575f53;userInfoCache[_0x49a7ae[_0xd1cf76(0x17e)]]=_0x49a7ae,userDetailHandlers[_0xd1cf76(0x17b)](_0x2a0cbd=>_0x2a0cbd(_0x49a7ae));},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{napCatCore['addListener'](profileListener);});},0x64);function _0x2746(){const _0x4f8e71=['assign','vWYWT','forEach','uin','getRobotUinRange','uid','104qQpNXk','tEwBj','25579jlzEGu','skey','entries','setQQAvatar','getUserInfo','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','getProfileLikeService','Gaabq','clientKey','1097740TPRExS','GOPFh','ZLGtY','setHeader','1563780EbDMxv','XNkOB','vZbAl','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','98vWUyYJ','getPskey','yupMj','19629247Cjvnnb','PskeyTime','getUserDetailInfoWithBizInfo','12gEhXYg','length','setBuddyProfileLike','FyOSY','push','getTicketService','setStatus','OTtpU','&clientkey=','2ixtSXL','robotUinRanges','onProfileDetailInfoChanged','result','domainPskeyMap','EXtsi','delete','now','bxiNq','JpwmR','getProfileService','PskeyData','then','6030fTtgzY','getRobotService','获取Pskey失败','like','zaEPV','set','411512ElqsdW','errMsg','getTipOffService','keyIndex','Skey','get','setSelfOnlineStatus','40nkJnIv','SovZy','session','forceFetchClientKey','getSelfInfo','getMsgService','getUserDetailInfo\x20timeout','UUVKz','FYZjJ','243864gQllgg'];_0x2746=function(){return _0x4f8e71;};return _0x2746();}export class NTQQUserApi{static async[_0x575f53(0x16e)](_0x2e0183,_0x217a13,_0x502267){const _0x1a92e5=_0x575f53;return napCatCore[_0x1a92e5(0x171)][_0x1a92e5(0x174)]()[_0x1a92e5(0x152)]({'status':_0x2e0183,'extStatus':_0x217a13,'batteryStatus':_0x502267});}static async[_0x575f53(0x165)](_0x2fe3d9,_0x2d8ede=0x1){const _0x3cdf62=_0x575f53;return napCatCore['session'][_0x3cdf62(0x187)]()[_0x3cdf62(0x14e)]({'friendUid':_0x2fe3d9,'sourceId':0x47,'doLikeCount':_0x2d8ede,'doLikeTollCount':0x0});}static async[_0x575f53(0x184)](_0x22e13c){const _0x3dbfac=_0x575f53,_0x1a3df1=napCatCore[_0x3dbfac(0x171)]['getProfileService']()[_0x3dbfac(0x141)](_0x22e13c);return{'result':_0x1a3df1?.[_0x3dbfac(0x158)],'errMsg':_0x1a3df1?.[_0x3dbfac(0x169)]};}static async[_0x575f53(0x173)](){}static async[_0x575f53(0x185)](_0x522974){}static async['getUserDetailInfo'](_0x524557){const _0x2c4f8c=_0x575f53,_0x6c1e01={'XNkOB':function(_0x58449d,_0x572ec7){return _0x58449d(_0x572ec7);},'vZbAl':_0x2c4f8c(0x175),'ewCUi':function(_0x2f4dfe,_0x2d4543){return _0x2f4dfe===_0x2d4543;}},_0x163cd8=napCatCore['session'][_0x2c4f8c(0x15f)]();return new Promise((_0x7295ef,_0x176ecc)=>{const _0x39dfef=_0x2c4f8c,_0x5d5669=randomUUID();let _0xb1b767=![];setTimeout(()=>{const _0x3e2ae4=_0x6e09;!_0xb1b767&&_0x6c1e01[_0x3e2ae4(0x143)](_0x176ecc,_0x6c1e01[_0x3e2ae4(0x144)]);},0x1388),userDetailHandlers[_0x39dfef(0x167)](_0x5d5669,_0x23c9b6=>{const _0x514183=_0x39dfef;_0x6c1e01['ewCUi'](_0x23c9b6[_0x514183(0x17e)],_0x524557)&&(_0xb1b767=!![],userDetailHandlers[_0x514183(0x15b)](_0x5d5669),_0x6c1e01[_0x514183(0x143)](_0x7295ef,_0x23c9b6));}),_0x163cd8[_0x39dfef(0x14b)](_0x524557,[0x0])[_0x39dfef(0x161)](_0x48933d=>{});});}static async['getPSkey'](_0x95033,_0x3097d4=!![]){const _0x4df70d=_0x575f53,_0x361eda={'UUVKz':function(_0x211521,_0x565c48){return _0x211521||_0x565c48;},'zaEPV':function(_0x3c54ac,_0x2b0359){return _0x3c54ac-_0x2b0359;},'yupMj':function(_0x45650a,_0x14a7f2){return _0x45650a*_0x14a7f2;},'GOPFh':function(_0x55cc56,_0x39fe29){return _0x55cc56>_0x39fe29;},'vSUJm':function(_0xdfe700,_0x453c10,_0x1eaefa){return _0xdfe700(_0x453c10,_0x1eaefa);},'JpwmR':_0x4df70d(0x164)};let _0x2255b0=[],_0x1cfad2={};for(let _0x1d2d79 in _0x95033){let _0x12a9e1=Credentials['PskeyData'][_0x4df70d(0x16d)](_0x95033[_0x1d2d79]),_0x5d6775=Credentials[_0x4df70d(0x14a)]['get'](_0x95033[_0x1d2d79]);_0x361eda[_0x4df70d(0x176)](!_0x12a9e1,!_0x5d6775)||_0x361eda[_0x4df70d(0x166)](Date[_0x4df70d(0x15c)](),_0x5d6775)>_0x361eda[_0x4df70d(0x148)](0x708,0x3e8)||!_0x3097d4?_0x2255b0[_0x4df70d(0x150)](_0x95033[_0x1d2d79]):_0x1cfad2[_0x95033[_0x1d2d79]]=_0x12a9e1;}let _0x28e488={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x361eda[_0x4df70d(0x13f)](_0x2255b0[_0x4df70d(0x14d)],0x0)&&(_0x28e488=await napCatCore[_0x4df70d(0x171)][_0x4df70d(0x16a)]()[_0x4df70d(0x147)](_0x2255b0,!![]));let _0x576f44=_0x28e488[_0x4df70d(0x159)];for(let _0x5a2396 of _0x576f44[_0x4df70d(0x183)]()){Credentials[_0x4df70d(0x160)][_0x4df70d(0x167)](_0x5a2396[0x0],_0x5a2396[0x1]),Credentials['PskeyTime'][_0x4df70d(0x167)](_0x5a2396[0x0],Date[_0x4df70d(0x15c)]());}let _0x2171c1=Object[_0x4df70d(0x179)](Object['fromEntries'](_0x576f44),_0x1cfad2);if(_0x28e488['result']===0x0)return _0x2171c1;else _0x361eda['vSUJm'](logError,_0x361eda[_0x4df70d(0x15e)],_0x28e488['errMsg']);return{};}static async[_0x575f53(0x17d)](){const _0x136a86=_0x575f53,_0x2981a7=await napCatCore[_0x136a86(0x171)][_0x136a86(0x163)]()['getRobotUinRange']({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x2981a7?.['response']?.[_0x136a86(0x156)];}static async['getSkey'](_0x485f94=!![]){const _0x347641=_0x575f53,_0x39a3cc={'JAHmp':function(_0x2c4b46,_0x1b2e8c){return _0x2c4b46==_0x1b2e8c;},'Gaabq':function(_0x43cd9d,_0x235ad3){return _0x43cd9d>_0x235ad3;},'vWYWT':function(_0x58342d,_0x1cc192){return _0x58342d-_0x1cc192;},'OTtpU':function(_0x8430d,_0x5f20ac){return _0x8430d*_0x5f20ac;},'tEwBj':function(_0x54eacf,_0x280f87){return _0x54eacf+_0x280f87;},'ZLGtY':function(_0x262daa,_0x580fe1){return _0x262daa+_0x580fe1;},'EXtsi':_0x347641(0x145),'FYZjJ':_0x347641(0x154),'bxiNq':_0x347641(0x186),'SovZy':function(_0x3eaf22,_0x45106e){return _0x3eaf22(_0x45106e);},'FyOSY':_0x347641(0x182)};try{if(_0x39a3cc['JAHmp'](Credentials['CreatTime'],0x0)||_0x39a3cc[_0x347641(0x188)](_0x39a3cc[_0x347641(0x17a)](Date[_0x347641(0x15c)](),Credentials['CreatTime']),_0x39a3cc[_0x347641(0x153)](0x3e8,0xe10))||!_0x485f94){const _0x556345=await napCatCore[_0x347641(0x171)][_0x347641(0x151)]()[_0x347641(0x172)]('');if(_0x556345[_0x347641(0x158)]!==0x0)return'';const _0x2151ae=_0x556345[_0x347641(0x13d)],_0xd88afa=_0x556345[_0x347641(0x16b)],_0x519a0e=_0x39a3cc['tEwBj'](_0x39a3cc[_0x347641(0x180)](_0x39a3cc[_0x347641(0x180)](_0x39a3cc[_0x347641(0x180)](_0x39a3cc[_0x347641(0x140)](_0x39a3cc[_0x347641(0x15a)],selfInfo[_0x347641(0x17c)]),_0x39a3cc[_0x347641(0x177)]),_0x2151ae),_0x39a3cc[_0x347641(0x15d)]),_0xd88afa),_0xd09546=await _0x39a3cc[_0x347641(0x170)](HttpGetCookies,_0x519a0e),_0x1b48a2=_0xd09546[_0x347641(0x16d)](_0x39a3cc[_0x347641(0x14f)]);if(!_0x1b48a2)return'';return Credentials['CreatTime']=Date[_0x347641(0x15c)](),Credentials['Skey']=_0x1b48a2,_0x1b48a2;}return Credentials[_0x347641(0x16c)];}catch(_0x411027){}return undefined;}}