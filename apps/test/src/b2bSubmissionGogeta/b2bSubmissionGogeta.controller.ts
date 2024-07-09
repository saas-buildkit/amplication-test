import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { B2bSubmissionGogetaService } from "./b2bSubmissionGogeta.service";
import { B2bSubmissionGogetaControllerBase } from "./base/b2bSubmissionGogeta.controller.base";

@swagger.ApiTags("b2bSubmissionGogetas")
@common.Controller("b2bSubmissionGogetas")
export class B2bSubmissionGogetaController extends B2bSubmissionGogetaControllerBase {
  constructor(
    protected readonly service: B2bSubmissionGogetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
