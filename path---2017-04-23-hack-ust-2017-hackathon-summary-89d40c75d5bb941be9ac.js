webpackJsonp([0xfa8640fc2676],{379:function(n,e){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%BE%8C%E8%A8%98">後記</a></li>\n<li><a href="#%E6%8A%80%E8%A1%93%E7%B4%B0%E7%AF%80">技術細節</a></li>\n<li><a href="#%E6%AF%94%E8%B3%BD%E7%85%A7%E7%89%87">比賽照片</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:"---\ntitle: hackUST 2017後記\ndate: 2017-04-23 20:44\nheaderImage: IJPUhSJ.jpg\ntags:\n  - Hackathon\n---\n\n## 後記\n經過一天的努力，我們成功進入最後5強。這次比賽都幾好玩，基本上由第一天中午吃到晚上，然後第二天回來也是吃吃吃。雖然最後沒有取得獎金，但也是學到很多的知識。比如說如何解決安裝npm package問題，更新npm package問題。\n\n第一天中午的時候已經把Demo做出來了，但是不知道為什麼刪除`node_modules`之後，Expo就直接崩潰了。這是因為`package.json`裡面根本就沒有把完整的`dependencies`寫出來，當我輸入`npm install`的時候就不能順利安裝。於是我只能在CodePen裡面開一個[Pen](http://codepen.io/calpa/pen/LyZjPm)用來做控制器。\n\n## 技術細節\n這個控制器利用`window.addEventListener('deviceorientation', handleOrientation);\n`來監聽Android裝置的方向。當加速規偵測到裝置方向的變化，它就會調用`handleOrientation`方法。\n\n而`handleOrientation`方法有兩個目的：\n1. 獲取`event`裡面的`alpha`, `beta`, `gamma`數值，它們分別代表裝置的z軸， x軸， y軸動向。\n\n  z軸介乎於 0 ~ 360 度之間，x軸介乎於 -180 ~ 180 度之間，代表裝置的前後動向。y軸介乎於 -90 ~ 90 度之間，代表裝置的左右動向。\n\n1. 發送event到服務器。\n\n  這個很簡單，利用socket.io就可以了。比如說`socket.emit('event');`\n\n而在展示用戶數據的時候，我們用[C3.js](http://c3js.org/)來做實時渲染數據。利用C3.js，我們很容易就可以產生D3圖表，而不是重寫D3代碼。我們也可以修改每一個元素的樣式。感覺再寫下去就變教學文了。。。\n\n<iframe height='400' scrolling='no' title='Playground C3.js' src='//codepen.io/calpa/embed/MmevBr/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/calpa/pen/MmevBr/'>Playground C3.js</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## 比賽照片\n以下是比賽時拍攝的一些照片：\n![Imgur](https://i.imgur.com/vXyDaoY.jpg)\n\n感謝這次一起參賽的三位隊友。\n\n![Imgur](https://i.imgur.com/6nLsXEB.jpg)\n<center>比賽場地</center>\n\n\n![Imgur](https://i.imgur.com/2mLCtBm.jpg)\n<center>接待處</center>\n\n![Imgur](https://i.imgur.com/pL19qZw.jpg)\n<center>宣傳物品</center>\n\n![Imgur](https://i.imgur.com/g1GZHCJ.jpg)\n<center>平常用來賣官方廣告的地方現在用來賣hackUST和hardUST的廣告 XD</center>\n\n![Imgur](https://i.imgur.com/DbLEVGz.jpg)\n<center>演示的場地</center>\n\n這次主辦單位派發了港幣120元的餐券，還有很多零食，飲料。最重要的是，有我最喜歡的忌廉汽水www。希望以後都可以繼續參加比賽，學習更多的編程知識。\n\n## 參考資料\n1. [Detecting device orientation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)\n1. [Socket.io 官方文檔](https://socket.io/docs/)\n1. [C3.js 官方Starter](http://c3js.org/gettingstarted.html)\n"},frontmatter:{title:"hackUST 2017後記"}}},pathContext:{slug:"/hackUST-2017-hackathon-summary/"}}}});
//# sourceMappingURL=path---2017-04-23-hack-ust-2017-hackathon-summary-89d40c75d5bb941be9ac.js.map