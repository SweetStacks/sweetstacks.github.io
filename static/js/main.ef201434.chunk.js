(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,a,r,i,o,s,l,d,x,j,h,p,u,b,f,g,O,w,m,v,y,C,k,S,A=n(2),T=n(85),E=n.n(T),z=n(16),_=n.n(z),N=n(43),M=n(69),W=n(13),D=n(58),I=n(68),L=n.n(I),H=n(220),R=n.n(H),F=n(70),P=n(221),K=n(19),B={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(K.a)(Object(K.a)({},B),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(K.a)(Object(K.a)({},B),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(K.a)(Object(K.a)({},e),{},{account:t.payload.account});default:return e}},V={loading:!1,totalSupply:"Connect to see",cost:0,error:!1,errorMsg:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(K.a)(Object(K.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(K.a)(Object(K.a)({},V),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},Z=Object(F.b)({blockchain:U,data:Y}),Q=[P.a],q=Object(F.c)(F.a.apply(void 0,Q)),X=Object(F.d)(Z,q),G=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},J=function(){return function(){var e=Object(N.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,X.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(G("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},$=function(e){return{type:"CONNECTION_FAILED",payload:e}},ee=function(e){return function(){var t=Object(N.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(J());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},te=n(14),ne=te.a.div(c||(c=Object(W.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ce=te.a.div(a||(a=Object(W.a)(["\n  height: 8px;\n  width: 8px;\n"]))),ae=te.a.div(r||(r=Object(W.a)(["\n  height: 16px;\n  width: 16px;\n"]))),re=te.a.div(i||(i=Object(W.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ie=te.a.div(o||(o=Object(W.a)(["\n  height: 32px;\n  width: 32px;\n"]))),oe=te.a.div(s||(s=Object(W.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),se=te.a.p(l||(l=Object(W.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),le=(te.a.p(d||(d=Object(W.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),te.a.p(x||(x=Object(W.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),de=(te.a.div(j||(j=Object(W.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),te.a.div(h||(h=Object(W.a)(["\n  padding: 60px 0;\n  width: 50%;\n  @media screen and (min-width: 800px) and (max-width: 1023px) {\n  width: 60%;\n  margin: auto;\n  padding-top: 0;\n  }\n  @media (max-width: 799px) {\n  width: 65%;\n  margin: auto;\n  padding-top: 0;\n  }\n  @media (max-width: 525px) {\n  width: 85%;\n  }\n"])))),xe=te.a.div(p||(p=Object(W.a)(["\n  width: 90%;\n  margin: auto;\n  @media screen and (min-width: 1024px) and (max-width: 1100px) {\n  margin: auto 10%;\n  }\n  @media screen and (min-width: 800px) and (max-width: 1023px) {\n  width: 100%;\n  margin: auto;\n  }\n  @media (max-width: 799px) {\n  width: 100%;\n  margin: auto;\n  }\n"]))),je=te.a.p(u||(u=Object(W.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 900;\n  letter-spacing: -2px;\n  line-height: 1.5;\n  text-align: left;\n  color: var(--primary-text);\n  @media (max-width: 1023px) {\n    font-size: 55px;\n  }\n  @media (max-width: 500px) {\n    font-size: 42px;\n    letter-spacing: -1px;\n  }\n  @media (max-width: 400px) {\n    font-size: 35px;\n    letter-spacing: -1px;\n  }\n"]))),he=te.a.div(b||(b=Object(W.a)(["\n  margin: auto;\n  display: block;\n  width: 50%;\n  @media screen and (min-width: 641px) and (max-width: 1023px) {\n    width: 75%;\n  }\n  @media (max-width: 640px) {\n    width: 80%;\n  }\n  @media {max-width: 550px} {\n    width: 85%;\n  }\n"]))),pe=te.a.div(f||(f=Object(W.a)(["\n  display: none;\n  @media (max-width: 1023px) {\n    display: block;\n    margin: 40px auto;\n  }\n"]))),ue=te.a.img(g||(g=Object(W.a)(["\n  background-color: var(--accent);\n  color: rgba(17, 12, 46, 0.15);\n  box-shadow: 0px 20px 100px 0px;\n  border-radius: 20px;\n  display: none;  \n  @media (max-width: 1023px) {\n    display: block;\n    width: 220px;\n  }\n  @media (max-width: 550px) {\n    display: block;\n    width: 50%;\n    margin: auto;\n  }\n"]))),be=te.a.div(O||(O=Object(W.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  height: 680px;\n  @media (max-width: 1023px) {\n    display: none;\n  }\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),fe=te.a.img(w||(w=Object(W.a)(["\n  background-color: var(--accent);\n  color: rgba(17, 12, 46, 0.15);\n  box-shadow: 0px 20px 100px 0px;\n  border-radius: 20px;\n  width: 70%;\n  margin: auto 10%;\n  @media (max-width: 1023px) {\n    display: none;\n  }\n"]))),ge=n(0),Oe=te.a.button(m||(m=Object(W.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 15px;\n  font-weight: 600;\n  color: var(--secondary-text);\n  width: 100%;\n  cursor: pointer;\n  text-transform: uppercase;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),we=te.a.button(v||(v=Object(W.a)(["\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid var(--accent-text);\n  background-color: transparent;\n  padding: 10px;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--accent-text);\n  width: 55px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),me=te.a.div(y||(y=Object(W.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  padding: 24px; \n  margin-top: -40px; \n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n  @media {max-width: 1023px} {\n  margin-top: 0;\n  padding: 0;\n  }\n"]))),ve=(te.a.img(C||(C=Object(W.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),te.a.img(k||(k=Object(W.a)(["\n  border: 0;\n  border-radius: 0;\n  background-color: var(--accent);\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 420px;\n  }\n  transition: width 0.5s;\n"]))),te.a.a(S||(S=Object(W.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var ye=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.blockchain})),n=Object(D.c)((function(e){return e.data})),c=Object(A.useState)(!1),a=Object(M.a)(c,2),r=a[0],i=a[1],o=Object(A.useState)("You can mint up to 300 tickets"),s=Object(M.a)(o,2),l=s[0],d=s[1],x=Object(A.useState)(1),j=Object(M.a)(x,2),h=j[0],p=j[1],u=Object(A.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),b=Object(M.a)(u,2),f=b[0],g=b[1],O=function(){""!==t.account&&null!==t.smartContract&&e(J(t.account))},w=function(){var e=Object(N.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){w()}),[]),Object(A.useEffect)((function(){O()}),[t.account]),Object(ge.jsx)(ne,{children:Object(ge.jsxs)(oe,{flex:1,ai:"center",style:{background:"linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%)"},children:[Object(ge.jsxs)(me,{flex:1,test:!0,children:[Object(ge.jsx)(pe,{flex:1,jc:"center",ai:"left",children:Object(ge.jsx)(ue,{alt:"example",src:"/config/images/example.gif"})}),Object(ge.jsx)(de,{flex:2,jc:"center",ai:"left",children:Object(ge.jsxs)(xe,{children:[Object(ge.jsx)(je,{children:"Sweet Stacks"}),Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:22,lineHeight:1.45},children:["Introducing the world's first lottery ticket NFT that ",Object(ge.jsx)("b",{style:{fontWeight:600},children:"never"})," expires and pays CAKE."]}),Object(ge.jsx)(ae,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:"Simply hold it in your wallet to never miss a weekly draw and win up to 1,000 CAKE per week. Or go for the quick win and sell your ticket as an NFT to other players. Only 50,000 tickets will ever be minted."}),Object(ge.jsx)(ae,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:"Mint once, play forever, sell anytime. That's our promise."}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(ie,{}),Object(ge.jsxs)(se,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:14,textTransform:"uppercase",letterSpacing:.2,margin:"0 auto 5px"},children:[function(){var e=n.totalSupply;return n.totalSupply>=1?(e=f.MAX_SUPPLY-n.totalSupply).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}()," tickets remaining"]}),Object(ge.jsxs)(se,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:18,textTransform:"uppercase",fontWeight:600},children:["Fair launch price: ",f.DISPLAY_COST," "," ",f.NETWORK.SYMBOL," per NFT"]}),""===t.account||null===t.smartContract?Object(ge.jsxs)(oe,{ai:"left",jc:"center",children:[Object(ge.jsx)(ae,{}),Object(ge.jsx)(Oe,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(N.a)(_.a.mark((function e(t){var n,c,a,r,i,o,s,l,d;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=e.sent,e.next=12,a.json();case 12:if(r=e.sent,i=window,!(o=i.ethereum)||!o.isMetaMask){e.next=33;break}return L.a.setProvider("https://bsc-dataseed1.binance.org:443"),s=new R.a("https://bsc-dataseed1.binance.org:443"),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==r.NETWORK.ID?(d=new L.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),o.on("accountsChanged",(function(e){t(ee(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t($("Change network to ".concat(r.NETWORK.NAME))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t($("Something went wrong"));case 31:e.next=34;break;case 33:t($("Install Metamask"));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),O()},children:"Connect Wallet"}),""!==t.errorMsg?Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(ae,{}),Object(ge.jsx)(le,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(ce,{}),Object(ge.jsx)(le,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(ge.jsx)(ae,{}),Object(ge.jsxs)(oe,{ai:"left",jc:"center",fd:"row",children:[Object(ge.jsx)(we,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h-10;e<1&&(e=1),p(e)}()},children:"-10"}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(we,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h-1;e<1&&(e=1),p(e)}()},children:"-1"}),Object(ge.jsx)(re,{}),Object(ge.jsx)(le,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:24,width:45},children:h}),Object(ge.jsx)(re,{}),Object(ge.jsx)(we,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h+1;e>300&&(e=300),p(e)}()},children:"+1"}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(we,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h+10;e>300&&(e=300),p(e)}()},children:"+10"})]}),Object(ge.jsx)(ae,{}),Object(ge.jsx)(oe,{ai:"left",jc:"center",fd:"row",children:Object(ge.jsx)(Oe,{disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=f.WEI_COST,c=f.GAS_LIMIT,a=String(n*h),r=String(c*h);console.log("Cost: ",a),console.log("Gas limit: ",r),d("Minting your tickets..."),i(!0),t.smartContract.methods.mint(h).send({gasLimit:String(r),to:f.CONTRACT_ADDRESS,from:t.account,value:a}).once("error",(function(e){console.log(e),d("Something went wrong. Please try again"),i(!1)})).then((function(n){console.log(n),d("Your tickets are minted"),i(!1),e(J(t.account))}))}(),O()},children:r?"PLEASE CONFIRM ON YOUR WALLET":"MINT"})})]})]}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(le,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:14},children:"1 in 1,000 odds per 1 BNB"}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:14},children:[Object(ge.jsx)(ve,{href:"https://twitter.com/sweetstacksnft",target:"_blank",style:{fontWeight:600,marginRight:25},children:Object(ge.jsx)("svg",{viewBox:"0 0 18 15",width:"20px",xmlns:"http://www.w3.org/2000/svg",style:{cursor:"pointer"},children:Object(ge.jsx)("path",{d:"M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z",fill:"var(--accent-text)"})})}),Object(ge.jsx)(ve,{href:"https://t.me/sweetstacks",target:"_blank",style:{fontWeight:600,marginRight:25},children:Object(ge.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20px",style:{cursor:"pointer"},children:Object(ge.jsx)("path",{d:"M470.435 45.423 16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173 281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589 114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z",fill:"var(--accent-text)"})})}),Object(ge.jsx)(ve,{href:"https://github.com/SweetStacks/sweetstacks-images",target:"_blank",style:{fontWeight:600,marginRight:25},children:Object(ge.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",width:"20px",style:{cursor:"pointer"},children:Object(ge.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z",fill:"var(--accent-text)"})})}),Object(ge.jsx)(ve,{href:f.SCAN_LINK,target:"_blank",style:{fontWeight:600},children:Object(ge.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 293.775 293.671",width:"20px",style:{cursor:"pointer"},children:[Object(ge.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M61.055 139.822a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.468-12.47h20.778a12.469 12.469 0 0 1 12.467 12.467v90.279s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V77.57a12.466 12.466 0 0 1 12.466-12.467h20.778a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537A146.6 146.6 0 0 0 148.737.013C67.298-1.081-.007 65.398.001 146.847a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824",fill:"var(--accent-text)"}),Object(ge.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M60.603 265.58a146.808 146.808 0 0 0 233.172-118.741c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.4-232.79 128.793",fill:"var(--accent-text)"})]})})]})]})}),Object(ge.jsx)(be,{flex:1,jc:"center",ai:"left",children:Object(ge.jsx)(fe,{alt:"example",src:"/config/images/example.gif"})})]}),Object(ge.jsxs)(he,{children:[Object(ge.jsx)(re,{}),Object(ge.jsx)(se,{style:{textAlign:"center",fontSize:60,fontWeight:900,color:"var(--primary-text)"},children:"FAQ"}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"When is the launch date?"}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:["Minting starts on ",Object(ge.jsx)("b",{style:{fontWeight:600},children:"Mon Dec 27, 12:00 PM UTC"}),", followed by the first weekly draw on ",Object(ge.jsx)("b",{style:{fontWeight:600},children:"Fri Jan 7, 12:00 PM UTC."})]}),Object(ge.jsx)(ie,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18,border:"1px dashed var(--accent-text)",borderRadius:10,padding:20},children:[Object(ge.jsx)("b",{style:{fontWeight:600},children:"Tip:"})," The winner of the first week's draw can claim a ",Object(ge.jsx)("b",{style:{fontWeight:600},children:"20% BONUS"})," on top of the prize if they also own a ",Object(ge.jsxs)(ve,{href:"https://pancakeswap.finance/nfts/collections/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA",target:"_blank",style:{fontWeight:600,color:"var(--accent-text)",textDecoration:"underline"},children:["Pancake Squad NFT",Object(ge.jsx)("svg",{style:{marginLeft:2,verticalAlign:"middle"},viewBox:"0 0 24 24",color:"primary",width:"16px",xmlns:"http://www.w3.org/2000/svg",class:"sc-bdnxRM iXahuZ",children:Object(ge.jsx)("path",{d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"})})]})]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"Where does the prize money come from?"}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:["The weekly prize is generated from staking rewards and royalty fees.",Object(ge.jsx)("br",{}),Object(ge.jsx)("br",{}),"80% of the proceeds from the initial sale are converted to CAKE and staked in the auto-compounding pool on PancakeSwap to earn staking rewards that go in the weekly pot. The remaining funds raised are held in reserve and used to provide occasional boosts to the weekly prize pot.",Object(ge.jsx)("br",{}),Object(ge.jsx)("br",{}),"In addition, 60% of the royalty fees from NFT marketplace sales are added to the weekly pot, while the remaining 40% go to replenish the reserve funds."]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"How much can I win?"}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:["Roughly between 300-700 CAKE on most weeks, and up to 1,000 CAKE on boosted weeks. The exact amount will vary from week to week based on the CAKE rewards and royalty fees collected.",Object(ge.jsx)("br",{}),Object(ge.jsx)("br",{}),"Boosts are occasional and come in two flavors. Either the reserve funds are used to directly grow the pot, or a trading competition is organized and the additional royalty fees generated are added to the pot. In either case, boosts can double or triple the size of the weekly pot."]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"How many weekly draws is a ticket good for?"}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:"All of them! Your ticket never expires, so as long as you keep it, you'll join each and every one of our weekly draws. Remember our promise: Mint once, play forever, sell anytime."}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"How can I check if I\u2019ve won?"}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:["Weekly draws take place every Friday at 12:00 PM UTC and the results are published on ",Object(ge.jsxs)(ve,{href:"https://twitter.com/sweetstacksnft",target:"_blank",style:{fontWeight:600,color:"var(--accent-text)",textDecoration:"underline"},children:["Twitter",Object(ge.jsx)("svg",{style:{fill:"color: var(--accent-text)",marginLeft:2,verticalAlign:"middle"},viewBox:"0 0 24 24",color:"primary",width:"16px",xmlns:"http://www.w3.org/2000/svg",class:"sc-bdnxRM iXahuZ",children:Object(ge.jsx)("path",{d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"})})]})," and ",Object(ge.jsxs)(ve,{href:"https://t.me/sweetstacks",target:"_blank",style:{fontWeight:600,color:"var(--accent-text)",textDecoration:"underline"},children:["Telegram",Object(ge.jsx)("svg",{style:{fill:"color: var(--accent-text)",marginLeft:2,verticalAlign:"middle"},viewBox:"0 0 24 24",color:"primary",width:"16px",xmlns:"http://www.w3.org/2000/svg",class:"sc-bdnxRM iXahuZ",children:Object(ge.jsx)("path",{d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"})})]})]}),Object(ge.jsx)(ie,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18,border:"1px dashed var(--accent-text)",borderRadius:10,padding:20},children:[Object(ge.jsx)("b",{style:{fontWeight:600},children:"Tip:"})," Beware of scammers. We will never DM you first or ask you for your secret recovery phrase."]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"Where can I sell my NFT tickets?"}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:"Sweet Stacks will live exclusively on the PancakeSwap NFT marketplace after all 50,000 tickets are minted."}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"Can I still win if I\u2019m listing my tickets for sale?"}),Object(ge.jsx)(ce,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:"Yes. As long as you still own the winning ticket at 12:00 PM UTC on the day of the draw, you would receive the prize, even if the ticket was listed for sale."}),Object(ge.jsx)(ie,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18,border:"1px dashed var(--accent-text)",borderRadius:10,padding:20},children:[Object(ge.jsx)("b",{style:{fontWeight:600},children:"Tip:"})," Take care not to approve any tickets sales on Fridays before checking the result of the weekly draw, as the prize could pass to the new owner if you sell too early."]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:21,fontWeight:600},children:"Are you affiliated with PancakeSwap?"}),Object(ge.jsx)(ce,{}),Object(ge.jsxs)(le,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:18},children:["We're not affiliated with PancakeSwap, but as longtime users and supporters, we know how much people love PancakeSwap, so we set out to create a fun new way to win CAKE using NFTs.",Object(ge.jsx)("br",{}),Object(ge.jsx)("br",{}),"We hope you enjoy it and we bid you the best of luck!"]})]}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(ie,{}),Object(ge.jsx)(ie,{}),Object(ge.jsxs)(le,{style:{textAlign:"center",color:"var(--accent-text)"},children:["\xa9 2021\xa0|\xa0Created by ",Object(ge.jsx)(ve,{href:"https://twitter.com/BuckoQuest",target:"_blank",style:{color:"var(--accent-text)",textDecoration:"underline"},children:"BuckoQuest"})]}),Object(ge.jsx)(re,{}),Object(ge.jsx)(re,{})]})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(533);E.a.render(Object(ge.jsx)(D.a,{store:X,children:Object(ge.jsx)(ye,{})}),document.getElementById("root")),Ce()}},[[534,1,2]]]);
//# sourceMappingURL=main.ef201434.chunk.js.map