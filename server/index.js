const io=require("./io");
const {getNetworkIPv4}=require("./utils");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use("/",express.static('dist'));
const PORT=3000;
io.attach(server);
//启动服务器
server.listen(PORT,()=> {
  const address=getNetworkIPv4().address;
  console.info("- Local:   http://localhost:"+PORT);
  console.info(`- Network: http://${address}:`+PORT)
});

app.get('/test',(req,res)=>{
	res.send("<h1>test666</h1>")
})

app.get('/questionslist/time',(req,res)=>{
	cardData = ()=> {
		return {
        title: 'ss',
        question: 'ssss',
        author: 'sss',
        time: '',
        likes: '88',
        replys: '99',
        reply_name: 'vvv',
        reply: 'ddd',
        author_link: '',
        reply_link: '',
        chats_link: '',
		}
      }
	const cardAlist = new Array()
	for(let i = 0;i < 10;i++){
		cardAlist.push(cardData())
	}
	  const result = {
		  'list':cardAlist,
		  'total':1
	  }
	  console.log('req:'+req.param[0]);
	res.send(result)
})
// app.get('/questionslist/time',(req,res)=>{
// 	res.send("12")
// })
