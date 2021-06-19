let Contact = require("./mahasiswaModel");

exports.index = function(req,res){
  Contact.get(function(err,contact){
    if(err)
    res.send(err);
    res.json({
      status:"success",
      message:"data mahasiswa berhasil diperoleh",
      data:contact
    })
  })
};

exports.new = function(req,res){
  var contact = Contact();
  contact.nim = req.body.nim;
  contact.nama = req.body.nama;
  contact.jurusan = req.body.jurusan;
  contact.semester = req.body.semester;
  contact.save(function(err,contact){
    if(err)
    res.send(err);
    res.json({
      message:"data mahasiswa berhasil dibuat",
      data:contact
    })
  })
};

exports.view = function(req,res){
  Contact.findById(req.params.contact_id,function(err,contact){
    if(err)
    res.send(err);
    res.json({
      message:"data mahasiswa loading...",
      data:contact
    })
  })
};

exports.update = function(req,res){
  Contact.findById(req.params.contact_id,function(err,contact){
    if(err)
    res.send(err);
    contact.nim = req.body.nim;
    contact.nama = req.body.nama;
    contact.jurusan = req.body.jurusan;
    contact.semester = req.body.semester;
    contact.save(function(err){
      if(err)
      res.send(err);
      res.json({
        status:"success",
        message:"data mahasiswa berhasil diupdate",
        data:contact
      })
    })
  })
};

exports.delete = function(req,res){
  Contact.remove({_id:req.params.contact_id},function(err,contact){
    if(err)
    res.send(err);
    res.json({
      status:"success",
      message:"data mahasiswa berhasil di hapus"
    })
  })
};
