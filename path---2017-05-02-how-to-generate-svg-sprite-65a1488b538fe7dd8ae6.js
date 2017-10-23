webpackJsonp([78982627364567],{383:function(n,t){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E8%A3%BD%E4%BD%9C%E6%96%B9%E6%B3%95">製作方法</a></li>\n<li><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95">使用方法</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: 如何製作svg sprite\ndate: 2017-05-02 16:51\ntags:\n  - SVG\n---\n\n使用SVG Sprite的好處是可以減少HTTP Request。\n\n## 製作方法\n你可以選擇手動把一張一張圖合在一起，也可以使用gulp-svg-sprite自動生成雪碧圖。\n\n另外，你可以使用[svg-sprite設置](http://jkphl.github.io/svg-sprite/)幫助寫JSON, Node.js, Gruntfile 或者 Gulpfile的設定檔案。\n\n## 使用方法\n其中一種方法是使用`<use>`。我們可以如同平常一樣使用svg，唯一分別是裡面的內容換成`<use>`，然後把鏈接加上id來調用圖像。\n\n```\n<svg>\n  <use href="img/sprite.svg#item"></use>\n</svg>\n```\n\n\n## 參考資料\n[Github Repo: gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)\n'},frontmatter:{title:"如何製作svg sprite"}}},pathContext:{slug:"/how-to-generate-svg-sprite/"}}}});
//# sourceMappingURL=path---2017-05-02-how-to-generate-svg-sprite-65a1488b538fe7dd8ae6.js.map