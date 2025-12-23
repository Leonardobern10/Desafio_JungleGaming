const styles = {
  commentTimeText: "text-primary/60 text-sm",
};

export default function CommentTime({ createdAt }: { createdAt: Date }) {
  return (
    <p className={styles.commentTimeText}>
      Criado em: <span>{new Date(createdAt).toLocaleDateString("pt-BR")}</span>
    </p>
  );
}
