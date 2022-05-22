export const getFromStorage = (data: any) => {
  if (data) {
    return localStorage.getItem(data);
  }
};
