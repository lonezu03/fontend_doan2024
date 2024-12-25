export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthError = (state) => state.auth.error;

export const setLoginStatus = (status) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(status)); // Lưu trạng thái vào localStorage
  };
  
  export const getLoginStatus = () => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false; // Đọc trạng thái từ localStorage
  };
  

