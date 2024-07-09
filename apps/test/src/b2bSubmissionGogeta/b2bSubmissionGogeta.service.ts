import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { B2bSubmissionGogetaServiceBase } from "./base/b2bSubmissionGogeta.service.base";

@Injectable()
export class B2bSubmissionGogetaService extends B2bSubmissionGogetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
