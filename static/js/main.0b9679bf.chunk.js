(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),l=s(2),o=s.n(l),i=s(8),r=s(3),d=s(4),j=s(6),h=s(5),m=(s(14),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={},c.reset=function(){c.props.callback("false")},c}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("span",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Contact Info"}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Name: ",this.props.name]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Email: ",this.props.email]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Phone Number: ",this.props.number]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Education"}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["School: ",this.props.school]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Field of Study: ",this.props.study]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Study Date: ",this.props.dateOfStudy]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Work History"}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Company Name: ",this.props.company]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Position: ",this.props.position]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Tasks performed: ",this.props.tasks]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["Start: ",this.props.startDate]}),Object(c.jsxs)("p",{className:"col-lg-4 col-md-6",children:["End: ",this.props.endDate]})]}),Object(c.jsx)("button",{className:"btn btn-success",onClick:this.reset,children:"EDIT"})]})}}]),s}(a.Component)),p=(s(15),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleChange=function(t){var s=t.target;e.setState(Object(i.a)({},s.name,s.value))},e.state={form:{display:"block"},resume:{display:"none"}},e.toggle=function(t){"true"===t?(document.querySelector("body").style.cssText="background-color:white",e.setState({form:{display:"none"},resume:{display:"flex"}})):(document.querySelector("body").style.cssText="background-color:#1bb6c9",e.setState({form:{display:"block"},resume:{display:"none"}}))},e.submitForm=function(t){t.preventDefault(),e.toggle("true"),o.a.render(Object(c.jsx)(m,{name:e.state.name,email:e.state.email,number:e.state.number,school:e.state.school,study:e.state.study,dateOfStudy:e.state.dateOfStudy,company:e.state.company,position:e.state.position,tasks:e.state.tasks,startDate:e.state.startDate,endDate:e.state.endDate,callback:e.toggle}),document.getElementById("resume"))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Resume"})}),Object(c.jsxs)("form",{onSubmit:this.submitForm,style:this.state.form,autoComplete:"off",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Contact Info"}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Name:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"name"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Email:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"email"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Phone Number:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"number",placeholder:"(000)-000-0000"})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Education"}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"School Name:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"school"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Field of Study:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"study"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Date of Study:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"dateOfStudy",placeholder:"YYYY-YYYY"})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{children:"Work History"}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Company Name:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"company"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Position:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"position"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Tasks:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"tasks"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"Start Date:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"startDate",placeholder:"MM/DD/YYYY"})]}),Object(c.jsxs)("span",{className:"col-lg-4 col-md-6",children:[Object(c.jsx)("p",{children:"End Date:"}),Object(c.jsx)("input",{type:"text",onChange:this.handleChange,name:"endDate",placeholder:"MM/DD/YYYY"})]})]}),Object(c.jsx)("div",{class:"row",children:Object(c.jsx)("span",{className:" button col-md-6 col-sm-5 offset-md-6 offset-lg-7 button",children:Object(c.jsx)("button",{className:"btn-success btn",children:"ENTER"})})})]}),Object(c.jsx)("span",{id:"resume",style:this.state.resume})]})}}]),s}(a.Component));o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b9679bf.chunk.js.map