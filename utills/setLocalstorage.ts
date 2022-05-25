export const setLocalStorage = (name: any,data: any) => {
  if (data) {
    return localStorage.setItem(name, data)
  }
};
