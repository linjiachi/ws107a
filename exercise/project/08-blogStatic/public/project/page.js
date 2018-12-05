const page = {}

//主頁
page.home =`
<h1 style="text-align: center;font-family:courier;font-size: 50px;position: absolute;left: 430px;top: 130px;">Welcome to Linchi's Blog</h1>
<img src="3.jpg" width="693" height="352" style="position: absolute;left: 430px;top: 265px;">
`
//版主
page.moderator = `
<h2 style="text-align: center;font-family:courier">This is an information about me.</h2>
<img src="1.png" width="311" height="308" style="position: absolute;left: 1205px;top: 440px;">
<img src="2.jpg" width="400" height="350" style="position: absolute;left: 5px;top: 410px;">
<style>
table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
    text-align: center;
}
td {
    padding: 10px;
    font-family:'微軟正黑體';
}
th {
    padding: 15px;
    font-family:'微軟正黑體';
}

table#t01 {
    width: 30%;    
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
}
</style>

<table id="t01">
<caption style="font-family:'微軟正黑體'">目前就讀金門大學 資訊工程學系</caption>
  <tr>
    <th colspan="2">
    <img src="me.jpg" width="200" height="250"></th>
  </tr>
  <tr>
    <td>Name</td>
    <td>林家齊</td>
  </tr>
  <tr>
    <td>Nick Name</td>
    <td>+7</td>
  </tr>
  <tr>
    <td>Birthday</td>
    <td>1998/11/27</td>
  </tr>
  <tr>
    <td>Constellation</td>
    <td>Sagittarius</td>
  </tr>
  <tr>
    <td>Github</td>
    <td>
    <a style="color: black;padding: 5px 10px;"
    href="https://github.com/linjiachi">linjiachi</a></td>
  </tr>
  <tr>
    <td>Facebook</td>
    <td>
    <a style="color: black;padding: 5px 10px;"
    href="https://www.facebook.com/people/%E6%9E%97%E5%AE%B6%E9%BD%8A/100001150091795">林家齊</a></td>
  </tr>
  <tr>
    <td>Instagram</td>
    <td>
    <a style="color: black;padding: 5px 10px;"
    href="https://www.instagram.com/linchi_1127/">Linchi</a></td>
  </tr>
  
</table>
`

//School
// 國小
page.elementary = `
<h1 style="text-align: center;font-family:'微軟正黑體'">高雄市苓雅區福東國小</h1>
<a class="x" style="left: 570px;top: 100px;"
href="http://school.kh.edu.tw/index.html?WebID=19">(http://school.kh.edu.tw/index.html?WebID=19)</a>
<img src="fudon.gif" width="300" height="300" style="position: absolute;left: 610px;top: 190px;" >
<p style="position: absolute;left: 100px;top: 110px;">學校簡介:
<br>民國64年2月1日，設立福東國民小學，首任校長毛宗垣先生，班級數31班；
<br>民國97年8月，成立一般能力資優班；民國101年8月，熊治剛獲遴選為福東
<br>國小校長；民國105年8月，林文章獲遴選為福東國小校長</br></br></br></p>

<iframe style="position: absolute;left: 460px;top: 650px;"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.187231318856!2d120.3272166!3d22.6240617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc339e3415665d66a!2z6auY6ZuE5biC6IuT6ZuF5Y2A56aP5p2x5ZyL5bCP!5e0!3m2!1szh-TW!2stw!4v1529637511258" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

`
// 國中
page.junior = `
<h1 style="text-align: center;font-family:'微軟正黑體'">高雄市立五福國民中學</h1>
<a class="x" style="left: 640px;top: 100px;"
href="http://www.wfjh.kh.edu.tw/">(http://www.wfjh.kh.edu.tw/)</a>
<img src="wufu.png" width="300" height="300" style="position: absolute;left: 610px;top: 200px;" >
<p style="position: absolute;left: 100px;top: 110px;">學校簡介:
<br>高雄市立五福國民中學，簡稱五福國中，是高雄市一所國民中學，創立於
<br>1966年3月21日，當時建立了高雄市最後一所初中-高雄市立第十二初級
<br>中學，由時任高雄市市長的陳啟川動土奠基，黃孝棪任首任校長。</br></br></br></p>

<iframe style="position: absolute;left: 460px;top: 650px;"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14730.655614082523!2d120.3170276!3d22.6290226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68bc8c70b78b69b0!2z6auY6ZuE5biC56uL5LqU56aP5ZyL5rCR5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1529637587691" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
`
// 高中
page.senior = `
<h1 style="text-align: center;font-family:'微軟正黑體'">高雄市立前鎮高級中學</h1>
<a class="x" style="left: 640px;top: 100px;"
href="http://www.cjhs.kh.edu.tw/">(http://www.cjhs.kh.edu.tw/)</a>
<img src="cjhs.gif" width="350" height="350" style="position: absolute;left: 580px;top: 180px;" >
<p style="position: absolute;left: 100px;top: 110px;">學校簡介:
<br>高雄市立前鎮高級中學，是一所位於高雄市前鎮區的高級中學。1969年，
<br>為解決高雄市人口激增的問題，委請當時高雄中學校長王家驥先生開始籌
<br>備該校，於8月1日正式成立，當時取名為「臺灣省立前鎮高級中學」，由
<br>朱迺武先生擔任第一任校長。1979年，高雄市升格為院轄市，校名即改為
<br>「高雄市立前鎮高級中學」。</br></br></br></br></br></p>

<iframe style="position: absolute;left: 460px;top: 650px;"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14735.049577000953!2d120.3192383!3d22.5879884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb26c7b154c65252e!2z6auY6ZuE5biC56uL5YmN6Y6u6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1529637653152" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
`
// 大學
page.college = `
<h1 style="text-align: center;font-family:'微軟正黑體'">金門縣金寧鄉國立金門大學</h1>
<a class="x" style="left: 580px;top: 100px;"
href="https://www.nqu.edu.tw/cht/index.php?">(https://www.nqu.edu.tw/cht/index.php?)</a>
<img src="nqu.gif" width="300" height="300" style="position: absolute;left: 600px;top: 200px;" >
<p style="position: absolute;left: 100px;top: 110px;">學校簡介:
<br>國立金門大學，簡稱金門大學、金大，是中華民國福建省金門縣的一所國
<br>立大學。前身是1997年國立高雄科學技術學院附設專科部金門分部。校本
<br>部位於金門縣金寧鄉，目前共有4個學院、17個學系、12個研究所碩士班、
<br>2個碩士在職專班。招收學制設有四年制大學部、進修部、碩士班、碩士在
<br>職專班等。</br></br></br></br></br></p>

<iframe style="position: absolute;left: 460px;top: 650px;"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14528.304298190189!2d118.3225393!3d24.4481458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1c093a50b7e8ba6!2z5ZyL56uL6YeR6ZaA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1529637131507" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
`

//Curriculum
// 大一上
page.grade = `
<h1 style="text-align: center;font-family:'微軟正黑體'">.. 一年級 上學期 ..</h1>
<img src="6.jpg" width="311" height="308" style="position: absolute;left: 10px;top: 550px;">
<img src="8.jpg" width="278" height="411" style="position: absolute;left: 1205px;top: 440px;">

<style>
table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
    font-family:'微軟正黑體';
}
th, td {
    padding: 15px;
    text-align: center;
}
table#t01 {
    width: 55%;    
    background-color: #f1f1c1;
    margin-left:auto; 
    margin-right:auto;
}
</style>

<table id="t01">
  <tr>
    <th></th>
    <th>Monday</th>
    <th>Tuesday</th> 
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
  </tr>
  <tr>
    <td>1st Class<br>(8:10-9:00)</br></td>
    <td></td>
    <td></td>
    <td rowspan="2">國文<br>教室:209<br>教授:陳松霖</br></br></td>
    <td rowspan="2">英文<br>教室:E103<br>教授:楊肅藝</br></br></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2nd Class<br>(9:10-10:00)</br></td>
    <td rowspan="3">數位邏輯<br>教室:E402<br>教授:潘進儒</br></br></td>
    <td rowspan="3">計算機概論<br>教室:E320<br>教授:李錫捷</br></br></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3rd Class<br>(10:10-11:00)</br></td>
    <td></td>
    <td rowspan="2">桌球<br>教室:體育館<br>教授:溫景財</br></br></td>
    <td></td>
    <td rowspan="2">金門學概論</td>
  </tr>
  <tr>
    <td>4th Class<br>(11:10-12:00)</br></td>
    <td>服務學習</td>
    <td></td>
  </tr>
  <tr>
    <td>Break<br>(12:00-13:30)</br></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5th Class<br>(13:30-14:20)</br></td>
    <td rowspan="3">多媒體概論<br>教室:E322<br>教授:潘進儒</br></br></td>
    <td rowspan="3">微積分<br>教室:E402<br>教授:陳正德</br></br></td>
    <td rowspan="3">程式設計<br>教室:E322<br>教授:趙于翔</br></br></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>6th Class<br>(14:30-15:20)</br></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>7th Class<br>(15:30-16:20)</br></td>
    <td rowspan="2">跆拳道<br>教室:體育館<br>教授:李錫添</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>8th Class<br>(16:30-17:20)</br></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
`
// 大一下
page.grade1 = `
<h1 style="text-align: center;font-family:'微軟正黑體'">.. 一年級 下學期 ..</h1>
<img src="4.jpg" width="281" height="203" style="position: absolute;left: 10px;top: 540px;">
<img src="5.jpg" width="311" height="308" style="position: absolute;left: 1205px;top: 550px;">

<style>
table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
    font-family:'微軟正黑體';
}
th, td {
    padding: 15px;
    text-align: center;
}
table#t01 {
    width: 55%;    
    background-color: #f1f1c1;
    margin-left:auto; 
    margin-right:auto;
}
</style>

<table id="t01">
  <tr>
    <th></th>
    <th>Monday</th>
    <th>Tuesday</th> 
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
  </tr>
  <tr>
    <td>1st Class<br>(8:10-9:00)</br></td>
    <td></td>
    <td></td>
    <td rowspan="2">國文<br>教室:E102<br>教授:陳松霖</br></br></td>
    <td rowspan="2">英文<br>教室:E405<br>教授:楊肅藝</br></br></td>
    <td></td>
  </tr>
  <tr>
    <td>2nd Class<br>(9:10-10:00)</br></td>
    <td rowspan="3">資訊網路<br>教室:E321<br>教授:柯志亨</br></br></td>
    <td></td>
    <td rowspan="3">網頁設計<br>教室:E320<br>教授:陳鍾誠</br></br></td>
  </tr>
  <tr>
    <td>3rd Class<br>(10:10-11:00)</br></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>4th Class<br>(11:10-12:00)</br></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Break<br>(12:00-13:30)</br></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5th Class<br>(13:30-14:20)</br></td>
    <td rowspan="3">線性代數<br>教室:E402<br>教授:潘進儒</br></br></td>
    <td rowspan="3">資訊英文<br>教室:E320<br>教授:李錫捷</br></br></td>
    <td rowspan="3">電腦軟體認證<br>教室:圖資1102<br>教授:陳瑞馨</br></br></td>
    <td rowspan="3">程式設計進階<br>教室:E322<br>教授:趙于翔</br></br></td>
    <td></td>
  </tr>
  <tr>
    <td>6th Class<br>(14:30-15:20)</br></td>
    <td></td>
  </tr>
  <tr>
    <td>7th Class<br>(15:30-16:20)</br></td>
    <td></td>
  </tr>
  <tr>
    <td>8th Class<br>(16:30-17:20)</br></td>
    <td></td>
    <td>服務學習</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
`