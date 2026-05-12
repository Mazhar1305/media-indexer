
import Media from "../models/media.model.js";

export const createMediaMetadata = async (file) => {
  const media = await Media.create({
    originalName: file.originalname,
    fileName: file.filename,
    size: file.size,
    type: file.mimetype,
    source: "gallery",
    path: file.path,
  });

  return media;
};