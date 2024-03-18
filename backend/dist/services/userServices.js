import { AppDataSource } from "../data-source.js";
import { User } from "../entity/User.js";
export async function getUsers() {
    const users = await AppDataSource.getRepository(User).find({
        relations: {
            posts: true,
            comments: true,
        },
    });
    return users;
}
export async function getUser(username, password) {
    const user = await AppDataSource.getRepository(User).findOne({
        where: {
            username: username,
            password: password,
        },
        relations: {
            posts: true,
            comments: true,
        },
    });
    return user;
}
export async function addUser(username, email, password) {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    await AppDataSource.getRepository(User).save(user);
    const newUser = await AppDataSource.getRepository(User).findOne({
        where: {
            username: username,
            email: email,
            password: password,
        },
    });
    return newUser;
}
//# sourceMappingURL=userServices.js.map