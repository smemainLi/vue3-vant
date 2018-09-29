import fetch from "../config/fetch";

export const codePic = () => fetch('/wx/getCodePic', {}, 'POST');
