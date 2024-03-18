import getPosts from "@/app/actions/getPosts";
import styles from "./Feed.module.css";
import { Post } from "@/app/actions/getPosts";

export default async function Feed() {
  let posts: Post[] = [];
  const data = await getPosts();
  if (data) posts = data;
  return (
    <div className={styles.Feed}>
      {posts.length > 0 ? (
        <div className={styles.PostsContainer}>
          {posts.map((post) => (
            <div key={post.id} className={styles.Post}>
              <div className={styles.PostHeader}>
                <div>
                  <p className={styles.Username}>{post.author.username}</p>
                </div>
              </div>
              <p className={styles.Content}>{post.content}</p>
              <div className={styles.CommentsContainer}>
                {post.comments.map((comment) => (
                  <div key={comment.id} className={styles.Comment}>
                    <p>{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No posts as of now!</h1>
      )}
    </div>
  );
}
