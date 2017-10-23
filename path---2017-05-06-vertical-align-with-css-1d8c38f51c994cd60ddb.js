webpackJsonp([0xb3b699dbdd6d],{386:function(e,n){e.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#padding">padding</a></li>\n<li><a href="#line-height">line-height</a></li>\n<li><a href="#table">table</a></li>\n<li><a href="#flexbox">Flexbox</a></li>\n<li><a href="#%E5%BB%B6%E4%BC%B8%E9%96%B1%E8%AE%80">延伸閱讀</a></li>\n</ul>',internal:{content:"---\ntitle: CSS垂直置中的4種方法\ndate: 2017-05-06 12:59:00\ntags: CSS\n---\n\n這是一道送分題，如果想要垂直置中元素的話，起碼會有四種方法：**padding**, **line-height**, **table** 和 **Flexbox**。使用Flexbox的話，日後要更改元素的位置會非常方便。\n\n## padding\n如果你要置中的元素是`inine`或者是`inline-*`的話，比如說文字和鏈接，你可以用**padding**來實現垂直置中：\n```\n.vCenter {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background: #eee;\n  text-align: center;\n}\n```\n因為`padding-top`和`padding-bottom`的數值是一樣，所以我們可以透過這個方法來實現垂直置中。\n<iframe height='265' scrolling='no' title='padding 垂直置中' src='//codepen.io/calpa/embed/pPdowv/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/pPdowv/'>padding 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## line-height\n```\n.anotherCenter {\n  height: 100px;\n  line-height: 100px;\n  background: #6cf;\n  text-align: center;\n}\n```\n如果你不想用`padding`來實現垂直置中的話，你可以利用`line-height`等於`height`。\n\n<iframe height='265' scrolling='no' title='line-height 垂直置中' src='//codepen.io/calpa/embed/JNOjJJ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/JNOjJJ/'>line-height 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## table\n\n你可以透過`valign`來控制位置。\n\n另外，你可以利用`display: table-cell`來改變顯示的方式。\n```\n.fakeTable {\n  height: 200px;\n  width: 200px;\n  display: table-cell;\n  border: 1px solid black;\n  text-align: center;\n  vertical-align: middle;\n}\n```\n\n<iframe height='265' scrolling='no' title='Table 垂直置中' src='//codepen.io/calpa/embed/xdPxLr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/calpa/pen/xdPxLr/'>Table 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## Flexbox\n另外，你也可以使用**Flexbox**來實現垂直置中，只需要寫justify-content和align-items就可以了。\n```\n.vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n```\n<iframe height='265' scrolling='no' title='FlexBox 垂直置中' src='//codepen.io/calpa/embed/NjwWjV/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/NjwWjV/'>FlexBox 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## 延伸閱讀\n1. [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)\n1. [Using CSS Flexible Boxes - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)\n"},frontmatter:{title:"CSS垂直置中的4種方法"}}},pathContext:{slug:"/vertical-align-with-css/"}}}});
//# sourceMappingURL=path---2017-05-06-vertical-align-with-css-1d8c38f51c994cd60ddb.js.map