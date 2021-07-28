export const generateUId = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const generateNumberId = () => {
  return new Date().getUTCMilliseconds();
};

export const verifyInputs = (data?: string[]) => {
  return data?.every(item => item.trim());
};
