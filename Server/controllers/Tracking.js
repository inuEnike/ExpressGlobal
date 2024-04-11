import TrackInfo from "../Models/TrackingInfo.js";
import Courier from "../Models/CourierModels.js";
import { transporter } from "../utils/mail.js";

const getAllTInfo = async (_req, res, next) => {
  try {
    const info = await TrackInfo.find({}).populate("courier");
    res.json({ info });
  } catch (error) {
    next(error);
  }
};

const createInfo = async (req, res, next) => {
  const {
    courier,
    trackingStatus,
    from,
    to,
    seviceMode,
    weight,
    goodsDetails,
    address,
    deliveryDate,
    recieverName,
    recieverNumber,
    recieverEmail,
    latitude,
    longitude,
  } = req.body;

  try {
    const file = (await req.file) ? req.file.path : null;

    const courierInfo = await Courier.findById(courier);

    const info = await TrackInfo.create({
      courier,
      goodsImage: file,
      trackingStatus,
      from,
      to,
      seviceMode,
      weight,
      goodsDetails,
      address,
      deliveryDate,
      recieverName,
      recieverEmail,
      recieverNumber,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });
    if (!info) {
      return res.json({ message: "please the fields are required" });
    }

    await transporter.sendMail({
      from: "inuenike@gmail.com", // sender address
      to: recieverEmail,
      subject: "Tracking Process", // Subject line
      text: "Hello world?", // plain text body
      html: `
                  <h3>Hello ${recieverName}, your goods with the Tracking ID of ${courierInfo.TrackingId} is being <span style="color: red"> ${trackingStatus}</span></h3>
                  <p>For more information contact inuenike@gmail.com</p>
                  <i>copyright @ 2024</i>
              `, // html body
    });

    console.log("Message sent: %s");
    res.json({ info });
  } catch (error) {
    next(error);
  }
};

const updateInfo = async (req, res, next) => {
  const {
    courier,
    trackingStatus,
    from,
    to,
    seviceMode,
    weight,
    goodsDetails,
    address,
    deliveryDate,
    recieverName,
    recieverNumber,
    recieverEmail,
    latitude,
    longitude,
  } = req.body;

  try {
    const file = (await req.file) ? req.file.path : null;
    const courierInfo = await Courier.findById(courier);

    const info = await TrackInfo.findByIdAndUpdate(req.params.id, {
      courier,
      goodsImage: file,
      trackingStatus,
      from,
      to,
      seviceMode,
      weight,
      goodsDetails,
      address,
      deliveryDate,
      recieverName,
      recieverNumber,
      recieverEmail,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });
    await transporter.sendMail({
      from: "inuenike@gmail.com", // sender address
      to: recieverEmail,
      subject: "Tracking Process", // Subject line
      text: "Hello world?", // plain text body
      html: `
                  <h3>Hello ${recieverName}, your goods with the Tracking ID of ${courierInfo.TrackingId} has been updated to <span style="color: red"> ${trackingStatus}</span></h3>
                  <p>For more information contact inuenike@gmail.com</p>
              `, // html body
    });

    console.log("Message sent: %s");
    res.json({ info });
  } catch (error) {
    next(error);
  }
};

const deleteInfo = async (req, res) => {
  try {
    const info = await TrackInfo.findByIdAndDelete(req.params.id);
    res.json({ info });
  } catch (error) {
    next(error);
  }
};

const getSingleTrack = async (req, res, next) => {
  try {
    const user = req.user;
    const info = await TrackInfo.find({ courier: user }).populate("courier");
    res.json({ Tinfo: info });
  } catch (error) {
    next(error);
  }
};

export { getAllTInfo, createInfo, updateInfo, deleteInfo, getSingleTrack };

// createInfo("inuenike", "12112", "pending");
