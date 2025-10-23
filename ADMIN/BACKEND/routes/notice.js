const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { isAuthenticated, validateNotices } = require('../middleware');
const controllerNotice = require('../controllers/notice');

router
  .route("/")
  .get(wrapAsync(controllerNotice.notice))
  .post(
    isAuthenticated,
    validateNotices,
    wrapAsync(controllerNotice.noticeUpload)
  )

router
  .put("/edit/:id",
    isAuthenticated, 
    validateNotices, 
    wrapAsync(controllerNotice.noticeEdit)
  )

router
  .delete("/delete/:id",
    isAuthenticated, 
    wrapAsync(controllerNotice.noticeDelete)
  )

module.exports = router;