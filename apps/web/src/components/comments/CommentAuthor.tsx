const styles = {
  commentAuthorContainer: "font-bold",
};

export default function CommentAuthor({ author }: { author: string }) {
  return (
    <p>
      <span className={styles.commentAuthorContainer}>{author}</span>
    </p>
  );
}
