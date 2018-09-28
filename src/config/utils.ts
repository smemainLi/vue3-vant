export const setStore = (name: any, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

export const getStore = (name: any) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

export const removeStore = (name: any) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
