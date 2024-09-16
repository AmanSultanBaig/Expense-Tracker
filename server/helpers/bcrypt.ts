import { hashSync, compareSync } from "bcrypt";

const encryptPassword = (data: any) => {
  const salt = 10;
  return hashSync(data, salt);
};

const decryptPassword = (plainPassword: any, encryptedPassword: any) => {
  return compareSync(plainPassword, encryptedPassword);
};

export default { encryptPassword, decryptPassword };