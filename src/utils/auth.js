export const isAdminAuthenticated = () => {
  return sessionStorage.getItem("isAdmin") === "true";
};
