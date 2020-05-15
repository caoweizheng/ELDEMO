// const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
// const ObjectID = require('mongodb').ObjectID;

module.exports = {
	reg(app){
		app.post('/queryUserInfo',async (req,res) => {
				// console.log('proname:',req.body.proName)
				// let tableName = req.body.username;
				// let goods = {
				// 	pId:req.body.pId,
				// 	proName:req.body.proName,
				// 	actPrice:req.body.actPrice,
				// 	jxPrice:req.body.jxPrice,
				// 	imgPath:req.body.imgPath,
				// 	qty: 1
				// }

				// let g_result = await db.insert(tableName,goods);
        let username = req.body.username
        let password = req.body.password
        if(password == '123') {
          res.send({
            code: 0,
            data: {
              nickName: username
            }
          })
        } else {
          res.send({
            code: 0,
            data: {
              error: '密码错误'
            }
          })
        }
    }),
    app.post('/queryBanners', async (req, res) => {
      let banners = [];
      for (let index = 0; index < 5; index++) {
        banners.push({
          id: index,
          text: index
        })
      }
      res.send({
        code: 0,
        data: banners
      })
    }),
    app.post('/queryGrid', async (req, res) => {
      let grids = [];
      for (let index = 0; index < 8; index++) {
        grids.push({
          id: index,
          text: index + '',
          icon: 'fire'
        })
      }
      res.send({
        code: 0,
        data: grids
      })
    }),
    app.post('/queryDataList', async (req, res) => {
      let pageSize = req.body.pageSize;
      let pageNum  = req.body. pageNum;
      let dataList = [];
      let id = pageNum == 0 ? 0 : pageNum * pageSize;
      if(id >= 100) {
        res.send({
          code: 0,
          data: []
        })
        return;
      }
      for ( let index = 0; index < pageSize; index++) {
        dataList.push({
          id: id++,
          title: '震惊!!!',
          text: '第' + id + '条nnnnnnewssssssssssss',
          time: '2020-03-18'
        })
      }
      res.send({
        code: 0,
        data: dataList
      })
    }),
    app.post('/queryNavigate', async (req, res) => {
      let navList = [];
      for (let i = 1; i < 30; i++) {
        navList.push({
          id: i,
          text: '分类' + i
        })

      }
      res.send({
        code: 0,
        data: navList
      })
    }),
    app.post('/queryNavigateContents', async (req, res) => {
      let title = req.body.title
      let contents = [];
      for (let i = 1; i <= 15; i++) {
        contents.push({
          id: i,
          text: title + '-' + i,
          imgPath: 'https://img2.epetbar.com/nowater/2018-08/14/21/24ca86bfa5a3a95c5a3e0091a51e214c.jpg?x-oss-process=style/fill&$1=300&$2=300'
        })
      }
      res.send({
        code: 0,
        data: contents
      })
    }),
    app.post('/queryGoodsList', async (req, res) => {
      let pageNum = req.body.pageNumber
      let pageSize = req.body.pageSize
      let goodsList = [];
      let id = pageNum == 0 ? 0 : pageNum * pageSize;
      if(id >= 200){
        res.send({
          code: 0,
          data: []
        })
        return;
      }
      for (let i = 1; i <= pageSize; i++) {
        goodsList.push({
          id: id++,
          comments: "互动:(99%好评)",
          sold: "售出:5.88w",
          subject: "BOTH 全犬山羊奶布丁 单粒",
          sale_price: "1.60",
          imgPath: 'https://img2.epetbar.com/2016-03/29/10/2a220b559ba8f056031304855d2521b1.jpg'
        })
      }
      res.send({
        code: 0,
        data: goodsList
      })
    })
	}
}
