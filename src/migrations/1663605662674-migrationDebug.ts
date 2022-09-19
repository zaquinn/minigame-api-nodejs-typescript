import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationDebug1663605662674 implements MigrationInterface {
    name = 'migrationDebug1663605662674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nationality"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nationality" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nationality"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nationality" integer NOT NULL`);
    }

}
