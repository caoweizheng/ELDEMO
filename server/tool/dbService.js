const mysqlConn = require('./db');

const dbService = {
  select(opt) {
    let promiseObj = new Promise(function (resolve, reject) {
      // let sql = "select SQL_CALC_FOUND_ROWS  * from inventory_allocation_order where inventory_allocation_order_no = '" + opt.inventory_allocation_order_no + "' limit " + (opt.pageNum-1) * opt.pageSize + ',' + opt.pageSize + '';
      let sql = "select SQL_CALC_FOUND_ROWS  * from inventory_allocation_order limit " + (opt.pageNum-1) * opt.pageSize + ',' + opt.pageSize + '';
      mysqlConn.query(sql, function (err, result) {
        if (err) {
          reject(err);
        }
        // console.log(result);
        resolve(result);
      })
    });

    return promiseObj;
  },
  selectCount(opt) {
    let promiseObj = new Promise(function (resolve, reject) {
      let sql = "SELECT FOUND_ROWS() as count";
      mysqlConn.query(sql, function (err, result) {
        if (err) {
          reject(err);
        }
        resolve({
          total: result[0].count,
          pageNum: opt.pageNum,
          pageSize: opt.pageSize
        });
      })
    });

    return promiseObj;
  },
  selectItem (opt) {
    let promiseObj = new Promise(function (resolve, reject) {
      // let sql = "select SQL_CALC_FOUND_ROWS  * from inventory_allocation_order where inventory_allocation_order_no = '" + opt.inventory_allocation_order_no + "' limit " + (opt.pageNum-1) * opt.pageSize + ',' + opt.pageSize + '';
      let sql = "select SQL_CALC_FOUND_ROWS  * from inventory_allocation_order_item where inventory_allocation_order_no = '" + opt.inventory_allocation_order_no + "'";
      console.log(sql)
      mysqlConn.query(sql, function (err, result) {
        if (err) {
          reject(err);
        }
        // console.log(result);
        resolve(result);
      })
    });

    return promiseObj;
  }

};

module.exports = dbService;
