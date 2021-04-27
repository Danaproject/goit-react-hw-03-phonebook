(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=n(11),i=n(3),l=n(4),u=n(6),b=n(5),h=n(10),m=n.n(h),j=(n(24),n(0)),d=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleNumberChange=function(e){t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:"ContactForm__label",children:["Name",Object(j.jsx)("input",{type:"text",name:"name",className:"ContactForm__input",value:this.state.name,onChange:this.handleNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:"ContactForm__label",children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",className:"ContactForm__input",value:this.state.number,onChange:this.handleNumberChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})}}]),n}(a.Component),f=(n(8),function(t){var e=t.contacts,n=t.onDeleteContact;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:"ContactList__item",children:[Object(j.jsxs)("p",{className:"ContactList__text",children:[a,": \u2121 ",c]}),Object(j.jsx)("button",{type:"button",className:"ContactList__btn",onClick:function(){return n(e)},children:"\ud83d\uddd1"})]},e)}))}),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:"ContactList",children:Object(j.jsx)(f,{contacts:e,onDeleteContact:n})})},O=(n(26),function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:"Filter__label",children:["\ud83d\udd0d Search contacts by name",Object(j.jsx)("input",{type:"text",value:e,className:"Filter__input",onChange:n})]})}),p=(n(27),function(t){var e=t.children;return Object(j.jsx)("div",{className:"Container",children:e})}),x=(n(28),function(t){var e=t.children;return Object(j.jsx)("div",{className:"Panel",children:e})}),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},t.ifContactExists=function(e){return t.state.contacts.some((function(t){return t.name===e}))},t.addContact=function(e,n){var a={id:m.a.generate(),name:e,number:n};t.ifContactExists(e)?alert("".concat(e," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.length,c=this.getFilteredContacts();return Object(j.jsxs)(p,{children:[Object(j.jsxs)(x,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:this.addContact})]}),Object(j.jsxs)(x,{children:[Object(j.jsx)("h1",{children:"Contacts"}),Object(j.jsxs)("p",{className:"total",children:["Total amount: ",a]}),Object(j.jsx)(O,{value:n,onChange:this.changeFilter}),Object(j.jsx)(C,{contacts:c,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(29),n(30);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},8:function(t,e,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.7fa47192.chunk.js.map