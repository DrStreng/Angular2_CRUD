var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var lek = require('./models/lek_model');
var typ = require('./models/typ_model');


router.post('/addLek', function(req, res, next) {
    lek.findOne({
      name: req.body.name,
    }, function(error, result) {
       if(error) { console.log(error); }
       else {
         if(result === null) {
           new lek ({
             _id: mongoose.Types.ObjectId(),
             name: req.body.name,
             cost: req.body.cost,
             typId: req.body.typeId
           }).save(function(error) {
              if(error) { console.log(error); }
              else {
                console.log(req.body);
                res.json({ success: "Dodalo do bd" });
              }
           });
         } else {
           res.json({ error: "Taki lek  już istnieje."});
         }
       }
    });
});
router.post('/removeLek',function(req,res,next){
  lek.findOneAndRemove({
    name: req.body.name
  },function(err){
    if(err) {
      console.log(error);
    }else{
      res.json({ success: "user deleted" });
    }
  });
});
router.post('/removeTyp',function(req,res,next){
  typ.findOneAndRemove({
    name: req.body.name
  },function(err){
    if(err) {
      console.log(err);
    }else{
      res.json({ success: "typ deleted" });
    }
  });
});

router.post('/updateTyp', function(req, res, next) {
        typ.findOneAndUpdate({
          _id:req.body._id
        },{
         name:req.body.name
        },function(error){
          if(error){
            console.log(error);
          }else{
            console.log("udany update");
            res.json({ success: "udany update" });
          }
        });
});
router.post('/EditLek', function(req, res, next) {
        lek.findOneAndUpdate({
          _id:req.body._id
        },{
         name:req.body.name,
         cost:req.body.cost,
         typId:req.body.typId
        },function(error){
          if(error){
            console.log(error);
          }else{
            //console.log(lek.name+" "+lek.cost+" "+lek.typId);
            res.json({ success: "udany update" });
          }
        });
});

router.post('/addType', function(req, res, next) {
    typ.findOne({
      name: req.body.name
    }, function(error, result) {
       if(error) { console.log(error); }
       else {
         if(result === null) {
           new typ ({
             _id: mongoose.Types.ObjectId(),
             name: req.body.name,
           }).save(function(error) {
              if(error) { console.log(error); }
              else {
                res.json({ success: "Dodalo do bd" });
              }
           });
         } else {
           res.json({ error: "Taki typ już istnieje."});
         }
       }
    });
});


router.get('/getTypes',function(req,res,next){
  typ.find(function(error,result){
    if(error){
      console.log(error);
    }else{
      if(result === null){
        console.log("pusty");
      }else{
        //console.log(result);
        res.json(result);
      }
    }
  });
});
router.get('/getLeks',function(req,res,next){
  lek.find()
     .populate('typId')
    .exec(function(error,result){
    if(error){
      console.log(error);
    }else{
      if(result === null){
        console.log("pusty");
      }else{
        //console.log(result);
        res.json(result);
      }
    }
  });
});

module.exports = router;
