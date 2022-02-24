import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class migrationblog1645631494920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "blog",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
            isUnique: true,
            unsigned: true,
          },
          {
            name: "title_blog",
            type: "text",
          },
          {
            name: "content_blog",
            type: "text",
          },
          {
            name: "created_at",
            type: "timestampz",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestampz",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("blog");
  }
}
