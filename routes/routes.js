const urlController=require('../controller/urlController');

 module.exports=((app)=>{
   app.get('/', urlController.mainPage) ;
   app.get('/new/:url(*)',urlController.create);
   app.get('/:shortUrl(*)', urlController.directToPage);

 });
