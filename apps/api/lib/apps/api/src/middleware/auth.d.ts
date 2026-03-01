import type { Plan } from "@atiq/shared";
declare module "fastify" {
    interface FastifyRequest {
        plan: Plan;
        userId?: string;
    }
}
declare const _default: any;
export default _default;
//# sourceMappingURL=auth.d.ts.map