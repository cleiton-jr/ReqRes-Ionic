import { Support } from "./Support.model";
import { User } from "./User.model";

export class Resposta {
    page?: number | undefined;
    per_page?: number | undefined;
    total?: number | undefined;
    total_pages?: number | undefined;
    data?: User[] | User | undefined;
    support?: Support | undefined;
}