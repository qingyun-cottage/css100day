import{d as P,u as Z,h as V,r as tt,o as _,c as w,a as t,l as n,k as s,F as L,f as D,j as ot,t as f,N as U,I as G,J as st,A as B,R as et,B as lt,D as T,q as E,s as S,_ as M,x as A,z as O,b as I,g as J,e as j,p as nt,K as q,U as K,L as at,C as it}from"./index-19cd800f.js";/* empty css              *//* empty css              */import{_ as N}from"./arrow-left-line-black-a3b188f1.js";import{_ as H}from"./right_link_gray-13dc45e5.js";import{_ as Q}from"./file-upload-material-59a9c254.js";/* empty css              *//* empty css              *//* empty css              */const ct=""+new URL("contract-item-fill-ea84d270.svg",import.meta.url).href,dt=""+new URL("file-add-fill-0ba5b3fb.svg",import.meta.url).href,W=""+new URL("invest-amount-icon-ba0bf08c.svg",import.meta.url).href,X=""+new URL("paid-amount-icon-17ed2398.svg",import.meta.url).href,_t=""+new URL("calendar-input-line-ca6ca761.svg",import.meta.url).href,g=i=>(E("data-v-b35b2140"),i=i(),S(),i),pt={class:"page"},rt=g(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:N,alt:""})])],-1)),ut={class:"content"},vt=g(()=>t("div",{class:"title"},"添加流水",-1)),mt={class:"add_card"},ft=g(()=>t("div",{class:"title_text"},"输入金额添加",-1)),wt={class:"item"},ht=g(()=>t("div",{class:"label"},"流水日期",-1)),$t={class:"text"},bt=g(()=>t("div",{class:"icon icon_custom"},[t("img",{src:_t,alt:""})],-1)),yt={class:"item"},kt=g(()=>t("div",{class:"label"},"流水类型",-1)),gt={class:""},Ft={class:"item"},Ct=g(()=>t("div",{class:"label"},"金额",-1)),xt={class:"text"},It={class:"btn_box"},At=g(()=>t("span",{class:"btn_text"},"完成并添加",-1)),Pt=P({__name:"AddFlow",setup(i){const o=Z(),r=V({flowDate:"",flowType:"",amount:""}),F=[{label:"投资本金",value:"InvestAmount"},{label:"已兑付金额",value:"PaidAmount"}],m=tt(!1),b=({selectedValues:h})=>{const[a,e,$]=h;r.flowDate=`${a}年${e}月${$}日`,m.value=!1},l=()=>{console.log("新增流水信息",r),o.back()};return(h,a)=>{const e=U,$=G,k=st,d=B,v=et,x=lt,R=T;return _(),w("div",null,[t("div",pt,[n(e,{class:"nav_bar",border:!1,onClickLeft:h.$returnBack},{left:s(()=>[rt]),_:1},8,["onClickLeft"]),t("div",ut,[vt,t("div",mt,[ft,t("div",wt,[ht,t("div",$t,[n($,{modelValue:r.flowDate,"onUpdate:modelValue":a[0]||(a[0]=p=>r.flowDate=p),placeholder:"请选择流水日期",readonly:"",onClick:a[1]||(a[1]=p=>m.value=!0)},null,8,["modelValue"]),n(d,{show:m.value,"onUpdate:show":a[3]||(a[3]=p=>m.value=p),position:"bottom",teleport:"#app"},{default:s(()=>[n(k,{onConfirm:b,onCancel:a[2]||(a[2]=p=>m.value=!1)})]),_:1},8,["show"])]),bt]),t("div",yt,[kt,t("div",gt,[n(x,{class:"select_box",modelValue:r.flowType,"onUpdate:modelValue":a[4]||(a[4]=p=>r.flowType=p),direction:"horizontal"},{default:s(()=>[(_(),w(L,null,D(F,p=>n(v,{key:p.value,name:p.value,"label-position":"left"},{icon:s(z=>[]),default:s(()=>[t("div",{class:ot(["select_item",{active:p.value===r.flowType}])},[t("span",null,f(p.label),1)],2)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])])]),t("div",Ft,[Ct,t("div",xt,[n($,{modelValue:r.amount,"onUpdate:modelValue":a[5]||(a[5]=p=>r.amount=p),placeholder:"请输入金额",type:"number",clearable:""},null,8,["modelValue"])])]),t("div",It,[n(R,{class:"submit_btn",onClick:l},{default:s(()=>[At]),_:1})])])])])])}}});const Y=M(Pt,[["__scopeId","data-v-b35b2140"]]),C=i=>(E("data-v-49c7ffec"),i=i(),S(),i),Vt={class:"page"},Lt=C(()=>t("div",{class:"title"},"合同(账户)流水",-1)),Dt=C(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:N,alt:""})])],-1)),Ut={class:"content"},Bt=nt('<div class="content_item" data-v-49c7ffec><div class="title" data-v-49c7ffec>基本信息</div><div class="basic_info" data-v-49c7ffec><div class="info_item" data-v-49c7ffec><div class="title_text" data-v-49c7ffec>购买产品 (投资平台)</div><div class="content_text" data-v-49c7ffec><span data-v-49c7ffec>惠乐购投资宝</span></div></div><div class="info_item" data-v-49c7ffec><div class="title_text" data-v-49c7ffec>合同名称 (账户名称)</div><div class="content_text" data-v-49c7ffec><span data-v-49c7ffec>科普信息化建设工程开展投标合同</span></div></div></div></div>',1),Tt={class:"content_item"},Et=C(()=>t("div",{class:"title"},"账单流水",-1)),St={class:"flow_list"},Mt={class:"flow_item"},Nt={class:"icon icon_custom"},Rt={key:0,src:W,alt:""},zt={key:1,src:X,alt:""},jt={class:"flow_info"},Ot={class:"flow_type"},qt={class:"flow_date"},Gt={class:"amount"},Jt=C(()=>t("span",{class:"btn_text"},"删除",-1)),Kt={class:"content_item"},Ht=C(()=>t("div",{class:"title"},"合同材料",-1)),Qt={class:"files_upload_box"};const Wt={class:"content_item"},Xt=C(()=>t("div",{class:"title"},"流水材料",-1)),Yt={class:"files_upload_box"};const Zt=P({__name:"FlowDetail",setup(i){const o=V({showAddFlow:!1,basicInfo:{buyProduct:"",contractName:""},flowList:[{id:"1",flowType:"PaidAmount",flowDate:"2023-09-27",amount:"37728"},{id:"2",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"2671678"},{id:"3",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"5438312"},{id:"4",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"559940"}],contractFiles:[{url:"https://img.yzcdn.cn/vant/leaf.jpg",name:"图片1"},{url:"https://img.yzcdn.cn/vant/tree.jpg",name:"图片2"}],flowFiles:[{url:"https://img.yzcdn.cn/vant/cat.jpeg",name:"图片1"}],showPicker:!1}),r=new Map([["InvestAmount","投资本金"],["PaidAmount","已兑付金额"]]),F=b=>{console.log("删除流水",b)};A(()=>{window.addEventListener("popstate",m,!1)}),O(()=>{window.removeEventListener("popstate",m,!1)});const m=()=>{window.location.hash==="#openFlow"&&(o.showAddFlow=!1)};return(b,l)=>{const h=U,a=T,e=q,$=K,k=B;return _(),w("div",null,[t("div",Vt,[n(h,{class:"nav_bar",border:!1,onClickLeft:b.$returnBack},{title:s(()=>[Lt]),left:s(()=>[Dt]),_:1},8,["onClickLeft"]),t("div",Ut,[Bt,t("div",Tt,[Et,t("div",St,[(_(!0),w(L,null,D(o.flowList,d=>(_(),I(e,{class:"swipe",key:d.id},{right:s(()=>[n(a,{class:"delete_flow",onClick:v=>F(d)},{default:s(()=>[Jt]),_:2},1032,["onClick"])]),default:s(()=>[t("div",Mt,[t("div",Nt,[d.flowType==="InvestAmount"?(_(),w("img",Rt)):(_(),w("img",zt))]),t("div",jt,[t("span",Ot,f(J(r).get(d.flowType)),1),t("span",qt,f(d.flowDate),1)]),t("div",Gt,f(d.amount),1)])]),_:2},1024))),128))])]),t("div",Kt,[Ht,t("div",Qt,[n($,{class:"uploader_custom",modelValue:o.contractFiles,"onUpdate:modelValue":l[0]||(l[0]=d=>o.contractFiles=d),accept:"",multiple:"",deletable:!1,onClickPreview:l[1]||(l[1]=()=>{}),onClosePreview:l[2]||(l[2]=()=>{}),"upload-icon":"back-top"},{default:s(()=>[j("",!0)]),_:1},8,["modelValue"])])]),t("div",Wt,[Xt,t("div",Yt,[n($,{class:"uploader_custom",modelValue:o.flowFiles,"onUpdate:modelValue":l[3]||(l[3]=d=>o.flowFiles=d),accept:"",multiple:"",deletable:!1,onClickPreview:l[4]||(l[4]=()=>{}),onClosePreview:l[5]||(l[5]=()=>{}),"upload-icon":"back-top"},{default:s(()=>[j("",!0)]),_:1},8,["modelValue"])])])]),n(k,{show:o.showAddFlow,"onUpdate:show":l[6]||(l[6]=d=>o.showAddFlow=d),teleport:"#app",position:"right",style:{width:"100vw",height:"100vh"},onClose:m},{default:s(()=>[n(Y)]),_:1},8,["show"])])])}}});const to=M(Zt,[["__scopeId","data-v-49c7ffec"]]),oo=""+new URL("add-line-2ebc57c5.svg",import.meta.url).href,u=i=>(E("data-v-1d9e80e0"),i=i(),S(),i),so={class:"page"},eo=u(()=>t("div",{class:"title"},"合同(账户)流水",-1)),lo=u(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:N,alt:""})])],-1)),no={class:"content"},ao={class:"content_item"},io=u(()=>t("div",{class:"title"},"基本信息",-1)),co={class:"basic_info"},_o={class:"info_item"},po=u(()=>t("div",{class:"title_text"},"购买产品 (投资平台)",-1)),ro=u(()=>t("div",{class:"icon icon_custom"},[t("img",{src:H,alt:""})],-1)),uo={class:"info_item"},vo=u(()=>t("div",{class:"title_text"},"合同名称 (账户名称)",-1)),mo={class:"content_text"},fo={class:"content_item"},wo=u(()=>t("div",{class:"title"},"账单流水",-1)),ho={class:"flow_list"},$o={class:"flow_item"},bo={class:"icon icon_custom"},yo={key:0,src:W,alt:""},ko={key:1,src:X,alt:""},go={class:"flow_info"},Fo={class:"flow_type"},Co={class:"flow_date"},xo={class:"amount"},Io=u(()=>t("span",{class:"btn_text"},"删除",-1)),Ao=u(()=>t("div",{class:"icon icon_custom"},[t("img",{src:oo,alt:""})],-1)),Po=u(()=>t("span",null,"新增流水",-1)),Vo=[Ao,Po],Lo={class:"content_item"},Do=u(()=>t("div",{class:"title"},"合同材料",-1)),Uo={class:"files_upload_box"},Bo=u(()=>t("div",{class:"upload_add"},[t("div",{class:"icon icon_custom"},[t("img",{src:Q,alt:""})])],-1)),To=u(()=>t("div",{class:"tip_text"},[t("span",null,"可上传图片、PDF，大小限制4MB内")],-1)),Eo={class:"content_item"},So=u(()=>t("div",{class:"title"},"流水材料",-1)),Mo={class:"files_upload_box"},No=u(()=>t("div",{class:"upload_add"},[t("div",{class:"icon icon_custom"},[t("img",{src:Q,alt:""})])],-1)),Ro=u(()=>t("div",{class:"tip_text"},[t("span",null,"可上传图片、PDF，大小限制4MB内")],-1)),zo=P({__name:"EditFlow",setup(i){const o=V({showAddFlow:!1,basicInfo:{buyProduct:"",contractName:""},flowList:[{id:"1",flowType:"PaidAmount",flowDate:"2023-09-27",amount:"37728"},{id:"2",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"2671678"},{id:"3",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"5438312"},{id:"4",flowType:"InvestAmount",flowDate:"2023-09-27",amount:"559940"}],contractFiles:[],flowFiles:[],showPicker:!1}),r=[{text:"产品1",value:"1"},{text:"产品2",value:"2"},{text:"产品3",value:"3"},{text:"产品4",value:"4"}],F=a=>{o.basicInfo.buyProduct=a.selectedValues[0],o.showPicker=!1},m=new Map([["InvestAmount","投资本金"],["PaidAmount","已兑付金额"]]),b=a=>{console.log("删除流水",a)};A(()=>{window.addEventListener("popstate",h,!1)}),O(()=>{window.removeEventListener("popstate",h,!1)});const l=()=>{o.showAddFlow=!0,window.history.pushState(null,"新增流水","#addFlow")},h=()=>{window.location.hash==="#openFlow"&&(o.showAddFlow=!1)};return(a,e)=>{var z;const $=U,k=G,d=at,v=B,x=T,R=q,p=K;return _(),w("div",null,[t("div",so,[n($,{class:"nav_bar",border:!1,onClickLeft:a.$returnBack},{title:s(()=>[eo]),left:s(()=>[lo]),_:1},8,["onClickLeft"]),t("div",no,[t("div",ao,[io,t("div",co,[t("div",_o,[po,t("div",{class:"content_text",onClick:e[2]||(e[2]=c=>o.showPicker=!0)},[n(k,{modelValue:(z=r.find(c=>c.value===o.basicInfo.buyProduct))==null?void 0:z.text,placeholder:"请选择购买产品",readonly:"",border:!1},null,8,["modelValue"]),n(v,{show:o.showPicker,"onUpdate:show":e[1]||(e[1]=c=>o.showPicker=c),position:"bottom",teleport:"#app"},{default:s(()=>[n(d,{"show-toolbar":"",title:"投资人类型",columns:r,onConfirm:F,onCancel:e[0]||(e[0]=c=>o.showPicker=!1)})]),_:1},8,["show"]),ro])]),t("div",uo,[vo,t("div",mo,[n(k,{modelValue:o.basicInfo.contractName,"onUpdate:modelValue":e[3]||(e[3]=c=>o.basicInfo.contractName=c),placeholder:"请选择购买产品",clearable:""},null,8,["modelValue"])])])])]),t("div",fo,[wo,t("div",ho,[(_(!0),w(L,null,D(o.flowList,c=>(_(),I(R,{class:"swipe",key:c.id},{right:s(()=>[n(x,{class:"delete_flow",onClick:hs=>b(c)},{default:s(()=>[Io]),_:2},1032,["onClick"])]),default:s(()=>[t("div",$o,[t("div",bo,[c.flowType==="InvestAmount"?(_(),w("img",yo)):(_(),w("img",ko))]),t("div",go,[t("span",Fo,f(J(m).get(c.flowType)),1),t("span",Co,f(c.flowDate),1)]),t("div",xo,f(c.amount),1)])]),_:2},1024))),128)),t("div",{class:"btn_box"},[t("div",{class:"add_flow",onClick:l},Vo)])])]),t("div",Lo,[Do,t("div",Uo,[n(p,{class:"uploader_custom",modelValue:o.contractFiles,"onUpdate:modelValue":e[4]||(e[4]=c=>o.contractFiles=c),accept:"",multiple:"",onClickPreview:e[5]||(e[5]=()=>{}),onClosePreview:e[6]||(e[6]=()=>{}),"upload-icon":"back-top"},{default:s(()=>[Bo]),_:1},8,["modelValue"]),To])]),t("div",Eo,[So,t("div",Mo,[n(p,{class:"uploader_custom",modelValue:o.flowFiles,"onUpdate:modelValue":e[7]||(e[7]=c=>o.flowFiles=c),accept:"",multiple:"",onClickPreview:e[8]||(e[8]=()=>{}),onClosePreview:e[9]||(e[9]=()=>{}),"upload-icon":"back-top"},{default:s(()=>[No]),_:1},8,["modelValue"]),Ro])])]),n(v,{show:o.showAddFlow,"onUpdate:show":e[10]||(e[10]=c=>o.showAddFlow=c),teleport:"#app",position:"right",style:{width:"100vw",height:"100vh"},onClose:h},{default:s(()=>[n(Y)]),_:1},8,["show"])])])}}});const jo=M(zo,[["__scopeId","data-v-1d9e80e0"]]),y=i=>(E("data-v-d573d634"),i=i(),S(),i),Oo={class:"page"},qo=y(()=>t("div",{class:"title"},"合同(账户)列表",-1)),Go=y(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:N,alt:""})])],-1)),Jo={class:"content"},Ko={class:"contract_list"},Ho={class:"contract_item"},Qo=y(()=>t("div",{class:"icon icon_custom"},[t("img",{src:ct,alt:""})],-1)),Wo={class:"content_box"},Xo={class:"title"},Yo={class:"money"},Zo={class:"money_item deposit"},ts=y(()=>t("span",null,"入金",-1)),os={class:"money_item withdrawal"},ss=y(()=>t("span",null,"出金",-1)),es=y(()=>t("div",{class:"icon icon_custom"},[t("img",{src:H,alt:""})],-1)),ls=y(()=>t("span",{class:"btn_text"},"删除",-1)),ns={key:0,class:"btn_box"},as=y(()=>t("div",{class:"btn_text"},[t("div",{class:"icon icon_custom"},[t("img",{src:dt,alt:""})]),t("div",{class:"text"},"添加合同")],-1)),is={class:"combine_info"},cs={class:"item total"},ds=y(()=>t("div",{class:"title"},[t("span",null,"投资总额：")],-1)),_s={class:"value"},ps={class:"item paid"},rs=y(()=>t("div",{class:"title"},[t("span",null,"已兑付总额：")],-1)),us={class:"value"},vs={class:"item unpaid"},ms=y(()=>t("div",{class:"title"},[t("span",null,"未兑付总额：")],-1)),fs={class:"value"},ws=P({__name:"Contract",props:{isEditable:{type:Boolean,default:!0}},setup(i){const o=V({showFlow:!1,contractList:[{id:"1",title:"科普信息化建设工程开展投标合同",deposit:278953,withdrawal:278953},{id:"2",title:"科普信息化建设工程iewiewoewi dfjk开展投标合同",deposit:278953,withdrawal:278953},{id:"3",title:"科普信息化建设工程开展投标合同",deposit:278953,withdrawal:278953},{id:"4",title:"科普信息化建设工程开展投标合同",deposit:278953,withdrawal:278953}],combineInfo:{total:1e6,paid:2e5,unpaid:8e5}}),r=l=>{console.log("删除合同",l)},F=()=>{console.log("添加合同"),o.showFlow=!0,window.history.pushState(null,"合同流水","#openFlow")};A(()=>{window.addEventListener("popstate",b,!1)}),O(()=>{window.removeEventListener("popstate",b,!1)});const m=l=>{console.log(l),o.showFlow=!0,window.history.pushState(null,"合同流水","#openFlow")},b=()=>{window.location.hash===""&&(o.showFlow=!1)};return A(()=>{window.history.replaceState("",document.title,window.location.pathname+window.location.search)}),(l,h)=>{const a=U,e=it,$=T,k=q,d=B;return _(),w("div",Oo,[n(a,{class:"nav_bar",border:!1,onClickLeft:l.$returnBack},{title:s(()=>[qo]),left:s(()=>[Go]),_:1},8,["onClickLeft"]),t("div",Jo,[t("div",Ko,[(_(!0),w(L,null,D(o.contractList,v=>(_(),I(k,{class:"swipe",key:v.id,disabled:!i.isEditable},{right:s(()=>[n($,{class:"delete_contract",onClick:x=>r(v)},{default:s(()=>[ls]),_:2},1032,["onClick"])]),default:s(()=>[n(e,{center:"",border:!1,onClick:x=>m(v)},{title:s(()=>[t("div",Ho,[Qo,t("div",Wo,[t("div",Xo,[t("span",null,f(v.title),1)]),t("div",Yo,[t("div",Zo,[ts,t("span",null,f(l.$filters.formatMoney(v.deposit)),1)]),t("div",os,[ss,t("span",null,f(l.$filters.formatMoney(v.withdrawal)),1)])])])])]),"right-icon":s(()=>[es]),_:2},1032,["onClick"])]),_:2},1032,["disabled"]))),128)),i.isEditable?(_(),w("div",ns,[n($,{class:"add_contract",onClick:F},{default:s(()=>[as]),_:1})])):j("",!0)]),t("div",is,[t("div",cs,[ds,t("div",_s,[t("span",null,f(l.$filters.formatMoney(o.combineInfo.total)),1)])]),t("div",ps,[rs,t("div",us,[t("span",null,f(l.$filters.formatMoney(o.combineInfo.paid)),1)])]),t("div",vs,[ms,t("div",fs,[t("span",null,f(l.$filters.formatMoney(o.combineInfo.unpaid)),1)])])])]),n(d,{show:o.showFlow,"onUpdate:show":h[0]||(h[0]=v=>o.showFlow=v),teleport:"#app",position:"right",style:{width:"100vw",height:"100vh"},onClose:b},{default:s(()=>[i.isEditable?(_(),I(jo,{key:0})):(_(),I(to,{key:1}))]),_:1},8,["show"])])}}});const As=M(ws,[["__scopeId","data-v-d573d634"]]);export{As as default};
