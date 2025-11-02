const appEnv = import.meta.env.VITE_APP_ENV;
const serverURL = import.meta.env.VITE_SERVER_URL;

export const getConfig = () => {
  const config = {
    appEnv: appEnv || "production",
    serverURL: serverURL || "",
  };
  return config;
};
