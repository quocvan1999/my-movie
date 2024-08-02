export function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else {
    return text;
  }
}

export function formatString(genres) {
  let stringHtml = "";
  genres.forEach((genre) => {
    stringHtml += `${genre}, `;
  });
  return stringHtml.slice(0, -2);
}
