let router = require("express").Router();

let kontrol = require("./mahasiswaController");
router.route("/mahasiswa")
  .get(kontrol.index)
  .post(kontrol.new);

router.route("/mahasiswa/:contact_id")
  .get(kontrol.view)
  .patch(kontrol.update)
  .put(kontrol.update)
  .delete(kontrol.delete);

module.exports = router;
