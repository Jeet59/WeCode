import { addUser, getUser, getUsers } from "./services/userServices.js";
export const resolvers = {
    Query: {
        hello: () => "World!!",
        users: async () => {
            const data = await getUsers();
            return data;
        },
        user: async (_, { username, password }) => {
            const user = await getUser(username, password);
            console.log(user);
            return user;
        },
    },
    Mutation: {
        addUser: async (_, { username, email, password, }) => {
            try {
                const newUser = await addUser(username, password, email);
                return newUser;
            }
            catch (error) {
                console.error("Error adding user:", error);
                throw error;
            }
        },
    },
};
//# sourceMappingURL=resolvers.js.map