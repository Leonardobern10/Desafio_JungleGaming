import type { Comments } from "@/types/CommentsType";
import CreateCommentDialog from "../dialog/CreateCommentDialog";
import CommentsComponent from "../comments/CommentsComponent";
import { ALERTS } from "@/utils/alerts";

type TaskDetailsCommentsProps = {
  id: string;
  commentsTitle: string;
  comments: Comments[];
};

const styles = {
  container: "flex items-center justify-between",
  h3: "text-lg font-semibold",
  comments: "mt-4 space-y-4",
  alert: "text-muted-foreground",
};

export default function TaskDetailsComments({
  id,
  commentsTitle,
  comments,
}: TaskDetailsCommentsProps) {
  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.h3}>{commentsTitle}</h3>
        <CreateCommentDialog id={id} />
      </div>

      <div className={styles.comments}>
        {comments?.length ? (
          comments.map((el) => (
            <CommentsComponent
              key={el.id}
              id={el.id}
              text={el.text}
              author={el.author}
              createdAt={el.createdAt}
            />
          ))
        ) : (
          <p className={styles.alert}>{ALERTS.withoutComments}</p>
        )}
      </div>
    </section>
  );
}
