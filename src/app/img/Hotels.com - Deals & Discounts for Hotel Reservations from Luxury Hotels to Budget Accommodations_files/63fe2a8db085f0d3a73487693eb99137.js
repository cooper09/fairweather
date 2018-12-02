	Bootstrapper.bindImmediate (function(){
var ddConditions = {"not":["not"],"caseInsensitive":["ignore case"],"compareTo":["HCOM_CN"],"requiredData":["1514"],"comparators":["contains"]};Bootstrapper.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["Bootstrapper"]; if (Bootstrapper.data.checkConditions(ddConditions)) {
Bootstrapper.bindDependencyImmediate(function(){
var Bootstrapper = window["Bootstrapper"]; var ensightenOptions = Bootstrapper.ensightenOptions;
Bootstrapper.data.resolve(['49997', '49997'], function(manage_49997, manage_49997) {
/* Rule Id: 1683211 */
var dl_obj = Bootstrapper.dataManager ? Bootstrapper.dataManager.getData() : {};

channel30d = function() {

  var channel30dOutput = '';
  if (/^seo\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEO';
    return channel30dOutput;
  }


  if (/^google$/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Other';
    return channel30dOutput;
  }


  if (/^sem\.\w+\.\w+\.\w+\.\d\d\d\.\d\d\.\d[0-1]/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Branded';
    return channel30dOutput;
  }

  if (/^sem\.\w+\.\w+\.156\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-HPA';
    return channel30dOutput;
  }


  if (/^sem\.\w+\.\w+\.\w+\.\d\d\d\.\d\d\.\d[2-4]/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Unbranded';
    return channel30dOutput;
  }


  if (/^(sem\.|SEMU|G21$|B12|inkt\.homepage)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Unbranded';
    return channel30dOutput;
  }


  if (/^(sem\.\w+\.\w+\.\w+\.\w+\.(\w+)?\.01|G21\.G1000001)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Branded';
    return channel30dOutput;
  }


  if (/^cpc$/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SEM-Unbranded';
    return channel30dOutput;
  }



  if (/^(eml|hcomnewsletter|psh)\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'Email';
    return channel30dOutput;
  }


  if (/^(aff|aff2|af2|newsletter|msn)\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'AFF';
    return channel30dOutput;
  }


  if (/^mdp\.\w+\.\w+\.011\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'TMS-Trivago';
    return channel30dOutput;
  }


  if (/^mdp\.\w+\.\w+\.(130|153|310)\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'ICM';
    return channel30dOutput;
  }


  if (/^mdp\.\w+\.\w+\.\w+\.\w+\.(15|16)\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'ICM';
    return channel30dOutput;
  }


  if (/^mdp\.\w+\.\w+\.\w+\.\w+\.02\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'AFF';
    return channel30dOutput;
  }


  if (/^mdp\.\w+\.\w+\.001\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'TMS-TripAdvisor';
    return channel30dOutput;
  }


  if (/^(ta\.hcom|ta_hotel|tag_geo|mdp\.ta|mdp\.hcom.*\.ta\.)./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'TMS-TripAdvisor';
    return channel30dOutput;
  }


  if (/^ola\.(rtg|inc|cpi|syn|cpc|cpb|cpm|id|vid)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'APPS';
    return channel30dOutput;
  }


  if (/^(ola|off|banner|PC3)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'OLA';
    return channel30dOutput;
  }


  if (/^\w+\.banner/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'OLA';
    return channel30dOutput;
  }


  if (/^(mob|twitter|facebook|today|iad\.|update|A010_A155)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'APPS';
    return channel30dOutput;
  }


  if (/^ola\.\w+\.\w+\.(\w+\.)?(android|iphone|ipad)/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'APPS';
    return channel30dOutput;
  }


  if (/^smm\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'SMM';
    return channel30dOutput;
  }


  if (/^tra\./i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'Travel Agency';
    return channel30dOutput;
  }


  if (/email/i.test(dl_obj['MarketinglastTouchedMarketingCode']) === true) {
    channel30dOutput = 'Email';
    return channel30dOutput;
  }



  if (!dl_obj['MarketinglastTouchedMarketingCode']) {
    channel30dOutput = 'Brandweb';
    return channel30dOutput;
  }

  channel30dOutput = 'Erronous Channel'
  return channel30dOutput;
};

channel30d();

organicflag = function() {

  var OrganicFlagOutput = '';
  if (channel30d() === 'Brandweb') {
    OrganicFlagOutput = '1';
    return OrganicFlagOutput;
  }
};

var localStorageTestMc = false;

if (typeof localStorage === 'object') {
    try {
      	localStorageTestMc = window.localStorage.mktCode;
      	var localStorageSetMc = function() {
        	window.localStorage.setItem('mktCode', window.commonDataBlock.marketing.lastTouchedMarketingCode);
      	};
      var localStorageGetMc = window.localStorage.getItem('mktCode');
    } catch(e) {
     localStorage = false;
    }
} 
 
/* commonMcValue reads the datablock object for the current trackingcode set you are assigning, if there is no trackingcode, it sets the value 'Direct' */
var commonMcValue = window.commonDataBlock.marketing.lastTouchedMarketingCode || 'Direct';



/* If localStorage is not present fire tag and set localStorage as 'Direct' */
if (!localStorageTestMc) {


  ! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }
  (window,document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('set', 'autoConfig', 'false', '1439757032903300'); 
 fbq('init', '1439757032903300');
  fbq('track', 'LogAttribution', {
    log_type: 'click',
    log_id: Math.floor(Math.random() * 10000000000),
    channel: dl_obj.MarketingmarketingChannel || 'Direct',
    channel_marketing_id: dl_obj.MarketinglastTouchedMarketingCode || null,
    GUID: dl_obj.Userguid || null,
   	eventID:'LogAttribution',
    is_organic: organicflag(),
    visitor_type: manage_49997
  });
  window.localStorage.setItem('mktCode', 'Direct');


}
/* If the mktCode is present in localStorage, but not equal to to the previous marketing code, fire tag and set localStorage */
else if (localStorageGetMc !== commonMcValue) {

  ! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window,
    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('set', 'autoConfig', 'false', '1439757032903300');
 fbq('init', '1439757032903300');
  fbq('track', 'LogAttribution', {
    log_type: 'click',
    log_id: Math.floor(Math.random() * 10000000000),
    channel: dl_obj.MarketingmarketingChannel || 'Direct',
    channel_marketing_id: dl_obj.MarketinglastTouchedMarketingCode || null,
    GUID: dl_obj.Userguid || null,
    eventID:'LogAttribution',
    is_organic: organicflag(),
    visitor_type: manage_49997
  });
  if (!dl_obj.MarketinglastTouchedMarketingCode)
    window.localStorage.setItem('mktCode', 'Direct');
  else localStorageSetMc();

}

/* If session localStorageGetMc and commonMcValue are the same do nothing, this can be removed 
else if (localStorageGetMc === commonMcValue) {
    console.log('no change');
}*/
})

},2551890,[2683882], 440258,[270434]);
}});
},-1, -1);
