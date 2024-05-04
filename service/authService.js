export const verifyUser = (authToken) => {
  const credentials = Buffer.from(authToken, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");
  if (username === "admin" && password === "password") {
    return true;
  } else {
    throw new Error("Username or Password not correct!");
  }
};
