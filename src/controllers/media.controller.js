
import { createMediaMetadata } from "../services/media.service.js";

export const uploadMedia = async (req, res, next) => {
  try {
    if (!req.file) {
      console.log("file not uploaded");

      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    } else {
      console.log(req.file);

    }

    const media = await createMediaMetadata(req.file);

    res.status(201).json({
      success: true,
      message: "Media indexed successfully",
      data: media,
    });
  } catch (error) {
    next(error);
  }
};