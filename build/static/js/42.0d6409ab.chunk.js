(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[42,61],{1105:function(e,t,n){"use strict";var a=n(12),r=n(13),l=n(15),o=n(14),u=n(0),c=n.n(u),p=n(136),i=n(66),m=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,{className:"mb-2"},c.a.createElement(i.a,{sm:"12",className:"ml-50"},c.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):c.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),n}(c.a.Component);t.a=m},1111:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"j",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"k",(function(){return p})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return m})),n.d(t,"n",(function(){return s})),n.d(t,"h",(function(){return B})),n.d(t,"i",(function(){return d})),n.d(t,"a",(function(){return R})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),l=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass FilledButtons extends React.Component {\n  render() {\n    return(\n        <Button.Ripple color="primary">Primary</Button.Ripple>\n\n        <Button.Ripple color="success">Success</Button.Ripple>\n\n        <Button.Ripple color="info">Info</Button.Ripple>\n\n        <Button.Ripple color="warning">Warning</Button.Ripple>\n\n        <Button.Ripple color="danger">Danger</Button.Ripple>\n\n        <Button.Ripple color="light">Light</Button.Ripple>\n\n        <Button.Ripple color="dark">Dark</Button.Ripple>\n    )\n  }\n}\nexport default FilledButtons\n')),o=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {Button} from "reactstrap"\n\n  class OutlineButtons extends React.Component {\n    render() {\n      return(\n          <Button.Ripple outline color="primary">Primary</Button.Ripple>\n\n          <Button.Ripple outline color="success">Success</Button.Ripple>\n\n          <Button.Ripple outline color="info">Info</Button.Ripple>\n\n          <Button.Ripple outline color="warning">Warning</Button.Ripple>\n\n          <Button.Ripple outline color="danger">Danger</Button.Ripple>\n\n          <Button.Ripple outline color="light">Light</Button.Ripple>\n\n          <Button.Ripple outline color="dark">Dark</Button.Ripple>\n      )\n    }\n  }\n  export default OutlineButtons\n  ')),u=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass FlatButtons extends React.Component {\n    render() {\n    return(\n        <Button.Ripple className="mr-1 mb-1" color="flat-primary">Primary</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-success">Success</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-info">Info</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-warning">Warning</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-danger">Danger</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-light">Light</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="flat-dark">Dark</Button.Ripple>\n    )\n    }\n}\nexport default FlatButtons\n    ')),c=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass GradientButtons extends React.Component {\nrender() {\n    return(\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">Primary</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-success" color="none">Success</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-info" color="none">Info</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-warning" color="none">Warning</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-danger" color="none">Danger</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1 bg-gradient-dark" color="none">Dark</Button.Ripple>\n    )\n}\n}\nexport default GradientButtons\n      ')),p=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass ReliefButtons extends React.Component {\n    render() {\n    return(\n        <Button.Ripple className="mr-1 mb-1" color="relief-primary">Primary</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="relief-success">Success</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="relief-info">Info</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="relief-warning">Warning</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="relief-danger">Danger</Button.Ripple>\n\n        <Button.Ripple className="mr-1 mb-1" color="relief-dark">Dark</Button.Ripple>\n    )\n    }\n}\nexport default ReliefButtons\n        ')),i=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass SqaureButtons extends React.Component {\n    render() {\n    return(\n    <Button.Ripple className="mr-1 mb-1 square" outline color="primary">\n      Primary\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="success">\n      Success\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="info">\n      Info\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="warning">\n      Warning\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="danger">\n      Danger\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="light">\n      Light\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 square" outline color="dark">\n      Dark\n    </Button.Ripple>\n    )\n    }\n}\nexport default SqaureButtons\n          ')),m=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass RoundButtons extends React.Component {\n    render() {\n    return(\n      <Button.Ripple className="mr-1 mb-1 round" outline color="primary">\n      Primary\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="success">\n      Success\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="info">\n      Info\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="warning">\n      Warning\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="danger">\n      Danger\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="light">\n      Light\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 round" outline color="dark">\n      Dark\n    </Button.Ripple>\n    )\n    }\n}\nexport default RoundButtons\n            ')),s=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass TextColorButtons extends React.Component {\n    render() {\n    return(\n    <Button.Ripple className="mr-1 mb-1  border-primary text-primary" color="flat-primary">\n      Primary\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-success" color="flat-success">\n      Success\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-info" color="flat-info">\n      Info\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-warning" color="flat-warning">\n      Warning\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-danger" color="flat-danger">\n      Danger\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-light" color="flat-light">\n      Light\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1  border-primary text-dark" color="flat-dark">\n      Dark\n    </Button.Ripple>\n    )\n    }\n}\nexport default TextColorButtons\n              ')),B=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass IconButtons extends React.Component {\n  render() {\n  return(\n    <Button.Ripple className="mr-1 mb-1" outline color="primary">\n      <Home size={14} />\n      Home\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" color="warning">\n      <Star size={14} />\n       Star\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" color="flat-success">\n      <Check size={14} />\n      Done\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" outline color="primary" disabled>\n      Home size={14} />\n      Home\n    </Button.Ripple>\n  )\n  }\n}\nexport default IconButtons\n              ')),d=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\nimport { Search, Inbox, Camera } from "react-feather"\n\nclass IconOnlyButtons extends React.Component {\n  render() {\n  return(\n    <Button.Ripple className="mr-1 mb-1" outline color="primary">\n      <Search size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" color="warning">\n      <Inbox size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" color="flat-success">\n      <Camera size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1" outline color="primary" disabled>\n      <Search size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple\n      className="mr-1 mb-1 rounded-circle"\n      outline\n      color="primary"\n    >\n      <Search size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple className="mr-1 mb-1 rounded-circle" color="warning">\n      <Inbox size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple\n      className="mr-1 mb-1 rounded-circle"\n      color="flat-success"\n    >\n      <Camera size={14} />\n    </Button.Ripple>\n\n    <Button.Ripple\n      className="mr-1 mb-1 rounded-circle"\n      outline\n      color="primary"\n      disabled\n    >\n      <Search size={14} />\n    </Button.Ripple>\n  )\n  }\n}\nexport default IconOnlyButtons\n              ')),R=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, ButtonGroup, Row, Col} from "reactstrap"\nimport { Facebook, Instagram, Twitter } from "react-feather"\n\nclass ButtonGroups extends React.Component {\n  render() {\n  return(\n    <Row>\n    <Col md={6} sm={12}>\n      <Button.RippleGroup>\n        <Button.Ripple color="primary">Left</Button.Ripple>{" "}\n        <Button.Ripple color="danger">Middle</Button.Ripple>{" "}\n        <Button.Ripple color="info">Right</Button.Ripple>{" "}\n      </ButtonGroup>\n    </Col>\n\n    <Col md={6} sm={12}>\n      <Button.RippleGroup>\n        <Button.Ripple outline color="primary">\n          <Facebook size={15} />\n        </Button.Ripple>{" "}\n        <Button.Ripple outline color="danger">\n          <Twitter size={15} />\n        </Button.Ripple>{" "}\n        <Button.Ripple outline color="info">\n          <Instagram size={15} />\n        </Button.Ripple>{" "}\n      </ButtonGroup>\n    </Col>\n  </Row>\n  )\n  }\n}\nexport default ButtonGroups\n              ')),f=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, Row, Col} from "reactstrap"\n\nclass ButtonSizes extends React.Component {\n  render() {\n  return(\n    <Row>\n      <Col md={6} sm={12}>\n        <Button.Ripple className="mr-1 mb-1" color="primary" size="lg">\n          Large\n        </Button.Ripple>{" "}\n        <Button.Ripple className="mr-1 mb-1" color="danger">\n          Default\n        </Button.Ripple>{" "}\n        <Button.Ripple className="mb-1" color="info" size="sm">\n          Small\n        </Button.Ripple>{" "}\n      </Col>\n      <Col md={6} sm={12}>\n        <Button.Ripple\n          outline\n          className="mr-1 mb-1"\n          color="primary"\n          size="lg"\n        >\n          Large\n        </Button.Ripple>{" "}\n        <Button.Ripple outline className="mr-1 mb-1" color="danger">\n          Default\n        </Button.Ripple>{" "}\n        <Button.Ripple outline className="mb-1" color="info" size="sm">\n          Small\n        </Button.Ripple>\n      </Col>\n  </Row>\n  )\n  }\n}\nexport default ButtonSizes\n              ')),g=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button} from "reactstrap"\n\nclass ButtonTags extends React.Component {\n  render() {\n  return(\n    <a\n      className="mr-1 mb-1 btn btn-primary"\n      color="primary"\n      href="https://pixinvent.com/"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      Link\n    </a>\n    <Button.Ripple className="mr-1 mb-1" color="primary" tag="button">\n      Button\n    </Button.Ripple>\n    <input\n      className="mr-1 mb-1 btn btn-primary"\n      type="button"\n      value="Input"\n    />\n    <input\n      className="mr-1 mb-1 btn btn-primary"\n      type="submit"\n      value="Submit"\n    />\n  )\n  }\n}\nexport default ButtonTags\n              ')),b=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, ButtonGroup, Row, Col} from "reactstrap"\n\nclass ButtonGroupsVertical extends React.Component {\n  render() {\n  return(\n    <Row>\n      <Col md={4} sm={12}>\n        <Button.RippleGroup vertical className="mb-1">\n          <Button.Ripple color="primary">Button</Button.Ripple>{" "}\n          <Button.Ripple color="primary">Button</Button.Ripple>{" "}\n          <Button.Ripple color="primary">Button</Button.Ripple>{" "}\n          <Button.Ripple color="primary">Button</Button.Ripple>{" "}\n          <Button.Ripple color="primary">Button</Button.Ripple>{" "}\n        </ButtonGroup>\n      </Col>\n      <Col md={4} sm={12}>\n        <Button.RippleGroup vertical className="mb-1">\n          <Button.Ripple color="primary">Primary</Button.Ripple>{" "}\n          <Button.Ripple color="success">Success</Button.Ripple>{" "}\n          <Button.Ripple color="info">Info</Button.Ripple>{" "}\n          <Button.Ripple color="warning">Warning</Button.Ripple>{" "}\n          <Button.Ripple color="danger">Danger</Button.Ripple>{" "}\n        </ButtonGroup>\n      </Col>\n      <Col md={4} sm={12}>\n        <Button.RippleGroup vertical className="mb-1">\n          <Button.Ripple outline color="primary">\n            Button\n          </Button.Ripple>{" "}\n          <Button.Ripple outline color="success">\n            Button\n          </Button.Ripple>{" "}\n          <Button.Ripple outline color="info">\n            Button\n          </Button.Ripple>{" "}\n          <Button.Ripple outline color="warning">\n            Button\n          </Button.Ripple>{" "}\n          <Button.Ripple outline color="danger">\n            Button\n          </Button.Ripple>{" "}\n        </ButtonGroup>\n      </Col>\n  </Row>\n  )\n  }\n}\nexport default ButtonGroupsVertical\n              '))},1137:function(e,t,n){"use strict";var a=n(12),r=n(13),l=n(15),o=n(14),u=(n(141),n(0)),c=n.n(u),p=n(260),i=n(262),m=n(263),s=n(261),B=n(86),d=(n(1234),n(1113)),R=n(329),f=n(136),g=n(66),b=(0,d.a.createSliderWithTooltip)(d.a.Range),E=(d.a.Handle,function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={value:20},e.onSliderChange=function(t){e.setState({value:t})},e.resetSlider=function(){e.setState({value:null})},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(i.a,null,c.a.createElement("center",null,c.a.createElement(m.a,null,"\u05d1\u05d7\u05e8 \u05e1\u05db\u05d5\u05dd"))),c.a.createElement(s.a,null,c.a.createElement(f.a,null,c.a.createElement(g.a,{sm:"9"},c.a.createElement(b,{min:1,max:500,defaultValue:[100,300],tipFormatter:function(e){return"".concat(e,"%")},reverse:"rtl"===this.props.rtl})),c.a.createElement(g.a,null,c.a.createElement(B.a.Ripple,{className:"mr-1 mb-1",outline:!0,color:"primary"},c.a.createElement(R.a,{size:20}))))))}}]),n}(c.a.Component));t.a=E},1164:function(e,t,n){},1169:function(e,t,n){e.exports=n.p+"static/media/user-01.a8479cb8.jpg"},1190:function(e,t,n){e.exports=n.p+"static/media/2.fedb99d5.jpg"},1191:function(e,t,n){e.exports=n.p+"static/media/25.e002b22a.jpg"},1200:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),l=n(15),o=n(14),u=n(0),c=n.n(u),p=n(1105),i=n(136),m=n(66),s=n(283),B=n(1137),d=n(260),R=n(262),f=n(263),g=n(261),b=n(1113),E={"-10":"-10\xb0C",0:c.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:c.a.createElement("strong",null,"100\xb0C")}},h=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(R.a,null,c.a.createElement(f.a,null,"Marks")),c.a.createElement(g.a,null,c.a.createElement(b.a,{min:-10,marks:E,step:null,defaultValue:20,className:"pb-2",reverse:"rtl"===this.props.rtl})))}}]),n}(c.a.Component),y=b.a.Range,v=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={value:[20,40,60,80]},e.handleControlledRange=function(t){e.setState({value:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(R.a,null,c.a.createElement(f.a,null,"Range")),c.a.createElement(g.a,null,c.a.createElement("h5",{className:"my-2"},"Basic Range"),c.a.createElement(y,{defaultValue:[0,20],reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Range With Steps"),c.a.createElement(y,{defaultValue:[0,20],step:20,reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Range With Steps And Dots"),c.a.createElement(y,{defaultValue:[0,40],step:20,dots:!0,reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Disabled Range"),c.a.createElement(y,{defaultValue:[0,40],disabled:!0,reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Multi Range"),c.a.createElement(y,{count:3,defaultValue:[20,40,60,80],reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Multi Range With Track Colors"),c.a.createElement(y,{count:3,defaultValue:[20,40,60,80],pushable:!0,trackStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],handleStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],railStyle:{backgroundColor:"#f0f0f0"},reverse:"rtl"===this.props.rtl}),c.a.createElement("h5",{className:"my-2"},"Controlled Range"),c.a.createElement(y,{value:this.state.value,onChange:this.handleControlledRange})))}}]),n}(c.a.Component),N=n(638),C=n(45),x=n(640),j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={lowerBound:20,upperBound:40,min:0,max:100,value:[20,100]},e.handleApply=function(){var t=e.state,n=t.lowerBound,a=t.upperBound;e.setState({value:[n,a]})},e.onLowerBoundChange=function(t){e.setState({lowerBound:+t.target.value,value:[+t.target.value,e.state.upperBound]})},e.onUpperBoundChange=function(t){e.setState({upperBound:+t.target.value,value:[e.state.lowerBound,+t.target.value]})},e.onSliderChange=function(t){e.setState({value:t})},e.onMinChange=function(t){e.setState({min:+t.target.value||0})},e.onMaxChange=function(t){e.setState({max:+t.target.value||100})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(d.a,null,c.a.createElement(R.a,null,c.a.createElement(f.a,null,"Dynamic")),c.a.createElement(g.a,null,c.a.createElement(N.a,null,c.a.createElement(C.a,null,"LowerBound:"),c.a.createElement(x.a,{type:"number",value:this.state.lowerBound,onChange:function(t){return e.onLowerBoundChange(t)}})),c.a.createElement(N.a,null,c.a.createElement(C.a,null,"UpperBound:"),c.a.createElement(x.a,{type:"number",value:this.state.upperBound,onChange:function(t){return e.onUpperBoundChange(t)}})),c.a.createElement(N.a,null,c.a.createElement(C.a,null,"Min:"),c.a.createElement(x.a,{type:"number",value:this.state.min,onChange:function(t){return e.onMinChange(t)}})),c.a.createElement(N.a,null,c.a.createElement(C.a,null,"Max:"),c.a.createElement(x.a,{type:"number",value:this.state.max,onChange:function(t){return e.onMaxChange(t)}})),c.a.createElement(b.a.Range,{value:this.state.value,min:this.state.min,max:this.state.max,onChange:function(t){return e.onSliderChange(e.state.value)},reverse:"rtl"===this.props.rtl})))}}]),n}(c.a.Component),k={"-10":"-10\xb0C",0:c.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:c.a.createElement("strong",null,"100\xb0C")}},S={float:"left",width:200,height:400,marginLeft:10,marginTop:10,display:"flex",flexDirection:"column",alignItems:"center"},O=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(R.a,null,c.a.createElement(f.a,null,"Vertical")),c.a.createElement(g.a,null,c.a.createElement(i.a,null,c.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},c.a.createElement("div",{style:S},c.a.createElement("h5",{className:"my-1"},"Basic Vertical"),c.a.createElement(b.a,{vertical:!0,min:-10,marks:k,step:null,defaultValue:20,reverse:"rtl"===this.props.rtl}))),c.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},c.a.createElement("div",{style:S},c.a.createElement("h5",{className:"my-1"}," Steps And Marks"),c.a.createElement(b.a,{vertical:!0,dots:!0,min:-10,marks:k,step:10,defaultValue:20,reverse:"rtl"===this.props.rtl}))),c.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},c.a.createElement("div",{style:S},c.a.createElement("h5",{className:"my-1"},"Vertical Range"),c.a.createElement(b.a.Range,{vertical:!0,min:-10,marks:k,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))),c.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},c.a.createElement("div",{style:S},c.a.createElement("h5",{className:"my-1"}," Range Steps And Marks"),c.a.createElement(b.a.Range,{vertical:!0,min:-10,marks:k,step:10,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))))))}}]),n}(c.a.Component),w=(n(1262),n(1164),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:"Rc Slider",subTitle:"Slider UI component for React",link:"https://github.com/react-component/slider/"}),c.a.createElement(s.a.Consumer,null,(function(e){return c.a.createElement(i.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement(B.a,{rtl:e.state.direction})),c.a.createElement(m.a,{sm:"12"},c.a.createElement(h,{rtl:e.state.direction})),c.a.createElement(m.a,{sm:"12"},c.a.createElement(v,{rtl:e.state.direction})),c.a.createElement(m.a,{sm:"12"},c.a.createElement(O,{rtl:e.state.direction})),c.a.createElement(m.a,{sm:"12"},c.a.createElement(j,{rtl:e.state.direction})))})))}}]),n}(c.a.Component));t.default=w},2094:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),l=n(15),o=n(14),u=n(0),c=n.n(u),p=n(260),i=n(261),m=(n(1169),n(1190),n(1191),n(139),n(100),n(88),n(111),n(278),n(68),n(281),n(1200),n(141)),s=n(262),B=n(1234),d=n(1113),R=n(263),f=n(268),g=n(269),b=n(136),E=n(66),h=n(86),y=(n(3),n(1111),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,null),c.a.createElement("div",{className:"views"}),c.a.createElement("p",null),c.a.createElement(f.a,{activeTab:this.state.activeTab},c.a.createElement(g.a,{tabId:"1"},c.a.createElement(b.a,null,c.a.createElement(E.a,{lg:9,md:12},c.a.createElement("a",{href:"ansFolder"},c.a.createElement(h.a.Ripple,{block:!0,outline:!0,className:"btn-block",color:"primary",size:"lg"},"\u05d1\u05d5\u05d0 \u05e0\u05e8\u05d0\u05d4 \u05de\u05d4 \u05d9\u05e9 \u05dc\u05e0\u05d5")))))))}}]),n}(c.a.Component)),v=((0,d.a.createSliderWithTooltip)(d.a.Range),d.a.Handle),N=function(e){var t=e.value,n=e.dragging,a=e.index,r=Object(m.a)(e,["value","dragging","index"]);return c.a.createElement(B.a,{prefixCls:"rc-slider-tooltip",overlay:t,visible:n,placement:"top",key:a},c.a.createElement(v,Object.assign({value:t},r)))},C=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={value:20},e.onSliderChange=function(t){e.setState({value:t})},e.resetSlider=function(){e.setState({value:null})},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(s.a,null),c.a.createElement(i.a,null,c.a.createElement("h5",{className:"my-1"},"\u05d1\u05d7\u05e8 \u05e1\u05db\u05d5\u05dd"),c.a.createElement(d.a,{min:0,max:20,defaultValue:3,handle:N,reverse:"rtl"===this.props.rtl,tipProps:{prefixCls:"rc-slider-tooltip"}}),c.a.createElement("h5",{className:"mt-3"},"\u05dc\u05db\u05de\u05d4 \u05d0\u05e4\u05d9\u05e7\u05d9 \u05d4\u05e9\u05e7\u05e2\u05d4 \u05dc\u05d7\u05dc\u05e7"),c.a.createElement(d.a,{min:20,defaultValue:20,marks:{20:20,40:40,60:60,100:100},step:null,reverse:"rtl"===this.props.rtl}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(y,null)))}}]),n}(c.a.Component),x=(n(1137),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,null,c.a.createElement(i.a,null,c.a.createElement("p",null,c.a.createElement(C,null)))))}}]),n}(c.a.Component));t.default=x}}]);
//# sourceMappingURL=42.0d6409ab.chunk.js.map