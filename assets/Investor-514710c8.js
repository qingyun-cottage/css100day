import{d as T,u as w,h as E,x as D,o as n,c as v,l as g,k as r,a as t,j as C,g as e,t as k,e as N,p as _,N as P,D as R,q as M,s as W,_ as F}from"./index-19cd800f.js";/* empty css              */import{_ as O}from"./arrow-left-line-white-e258a992.js";import{_ as G}from"./title-darkblue-ca3349e7.js";import{_ as J,a as U}from"./status-default-19c76057.js";import{_ as V,a as H,b as L}from"./status-error-c3f6ae06.js";import{_ as u}from"./right_link_gray-13dc45e5.js";const d=b=>(M("data-v-bc671c3b"),b=b(),W(),b),j={class:"page"},q=d(()=>t("div",{class:"title"},"投资人登记",-1)),z=d(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:O,alt:""})])],-1)),$={class:"banner"},K=d(()=>t("div",{class:"title"},[t("span",null,"刑事案件投资人信息核对")],-1)),Q=d(()=>t("div",{class:"title_img"},[t("img",{src:G,alt:""})],-1)),X=_('<img class="primary" src="'+J+'" alt="" data-v-bc671c3b><img class="warning" src="'+V+'" alt="" data-v-bc671c3b><img class="success" src="'+H+'" alt="" data-v-bc671c3b><img class="error" src="'+L+'" alt="" data-v-bc671c3b><img class="default" src="'+U+'" alt="" data-v-bc671c3b>',5),Y=[X],Z={class:"content"},tt={key:0,class:"content_item"},st=_('<div class="title" data-v-bc671c3b>驳回说明</div><div class="reject_info" data-v-bc671c3b><div class="info_item" data-v-bc671c3b><div class="title_text" data-v-bc671c3b>驳回理由</div><div class="content_box" data-v-bc671c3b><span data-v-bc671c3b>驳回理由内容</span></div></div><div class="info_item" data-v-bc671c3b><div class="title_text" data-v-bc671c3b>审核材料</div><div class="content_box" data-v-bc671c3b><span data-v-bc671c3b>图片</span></div></div></div>',2),at=[st],ct=_('<div class="content_item" data-v-bc671c3b><div class="title" data-v-bc671c3b>基本信息</div><div class="basic_info" data-v-bc671c3b><div class="info_item" data-v-bc671c3b><div class="title_text" data-v-bc671c3b>案件名称</div><div class="content_text" data-v-bc671c3b><span data-v-bc671c3b>闵界栋非法吸收公众存款案</span></div></div><div class="info_item" data-v-bc671c3b><div class="title_text" data-v-bc671c3b>姓名</div><div class="content_text" data-v-bc671c3b><span data-v-bc671c3b>钱雅菲</span></div></div><div class="info_item" data-v-bc671c3b><div class="title_text" data-v-bc671c3b>证件</div><div class="content_text" data-v-bc671c3b><span data-v-bc671c3b>321****6440</span></div><div class="icon icon_custom" data-v-bc671c3b><img src="'+u+'" alt="" data-v-bc671c3b></div></div></div></div>',1),et={key:1,class:"content_item"},it=d(()=>t("div",{class:"title"},"合同流水",-1)),ot=_('<div class="title_text" data-v-bc671c3b>账户/合同</div><div class="count" data-v-bc671c3b>共 3 份</div><div class="edit" data-v-bc671c3b>查看</div><div class="icon icon_custom" data-v-bc671c3b><img src="'+u+'" alt="" data-v-bc671c3b></div>',4),dt=[ot],lt={key:2,class:"content_item"},nt=d(()=>t("div",{class:"title"},"合同流水",-1)),vt=_('<div class="required_tip" data-v-bc671c3b><span data-v-bc671c3b>*</span></div><div class="title_text" data-v-bc671c3b>账户/合同</div><div class="count" data-v-bc671c3b>共 3 份</div><div class="edit" data-v-bc671c3b>编辑</div><div class="icon icon_custom" data-v-bc671c3b><img src="'+u+'" alt="" data-v-bc671c3b></div>',5),_t=[vt],bt={key:0,class:"bottom_box"},pt={class:"fixed_btn_box"},rt={class:"btn_text"},ut=T({__name:"Investor",setup(b){const B=w(),s=E({applyStatus:"TO_SUBMIT"}),I=()=>{const i=["TO_SUBMIT","PENDING","PASS","REJECT","WITHDRAW"],p=i.indexOf(s.applyStatus)+1;p>=i.length?s.applyStatus=i[0]:s.applyStatus=i[p]};D(()=>{a.getApplyDetail()});const a={handleClickContract:()=>{B.push({name:"Contract"})},getApplyDetail:()=>{console.log("获取申请详情")},submitApply:()=>{console.log("提交申请")},withdrawApply:()=>{console.log("撤回申请")},reSubmitApply:()=>{console.log("重新提交")}},c=new Map([["TO_SUBMIT",{text:"未提交",value:"TO_SUBMIT",className:"primary",userBtn:{show:!0,text:"提交审核",color:"#3a7afc",clickFun:a.submitApply}}],["PENDING",{text:"待审核",value:"PENDING",className:"warning",userBtn:{show:!0,text:"撤回申请",color:"#e53250",clickFun:a.withdrawApply}}],["PASS",{text:"已通过",value:"PASS",className:"success",userBtn:{show:!1}}],["REJECT",{text:"已驳回",value:"REJECT",className:"error",userBtn:{show:!0,text:"重新提交",color:"#3a7afc",clickFun:a.reSubmitApply}}],["WITHDRAW",{text:"已撤回",value:"WITHDRAW",className:"default",userBtn:{show:!0,text:"重新提交",color:"#3a7afc",clickFun:a.reSubmitApply}}]]);return(i,l)=>{var m,h,x,y,S,f;const p=P,A=R;return n(),v("div",j,[g(p,{class:"nav_bar",border:!1,onClickLeft:i.$returnBack},{title:r(()=>[q]),left:r(()=>[z]),_:1},8,["onClickLeft"]),t("div",$,[K,Q,t("div",{class:C(["apply_status",(m=e(c).get(s.applyStatus))==null?void 0:m.className]),onClick:I},[t("div",{class:C(["icon icon_custom",(h=e(c).get(s.applyStatus))==null?void 0:h.className])},Y,2),t("span",null," 审核状态："+k((x=e(c).get(s.applyStatus))==null?void 0:x.text),1)],2)]),t("div",Z,[s.applyStatus==="REJECT"?(n(),v("div",tt,at)):N("",!0),ct,s.applyStatus==="PENDING"||s.applyStatus==="PASS"?(n(),v("div",et,[it,t("div",{class:"contract",onClick:l[0]||(l[0]=(...o)=>a.handleClickContract&&a.handleClickContract(...o))},dt)])):(n(),v("div",lt,[nt,t("div",{class:"contract",onClick:l[1]||(l[1]=(...o)=>a.handleClickContract&&a.handleClickContract(...o))},_t)]))]),(y=e(c).get(s.applyStatus))!=null&&y.userBtn.show?(n(),v("div",bt,[t("div",pt,[g(A,{class:"btn_item",color:(S=e(c).get(s.applyStatus))==null?void 0:S.userBtn.color,onClick:(f=e(c).get(s.applyStatus))==null?void 0:f.userBtn.clickFun},{default:r(()=>{var o;return[t("span",rt,k((o=e(c).get(s.applyStatus))==null?void 0:o.userBtn.text),1)]}),_:1},8,["color","onClick"])])])):N("",!0)])}}});const Ct=F(ut,[["__scopeId","data-v-bc671c3b"]]);export{Ct as default};