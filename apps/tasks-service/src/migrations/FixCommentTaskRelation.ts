import type { MigrationInterface, QueryRunner } from 'typeorm';

export class FixCommentTaskRelation1730000000000 implements MigrationInterface {
  name = 'FixCommentTaskRelation1730000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Garantir que a coluna existe
    await queryRunner.query(`
      ALTER TABLE "comment"
      ADD COLUMN IF NOT EXISTS "taskId" uuid;
    `);

    // 2. Remover FK antiga (se existir)
    await queryRunner.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'FK_comment_task'
        ) THEN
          ALTER TABLE "comment" DROP CONSTRAINT "FK_comment_task";
        END IF;
      END $$;
    `);

    // 3. Criar a FK correta
    await queryRunner.query(`
      ALTER TABLE "comment"
      ADD CONSTRAINT "FK_comment_task"
      FOREIGN KEY ("taskId") REFERENCES "task"("id")
      ON DELETE CASCADE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "comment"
      DROP CONSTRAINT IF EXISTS "FK_comment_task";
    `);

    await queryRunner.query(`
      ALTER TABLE "comment"
      DROP COLUMN IF EXISTS "taskId";
    `);
  }
}
