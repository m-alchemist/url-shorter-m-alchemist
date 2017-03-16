mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const Schema=mongoose.Schema;

const UrlSchema=new Schema({
  original_url: {type: String, required: 'true'},
  short_url: {type: String, default: 'short'}

})
const url=mongoose.model('url', UrlSchema);
module.exports=url;
