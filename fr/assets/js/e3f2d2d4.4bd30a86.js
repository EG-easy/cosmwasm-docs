"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[440],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:5},c="Query",u={unversionedId:"smart-contracts/query",id:"smart-contracts/query",title:"Query",description:"Querying is the other half of the coin to messages. You can think of queries as a database read, or a way of querying",source:"@site/docs/04-smart-contracts/05-query.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/query",permalink:"/fr/docs/1.0/smart-contracts/query",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/05-query.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Entry points",permalink:"/fr/docs/1.0/smart-contracts/entry-points"},next:{title:"Events",permalink:"/fr/docs/1.0/smart-contracts/events"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query"},"Query"),(0,o.kt)("p",null,"Querying is the other half of the coin to messages. You can think of queries as a database read, or a way of querying\nstate."),(0,o.kt)("p",null,"Generally you will find the available query messages in ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.rs")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"query.rs"),", depending on how the contract author has\nstructured the code."),(0,o.kt)("p",null,"You can query via an external client (over API or via CLI), or an internal client (within a contract, to another\ncontract). Some of the finer details of how this works can be found in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/1.0/architecture/query"},"Querying Architecture section"),"."),(0,o.kt)("p",null,"Most queries you use will be custom queries. These access the contract's data store in read-only mode. These queries can\nlook up data and perform additional computation or processing as needed. As a result, a gas limit is enforced on these\nqueries."),(0,o.kt)("p",null,"Custom queries consist of an entry in the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryMsg")," enum, and are handled in the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n  // ResolveAddress returns the current address that the name resolves to\n  ResolveRecord { name: String },\n  Config {},\n}\n')),(0,o.kt)("p",null,"You can find the code for this example in context\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts/blob/main/contracts/nameservice/src/msg.rs#L20"},"here"),"."),(0,o.kt)("p",null,"The contract then handles this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {\n  match msg {\n    QueryMsg::ResolveRecord { name } => query_resolver(deps, env, name),\n    QueryMsg::Config {} => to_binary(&config_read(deps.storage).load()?),\n  }\n}\n')),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"query_resolver")," is just another function, and ",(0,o.kt)("inlineCode",{parentName:"p"},"config_read")," is a helper that wraps access to the data store."),(0,o.kt)("p",null,"The custom queries are exposed\nvia ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts/blob/main/contracts/nameservice/src/contract.rs#L95"},"the query function"),"."))}d.isMDXComponent=!0}}]);