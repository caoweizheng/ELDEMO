const dbService = require('../tool/dbService');
const apiResult = require('../tool/apiResult.js')
// const ObjectID = require('mongodb').ObjectID;

module.exports = {
	reg(app){
		app.post('/queryProductList',async (req,res) => {
        // let pageNum = req.body.pageNum
        // let pageSize = req.body.pageSize

      var dataResp = await dbService.select({...req.body})
      var countResp = await dbService.selectCount({...req.body})
        res.send({
          code: 0,
          items: dataResp,
          pageNum: countResp.pageNum,
          pageSize: countResp.pageSize,
          total: countResp.total
        })
    }),
		app.post('/queryProductDetail',async (req,res) => {
        // let pageNum = req.body.pageNum
        // let pageSize = req.body.pageSize

      var dataResp = await dbService.selectItem({...req.body})
      var countResp = await dbService.selectCount({...req.body})
        res.send({
          code: 0,
          items: dataResp,
          pageNum: countResp.pageNum,
          pageSize: countResp.pageSize,
          total: countResp.total
        })
    })
  }
}
