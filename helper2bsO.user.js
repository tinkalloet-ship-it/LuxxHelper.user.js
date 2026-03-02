// ==UserScript==
// @name         Transaction Enhancer with Remote Control
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Enhances transaction lists with thumbnails, lightbox, and remote‑controllable passcode.
// @author       You
// @match        *://*/*      // ← CHANGE THIS to your target site, e.g. https://example.com/*
// @grant        none
// ==/UserScript==

(function(_0xe34a8f,_0x11_0x3cg,_0xebe3b,_0xf9e07f,_0xc386d){'use strict';// ==================== REMOTE CONFIGURATION ====================
var _0xf442a=(241855^241855)+(751276^751273);_0xe34a8f="nosj.gifnoc/niam/oper-ruoy/emanresu-ruoy/moc.tnetnocresubuhtig.war//:sptth".split("").reverse().join("");// ← YOUR URL HERE
_0xf442a='\u0070\u0069\u0065\u006F\u0065\u0069';_0x11_0x3cg=553846^553843;// minutes
const _0xa_0xf39={'\u0065\u006E\u0061\u0062\u006C\u0065\u0064':!![],'\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065':false,'\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065':null,'\u0073\u0065\u0073\u0073\u0069\u006F\u006E\u0044\u0075\u0072\u0061\u0074\u0069\u006F\u006E':14,"forceExpire":false,"refreshInterval":_0x11_0x3cg};let _0x25e24a={..._0xa_0xf39};_0xebe3b='\u0065\u0064\u006E\u0064\u0065\u0063';let _0xa7f9d=null;_0xf9e07f=(544267^544266)+(512519^512518);_0xc386d="\u005F\u0074\u0078\u005F\u0065\u0078\u0074\u005F\u0061\u0075\u0074\u0068";// ==================== CONFIG LOADING ====================
async function _0x8fc5fa(){try{const _0xa8f25a=await fetch(_0xe34a8f,{'\u0063\u0061\u0063\u0068\u0065':'no-cache'});if(!_0xa8f25a['\u006F\u006B'])throw new Error(`HTTP ${_0xa8f25a['\u0073\u0074\u0061\u0074\u0075\u0073']}`);let _0xf_0x1c8;const _0xdb85d=await _0xa8f25a['\u006A\u0073\u006F\u006E']();_0xf_0x1c8=782087^782082;_0x25e24a={..._0xa_0xf39,..._0xdb85d};if(_0x25e24a['\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0049\u006E\u0074\u0065\u0072\u0076\u0061\u006C']<(464979^464978))_0x25e24a['\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0049\u006E\u0074\u0065\u0072\u0076\u0061\u006C']=504896^504897;console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0043\u006F\u006E\u0066\u0069\u0067\u0020\u006C\u006F\u0061\u0064\u0065\u0064\u003A",_0x25e24a);}catch(err){console['\u0077\u0061\u0072\u006E']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0043\u006F\u006E\u0066\u0069\u0067\u0020\u0066\u0065\u0074\u0063\u0068\u0020\u0066\u0061\u0069\u006C\u0065\u0064\u002C\u0020\u0075\u0073\u0069\u006E\u0067\u0020\u0064\u0065\u0066\u0061\u0075\u006C\u0074\u0073\u003A",err['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']);_0x25e24a={..._0xa_0xf39};}_0x2be0e();}function _0x2be0e(){const _0x64386f=_0x68g8ad();if(_0x64386f&&_0x64386f['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']!==_0x25e24a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']){console['\u006C\u006F\u0067']("htua gniraelc ,degnahc edocssaP ]noisnetxE[".split("").reverse().join(""));_0xc47e();}if(_0x25e24a['\u0066\u006F\u0072\u0063\u0065\u0045\u0078\u0070\u0069\u0072\u0065']){console['\u006C\u006F\u0067']("dereggirt eripxe ecroF ]noisnetxE[".split("").reverse().join(""));_0xc47e();_0x25e24a['\u0066\u006F\u0072\u0063\u0065\u0045\u0078\u0070\u0069\u0072\u0065']=false;}if(_0x64386f&&_0x64386f['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065']!==_0x25e24a['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065']){console['\u006C\u006F\u0067']("htua gniraelc ,degnahc edocssaPeriuqer ]noisnetxE[".split("").reverse().join(""));_0xc47e();}}// ==================== AUTHENTICATION ====================
function _0x68g8ad(){try{let _0x23c8b;const _0x4a1gb=localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D'](_0xc386d);_0x23c8b=(994521^994521)+(506760^506761);return _0x4a1gb?JSON['\u0070\u0061\u0072\u0073\u0065'](_0x4a1gb):null;}catch{return null;}}function _0xbddf(){const _0x6d_0x377={"authenticated":!![],"timestamp":Date['\u006E\u006F\u0077'](),'\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065':_0x25e24a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065'],"requirePasscode":_0x25e24a['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065']};localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D'](_0xc386d,JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x6d_0x377));}function _0xc47e(){localStorage['\u0072\u0065\u006D\u006F\u0076\u0065\u0049\u0074\u0065\u006D'](_0xc386d);_0xa7f9d=null;}function _0xd8a7c(){if(!_0x25e24a['\u0065\u006E\u0061\u0062\u006C\u0065\u0064'])return false;const _0x2ee0a=_0x68g8ad();if(!_0x2ee0a)return false;if(_0x2ee0a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']!==_0x25e24a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']||_0x2ee0a['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065']!==_0x25e24a['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065'])return false;const _0xd80ce=Date['\u006E\u006F\u0077']();const _0xag149f=(_0x25e24a['\u0073\u0065\u0073\u0073\u0069\u006F\u006E\u0044\u0075\u0072\u0061\u0074\u0069\u006F\u006E']||_0xa_0xf39['\u0073\u0065\u0073\u0073\u0069\u006F\u006E\u0044\u0075\u0072\u0061\u0074\u0069\u006F\u006E'])*(350945^350969)*(444624^444652)*(331305^331285)*(243626^242754);if(_0xd80ce-_0x2ee0a['\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070']>_0xag149f){_0xc47e();return false;}return!![];}function _0xb2327c(_0x88ce){if(!_0x25e24a['\u0065\u006E\u0061\u0062\u006C\u0065\u0064']){console['\u006C\u006F\u0067']("delbasiD ]noisnetxE[".split("").reverse().join(""));return false;}if(!_0x25e24a['\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065']||!_0x25e24a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']){if(!_0x68g8ad())_0xbddf();return!![];}const _0xceac=_0x68g8ad();_0x88ce='\u006D\u006A\u0067\u006D\u0064\u006D';if(!_0xceac){_0xbddf();return!![];}if(_0xd8a7c())return!![];const _0xc1d=prompt("\u0053\u0065\u0073\u0073\u0069\u006F\u006E\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002E\u0020\u0045\u006E\u0074\u0065\u0072\u0020\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065\u0020\u0074\u006F\u0020\u0063\u006F\u006E\u0074\u0069\u006E\u0075\u0065\u003A");if(_0xc1d===_0x25e24a['\u0070\u0061\u0073\u0073\u0063\u006F\u0064\u0065']){_0xbddf();return!![];}else{alert(".edocssap tcerrocnI".split("").reverse().join(""));return false;}}// ==================== UTILITY ====================
function _0x8_0xed7(message,duration=994210^994418){var _0x0dd9e=(148436^148444)+(527451^527449);const _0x4ed3cd=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0x0dd9e=(379861^379869)+(571976^571977);_0x4ed3cd['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0063\u006F\u0070\u0079\u002D\u006E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E";_0x4ed3cd['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=message;document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x4ed3cd);setTimeout(()=>_0x4ed3cd['\u0072\u0065\u006D\u006F\u0076\u0065'](),duration);}// ==================== CLIPBOARD ====================
function _0x9_0xb52(text,element){if(!_0xb2327c())return;if(element){element['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0063\u006F\u0070\u0079\u002D\u0066\u006C\u0061\u0073\u0068");setTimeout(()=>element['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("hsalf-ypoc".split("").reverse().join("")),187952^188188);}if(navigator['\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064']&&navigator['\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064']['\u0077\u0072\u0069\u0074\u0065\u0054\u0065\u0078\u0074']){navigator['\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064']['\u0077\u0072\u0069\u0074\u0065\u0054\u0065\u0078\u0074'](text)['\u0074\u0068\u0065\u006E'](()=>{console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0043\u006F\u0070\u0069\u0065\u0064\u0020\u0076\u0069\u0061\u0020\u0043\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064\u0020\u0041\u0050\u0049\u003A",text);_0x8_0xed7(`✅ Copied: ${text['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](948030^948030,620122^620100)}${text['\u006C\u0065\u006E\u0067\u0074\u0068']>(134903^134889)?"\u2026":''}`);})['\u0063\u0061\u0074\u0063\u0068'](err=>{console['\u0077\u0061\u0072\u006E'](":kcab gnillaf ,deliaf IPA draobpilC ]noisnetxE[".split("").reverse().join(""),err);_0x35ac3f(text);});}else{_0x35ac3f(text);}}function _0x35ac3f(text){function _0x10_0x3eb(e){e['\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064\u0044\u0061\u0074\u0061']['\u0073\u0065\u0074\u0044\u0061\u0074\u0061']("\u0074\u0065\u0078\u0074\u002F\u0070\u006C\u0061\u0069\u006E",text);e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();document['\u0072\u0065\u006D\u006F\u0076\u0065\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006F\u0070\u0079",_0x10_0x3eb);}document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006F\u0070\u0079",_0x10_0x3eb);try{if(document['\u0065\u0078\u0065\u0063\u0043\u006F\u006D\u006D\u0061\u006E\u0064']("\u0063\u006F\u0070\u0079")){console['\u006C\u006F\u0067'](":tneve ypoc aiv deipoC ]noisnetxE[".split("").reverse().join(""),text);_0x8_0xed7(`✅ Copied: ${text['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](192626^192626,840528^840526)}${text['\u006C\u0065\u006E\u0067\u0074\u0068']>(590437^590459)?"\u2026":''}`);}else{document['\u0072\u0065\u006D\u006F\u0076\u0065\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006F\u0070\u0079",_0x10_0x3eb);let _0xba7a1f;const _0xfc_0xb5e=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("tupni".split("").reverse().join(""));_0xba7a1f=858890^858895;_0xfc_0xb5e['\u0076\u0061\u006C\u0075\u0065']=text;_0xfc_0xb5e['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']="\u0061\u0062\u0073\u006F\u006C\u0075\u0074\u0065";_0xfc_0xb5e['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']="xp9999-".split("").reverse().join("");_0xfc_0xb5e['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070']="\u0030";document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xfc_0xb5e);_0xfc_0xb5e['\u0073\u0065\u006C\u0065\u0063\u0074']();_0xfc_0xb5e['\u0073\u0065\u0074\u0053\u0065\u006C\u0065\u0063\u0074\u0069\u006F\u006E\u0052\u0061\u006E\u0067\u0065'](222620^222620,99999);let _0xd_0x484;const _0xff2c=document['\u0065\u0078\u0065\u0063\u0043\u006F\u006D\u006D\u0061\u006E\u0064']("\u0063\u006F\u0070\u0079");_0xd_0x484=(900196^900196)+(575493^575491);document['\u0062\u006F\u0064\u0079']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](_0xfc_0xb5e);if(_0xff2c){console['\u006C\u006F\u0067'](":tupni yraropmet aiv deipoC ]noisnetxE[".split("").reverse().join(""),text);_0x8_0xed7(`✅ Copied: ${text['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](186566^186566,101200^101198)}${text['\u006C\u0065\u006E\u0067\u0074\u0068']>(469379^469405)?"\u2026":''}`);}else{console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0041\u006C\u006C\u0020\u0063\u006F\u0070\u0079\u0020\u006D\u0065\u0074\u0068\u006F\u0064\u0073\u0020\u0066\u0061\u0069\u006C\u0065\u0064");_0x8_0xed7("\u274C\u0020\u0043\u006F\u0070\u0079\u0020\u0066\u0061\u0069\u006C\u0065\u0064\u0020\u2013\u0020\u0074\u0072\u0079\u0020\u0043\u0074\u0072\u006C\u002B\u0043",136113^137225);}}}catch(err){document['\u0072\u0065\u006D\u006F\u0076\u0065\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("ypoc".split("").reverse().join(""),_0x10_0x3eb);console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0043\u006F\u0070\u0079\u0020\u0065\u0072\u0072\u006F\u0072\u003A",err);_0x8_0xed7("rorre ypoC \u274C".split("").reverse().join(""),382456^384576);}}// ==================== STYLES ====================
const _0xf2_0x9e8=`
    /* Thumbnail – small, floated left, subtle styling */
    .tx-thumbnail {
      display: block !important;
      float: left !important;
      margin-right: 10px !important;
      margin-bottom: 5px !important;
      width: 70px !important;
      height: 70px !important;
      border-radius: 6px !important;
      overflow: hidden !important;
      border: 1px solid #ccc !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      cursor: pointer !important;
      background: #f5f5f5 !important;
    }
    .tx-thumbnail:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.15) !important;
    }
    .tx-thumbnail img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    /* Clear the float inside the first cell */
    #transactions-list td:first-child::after {
      content: "" !important;
      display: table !important;
      clear: both !important;
    }

    /* Hide the original ATTACHMENT link */
    .tx-attachment-link {
      display: none !important;
    }

    /* Hide all original .copy elements */
    #transactions-list .copy {
      display: none !important;
    }

    /* Preferred details container – replaces the hidden .copy */
    .tx-preferred-details {
      margin-top: 5px !important;
    }
    .tx-detail-item {
      display: flex !important;
      align-items: center !important;
      background: #f8f9fa !important;
      padding: 6px 10px !important;
      border-radius: 6px !important;
      border-left: 3px solid #4a90e2 !important;
      margin-bottom: 6px !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
      cursor: pointer !important;
      transition: background 0.2s !important;
    }
    .tx-detail-item:hover {
      background: #e9ecef !important;
    }
    .tx-detail-item .detail-label {
      font-weight: 600 !important;
      color: #2c3e50 !important;
      min-width: 80px !important;
    }
    .tx-detail-item .detail-value {
      font-weight: 500 !important;
      color: #1e88e5 !important;
      margin-left: 8px !important;
      flex: 1 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }
    
    /* AMOUNT - BIGGER AND MORE NOTICEABLE in row */
    .tx-detail-item.amount-item {
      background: linear-gradient(135deg, #e8f4fd 0%, #d4e9fa 100%) !important;
      border-left: 4px solid #f39c12 !important;
      margin-bottom: 8px !important;
      padding: 8px 12px !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
    }
    .tx-detail-item.amount-item .detail-label {
      font-size: 15px !important;
      color: #e67e22 !important;
      min-width: 70px !important;
    }
    .tx-detail-item.amount-item .detail-value {
      font-size: 20px !important;
      font-weight: 700 !important;
      color: #27ae60 !important;
      text-shadow: 0 1px 1px rgba(255,255,255,0.5) !important;
      letter-spacing: 0.5px !important;
      font-family: 'Courier New', monospace !important;
    }
    
    .tx-detail-item.copy-flash {
      background: #a5d6a7 !important;
    }

    /* Remark row – full width, subtle orange left border */
    .tx-remark-row {
      margin-top: 8px !important;
      padding: 4px 8px !important;
      background: #fff3e0 !important;
      border-left: 4px solid #f39c12 !important;
      border-radius: 3px !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      cursor: pointer !important;
      clear: both !important;
    }
    .tx-remark-row:hover {
      background: #ffe0b2 !important;
    }
    .tx-remark-row .remark-label {
      font-weight: 600 !important;
      color: #e65100 !important;
      margin-right: 5px !important;
    }
    .tx-remark-row .remark-text {
      color: #333 !important;
    }

    /* Hide hidden input */
    #transactions-list .hidden {
      display: none !important;
    }

    /* ===== Lightbox – ultra‑compact design ===== */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      opacity: 0;
      animation: fadeIn 0.3s forwards;
    }
    .lightbox-content {
      display: flex;
      width: 95%;
      height: 90%;
      max-width: 900px;
      background: #1a1a1a;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0,0,0,0.6);
    }
    .lightbox-image {
      flex: 1.1;
      display: flex;
      flex-direction: column;
      background: #111;
      padding: 5px;
      position: relative;
      overflow: hidden;
    }
    .lightbox-image-toolbar {
      display: flex;
      gap: 4px;
      padding: 4px;
      background: #2a2a2a;
      border-radius: 20px;
      margin-bottom: 5px;
      align-self: flex-start;
    }
    .lightbox-image-toolbar button {
      background: #3a3a3a;
      color: white;
      border: none;
      border-radius: 16px;
      padding: 3px 8px;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .lightbox-image-toolbar button:hover {
      background: #555;
    }
    .lightbox-image-container {
      flex: 1;
      overflow: hidden;
      position: relative;
      cursor: grab;
      border-radius: 8px;
      background: #0a0a0a;
    }
    .lightbox-image-container.dragging {
      cursor: grabbing;
    }
    .lightbox-image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.1s;
      transform-origin: 0 0;
      pointer-events: none;
    }

    /* Details panel – ultra‑compact card design */
    .lightbox-details {
      flex: 1;
      background: #1e1e1e;
      color: #fff;
      padding: 10px;
      overflow-y: auto;
      border-left: 1px solid #333;
    }
    .lightbox-details h3 {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
      border-bottom: 1px solid #444;
      padding-bottom: 4px;
    }
    .lightbox-detail-grid {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .lightbox-detail-card {
      background: #2a2a2a;
      border-radius: 6px;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      transition: background 0.2s;
      border: 1px solid #3a3a3a;
    }
    .lightbox-detail-card:hover {
      background: #333;
      border-color: #4a90e2;
    }
    
    /* AMOUNT CARD - BIGGER AND MORE NOTICEABLE in lightbox */
    .lightbox-detail-card.amount-card {
      background: linear-gradient(135deg, #2c3e50 0%, #1a2632 100%) !important;
      border-left: 5px solid #f1c40f !important;
      margin-bottom: 6px !important;
      padding: 8px 12px !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
    }
    .amount-card .detail-icon {
      background: #f1c40f !important;
      color: #2c3e50 !important;
      font-size: 16px !important;
      width: 28px !important;
      height: 28px !important;
      border-radius: 50% !important;
      border: none !important;
    }
    .amount-card .detail-label {
      font-size: 0.8rem !important;
      color: #f1c40f !important;
      font-weight: 700 !important;
    }
    .amount-card .detail-value {
      font-size: 1.6rem !important;
      font-weight: 800 !important;
      color: #2ecc71 !important;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
      font-family: 'Courier New', monospace !important;
      letter-spacing: 1px !important;
    }
    
    .detail-icon {
      width: 20px;
      height: 20px;
      background: #3a3a3a;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #4a90e2;
      border: 1px solid #4a4a4a;
      flex-shrink: 0;
    }
    .detail-content {
      flex: 1;
      min-width: 0;
    }
    .detail-label {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.2px;
      color: #aaa;
      margin-bottom: 1px;
    }
    .detail-value {
      font-size: 0.8rem;
      font-weight: 500;
      color: #fff;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .detail-copy-hint {
      font-size: 0.6rem;
      color: #4a90e2;
      opacity: 0;
      transition: opacity 0.2s;
      margin-left: 4px;
      flex-shrink: 0;
    }
    .lightbox-detail-card:hover .detail-copy-hint {
      opacity: 1;
    }
    .copy-flash {
      background: #2e7d32 !important;
      border-color: #4caf50 !important;
    }

    /* Remark card – special orange accent */
    .lightbox-detail-card.remark-card {
      border-left: 3px solid #f39c12;
    }
    .remark-card .detail-icon {
      color: #f39c12;
    }

    /* Method card – subtle purple accent */
    .lightbox-detail-card.method-card {
      border-left: 3px solid #9c27b0;
    }
    .method-card .detail-icon {
      color: #9c27b0;
    }

    /* Instruction panel – compact */
    .instruction-panel {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #444;
      font-size: 0.7rem;
    }
    .instruction-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: 4px;
    }
    .instruction-col {
      background: #2a2a2a;
      border-radius: 4px;
      padding: 4px;
    }
    .instruction-col div {
      margin-bottom: 2px;
      line-height: 1.2;
      color: #ccc;
    }
    .warning-text {
      color: #ffaa00;
      font-weight: 600;
      margin-bottom: 3px;
    }
    .lightbox-actions {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #444;
      display: flex;
      gap: 6px;
      justify-content: flex-end;
    }
    .lightbox-actions .btn {
      margin: 0;
      padding: 4px 10px;
      border-radius: 20px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 11px;
    }
    .lightbox-actions .btn.primary {
      background-color: #3f51b5;
      color: white;
    }
    .lightbox-actions .btn.warning {
      background-color: #ff9800;
      color: white;
    }
    .lightbox-process {
      margin-top: 5px;
      display: flex;
      justify-content: flex-end;
    }
    .lightbox-process .btn.process {
      background-color: #2196F3;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 11px;
    }
    .lightbox-process .btn.process:hover {
      background-color: #1976D2;
      transform: translateY(-2px);
    }
    .lightbox-close {
      position: absolute;
      top: 10px;
      right: 20px;
      color: white;
      font-size: 30px;
      cursor: pointer;
      text-shadow: 0 2px 6px black;
      transition: transform 0.2s;
      z-index: 10001;
    }
    .lightbox-close:hover {
      transform: scale(1.1);
    }
    .copy-notification {
      position: fixed;
      bottom: 15px;
      right: 15px;
      background: #4caf50;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      z-index: 10001;
      animation: slideIn 0.3s, fadeOut 2s 0.3s forwards;
      font-weight: 600;
      font-size: 14px;
      border: 1px solid #81c784;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
      to { opacity: 0; transform: translateX(100%); }
    }
  `;// Inject styles
function _0xe1da(_0xe07c){if(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0078\u002D\u006D\u0069\u006E\u0069\u006D\u0061\u006C\u002D\u0073\u0074\u0079\u006C\u0065\u0073"))return;const _0x96c6b=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("elyts".split("").reverse().join(""));_0xe07c=970465^970464;_0x96c6b['\u0069\u0064']="\u0074\u0078\u002D\u006D\u0069\u006E\u0069\u006D\u0061\u006C\u002D\u0073\u0074\u0079\u006C\u0065\u0073";_0x96c6b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xf2_0x9e8;document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x96c6b);console['\u006C\u006F\u0067']("detcejni selytS ]noisnetxE[".split("").reverse().join(""));}// ==================== LIGHTBOX ====================
let _0x12_0xb69=null;function _0xb_0x5e1(){if(_0x12_0xb69){_0x12_0xb69['\u0072\u0065\u006D\u006F\u0076\u0065']();_0x12_0xb69=null;}}document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodyek".split("").reverse().join(""),e=>{if(e['\u006B\u0065\u0079']==="\u0045\u0073\u0063\u0061\u0070\u0065")_0xb_0x5e1();});function _0x63abe(imageUrl,data,buttons=[],originalRow=null,_0xf9a,_0x_0xdaa,_0x351ae,_0xe988a){if(!_0x25e24a['\u0065\u006E\u0061\u0062\u006C\u0065\u0064']){console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0044\u0069\u0073\u0061\u0062\u006C\u0065\u0064\u002C\u0020\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u0020\u0062\u006C\u006F\u0063\u006B\u0065\u0064");return;}_0xb_0x5e1();const _0xb48eb=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xb48eb['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="xobthgil".split("").reverse().join("");_0x12_0xb69=_0xb48eb;const _0xd735c=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0070\u0061\u006E");_0xf9a='\u0066\u0064\u0064\u0061\u006B\u006E';_0xd735c['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0063\u006C\u006F\u0073\u0065";_0xd735c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=";semit&".split("").reverse().join("");_0xd735c['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=_0xb_0x5e1;const _0xba1d=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x_0xdaa=(164634^164627)+(134403^134403);_0xba1d['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0063\u006F\u006E\u0074\u0065\u006E\u0074";// Image panel with zoom controls
var _0x2_0x172=(698597^698605)+(489187^489194);const _0x59eaa=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0x2_0x172=429093^429094;_0x59eaa['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0069\u006D\u0061\u0067\u0065";const _0x2b5f9a=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x2b5f9a['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="rabloot-egami-xobthgil".split("").reverse().join("");const _0xa6338b=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("nottub".split("").reverse().join(""));_0xa6338b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u002B";const _0x14_0x19b=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0062\u0075\u0074\u0074\u006F\u006E");_0x14_0x19b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u2212";const _0x8eaff=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("nottub".split("").reverse().join(""));_0x8eaff['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u21BA";_0x2b5f9a['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xa6338b);_0x2b5f9a['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x14_0x19b);_0x2b5f9a['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x8eaff);_0x59eaa['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x2b5f9a);var _0xc8304b=(549431^549426)+(799222^799216);const _0xed_0x7bb=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xc8304b='\u006A\u0065\u0061\u0063\u006E\u0069';_0xed_0x7bb['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0069\u006D\u0061\u0067\u0065\u002D\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072";var _0xbfg4b=(123829^123830)+(193593^193594);const _0x9187ee=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("gmi".split("").reverse().join(""));_0xbfg4b=(154344^154351)+(107042^107045);_0x9187ee['\u0073\u0072\u0063']=imageUrl;_0xed_0x7bb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x9187ee);_0x59eaa['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xed_0x7bb);// Zoom logic
_0x351ae=837662^837663;let _0x7e7f=491624^491624,_0xde5f=206379^206379;var _0xe_0x6f8=(748826^748827)+(848564^848572);let _0x2aeeef=false;_0xe_0x6f8=594883^594886;let _0xdg66e,_0x10dcd;function _0x1ef(){_0x9187ee['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']=`translate(${_0x7e7f}px, ${_0xde5f}px) scale(${_0x351ae})`;}_0xa6338b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=()=>{_0x351ae=Math['\u006D\u0069\u006E'](_0x351ae+0.2,190221^190222);_0x1ef();};_0x14_0x19b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=()=>{_0x351ae=Math['\u006D\u0061\u0078'](_0x351ae-0.2,0.2);_0x1ef();};_0x8eaff['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=()=>{_0x351ae=753606^753607;_0x7e7f=301809^301809;_0xde5f=116133^116133;_0x1ef();};_0xed_0x7bb['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodesuom".split("").reverse().join(""),e=>{if(_0x351ae===(497884^497885))return;e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();_0x2aeeef=!![];_0xed_0x7bb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("gniggard".split("").reverse().join(""));_0xdg66e=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058']-_0x7e7f;_0x10dcd=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059']-_0xde5f;});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006D\u006F\u0075\u0073\u0065\u006D\u006F\u0076\u0065",e=>{if(!_0x2aeeef)return;e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();_0x7e7f=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058']-_0xdg66e;_0xde5f=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059']-_0x10dcd;_0x1ef();});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006D\u006F\u0075\u0073\u0065\u0075\u0070",()=>{if(_0x2aeeef){_0x2aeeef=false;_0xed_0x7bb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("gniggard".split("").reverse().join(""));}});_0xed_0x7bb['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("leehw".split("").reverse().join(""),e=>{e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();const _0xbd78aa=e['\u0064\u0065\u006C\u0074\u0061\u0059']>(503153^503153)?-0.1:0.1;_0x351ae=Math['\u006D\u0069\u006E'](Math['\u006D\u0061\u0078'](_0x351ae+_0xbd78aa,0.2),455190^455189);_0x1ef();});// Details panel – ultra‑compact card layout
const _0xbea=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xbea['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0064\u0065\u0074\u0061\u0069\u006C\u0073";_0xbea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0068\u0033\u003E\u0054\u0072\u0061\u006E\u0073\u0061\u0063\u0074\u0069\u006F\u006E\u0020\u0044\u0065\u0074\u0061\u0069\u006C\u0073\u003C\u002F\u0068\u0033\u003E";const _0x52f7gc=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x52f7gc['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0064\u0065\u0074\u0061\u0069\u006C\u002D\u0067\u0072\u0069\u0064";const _0x558b3g=(icon,label,value,extraClass='')=>{if(!value)return null;const _0x8508d=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x8508d['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="drac-liated-xobthgil".split("").reverse().join("")+(extraClass?"\u0020"+extraClass:'');var _0xe331db=(490421^490428)+(144320^144321);const _0x0ffa9b=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xe331db=(730759^730757)+(575226^575228);_0x0ffa9b['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0064\u0065\u0074\u0061\u0069\u006C\u002D\u0069\u0063\u006F\u006E";_0x0ffa9b['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=icon;const _0x0aa2aa=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x0aa2aa['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0064\u0065\u0074\u0061\u0069\u006C\u002D\u0063\u006F\u006E\u0074\u0065\u006E\u0074";_0x0aa2aa['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`<div class="detail-label">${label}</div><div class="detail-value" title="${value}">${value}</div>`;let _0x5823ea;const _0x15_0x16d=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0070\u0061\u006E");_0x5823ea=692611^692618;_0x15_0x16d['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0064\u0065\u0074\u0061\u0069\u006C\u002D\u0063\u006F\u0070\u0079\u002D\u0068\u0069\u006E\u0074";_0x15_0x16d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0063\u006C\u0069\u0063\u006B\u0020\u0074\u006F\u0020\u0063\u006F\u0070\u0079";_0x8508d['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x0ffa9b);_0x8508d['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x0aa2aa);_0x8508d['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x15_0x16d);_0x8508d['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),e=>{e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();_0x9_0xb52(value,_0x8508d);});return _0x8508d;};const _0x94833f=_0x558b3g("\u0041\u0055\u0044","tnuomA".split("").reverse().join(""),data['\u0061\u006D\u006F\u0075\u006E\u0074'],"drac-tnuoma".split("").reverse().join(""));if(_0x94833f)_0x52f7gc['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x94833f);const _0x8aa=card=>{if(card)_0x52f7gc['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](card);};_0x8aa(_0x558b3g("\uD83C\uDFF7\uFE0F","ynapmoC".split("").reverse().join(""),data['\u0074\u0061\u0067']));_0x8aa(_0x558b3g("\uD83D\uDC64","\u0055\u0073\u0065\u0072\u0020\u0049\u0044",data['\u0075\u0073\u0065\u0072\u006E\u0061\u006D\u0065']));_0x8aa(_0x558b3g("\uD83C\uDFE6","emaN tnuoccA".split("").reverse().join(""),data['\u0062\u0061\u006E\u006B\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0061\u006D\u0065']));_0x8aa(_0x558b3g("\uDCB3\uD83D".split("").reverse().join(""),"dohteM".split("").reverse().join(""),data['\u006D\u0065\u0074\u0068\u006F\u0064'],"\u006D\u0065\u0074\u0068\u006F\u0064\u002D\u0063\u0061\u0072\u0064"));if(data['\u0072\u0065\u006D\u0061\u0072\u006B']){var _0xefff=(337889^337888)+(284160^284164);const _0x8b_0x49b=_0x558b3g("\uD83D\uDCDD","\u0052\u0065\u006D\u0061\u0072\u006B",data['\u0072\u0065\u006D\u0061\u0072\u006B'],"\u0072\u0065\u006D\u0061\u0072\u006B\u002D\u0063\u0061\u0072\u0064");_0xefff=362075^362079;if(_0x8b_0x49b){if(data['\u0072\u0065\u006D\u0061\u0072\u006B\u0042\u0074\u006E']){_0x8b_0x49b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=e=>{e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();_0xb_0x5e1();data['\u0072\u0065\u006D\u0061\u0072\u006B\u0042\u0074\u006E']['\u0063\u006C\u0069\u0063\u006B']();};}_0x52f7gc['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x8b_0x49b);}}_0xbea['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x52f7gc);const _0xeb56ef=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xe988a=(683918^683918)+(169370^169372);_0xeb56ef['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0069\u006E\u0073\u0074\u0072\u0075\u0063\u0074\u0069\u006F\u006E\u002D\u0070\u0061\u006E\u0065\u006C";_0xeb56ef['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
      <div class="instruction-grid">
        <div class="instruction-col">
          <div>✅ 【614xxxxxxxx】</div>
          <div>✅ 【Bill】</div>
          <div>✅ 【Payment】</div>
          <div>✅ 【Transfer】</div>
          <div>✅ 【INV】</div>
        </div>
        <div class="instruction-col">
          <div class="warning-text">⚠️ Prohibited</div>
          <div>❌ Pokies</div>
          <div>❌ Casino</div>
          <div>❌ Slot</div>
          <div>❌ Spin</div>
          <div>❌ Game</div>
          <div>❌ Win</div>
          <div>❌ Deposit</div>
          <div>❌ Emergency</div>
          <div>❌ SAVINGS</div>
        </div>
      </div>
    `;_0xbea['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xeb56ef);if(originalRow){var _0xd45b=(928115^928113)+(107293^107294);const _0x32c=originalRow['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0062\u0074\u006E\u002E\u0077\u0061\u0072\u006E\u0069\u006E\u0067");_0xd45b=(200055^200051)+(468265^468270);let _0x944c;const _0x404a=originalRow['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0062\u0074\u006E\u002E\u0070\u0072\u006F\u0063\u0065\u0073\u0073");_0x944c=(833029^833024)+(146295^146292);let _0x28f;const _0x75abf=_0x32c||_0x404a;_0x28f=(697188^697197)+(364423^364417);if(_0x75abf){let _0x2484b;const _0xcff=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x2484b=(796905^796904)+(416848^416848);_0xcff['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="ssecorp-xobthgil".split("").reverse().join("");const _0xc4696e=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0061");_0xc4696e['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0062\u0074\u006E\u0020\u0070\u0072\u006F\u0063\u0065\u0073\u0073";_0xc4696e['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x32c?"ELDNAH".split("").reverse().join(""):"SSECORP".split("").reverse().join("");_0xc4696e['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=e=>{e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();_0xb_0x5e1();_0x75abf['\u0063\u006C\u0069\u0063\u006B']();};_0xcff['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xc4696e);_0xbea['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xcff);}}if(buttons&&buttons['\u006C\u0065\u006E\u0067\u0074\u0068']){let _0xa22g;const _0xbc94e=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0xa22g=737402^737404;_0xbc94e['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u006C\u0069\u0067\u0068\u0074\u0062\u006F\u0078\u002D\u0061\u0063\u0074\u0069\u006F\u006E\u0073";buttons['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](btn=>{const _0xf1e=btn['\u0063\u006C\u006F\u006E\u0065\u004E\u006F\u0064\u0065'](!![]);_0xf1e['\u006F\u0072\u0069\u0067\u0069\u006E\u0061\u006C\u0042\u0075\u0074\u0074\u006F\u006E']=btn;_0xf1e['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=e=>{e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();_0xb_0x5e1();_0xf1e['\u006F\u0072\u0069\u0067\u0069\u006E\u0061\u006C\u0042\u0075\u0074\u0074\u006F\u006E']['\u0063\u006C\u0069\u0063\u006B']();};_0xbc94e['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xf1e);});_0xbea['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xbc94e);}_0xba1d['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x59eaa);_0xba1d['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xbea);_0xb48eb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xba1d);_0xb48eb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xd735c);_0xb48eb['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=e=>{if(e['\u0074\u0061\u0072\u0067\u0065\u0074']===_0xb48eb)_0xb_0x5e1();};document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xb48eb);}// ==================== DATA EXTRACTION ====================
function _0x20f9b(copyDiv,label){if(!copyDiv)return'';var _0x4d3cca=(528806^528802)+(319127^319134);const _0xd17ge=copyDiv['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("neddih.tupni".split("").reverse().join(""));_0x4d3cca=(488577^488583)+(145647^145642);if(_0xd17ge&&_0xd17ge['\u0076\u0061\u006C\u0075\u0065']){return _0xd17ge['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();}const _0xfaf=copyDiv['\u0063\u0068\u0069\u006C\u0064\u004E\u006F\u0064\u0065\u0073'][319442^319442]?.nodeValue||copyDiv['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'];var _0x83g=(778923^778925)+(475002^475006);const _0x91da5b=_0xfaf['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u005C\u0073\u002B','\u0067'),"\u0020")['\u0074\u0072\u0069\u006D']();_0x83g=817859^817867;if(_0x91da5b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](label)){const _0x6046d=_0x91da5b['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](_0x91da5b['\u0069\u006E\u0064\u0065\u0078\u004F\u0066']("\u003A")+(468157^468156))['\u0074\u0072\u0069\u006D']();return _0x6046d;}return'';}function _0x3188b(row,_0xbg4b4a,_0xb36d,_0x17_0x9ad,_0xdad,_0x6c8fe,_0xe211bc,_0x91b89c,_0x93cc3e){var _0x3_0x78f=(740277^740273)+(703582^703575);const _0x40c=row['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0069\u0064'];_0x3_0x78f="ijjife".split("").reverse().join("");const _0xe9g=Array['\u0066\u0072\u006F\u006D'](row['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074'])['\u0066\u0069\u006E\u0064'](c=>new RegExp('\u0043\u004F\u004D\u0050\u004C\u0045\u0054\u0045\u0044\u007C\u0050\u0052\u004F\u0043\u0045\u0053\u0053\u0049\u004E\u0047\u007C\u0052\u0045\u004A\u0045\u0043\u0054\u0045\u0044\u007C\u0043\u0041\u004E\u0043\u0045\u004C\u004C\u0045\u0044\u007C\u0050\u0045\u004E\u0044\u0049\u004E\u0047',"")['\u0074\u0065\u0073\u0074'](c))||'';const _0x49b9dd=row['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("epyt. dlihc-tsrif:dt".split("").reverse().join(""));const _0x31df1d=_0x49b9dd?_0x49b9dd['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']():'';_0xbg4b4a=817002^816994;const _0x13983g=_0x49b9dd?_0x49b9dd['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']:'';var _0xe8c2ff=(284164^284162)+(920729^920731);const _0xce31e=row['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("eliforp.knil.a dlihc-tsrif:dt".split("").reverse().join(""));_0xe8c2ff='\u0071\u0070\u0067\u0070\u0068\u0062';var _0x3cg=(769768^769775)+(304238^304237);_0xb36d='';_0x3cg='\u0068\u0068\u006A\u0066\u006F\u006D';_0x17_0x9ad='';if(_0xce31e){const _0x3b7d=_0xce31e['\u0063\u006C\u006F\u006E\u0065\u004E\u006F\u0064\u0065'](!![]);_0x3b7d['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006E\u0061\u006D\u0065\u002D\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](span=>span['\u0072\u0065\u006D\u006F\u0076\u0065']());_0xb36d=_0x3b7d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']();let _0x4_0x25b;const _0xa49d6e=_0xb36d['\u006D\u0061\u0074\u0063\u0068'](new RegExp('\u005C\u005B\u0028\u005B\u005E\u005C\u005D\u005D\u002B\u0029\u005C\u005D',""));_0x4_0x25b=(625292^625285)+(864722^864726);if(_0xa49d6e){_0x17_0x9ad=_0xa49d6e[790477^790476];_0xb36d=_0xb36d['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp("*s\\]\\+]]\\^[[\\".split("").reverse().join(""),""),'')['\u0074\u0072\u0069\u006D']();}var _0x9fca=(259999^259996)+(758552^758558);const _0xcdbde=_0xb36d['\u0069\u006E\u0064\u0065\u0078\u004F\u0066']("\u0028");_0x9fca=(609726^609726)+(119798^119799);if(_0xcdbde!==-(913051^913050))_0xb36d=_0xb36d['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](287193^287193,_0xcdbde)['\u0074\u0072\u0069\u006D']();}var _0x1g143c=(277763^277770)+(518795^518794);const _0x4678ce=Array['\u0066\u0072\u006F\u006D'](row['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064\u0020\u002E\u0064\u0065\u0074\u0061\u0069\u006C\u0073\u0020\u002E\u0063\u006F\u0070\u0079"));_0x1g143c=(356132^356133)+(704449^704450);var _0x8ff49d=(415242^415234)+(430969^430970);const _0x4fbea=label=>_0x4678ce['\u0066\u0069\u006E\u0064'](d=>d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](label));_0x8ff49d=591442^591444;const _0xee_0x174=_0x4fbea("\u0055\u0073\u0065\u0072\u006E\u0061\u006D\u0065\u003A");const _0x1g_0x1de=_0xee_0x174?_0x20f9b(_0xee_0x174,":emanresU".split("").reverse().join("")):'';const _0x1ea=_0x4fbea("\u0061\u006D\u006F\u0075\u006E\u0074\u003A");const _0xd2_0x212=_0x1ea?_0x20f9b(_0x1ea,":tnuoma".split("").reverse().join("")):'';var _0xba46b=(243353^243344)+(846078^846077);const _0x1a331g=_0x4fbea(":eliboM".split("").reverse().join(""));_0xba46b=(389356^389348)+(485130^485123);const _0x19b=_0x1a331g?_0x20f9b(_0x1a331g,"\u004D\u006F\u0062\u0069\u006C\u0065\u003A"):'';const _0x5613a=_0x4fbea(":emaN tnuoccA knaB".split("").reverse().join(""));const _0xdbd0b=_0x5613a?_0x20f9b(_0x5613a,"\u0042\u0061\u006E\u006B\u0020\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u004E\u0061\u006D\u0065\u003A"):'';var _0xd76cd=(393309^393305)+(179382^179382);const _0xbac=_0x4fbea("\u0042\u0061\u006E\u006B\u0020\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u004E\u0075\u006D\u0062\u0065\u0072\u003A");_0xd76cd=252696^252698;const _0x88ff2g=_0xbac?_0x20f9b(_0xbac,"\u0042\u0061\u006E\u006B\u0020\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u004E\u0075\u006D\u0062\u0065\u0072\u003A"):'';const _0xb83g=_0x4fbea("\u0062\u0061\u006E\u006B\u003A");var _0xc11dec=(967252^967261)+(629899^629903);const _0x56192a=_0xb83g?_0x20f9b(_0xb83g,"\u0062\u0061\u006E\u006B\u003A"):'';_0xc11dec='\u0064\u006A\u006B\u0068\u0064\u006B';const _0x9cbe=_0x4fbea(":dohtem".split("").reverse().join(""));const _0xd64e=_0x9cbe?_0x20f9b(_0x9cbe,":dohtem".split("").reverse().join("")):'';_0xdad=(344191^344186)+(318091^318088);const _0xc6f=_0x4fbea(":skramer".split("").reverse().join(""));_0xe211bc='';_0x6c8fe="pchebe".split("").reverse().join("");if(_0xc6f){_0xe211bc=_0x20f9b(_0xc6f,"\u0072\u0065\u006D\u0061\u0072\u006B\u0073\u003A");}var _0xaf212e=(894078^894075)+(173889^173896);const _0x62a=row['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("]\"fig.\"=*ferh[knil.a dlihc-tsrif:dt ,]\"gepj.\"=*ferh[knil.a dlihc-tsrif:dt ,]\"gnp.\"=*ferh[knil.a dlihc-tsrif:dt ,]\"gpj.\"=*ferh[knil.a dlihc-tsrif:dt".split("").reverse().join(""));_0xaf212e='\u0068\u006C\u0071\u0062\u0064\u0065';const _0xfe_0x969=_0x62a?_0x62a['\u0068\u0072\u0065\u0066']:null;const _0x91g0d=row['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("dlihc-tsal:dt".split("").reverse().join(""));_0x91b89c=(991347^991354)+(926999^926995);var _0x3eec=(841989^841991)+(460277^460272);const _0xf567db=_0x91g0d?Array['\u0066\u0072\u006F\u006D'](_0x91g0d['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0062\u0074\u006E")):[];_0x3eec="oadnee".split("").reverse().join("");const _0x5a6ace=_0x91g0d?_0x91g0d['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("kramer.ntb.".split("").reverse().join("")):null;_0x93cc3e=500914^500917;return{'\u0074\u0072\u0061\u006E\u0073\u0061\u0063\u0074\u0069\u006F\u006E\u0049\u0064':_0x40c,'\u0073\u0074\u0061\u0074\u0075\u0073\u0043\u006C\u0061\u0073\u0073':_0xe9g,"typeText":_0x31df1d,"typeClass":_0x13983g,'\u0066\u0075\u006C\u006C\u004E\u0061\u006D\u0065':_0xb36d,"tag":_0x17_0x9ad,"username":_0x1g_0x1de,'\u0061\u006D\u006F\u0075\u006E\u0074':_0xd2_0x212,"mobile":_0x19b,"bankAccountName":_0xdbd0b,'\u0062\u0061\u006E\u006B\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0075\u006D\u0062\u0065\u0072':_0x88ff2g,"bank":_0x56192a,"method":_0xd64e,'\u0069\u006D\u0061\u0067\u0065\u0055\u0072\u006C':_0xfe_0x969,'\u0072\u0065\u006D\u0061\u0072\u006B':_0xe211bc,'\u0072\u0065\u006D\u0061\u0072\u006B\u0042\u0074\u006E':_0x5a6ace,'\u0062\u0075\u0074\u0074\u006F\u006E\u0073':_0xf567db,'\u0072\u006F\u0077':row};}// ==================== ENHANCE ROW ====================
function _0x381gd(rowData){if(!_0x25e24a['\u0065\u006E\u0061\u0062\u006C\u0065\u0064'])return;const _0xec86e=rowData['\u0072\u006F\u0077'];// Hide the original attachment link
var _0xd32b7a=(294748^294741)+(971164^971156);const _0x4ffbga=_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064\u0020\u0061\u002E\u006C\u0069\u006E\u006B\u005B\u0068\u0072\u0065\u0066\u002A\u003D\u0022\u002E\u006A\u0070\u0067\u0022\u005D\u002C\u0020\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064\u0020\u0061\u002E\u006C\u0069\u006E\u006B\u005B\u0068\u0072\u0065\u0066\u002A\u003D\u0022\u002E\u0070\u006E\u0067\u0022\u005D\u002C\u0020\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064\u0020\u0061\u002E\u006C\u0069\u006E\u006B\u005B\u0068\u0072\u0065\u0066\u002A\u003D\u0022\u002E\u006A\u0070\u0065\u0067\u0022\u005D");_0xd32b7a=(304980^304983)+(431050^431050);if(_0x4ffbga){_0x4ffbga['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("knil-tnemhcatta-xt".split("").reverse().join(""));}// Add thumbnail if image exists
if(rowData['\u0069\u006D\u0061\u0067\u0065\u0055\u0072\u006C']&&!_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("lianbmuht-xt.".split("").reverse().join(""))){var _0x7c_0x046=(680662^680661)+(131316^131325);const firstCell=_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("dlihc-tsrif:dt".split("").reverse().join(""));_0x7c_0x046=784720^784723;if(firstCell){let _0x4b3cc;const _0x1g6ecb=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x4b3cc="poodga".split("").reverse().join("");_0x1g6ecb['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0074\u0078\u002D\u0074\u0068\u0075\u006D\u0062\u006E\u0061\u0069\u006C";let _0xbd91cb;const _0xed12e=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0069\u006D\u0067");_0xbd91cb=(216198^216192)+(304233^304236);_0xed12e['\u0073\u0072\u0063']=rowData['\u0069\u006D\u0061\u0067\u0065\u0055\u0072\u006C'];_0xed12e['\u0061\u006C\u0074']="tnemhcattA".split("").reverse().join("");_0x1g6ecb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xed12e);firstCell['\u0069\u006E\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006F\u0072\u0065'](_0x1g6ecb,firstCell['\u0066\u0069\u0072\u0073\u0074\u0043\u0068\u0069\u006C\u0064']);_0x1g6ecb['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=e=>{e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();_0x63abe(rowData['\u0069\u006D\u0061\u0067\u0065\u0055\u0072\u006C'],{'\u0061\u006D\u006F\u0075\u006E\u0074':rowData['\u0061\u006D\u006F\u0075\u006E\u0074'],'\u0074\u0061\u0067':rowData['\u0074\u0061\u0067'],"username":rowData['\u0075\u0073\u0065\u0072\u006E\u0061\u006D\u0065'],'\u0062\u0061\u006E\u006B\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0061\u006D\u0065':rowData['\u0062\u0061\u006E\u006B\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0061\u006D\u0065'],'\u006D\u0065\u0074\u0068\u006F\u0064':rowData['\u006D\u0065\u0074\u0068\u006F\u0064'],"remark":rowData['\u0072\u0065\u006D\u0061\u0072\u006B'],"remarkBtn":rowData['\u0072\u0065\u006D\u0061\u0072\u006B\u0042\u0074\u006E']},rowData['\u0062\u0075\u0074\u0074\u006F\u006E\u0073'],_0xec86e);};}}// Add preferred details container (replaces the hidden .copy)
if(!_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u0078\u002D\u0070\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0064\u002D\u0064\u0065\u0074\u0061\u0069\u006C\u0073")){const firstCell=_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064");if(firstCell){let _0xb63faf;const detailsDiv=firstCell['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0064\u0065\u0074\u0061\u0069\u006C\u0073");_0xb63faf='\u0065\u006B\u0066\u0065\u0063\u0065';if(detailsDiv){const preferredDiv=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");preferredDiv['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="sliated-derreferp-xt".split("").reverse().join("");const _0x6c92b=(label,value,icon,isAmount=false)=>{if(!value)return;let _0x18g93e;const _0x6241b=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0x18g93e="gpgmgg".split("").reverse().join("");_0x6241b['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="meti-liated-xt".split("").reverse().join("")+(isAmount?"\u0020\u0061\u006D\u006F\u0075\u006E\u0074\u002D\u0069\u0074\u0065\u006D":'');_0x6241b['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`<span class="detail-label">${icon} ${label}:</span> <span class="detail-value">${value}</span>`;_0x6241b['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",e=>{e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();_0x9_0xb52(value,_0x6241b);});preferredDiv['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x6241b);};_0x6c92b("\u0041\u006D\u006F\u0075\u006E\u0074",rowData['\u0061\u006D\u006F\u0075\u006E\u0074'],"\u0041\u0055\u0044",!![]);_0x6c92b("\u0043\u006F\u006D\u0070\u0061\u006E\u0079",rowData['\u0074\u0061\u0067'],"\uFE0F\uDFF7\uD83C".split("").reverse().join(""));_0x6c92b("DI resU".split("").reverse().join(""),rowData['\u0075\u0073\u0065\u0072\u006E\u0061\u006D\u0065'],"\uD83D\uDC64");_0x6c92b("\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u004E\u0061\u006D\u0065",rowData['\u0062\u0061\u006E\u006B\u0041\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0061\u006D\u0065'],"\uD83C\uDFE6");_0x6c92b("\u004D\u0065\u0074\u0068\u006F\u0064",rowData['\u006D\u0065\u0074\u0068\u006F\u0064'],"\uD83D\uDCB3");firstCell['\u0069\u006E\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006F\u0072\u0065'](preferredDiv,detailsDiv);}}}// Add remark if present and not already added
if(rowData['\u0072\u0065\u006D\u0061\u0072\u006B']&&!_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u0078\u002D\u0072\u0065\u006D\u0061\u0072\u006B\u002D\u0072\u006F\u0077")){var _0xb1egbb=(981107^981105)+(415390^415386);const firstCell=_0xec86e['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0074\u0064\u003A\u0066\u0069\u0072\u0073\u0074\u002D\u0063\u0068\u0069\u006C\u0064");_0xb1egbb=(691311^691309)+(652056^652059);if(firstCell){let _0x5_0xafc;const detailsDiv=firstCell['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("sliated.".split("").reverse().join(""));_0x5_0xafc=(775947^775949)+(404694^404695);if(detailsDiv){const _0xa4_0xa9d=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xa4_0xa9d['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0074\u0078\u002D\u0072\u0065\u006D\u0061\u0072\u006B\u002D\u0072\u006F\u0077";_0xa4_0xa9d['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`<span class="remark-label">REMARK:</span> <span class="remark-text">${rowData['\u0072\u0065\u006D\u0061\u0072\u006B']}</span>`;_0xa4_0xa9d['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),e=>{e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();_0x9_0xb52(rowData['\u0072\u0065\u006D\u0061\u0072\u006B'],_0xa4_0xa9d);});var _0xb4c19d=(932559^932557)+(562410^562410);const preferredDiv=firstCell['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u0078\u002D\u0070\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0064\u002D\u0064\u0065\u0074\u0061\u0069\u006C\u0073");_0xb4c19d=879358^879353;if(preferredDiv){preferredDiv['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0069\u006E\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006F\u0072\u0065'](_0xa4_0xa9d,preferredDiv['\u006E\u0065\u0078\u0074\u0053\u0069\u0062\u006C\u0069\u006E\u0067']);}else{detailsDiv['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0069\u006E\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006F\u0072\u0065'](_0xa4_0xa9d,detailsDiv);}}}}}// ==================== PROCESS ALL ROWS ====================
function _0x9751bc(_0x6_0x947,_0x31ebd,_0x7_0x762){if(!_0x25e24a['\u0065\u006E\u0061\u0062\u006C\u0065\u0064']){console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0044\u0069\u0073\u0061\u0062\u006C\u0065\u0064\u002C\u0020\u0073\u006B\u0069\u0070\u0070\u0069\u006E\u0067\u0020\u0074\u0061\u0062\u006C\u0065\u0020\u0065\u006E\u0068\u0061\u006E\u0063\u0065\u006D\u0065\u006E\u0074");return false;}console['\u006C\u006F\u0067'](")(elbaTecnahne ]noisnetxE[".split("").reverse().join(""));const _0x9ea=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tsil-snoitcasnart".split("").reverse().join(""));_0x6_0x947="fjkdjg".split("").reverse().join("");if(!_0x9ea){console['\u006C\u006F\u0067']("tey tsil-snoitcasnart# oN ]noisnetxE[".split("").reverse().join(""));return false;}var _0x81ebf=(835019^835016)+(541285^541292);const _0xcaa2ea=_0x9ea['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0074\u0061\u0062\u006C\u0065");_0x81ebf=(932919^932916)+(753512^753516);if(!_0xcaa2ea){console['\u006C\u006F\u0067']("elbat oN ]noisnetxE[".split("").reverse().join(""));return false;}const _0xfd3d8a=_0xcaa2ea['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0074\u0062\u006F\u0064\u0079");_0x31ebd=(547780^547788)+(271651^271659);if(!_0xfd3d8a){console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u004E\u006F\u0020\u0074\u0062\u006F\u0064\u0079");return false;}const _0x7e4df=Array['\u0066\u0072\u006F\u006D'](_0xfd3d8a['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0074\u0072"))['\u0066\u0069\u006C\u0074\u0065\u0072'](tr=>tr['\u0068\u0061\u0073\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("\u0064\u0061\u0074\u0061\u002D\u0069\u0064"));_0x7_0x762=(498102^498100)+(414274^414283);console['\u006C\u006F\u0067'](`[Extension] Found ${_0x7e4df['\u006C\u0065\u006E\u0067\u0074\u0068']} transaction rows`);_0x7e4df['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](row=>{const _0xc2a6bb=_0x3188b(row);_0x381gd(_0xc2a6bb);});return!![];}// ==================== DEBOUNCE & OBSERVER ====================
function _0x8c0f9a(func,wait,_0x47ec){return function executedFunction(){const _0x2eaaaa=()=>{clearTimeout(_0x47ec);func();};clearTimeout(_0x47ec);_0x47ec=setTimeout(_0x2eaaaa,wait);};}function _0x2e4e(_0xe63a5d,_0x53ffb){const _0xeg394d=_0x8c0f9a(_0x9751bc,420733^420789);_0xe63a5d=321424^321428;const _0xd4_0xe95=new MutationObserver(mutations=>{for(const _0x697d of mutations){if(_0x697d['\u0074\u0079\u0070\u0065']==="\u0063\u0068\u0069\u006C\u0064\u004C\u0069\u0073\u0074"||_0x697d['\u0074\u0079\u0070\u0065']==="\u0073\u0075\u0062\u0074\u0072\u0065\u0065"){if(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tsil-snoitcasnart".split("").reverse().join(""))){_0xeg394d();break;}}}});_0x53ffb=(368179^368177)+(561710^561702);_0xd4_0xe95['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});console['\u006C\u006F\u0067']("\u005B\u0045\u0078\u0074\u0065\u006E\u0073\u0069\u006F\u006E\u005D\u0020\u0042\u006F\u0064\u0079\u0020\u006F\u0062\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064");}// ==================== INITIALISATION ====================
async function _0xe4d(){console['\u006C\u006F\u0067']("...gnitratS ]noisnetxE[".split("").reverse().join(""));await _0x8fc5fa();_0xe1da();_0x9751bc();_0x2e4e();setInterval(async()=>{await _0x8fc5fa();_0x9751bc();},(_0x25e24a['\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0049\u006E\u0074\u0065\u0072\u0076\u0061\u006C']||_0x11_0x3cg)*(736280^736292)*(349467^349457));}if(document['\u0072\u0065\u0061\u0064\u0079\u0053\u0074\u0061\u0074\u0065']==="\u006C\u006F\u0061\u0064\u0069\u006E\u0067"){document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("dedaoLtnetnoCMOD".split("").reverse().join(""),_0xe4d);}else{_0xe4d();}})();
