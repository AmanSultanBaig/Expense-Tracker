import users from "../config/models/user";
import hash from '../helpers/bcrypt'

class userService {
  
async createUser(payload: any) {
    const userFound = await users.findOne({ email: payload.email.toLowerCase() });
    if(userFound) {
        return { message: 'user already exists!', status: 400 };
    }

    const hashedPassword = hash.encryptPassword(payload.password);
    payload.password = hashedPassword;

    await users.create(payload);
    return { message: 'user created successfully!', status: 200 };
  }
  
}

export default userService;
