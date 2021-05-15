(this.webpackJsonphepoblet=this.webpackJsonphepoblet||[]).push([[0],{79:function(e){e.exports=JSON.parse('{"name":"hepoblet","version":"0.1.11","private":true,"homepage":"https://hepoblet.github.io","scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build","prepare":"husky install"},"lint-staged":{"*.js":"eslint --cache --fix"},"babel":{"presets":["react-app"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"eslintConfig":{"extends":["react-app","react-app/jest"]},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"moduleNameMapper":{"^react-native$":"react-native-web","^@layouts(.*)$":"<rootDir>/src/layouts$1","^@pages(.*)$":"<rootDir>/src/pages$1","^@routes(.*)$":"<rootDir>/src/routes$1","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"modulePaths":[],"resetMocks":true,"roots":["<rootDir>/src"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testEnvironment":"jsdom","testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testRunner":"/Users/hepoblet/Desktop/hepoblet.github.io/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"]},"dependencies":{"@ant-design/icons":"^4.6.2","@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","antd":"^4.15.5","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","file-loader":"6.1.1","fs-extra":"^9.0.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.3","react-dom":"^17.0.2","react-refresh":"^0.8.3","react-router-dom":"^5.2.0","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.1","webpack-manifest-plugin":"2.2.0","workbox-webpack-plugin":"5.1.4"},"devDependencies":{"babel-plugin-module-resolver":"^4.1.0","eslint":"^7.26.0","eslint-config-airbnb":"^18.2.1","eslint-config-react-app":"^6.0.0","eslint-import-resolver-alias":"^1.1.2","eslint-plugin-flowtype":"^5.7.2","eslint-plugin-import":"^2.23.1","eslint-plugin-jest":"^24.3.6","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^4.4.0","eslint-webpack-plugin":"^2.5.4","gh-pages":"^3.1.0","husky":"^6.0.0","lint-staged":">=10"}}')},85:function(e,s,t){},87:function(e,s,t){"use strict";t.r(s);var r=t(0),n=t.n(r),i=t(19),c=t.n(i),a=t(31),o=t(13),l=t(6),p=t(79).version,j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Home"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"hepoblet.github.io"}),Object(l.jsxs)("p",{children:["v",p]})]})]})},d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Contact"}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"..."})})]})},b=function(){return Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.b,{exact:!0,path:"/contact",component:d}),Object(l.jsx)(o.a,{to:"/"})]})},u=(t(84),t(85),t(59)),h=t(91),x=t(92),m=t(93),g=t.p+"static/media/logo.6ce24c58.svg",f=u.a.SubMenu,v=h.a.Header,O=h.a.Content,y=h.a.Sider,w=function(e){var s=e.children;return Object(l.jsxs)(h.a,{children:[Object(l.jsxs)(v,{className:"header",children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)("img",{src:g,className:"logo",alt:"logo"})}),Object(l.jsxs)(u.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(l.jsx)(u.a.Item,{children:Object(l.jsx)(a.b,{to:"/",children:"Home"})},"1"),Object(l.jsx)(u.a.Item,{children:Object(l.jsx)(a.b,{to:"/contact",children:"Contact"})},"2")]})]}),Object(l.jsxs)(h.a,{children:[Object(l.jsx)(y,{width:300,className:"site-layout-background",children:Object(l.jsx)(u.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:Object(l.jsxs)(f,{icon:Object(l.jsx)(m.a,{}),title:"Navigation",children:[Object(l.jsx)(u.a.Item,{children:Object(l.jsx)(a.b,{to:"/",children:"Home"})},"1"),Object(l.jsx)(u.a.Item,{children:Object(l.jsx)(a.b,{to:"/contact",children:"Contact"})},"2")]},"sub1")})}),Object(l.jsxs)(h.a,{style:{padding:"0 24px 24px"},children:[Object(l.jsx)(x.a,{style:{margin:"16px 0"},children:Object(l.jsx)(x.a.Item,{children:"Home"})}),Object(l.jsx)(O,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:s})]})]})]})},k=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(w,{children:Object(l.jsx)(b,{})})})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,94)).then((function(s){var t=s.getCLS,r=s.getFID,n=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),D()}},[[87,1,2]]]);
//# sourceMappingURL=main.913e7960.chunk.js.map