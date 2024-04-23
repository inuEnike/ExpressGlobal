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
      from: "customercare@expressglobaldeliveryuk.com", // Sender address
      to: recieverEmail,
      subject: "Tracking Update", // Subject line
      text: "Dear Customer,", // Plain text body
      html: `
      <div style="font-family: Arial, sans-serif;">
      <p style="font-size: 16px;">Dear ${recieverName},</p>
      <p style="font-size: 16px;">We are writing to inform you about the latest update regarding your shipment with Tracking ID: <strong>${courierInfo.TrackingId}</strong>.</p>
      <p style="font-size: 16px;">The current status of your shipment is: <span style="color: red;">${trackingStatus}</span>.</p>
      <p style="font-size: 16px;">For further details and updates, please visit our website <a href="https://www.expressglobaldeliveryuk.com" target="_blank">Express Global Delivery UK</a>.</p>
      <p style="font-size: 16px;">For any inquiries or assistance, please contact our customer service team at <a href="mailto:customer.info@expressglobaldeliveryuk.com">customer.info@expressglobaldeliveryuk.com</a>.</p>
      <p style="font-size: 14px;">Thank you for choosing Express Global Delivery UK for your shipping needs.</p>
      <p style="font-size: 14px;">Best regards,</p>
      <p style="font-size: 14px;">Express Global Delivery UK Team</p>
      <p style="font-size: 12px; color: #999;">&copy; 2024 Express Global Delivery UK. All rights reserved.</p>
    </div>
      `, // HTML body
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
    console.log(courierInfo);
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
      from: "customercare@expressglobaldeliveryuk.com", // Sender address
      to: recieverEmail,
      subject: "Tracking Update", // Subject line
      text: "Dear Customer,", // Plain text body
      html: `
        <div style="font-family: Arial, sans-serif;">
          <p style="font-size: 16px;">Dear ${recieverName},</p>
          <p style="font-size: 16px;">We are writing to inform you about the latest update regarding your shipment with Tracking ID: <strong>${courierInfo.TrackingId}</strong>.</p>
          <p style="font-size: 16px;">The current status of your shipment has been updated to: <span style="color: red;">${trackingStatus}</span>.</p>
          <p style="font-size: 16px;">For further information or assistance, please visit our website <a href="https://www.expressglobaldeliveryuk.com" target="_blank">Express Global Delivery UK</a> or contact us at <a href="mailto:customer.info@expressglobaldeliveryuk.com">customer.info@expressglobaldeliveryuk.com</a>.</p>
          <p style="font-size: 14px;">Thank you for choosing our services.</p>
          <p style="font-size: 14px;">Best regards,</p>
          <p style="font-size: 14px;">Express Global Delivery UK Team</p>
          <p style="font-size: 12px; color: #999;">&copy; 2024 Express Global Delivery UK. All rights reserved.</p>
        </div>
      `, // HTML body
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
