import Courier from "../Models/CourierModels.js";

const getAllCourier = async (req, res, next) => {
  try {
    const courier = await Courier.find({});
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const getSingleCourier = async (req, res, next) => {
  try {
    const courier = await Courier.findById(req.params.id);
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const createCourier = async (req, res, next) => {
  try {
    const { USPS, firstName, lastName, email } = req.body;
    if (!USPS || !firstName || !lastName || !email) {
      return res.status(404).json({ errMsg: "Please fill in the fields " });
    }

    const characters = process.env.TRACKING_ID;

    let randomCode = "";

    for (let i = 0; i < 10; i++) {
      randomCode += characters[Math.floor(Math.random() * characters.length)];
    }
    console.log(randomCode);
    const courier = new Courier({
      TrackingId: randomCode,
      USPS,
      firstName,
      lastName,
      email,
    });

    const saveCourier = await courier.save();
    console.log(courier);
    res.json({ courier: saveCourier });
  } catch (err) {
    next(err);
  }
};

const updateCourier = async (req, res, next) => {
  try {
    const courier = await Courier.findByIdAndUpdate(req.params.id, req.body);
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const deleteCourier = async (req, res, next) => {
  const courier = await Courier.findByIdAndDelete(req.params.id);
  try {
    if (!courier) {
      return res.json({ msg: `no id found of ${req.params.id} found` });
    }
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

export {
  getAllCourier,
  createCourier,
  deleteCourier,
  updateCourier,
  getSingleCourier,
};
