(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var o,a,r,c,i,d,l,s,b,u,j,f,h,m,p,g,O,x,A,y,v,w,D,C=t(0),S=t.n(C),k=t(25),P=t.n(k),W=t(12),H=t(4),B=t(2),Q=t(3),R=Object(Q.a)(o||(o=Object(B.a)(["\n    \n    * {\n        padding : 0;\n        margin : 0;\n        box-sizing : border-box;\n        list-style : none;\n        text-decoration : none;\n    }\n\n    html {\n        font-size : 62.5%;\n        min-width : 440px;\n    }\n\n    body {\n        max-width : 1440px;\n        min-height : 1000px;\n        margin : 0 auto;\n    }\n\n    a {\n        color : black;\n    }\n\n    button {\n        cursor : pointer\n    }\n\n    ","\n\n"])),(function(){return Object(Q.b)(a||(a=Object(B.a)(["\n\n        "])))})),I={HeaderStyle:Q.c.header(r||(r=Object(B.a)(["\n    display : flex;\n    flex-direction : row;\n    flex-wrap: nowrap;\n    justify-content : space-between;\n    align-items : flex-end;\n    margin-top : 1rem;\n    border-bottom: 1px solid black;\n    min-width : 420px;\n    & a h1 {\n        font-size : 5rem;\n    }\n"]))),NavStyle:Q.c.nav(c||(c=Object(B.a)(["\n    display : flex;\n    font-size : 3rem;\n    & > * {\n        margin : 0.5rem 1rem 0 1rem;\n    }\n"])))},z=t(1),N=I.HeaderStyle,M=I.NavStyle,E={border:"1px solid black",background:"black",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",color:"white",padding:"0 1rem"},G=function(){return Object(z.jsx)("div",{children:Object(z.jsxs)(N,{children:[Object(z.jsx)(W.b,{to:"/",children:Object(z.jsx)("h1",{children:"To Do List"})}),Object(z.jsxs)(M,{children:[Object(z.jsx)(W.c,{exact:!0,activeStyle:E,to:"/board",children:"To Do"}),Object(z.jsx)(W.c,{activeStyle:E,to:"/calendar",children:"Calendar"})]})]})})},q=t(6),K={todos:[{id:Date.now(),todo:"React \uacf5\ubd80",priority:1,dueDate:{day:1,month:10,year:2021}}]},J=S.a.createContext(K),T=S.a.createContext(),X=t(19),V=t(7),F="todoSubmit",Z="todoDelete",U="todoEdit",Y="todoCheckPriority",L=function(e,n){switch(n.type){case F:return Object(V.a)(Object(V.a)({},e),{},{todos:[].concat(Object(X.a)(e.todos),[{id:Date.now(),todo:n.payload.todo,priority:n.payload.priority,dueDate:n.payload.selectedDay}])});case Z:return Object(V.a)(Object(V.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==n.payload.todo.id}))});case U:return Object(V.a)(Object(V.a)({},e),{},{todos:[].concat(Object(X.a)(e.todos.filter((function(e){return e.id!==n.payload.todo.id}))),[Object(V.a)(Object(V.a)({},n.payload.todo),{},{todo:n.payload.newTodo})])});case Y:return function(e){var n=e.todos,t=[];n.map((function(e){var n=new Date(e.dueDate.year,e.dueDate.month-1,e.dueDate.day).getTime()-Date.now();if(!(n<0))return t.push([e.id,n]);e.priority="Out of Date"})),t.sort((function(e,n){return e[1]-n[1]})),n.map((function(e){for(var n=0;n<t.length;n++)e.id===t[n][0]&&(e.priority=n+1)}))}(e),Object(V.a)(Object(V.a)({},e),{},{todos:Object(X.a)(e.todos)});default:return e}},_=function(e){var n=Object(C.useReducer)(L,K),t=Object(q.a)(n,2),o=t[0],a=t[1];return Object(z.jsx)(J.Provider,{value:o,children:Object(z.jsx)(T.Provider,{value:a,children:e.children})})},$=Q.c.main(i||(i=Object(B.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 70vh;\n    position: relative;\n"]))),ee=t.p+"static/media/corkBoard.ed5928ac.jpg",ne=Q.c.div(d||(d=Object(B.a)(["\n    position: relative;\n    min-width : 1000px;\n    min-height: 400px;\n    margin-top : 2rem;\n    color : white;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    background: url(",") no-repeat center;\n    background-size: cover;\n"])),ee),te=Q.c.button(l||(l=Object(B.a)(["\n    position : absolute;\n    top : 1rem;\n    right : 0.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width : 10rem;\n    padding : 1rem;\n    background: url(",") center no-repeat;\n    background-size: contain;\n    border : none;\n    color : #e53935;\n    outline: none;\n    font-weight: 900;\n    font-size: 2rem;\n    &:hover {\n        transform: rotate(-25deg);\n    }\n"])),"data:image/png;base64,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"),oe=Q.c.form(s||(s=Object(B.a)(['\n    position: relative;\n    top : 70%;\n    min-width : 600px;\n    min-height: 400px;\n    margin-top : 6rem;\n    border : 1px solid #9c88ff;\n    display: flex;\n    justify-content: center;\n    &::before{\n        content : "";\n        width : 6rem;\n        height :6rem;  \n        background: linear-gradient(#673ab7, #e53935);\n        z-index : 1;\n        padding : 0.5rem;\n        border-radius: 50%;\n        position: absolute;\n        box-shadow : 2px 3px 4px;\n        top : -10%;\n    }\n    &::after{\n        content : "";\n        width : 5rem;\n        height :5rem;\n        border-radius: 50%;\n        position : absolute;\n        padding : 0.5rem; \n        z-index : 2;\n        background: url(',") no-repeat center;\n        top : -8%;\n    }\n"])),"data:image/png;base64,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"),ae=Q.c.div(b||(b=Object(B.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    font-size : 2rem;\n    position : relative;\n    min-height: 40rem;\n    & > * {\n        margin : 0.5rem 0;\n    }\n    & button {\n        margin-bottom : 2.5rem;\n    }\n"]))),re=Object(Q.d)(u||(u=Object(B.a)(["\n    from{\n        transform: rotate(5deg);\n    }\n    50%{\n        transform: rotate(-15deg);\n    }\n    to{\n        transform: rotate(5deg);\n    }      \n"]))),ce=Q.c.input(j||(j=Object(B.a)(["\n    width : 30rem;\n    height: 4rem;\n    padding : 0.8rem;\n    position: relative;\n    border : 1px solid #9c88ff;\n    border-radius: 100px;\n    box-shadow : 0 1.5rem 2rem rgba(156, 136, 255, 0.2);\n    outline : none;\n    &:active{\n        animation: "," 1s;        \n    }\n"])),re),ie=(t(40),t(18)),de=t.n(ie),le=function(e){var n=e.changeSelectedDay,t=Object(C.useState)(null),o=Object(q.a)(t,2),a=o[0],r=o[1];return Object(z.jsx)(de.a,{value:a,onChange:function(e){r(e),n(e)},renderInput:function(e){var n=e.ref;return Object(z.jsx)("input",{readOnly:!0,ref:n,placeholder:"Select Due Date",value:a?"".concat(a.year," / ").concat(a.month," / ").concat(a.day," \u2705"):"",style:{width:"30rem",textAlign:"center",padding:"1rem 1.5rem",fontSize:"1.5rem",border:"1px solid #9c88ff",borderRadius:"100px",boxShadow:"0 1.5rem 2rem rgba(156, 136, 255, 0.2)",color:"#9c88ff",outline:"none"},className:"my-custom-input-class"})},shouldHighlightWeekends:!0})},se=S.a.memo(le),be=Q.c.button(f||(f=Object(B.a)(["\n    width : 15rem;\n    height : 5rem;\n    font-size : 3rem;\n    margin : 2.5rem auto;\n    border-radius: 100px;\n    background: #9c88ff;\n    color :white;\n    box-shadow : 1rem 1.5rem 3rem rgba(156, 136, 255, 0.5);\n    &:hover{\n        transform : scale(1.1);\n    }\n"]))),ue=Q.c.div(h||(h=Object(B.a)(["\n    position: absolute;\n    top : 85vh;\n    display: center;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n"]))),je=t.p+"static/media/real-pin.403b3fe5.png",fe=Object(Q.d)(m||(m=Object(B.a)(["\n    from {\n        transform : scale(1.0) rotate(0deg);\n    }\n    to {\n        transform : scale(0) rotate(360deg) translate(500%,800%);\n    }\n"]))),he=Object(Q.d)(p||(p=Object(B.a)(["\n    0%{\n        transform: translate(55%,-70%);\n    }\n    50%{\n        transform: translate(55%,-100%);\n    }\n    60%{\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(0);\n    }\n"]))),me=Q.c.div(g||(g=Object(B.a)(["\n    position: relative;\n    margin : 0.8rem;\n    color : black;\n    min-width : 10rem;\n    min-height : 1rem;\n    display: flex;\n    flex-direction: column;\n    //align-items: center;\n    padding : 0.5rem;\n    box-shadow: 4px 4px 4px black;\n    ",'\n    &::after{\n        content : "";\n        position: absolute;\n        top : -25%;\n        left : 45%;\n        background: url(',") top no-repeat;\n        background-size: 80%;\n        width : 70px;\n        height: 70px;\n        ",'\n    }\n    & h2 {\n        margin : 0.5rem;\n        font-size : 3rem;\n        border-bottom: 1px solid black;\n    }\n    & p {\n        font-size : 2rem;\n    }\n    & button {\n        background : none;\n        padding : 0.2rem;\n        margin : 0.2rem 0;\n        background-color: white;\n        font-weight: 700;\n        font-size : 1.5rem;\n        &::after{\n            content : "";\n            background-color: black;\n            width : 50%;\n            height : 50%;\n        }\n        &:hover {\n            transform: scale(1.1);\n        }\n    }\n    ',";\n"])),(function(e){var n=e.color;return"red"===n?Object(Q.b)(O||(O=Object(B.a)(["\n                background: linear-gradient(#ff8a80, #f44336);\n            "]))):"blue"===n?Object(Q.b)(x||(x=Object(B.a)(["\n                background: linear-gradient(#8187ff, #42a5f5);\n            "]))):"yellow"===n?Object(Q.b)(A||(A=Object(B.a)(["\n                background: linear-gradient(#fdd835, #fdd835);\n            "]))):void 0}),je,(function(e){if(e.isCalendar)return Object(Q.b)(y||(y=Object(B.a)(["\n                    display: none;\n                "])))}),(function(e){if("deleted"===e.className)return Object(Q.b)(v||(v=Object(B.a)(["\n            animation: "," 1.3s 1.2s;\n            &::after{\n                animation: "," 2.2s ;\n            }\n        "])),fe,he)})),pe=function(e){var n=e.todo,t=e.edit,o=e.color,a=e.deleted,r=e.todoEdit,c=e.todoEditSubmit,i=e.todoDelete,d=e.isCalendar;return Object(z.jsxs)(me,{className:a?"deleted":null,color:o,isCalendar:d,children:[Object(z.jsx)("h2",{children:n.priority}),t?Object(z.jsx)("input",{placeholder:n.todo,onChange:r}):Object(z.jsx)("p",{children:n.todo}),Object(z.jsx)("p",{children:"".concat(n.dueDate.year," / ").concat(n.dueDate.month," / ").concat(n.dueDate.day)}),t?Object(z.jsx)("button",{onClick:c,children:"\uc801\uc6a9"}):Object(z.jsx)("button",{onClick:c,children:"\uc218\uc815"}),Object(z.jsx)("button",{onClick:i,children:"\uc0ad\uc81c"})]})},ge=function(e){var n=e.todo,t=e.isCalendar,o=(Object(C.useContext)(J),Object(C.useContext)(T)),a=Object(C.useState)(!1),r=Object(q.a)(a,2),c=r[0],i=r[1],d=Object(C.useState)(),l=Object(q.a)(d,2),s=l[0],b=l[1],u=Object(C.useState)(!1),j=Object(q.a)(u,2),f=j[0],h=j[1],m=Object(C.useState)("red"),p=Object(q.a)(m,2),g=p[0],O=p[1];Object(C.useEffect)((function(){!0===f&&setTimeout((function(){return o({type:Z,payload:{todo:n}}),function(){return h(!1)}}),2500)}),[f]),Object(C.useEffect)((function(){var e=Math.random();e<=.3?O("blue"):e>=.7&&O("yellow")}),[]);return Object(z.jsx)(pe,{todo:n,edit:c,color:g,deleted:f,todoEdit:function(e){e.preventDefault(),b(e.target.value)},todoEditSubmit:function(e){e.preventDefault(),i(!c),c&&o({type:U,payload:{todo:n,newTodo:s}})},todoDelete:function(e){e.preventDefault(),h(!0)},isCalendar:t})},Oe=function(e){var n=e.todoContext,t=e.todo,o=e.todoSubmit,a=e.addTodoValue,r=e.setSelectedDay,c=e.changeSelectedDay,i=e.checkPriority;return Object(z.jsxs)($,{children:[Object(z.jsxs)(ne,{children:[n.todos.map((function(e){return Object(z.jsx)(ge,{todo:e},e.id)})),Object(z.jsx)(te,{onClick:i,children:"Check Priority"})]}),Object(z.jsx)(oe,{children:Object(z.jsxs)(ae,{children:[Object(z.jsx)("label",{children:"\ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694!"}),Object(z.jsx)(ce,{onChange:a,value:t}),Object(z.jsx)("label",{children:"\ub9c8\uac10 \uc77c\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!"}),Object(z.jsx)(se,{onChange:r,changeSelectedDay:c}),Object(z.jsx)(be,{onClick:o,children:"Add"})]})}),Object(z.jsxs)(ue,{children:[Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com/icon/mrLvzJucXKo2/calculate",children:"Calculate"})," icon by ",Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com",children:"Icons8  "}),Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com/icon/9i9HlS0bGONj/pencil",children:"Pencil"})," icon by ",Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com",children:"Icons8  "}),Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com/icon/MbRthDvtoWcb/memo",children:"Memo"})," icon by ",Object(z.jsx)("a",{target:"_blank",href:"https://icons8.com",children:"Icons8"})]})]})},xe=S.a.memo(Oe),Ae=function(){var e=Object(C.useContext)(J),n=Object(C.useContext)(T),t=Object(C.useState)(""),o=Object(q.a)(t,2),a=o[0],r=o[1],c=Object(C.useState)("Check now!"),i=Object(q.a)(c,2),d=i[0],l=i[1],s=Object(C.useState)(null),b=Object(q.a)(s,2),u=b[0],j=b[1];return Object(z.jsx)(xe,{todoContext:e,checkPriority:function(e){e.preventDefault(),n({type:Y})},todo:a,todoSubmit:function(e){e.preventDefault(),n({type:F,payload:{todo:a,priority:d,selectedDay:u}}),r(""),l("Check Now!")},addTodoValue:function(e){r(e.target.value)},setSelectedDay:j,changeSelectedDay:function(e){j(e)}})},ye=S.a.memo(Ae),ve=Q.c.div(w||(w=Object(B.a)(["\n    display : flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding : 2rem;\n"]))),we=Q.c.div(D||(D=Object(B.a)(["\n    width : 15vw;\n    height: 90rem;\n    box-shadow : 1px 1px 10px;\n    margin-right : 1rem;\n    border-radius: 1rem;\n    min-width : 30rem;\n    & .selectedDayTodoTitle{\n        display : flex;\n        justify-content: center;\n        align-items: center;\n        width : 100%;\n        height : 4%;\n        font-size : 2rem;\n        color : white;\n        background-color: black;\n        border-top-left-radius: 1rem;\n        border-top-right-radius: 1rem;\n    }\n"]))),De=(t(41),function(e){var n=e.selectedDay,t=e.setSelectedDay,o=e.todoContext,a=[];return o.todos.map((function(e){return a.push(Object(V.a)(Object(V.a)({},e.dueDate),{},{className:"scheduled"}))})),console.log(a),Object(z.jsx)(ie.Calendar,{value:n,onChange:t,shouldHighlightWeekends:!0,customDaysClassName:a})}),Ce=function(e){var n=e.selectedDay,t=e.setSelectedDay,o=e.todoContext;return Object(z.jsxs)(ve,{children:[Object(z.jsxs)(we,{children:[Object(z.jsx)("div",{className:"selectedDayTodoTitle",children:"\uc774\ub0a0\uc758 \ud560 \uc77c"}),o.todos.map((function(e){if(null!==n&&n.year===e.dueDate.year&&n.month===e.dueDate.month&&n.day===e.dueDate.day)return Object(z.jsx)(ge,{todo:e,isCalendar:!0},e.id)}))]}),Object(z.jsx)(De,{selectedDay:n,setSelectedDay:t,todoContext:o})]})},Se=function(){var e=Object(C.useContext)(J),n=(Object(C.useContext)(T),Object(C.useState)(null)),t=Object(q.a)(n,2),o=t[0],a=t[1];return Object(z.jsx)(Ce,{selectedDay:o,setSelectedDay:a,todoContext:e})},ke=function(){return Object(z.jsx)("div",{children:Object(z.jsx)("h1",{children:"\ub300\ucda9 \ub85c\uadf8\uc778 \uad6c\ud604\ud560 \uba54\uc778 \ud398\uc774\uc9c0"})})},Pe=function(){return Object(z.jsx)(ke,{})},We=function(){return Object(z.jsx)("div",{children:Object(z.jsxs)(_,{children:[Object(z.jsx)(R,{}),Object(z.jsxs)(W.a,{children:[Object(z.jsx)(G,{}),Object(z.jsx)(H.a,{path:"/",exact:!0,component:Pe}),Object(z.jsx)(H.a,{path:"/board",exact:!0,component:ye}),Object(z.jsx)(H.a,{path:"/calendar",exact:!0,component:Se})]})]})})};P.a.render(Object(z.jsx)(S.a.StrictMode,{children:Object(z.jsx)(We,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7fe105bd.chunk.js.map