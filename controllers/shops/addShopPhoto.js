const fs = require('fs/promises');
const path = require('path');
const { Shop } = require('../../models/shop');

const shopPhotoDir = path.join(__dirname, '../../', 'public', 'shops');

const addShopPhoto = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const extension = originalname.split('.').pop();
  const filename = `${_id}.${extension}`;

  const resultUpload = path.join(shopPhotoDir, filename);

  await fs.rename(tmpUpload, resultUpload);
  const shopImgURL = path.join('shops', filename);

  await Shop.findByIdAndUpdate(_id, { shopImgURL });

  res.json({ shopImgURL });
};

module.exports = addShopPhoto;
