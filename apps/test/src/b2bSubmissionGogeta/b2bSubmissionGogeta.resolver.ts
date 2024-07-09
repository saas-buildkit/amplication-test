import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { B2bSubmissionGogetaResolverBase } from "./base/b2bSubmissionGogeta.resolver.base";
import { B2bSubmissionGogeta } from "./base/B2bSubmissionGogeta";
import { B2bSubmissionGogetaService } from "./b2bSubmissionGogeta.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => B2bSubmissionGogeta)
export class B2bSubmissionGogetaResolver extends B2bSubmissionGogetaResolverBase {
  constructor(
    protected readonly service: B2bSubmissionGogetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
