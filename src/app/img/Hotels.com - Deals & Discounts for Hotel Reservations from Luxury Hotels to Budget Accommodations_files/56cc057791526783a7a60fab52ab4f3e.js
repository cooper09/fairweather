Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.data.resolve(["49694","54512","54506"],function(manage_49694,manage_54512,manage_54506){var dl_obj=Bootstrapper.dataManager?Bootstrapper.dataManager.getData():{};VisitBucket=function(){var Bin="";if(commonDataBlock.user.segments.visitCount3Month<=3){Bin="1-3";return Bin}if(commonDataBlock.user.segments.visitCount3Month>3&&commonDataBlock.user.segments.visitCount3Month<=
6){Bin="4-6";return Bin}else return"6_or_greater"};PixelType=function(){var type="";if(/.*confirmation.*/i.test(dl_obj.PagepageName)===true){type="confirmation";return type}else return"visit"};Platform=function(){var Platform="";if(dl_obj.UserplatformId==="Desktop"){Platform="Desktop";return Platform}if(dl_obj.UserplatformId==="Mob :: Web"||dl_obj.UserplatformId==="Mob :: TabWeb"){Platform="MobileWeb";return Platform}if(/.*App.*/i.test(dl_obj.UserplatformId)){Platform="App";return Platform}else return"MobileWeb"};
App=function(){var App="";if(dl_obj.UserplatformId==="Desktop"){App="web";return App}if(dl_obj.UserplatformId==="Mob :: Web"||dl_obj.UserplatformId==="Mob :: TabWeb"){App="web";return App}if(/.*App.*/i.test(dl_obj.UserplatformId)){App="app";return App}else return"web"};(new Image).src="https://pt.ispot.tv/v2/TC-2535-1.gif?"+"\x26app\x3d"+App()+"\x26type\x3d"+PixelType()+"\x26CID\x3d"+dl_obj.Userguid+"\x26customdata\x3d"+"VisitMktingChnl_"+manage_54512+","+"VisitBin_"+VisitBucket()+","+"RewardsTier_"+
dl_obj.UserwrTier+","+"RLTMktingChnl_"+manage_54506+","+"Platform_"+Platform()+"\x26"+"refid\x3d"+"RoomNights_"+dl_obj.SearchnumNights+","+"BookingValue_"+dl_obj.BookingvaluePaidUSD+","+"30dMktingChnl_"+manage_49694})},2582042,548114);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var dl="dataLayer";window[dl]=window[dl]||[];var ids=[];ids.push("AW-1030185154");ids.push("DC-6278228");ids.push("AW-813409038");var url="//www.googletagmanager.com/gtag/js?id\x3d"+ids[0]+(dl!=="dataLayer"?"\x26l\x3d"+dl:"");function callbackFunc(){for(var i=0;i<ids.length;i++)gtag("config",ids[i])}if(!window.gtag){window.gtag=function(){window[dl].push(arguments)};
gtag("js",new Date);Bootstrapper.loadScriptCallback(url,callbackFunc)}else callbackFunc()},2503513,[2683882],528581,[270434]);