import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationDebug1663602773744 implements MigrationInterface {
    name = 'migrationDebug1663602773744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL, "nationality" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "countryFlagId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "country_flag" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "flag" character varying NOT NULL, CONSTRAINT "PK_b82be60f48b3e8896047d316ba8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_3025d87320c14a598b19579e977" FOREIGN KEY ("countryFlagId") REFERENCES "country_flag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_3025d87320c14a598b19579e977"`);
        await queryRunner.query(`DROP TABLE "country_flag"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
