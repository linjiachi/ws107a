const http = require('http')

http.createServer((req, res) => {
  console.log('url=', req.url)
//   console.log('method=', req.method)
//   console.log('headers=', req.headers)

  res.setHeader('Content-Type', 'text/html')
  // 中文才需要 EX.case '/hello' : res.write(head +'hello!'+ tail); break
  // var head = '<html><head><meta charset="UTF-8" /></head><body>'
  // var tail = '</body></html>'
  switch (req.url) {
      case '/hello' : res.write('hello!'); break
      case '/name'  : res.write('linchi'); break
      case '/id'    : res.write('110610540'); break
      default  : res.statusCode = 404;
  }
  res.end()
}).listen(3000)

console.log('Server runnist at http://localhost:3000/')