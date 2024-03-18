import { addComment, getComments, getComment, } from "./services/commentServices.js";
import { addUser, getUser, getUsers } from "./services/userServices.js";
import { addPost, getPost, getPosts } from "./services/postServices.js";
export const resolvers = {
    Query: {
        getUsers: async () => {
            const data = await getUsers();
            return data;
        },
        getUser: async (_, { username, password }) => {
            const user = await getUser(username, password);
            return user;
        },
        getComments: async (_, { id }) => {
            const data = await getComments(id);
            return data;
        },
        getComment: async (_, { id }) => {
            const data = await getComment(id);
            return data;
        },
        getPost: async (_, { id }) => {
            const data = await getPost(id);
            return data;
        },
        getPosts: async () => {
            const data = await getPosts();
            return data;
        },
    },
    Mutation: {
        addUser: async (_, { username, email, password, }) => {
            try {
                const newUser = await addUser(username, email, password);
                return newUser;
            }
            catch (error) {
                console.error("Error adding user:", error);
                throw error;
            }
        },
        addPost: async (_, { content, userId }) => {
            try {
                const newPost = await addPost(content, userId);
                return newPost;
            }
            catch (error) {
                console.error("Error adding post:", error);
                throw error;
            }
        },
        addComment: async (_, { content, postId, userId, }) => {
            try {
                const newComment = await addComment(content, postId, userId);
                return newComment;
            }
            catch (error) {
                console.error("Error adding Comment:", error);
                throw error;
            }
        },
    },
};
//# sourceMappingURL=resolvers.js.map