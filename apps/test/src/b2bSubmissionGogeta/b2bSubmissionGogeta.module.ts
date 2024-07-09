import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { B2bSubmissionGogetaModuleBase } from "./base/b2bSubmissionGogeta.module.base";
import { B2bSubmissionGogetaService } from "./b2bSubmissionGogeta.service";
import { B2bSubmissionGogetaController } from "./b2bSubmissionGogeta.controller";
import { B2bSubmissionGogetaResolver } from "./b2bSubmissionGogeta.resolver";

@Module({
  imports: [B2bSubmissionGogetaModuleBase, forwardRef(() => AuthModule)],
  controllers: [B2bSubmissionGogetaController],
  providers: [B2bSubmissionGogetaService, B2bSubmissionGogetaResolver],
  exports: [B2bSubmissionGogetaService],
})
export class B2bSubmissionGogetaModule {}
