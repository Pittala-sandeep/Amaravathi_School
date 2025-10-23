const Notice = require('../models/notice')

module.exports.notice = async(req, res) => { 
  let result = await Notice.find({}).sort({ createdAt: -1 });
  res.json(result);
}

module.exports.noticeUpload = async(req, res) => {
  let {title, category, content} = req.body
  let result = new Notice({
    title:title,
    content:content,
    category:category
  });
  await result.save();
  res.json("Notice saved")
}

module.exports.noticeEdit = async(req,res) =>{
  let { id } = req.params;
  let updatedData = req.body;
  await Notice.findByIdAndUpdate(id, updatedData, {new:true});
  res.json("Data updated")
}

module.exports.noticeDelete = async(req, res) => {
  let { id } = req.params;
  await Notice.findByIdAndDelete(id);
  res.json("Data deleted")
}