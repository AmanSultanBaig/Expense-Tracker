import users from "../config/models/user";
import hash from '../helpers/bcrypt';
import jwt from '../helpers/jwt';

class userService {
  async createUser(payload: any) {
    const userFound = await users.findOne({ email: payload.email.toLowerCase() });
    if (userFound) {
      return { message: "user already exists!", status: 400 };
    }

    const hashedPassword = hash.encryptPassword(payload.password);
    payload.password = hashedPassword;

    await users.create(payload);
    return { message: "user created successfully!", status: 200 };
  }

  async loginUser(payload: any) {
    let user = await users.findOne({ email: payload.email.toLowerCase() });
    if (!user) {
      return { message: "no user found with given credentials!", status: 404 };
    }

    const hashedPassword = hash.decryptPassword(payload.password, user.password);
    if(!hashedPassword) {
        return { message: "incorrect credentials!", status: 400 };
    }
    
    if(!user.verified) {
        return { message: "this account is not verified!", status: 401 };
    }

    const data = {
        id: user._id,
        name: user.full_name,
        email: user.email,
        verified: user.verified,
        token: ''
    }

    // creating JWT Token
    data.token = jwt.createToken(data);

    return { message: "user logged-in successfully!", status: 200, data };
  }
}

export default userService;
