import moment from "moment";

export const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();

  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg") {
    return "video";
  } else if (fileExt === "mp3" || fileExt === "wav") {
    return "audio";
  } else if (
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "png" ||
    fileExt === "gif"
  ) {
    return "image";
  } else {
    return "file";
  }
};

export const transformImage = (url = "", width = 100) => url;

export const getLast7Days = () => {
  const currentDate = moment();

  const last7Days = []

  for(let i = 0; i < 7; i++) {
    last7Days.unshift(currentDate.clone().subtract(i, 'days').format('ddd'))
  }

  return last7Days;
}
