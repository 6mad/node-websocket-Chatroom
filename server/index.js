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

app.get('/api/test',(req,res)=>{
	res.send("<h1>test666</h1>")
})

app.get('/api/questionslist/time',(req,res)=>{
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
	  console.log('req:'+req.publicPath);
	res.send(result)
})
app.get('/api/commentsdata',(req,res)=>{
	let comments = [
	                {
	                    name:'Lana Del Rey',
	                    id:19870621,
	                    headImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
	                    comment:'我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
	                    time:'2019年9月16日 18:43',
	                    commentNum:2,
	                    like:15,
	                    inputShow:false,
	                    reply:[
	                        {
	                            from:'Taylor Swift',
	                            fromId:19891221,
	                            fromHeadImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
	                            to:'Lana Del Rey',
	                            toId:19870621,
	                            comment:'我很喜欢你的新专辑！！',
	                            time:'2019年9月16日 18:43',
	                            commentNum:1,
	                            like:15,
	                            inputShow:false
	                        },
	                        {
	                            from:'Ariana Grande',
	                            fromId:1123,
	                            fromHeadImg:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
	                            to:'Lana Del Rey',
	                            toId:19870621,
	                            comment:'别忘记宣传我们的合作单曲啊',
	                            time:'2019年9月16日 18:43',
	                            commentNum:0,
	                            like:5,
	                            inputShow:false
	
	                        }
	                    ]
	                },
	                {
	                    name:'Taylor Swift',
	                    id:19891221,
	                    headImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
	                    comment:'我发行了我的新专辑Lover',
	                    time:'2019年9月16日 18:43',
	                    commentNum:1,
	                    like:5,
	                    inputShow:false,
	                    reply:[
	                        {
	                            from:'Lana Del Rey',
	                            fromId:19870621,
	                            fromHeadImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
	                            to:'Taylor Swift',
	                            toId:19891221,
	                            comment:'新专辑和speak now 一样棒！',
	                            time:'2019年9月16日 18:43',
	                            commentNum:25,
	                            like:5,
	                            inputShow:false
	
	                        }
	                    ]
	                },
	                {
	                    name:'Norman Fucking Rockwell',
	                    id:20190830,
	                    headImg:'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',
	                    comment:'Plz buy Norman Fucking Rockwell on everywhere',
	                    time:'2019年9月16日 18:43',
	                    commentNum:0,
	                    like:5,
	                    inputShow:false,
	                    reply:[]
	                },
	            ]
	res.send(comments)
})
app.get('/api/questionslist/total',(req,res)=>{
	console.log('api/questionslist/total')

