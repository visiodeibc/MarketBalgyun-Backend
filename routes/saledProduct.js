var express = require("express");
var router = express.Router();
const GeneralProduct = require("../models/products/GeneralProduct");
const ConsignProduct = require("../models/products/ConsignProduct");

router.use(express.json());

// 상품 판매 정보 POST, 상품 ID 와 판매 수량
router.post("/", async (req, res) => {
    var saledProduct = req.body.id;
    try {
        const generalProductTemp = await GeneralProduct.find({
            id: req.body.id,
        });
        if (generalProductTemp.length != 0) {
            await GeneralProduct.updateOne(
                { id: req.body.id },
                { $inc: { quantity: -1 } },
            )
        } else {
            const consignProductTemp = await ConsignProduct.find({
                id: req.body.id,
            });
            if (consignProductTemp.length != 0) {
                await ConsignProduct.updateOne(
                    { id: req.body.id },
                    { $inc: { quantity: -1 } },
                )
            }
            else {
                res.send("해당 ID의 상품이 없습니다.");
            }
        }
        // 포인트 적립 혹은 계좌 정보
        res.send("해당 ID의 상품이 판매되었습니다.");
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

function setPoint(price) {
    var pointPlus = price * 0.65;

}

module.exports = router;