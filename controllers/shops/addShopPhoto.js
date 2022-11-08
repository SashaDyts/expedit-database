const fs = require('fs/promises');
const path = require('path');
const { Shop } = require('../../models/shop');

const shopPhotoDir = path.join(__dirname, '../../', 'public', 'shops');

const addShopPhoto = async (req, res) => {
  const { shopId } = req.params;
  const { path: tmpUpload, originalname } = req.file;

  const extension = originalname.split('.').pop();
  const filename = `${shopId}.${extension}`;

  const resultUpload = path.join(shopPhotoDir, filename);

  await fs.rename(tmpUpload, resultUpload);
  const shopImgURL = path.join('shops', filename);

  await Shop.findByIdAndUpdate(shopId, { shopImgURL });

  res.json({ shopImgURL, shopId });
};

module.exports = addShopPhoto;
