const style = {
  containerCommentText: "text-sm",
};

export default function CommentText({ text }: { text: string }) {
  return (
    <p className={style.containerCommentText}>
      <em>"{text}"</em>
    </p>
  );
}
