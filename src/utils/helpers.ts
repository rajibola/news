export const verifyImageFormat = (url: string) => {
  let lastIndex = url.split('.').length - 1;
  let condition =
    url.split('.')[lastIndex] !== 'jpg' || url.split('.')[lastIndex] !== 'png';
  let placeholderUrl =
    'https://lh3.googleusercontent.com/proxy/yvDDAfJjJAz1QCUbPGBcH88CoEKMqgV1ceenMPLIoQUzHaLtvql1hw24FxdcfD5wDigwA_lJP14HWt5hRuJ50ZL3ZgNQPw';
  if (condition) {
    return url;
  }
  return placeholderUrl;
};