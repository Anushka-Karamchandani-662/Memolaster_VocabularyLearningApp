const userModel = require("../models/userModel");

const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const age = req.body.age;
  const exam = req.body.exam;

  if (!name) {
    return res.send({ code: 400, message: "Name Required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password Required" });
  } else {
    const newUser = await new userModel({ name, password, age, exam });
    const isSaved = await newUser.save();
    if (isSaved) {
      res.send({ code: 200, message: "Saved" });
    } else {
      res.send({ code: 500, message: "Not Saved" });
    }
  }
};

module.exports.login = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  if (!name) {
    return res.send({ code: 400, message: "Name Required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password Required" });
  } else {
    const isNameExists = await userModel.findOne({ name: name });

    if (isNameExists) {
      console.log(isNameExists.password, "isNameExists");
      if (isNameExists.password == req.body.password) {
        const token = jwt.sign(
          {
            expAfter: Math.floor(Date.now() / 1000) + 60 * 60,
            name: isNameExists.name,
            password: isNameExists.password,
          },
          "MYKEY"
        );
        return res.send({
          code: 200,
          message: "login success",
          token: token,
          userId: isNameExists._id,
        });
      } else {
        return res.send({ code: 404, message: "Password wrong" });
      }
    } else {
      return res.send({ code: 404, message: "Name not found" });
    }
  }
};

module.exports.addToCart = async (req, res) => {
  console.log(req.body, "62");

  const isUpdate = await userModel.updateOne(
    { _id: req.body.userId },
    {
      $addToSet: { cart: req.body.productId },
    }
  );

  if (isUpdate) {
    return res.send({ code: 200, message: "Add to cart success." });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

module.exports.getCart = async (req, res) => {
  const userId = req.body.userId;

  const data = await userModel.findOne({ _id: userId }).populate("cart");

  if (data) {
    return res.send({ code: 200, message: "Get cart success.", data: data });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

module.exports.addToIntermediate = async (req, res) => {
  console.log(req.body, "62");

  const interisUpdate = await userModel.updateOne(
    { _id: req.body.userId },
    {
      $addToSet: { cartTwo: req.body.productId },
    }
  );

  if (interisUpdate) {
    return res.send({ code: 200, message: "Add to cart success." });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

module.exports.getIntermediate = async (req, res) => {
  const userId = req.body.userId;

  const data = await userModel.findOne({ _id: userId }).populate("cartTwo");

  if (data) {
    return res.send({ code: 200, message: "Get cart success.", data: data });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

module.exports.addToAdvance = async (req, res) => {
  console.log(req.body, "62");

  const aisUpdate = await userModel.updateOne(
    { _id: req.body.userId },
    {
      $addToSet: { cartThree: req.body.productId },
    }
  );

  if (aisUpdate) {
    return res.send({ code: 200, message: "Add to cart success." });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

module.exports.getAdvance = async (req, res) => {
  const userId = req.body.userId;

  const data = await userModel.findOne({ _id: userId }).populate("cartThree");

  if (data) {
    return res.send({ code: 200, message: "Get cart success.", data: data });
  } else {
    return res.send({ code: 500, message: "Server Err" });
  }
};

/*
module.exports.login = async (req, res) => {
    const name = req.body.name
    const password = req.body.password

    if (!name) {
        return res.send({ code: 400, message: 'Name Required.' })
    } else if (!password) {
        return res.send({ code: 400, message: 'Password Required.' })
    } else {
        // main logic

        const isNameExists = await userModel.findOne({ name: name })
        if (isNameExists) {
            if (isNameExists.password == req.body.password) {
                const token = jwt.sign({
                    // expAfter: Math.floor(Date.now() / 1000) + (60 * 60),
                    name: isNameExists.name,
                    password: isNameExists.password,
                }, 'MYKEY', { expiresIn: '1h' });
                return res.send({
                    code: 200, message: 'login success',
                    token: token,
                    user: isNameExists,
                })
            } else {
                return res.send({ code: 404, message: 'Password Wrong' })
            }
        } else {
            return res.send({ code: 404, message: 'Name Not Found' })
        }
    }
}*/
