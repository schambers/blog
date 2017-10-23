webpackJsonp([0x66cfe1d7646a],{395:function(n,e){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li>\n<p><a href="#%E5%A4%A7%E6%95%B8%E6%93%9A">大數據</a></p>\n<ul>\n<li><a href="#%E9%A6%99%E6%B8%AF%E7%9A%84%E9%96%8B%E6%94%BE%E6%95%B8%E6%93%9A">香港的開放數據</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E8%87%AA%E5%8B%95%E5%8C%96%E6%A7%8B%E5%BB%BA">自動化構建</a></p>\n<ul>\n<li><a href="#%E4%B8%8D%E5%8F%AF%E9%87%8D%E7%8F%BE%E7%9A%84%E5%8E%9F%E5%9B%A0">不可重現的原因</a></li>\n<li><a href="#technical-advantages">Technical Advantages</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E6%9C%80%E4%BD%B3%E5%AF%A6%E8%B8%90">最佳實踐</a></p>\n<ul>\n<li><a href="#builds">Builds</a></li>\n<li><a href="#container-host-security">Container Host Security</a></li>\n</ul>\n</li>\n<li><a href="#%E8%AA%8D%E8%AD%98%E5%85%B6%E4%BB%96%E7%A8%8B%E5%BA%8F%E5%93%A1">認識其他程序員</a></li>\n<li><a href="#%E9%A3%9F%E7%89%A9">食物</a></li>\n</ul>',internal:{content:"---\ntitle: 【多圖】2017 年香港開源年會後記\ntags:\n  - Conference\n  - Open Source\nheaderImage: 1tRwQTX.jpg\ndate: 2017-06-14 09:28:00\n---\n\n大約兩個星期之前，我在 Facebook上看到 2017 年的香港開源年會的消息。我想，我是不是可以透過這個機會，認識一下不同領域的程序員呢。於是，我在 EventBrite 上面買了學生票。但最終我拿到 VIP 票了，感覺有點激動。我把這一次的會議做了幾點筆記，也許，每一個人都應該參加最少一次如此有規模的大會。我會在這裡說說我參與這次會議所發生的一些事。\n\n在這一次大會之前，我參加了 Hong Kong Open Source Meeting #2，當時我是說[《5分鐘製作 Markdown PowerPoint》](https://calpa.me/2017/06/01/create-markdown-powerpoint-in-5-mins/)。\n\n那天晚上，我才知道原來那一次演講的話，就會有一張免費 VIP 票，包含入場的資格，衣服及外套。我還拿到一些免費的票，轉送給其他認識的人了。\n\n{% img https://i.imgur.com/ZBautza.jpg 500 VIP Ticket %}\n<center>VIP 門票</center>\n\n{% img https://i.imgur.com/4q7YR0J.png 500 Tshirt %}\n<center>大會送的衣服</center>\n\n我之前幫忙舉辦 Hang Seng Bank AI Hackathon，在說大數據的時候提到了這個黑客松，並放出了團體合照。。。\n\n{% img https://i.imgur.com/aSRoBdc.jpg 500 Hang Seng Bank AI Hackathon %}\n<center>團體合照</center>\n\n## 大數據\n\n一些中國的互聯網公司對數據十分看重，並認為這些數據都是可以製造財富的資產。比如說滴滴打車收集了很多打車的交易數據，並善用這些數據優化分配司機和乘客的算法。又比如說阿里巴巴對大數據很重視，它的[天池大數據眾智平台](https://tianchi.aliyun.com/)會提供各種各樣的大數據，並舉辦比賽招聘人才。\n\n在這一次大會中，我了解到原來台灣在開放數據這一方面做得不錯。根據[Global Open Data Index](https://index.okfn.org/place/) 的開放數據顯示，台灣是排名第一的，而香港則是排行 23。就讓我們看一下香港政府是如何開放數據的。\n\n### 香港的開放數據\n香港政府[資料一線通](https://data.gov.hk/tc/)平台，以多種檔案格式提供多個政府部門類別，機構的一些查詢資料，比如說天氣預報，中學教育統計資料。值得注意的是，這些檔案並不是 ODF，而是 xls, xml, csv, json, gif, txt, tif。。。\n\n而且連 Hello World 都不能跑，這叫我如何是好。。。\n\n我把嘗試這個平台的過程寫成[《香港開放數據平台 - 從入門到放棄》](https://calpa.me/2017/06/12/hong-kong-open-data-from-zero-to-giveup/)。\n\n## 自動化構建\n{% img https://i.imgur.com/q8g0CgG.jpg 500 Reproducible builds %}\n\nDebian 的 Leader Chirs Lamb 也來了這一次的大會，他分享了 Reproducible builds 這一個主題。\n\n### 不可重現的原因\n\n{% img https://i.imgur.com/NTUpphj.jpg 500 Reason of non-reproducibility %}\n\n1. Timestramps\n1. 時區\n  比如說，你在美國用 `new Date()` 和我在香港用的話是不同的。\n1. Non-deterministic file ordering\n1. 字典 / hash key 的次序不同\n  有些\n1. 用戶，群組，系統變量不同\n1. 組建的路徑不同 (eg. /home/lamby vs /home/calpa)\n\n---\n### Technical Advantages\n{% img https://i.imgur.com/5WY6bHC.jpg 500 Technical Advantages %}\n1. 檢測構造環境程序所導致的意外。\n1. 更加容易地測試更新的代碼。\n  我們可以自動構建測試所需要的生產環境，定義所需要的數據。透過這個方法，我們可以自動測試時候更新後的代碼會不會引入更多的 Bug。。。\n\n---\n## 最佳實踐\n\n### Builds\n\n{% img https://i.imgur.com/p6pTo4O.jpg 500 Best Practices of Builds %}\n<center>Best Practices of Builds</center>\n\n1. 把它當成是藍圖一樣\n1. 避免需要登入去構建或調試\n  這個可以利用Makefile, Gulp, Grunt 等一些自動化構建工具幫忙自動構建程序\n1. 善用版本控制工具去構建檔案\n  比如說用 Git...\n1. Explicit is better than implicit\n  其實這一個思想以前也\n1. 每一次跑的時候都創造一個新的 layer\n\n---\n### Container Host Security\n\n{% img https://i.imgur.com/DZ1CSib.jpg 500 Best Practices of Container Host Security %}\n<center>Best Practices of Container Host Security</center>\n1. 不要用 root 身份去跑\n1. 要限制 SSH Access\n1. 用 namespaces\n1. 定義資源限額\n1. 開啟記錄\n\n## 認識其他程序員\n\n{% img https://i.imgur.com/NXToUgx.png 500 台北摩茲工寮網頁 %}\n這次我認識了台北摩茲工寮的其中一個摩茲人，了解到原來他們會每個禮拜在台北會有聚會。\n\n也許，我們也可以參加他們的開源項目，作出自己小小的貢獻。\n\n如果以後過去台北的話，我也可以過去拜會一下他們。\n\n## 食物\n\n{% img https://i.imgur.com/MaMW0xE.jpg 300 免費星巴克咖啡 %}\n\n這次有星巴克的免費食物，比如說菠菜卷，冷麵，沙拉。味道不錯 XD\n\n{% img https://i.imgur.com/ouO6EVo.jpg 300 北角雞蛋仔 %}\n\n最後我離開數碼港，去北角嘗試北角雞蛋仔，其實味道也是不錯的。但是如果要說到最好吃的雞蛋仔的話，那還是九龍灣流動小販賣的炭燒雞蛋仔味道最好。\n\n最後，感謝所有幫忙舉辦香港開源年會的人，讓我這樣的人也可以有一個渠道認識這個世界。\n"},frontmatter:{title:"【多圖】2017 年香港開源年會後記"}}},pathContext:{slug:"/hong-kong-open-sources-conference-remarks/"}}}});
//# sourceMappingURL=path---2017-06-14-hong-kong-open-sources-conference-remarks-d8c54800a8e9fa3f5421.js.map