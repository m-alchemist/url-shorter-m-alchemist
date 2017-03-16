const urlController=require('../controller/urlcontroller');

 module.exports=((app)=>{
   app.get('/', urlController.mainPage) ;
   app.get('/new/:url(*)',urlController.create);
   app.get('/:shortUrl(*)', urlController.directToPage);

 });
