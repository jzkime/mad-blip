import { Injectable } from "@nestjs/common";
import { Knex } from 'knex';
import {InjectConnection} from 'nest-knexjs'
@Injectable()
export class WizardService {
    constructor(@InjectConnection() private readonly knex: Knex) {}
    sayMagic(){
        return this.knex.table('wizard')
    }
}