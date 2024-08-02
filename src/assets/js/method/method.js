export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else {
    return text;
  }
};

export const formatString = (data, type, keyValue) => {
  let stringHtml = "";
  switch (type) {
    case 1:
      data.map((item) => {
        stringHtml += `${item[keyValue]}, `;
      });
      break;
    case 2:
      data.forEach((item) => {
        stringHtml += `${item}, `;
      });
      break;
    default:
      break;
  }
  return stringHtml.slice(0, -2);
};

export const getYouTubeVideoId = (url) => {
  const urlParams = new URL(url).searchParams;
  return urlParams.get("v");
};
