export const responseUrl = (url: string): string => {
  const urlBase = "http://drive.google.com/uc?export=view&id=";
  const start = url.indexOf("/d/") + 3;
  const end = url.indexOf("/view");

  return urlBase + url.slice(start, end);
};
