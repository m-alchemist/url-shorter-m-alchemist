const Url=require('../model/url');
const mongoose=require('mongoose');
var shortId = require('shortid');
var validUrl = require('valid-url');

mongoose.Promise=global.Promise;

module.exports={

  mainPage(req,res,next){
res.render('index', { title: 'Express' })
.catch(next);

  },
  create(req,res,next){

  const urlProps=req.params.url;
  if(validUrl.isUri(urlProps)){


  Url.create({original_url: urlProps, short_url: shortId.generate()})
  .then((url)=>res.send({original_url: url.original_url,
    short_url: "http://localhost:3000/"+url.short_url}))
  .catch(next);
}
else{
  res.json({ error:
     "Url format is invalid" });
}
}
,

directToPage(req,res,next){
  Url.findOne({short_url:req.params.shortUrl})
  .then((shorturl)=>{res.redirect(shorturl.original_url)})
  .catch(next);


}

}
