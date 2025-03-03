/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  B2bSubmissionGogeta as PrismaB2bSubmissionGogeta,
} from "@prisma/client";

export class B2bSubmissionGogetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.B2bSubmissionGogetaCountArgs, "select">
  ): Promise<number> {
    return this.prisma.b2bSubmissionGogeta.count(args);
  }

  async b2bSubmissionGogetas(
    args: Prisma.B2bSubmissionGogetaFindManyArgs
  ): Promise<PrismaB2bSubmissionGogeta[]> {
    return this.prisma.b2bSubmissionGogeta.findMany(args);
  }
  async b2bSubmissionGogeta(
    args: Prisma.B2bSubmissionGogetaFindUniqueArgs
  ): Promise<PrismaB2bSubmissionGogeta | null> {
    return this.prisma.b2bSubmissionGogeta.findUnique(args);
  }
  async createB2bSubmissionGogeta(
    args: Prisma.B2bSubmissionGogetaCreateArgs
  ): Promise<PrismaB2bSubmissionGogeta> {
    return this.prisma.b2bSubmissionGogeta.create(args);
  }
  async updateB2bSubmissionGogeta(
    args: Prisma.B2bSubmissionGogetaUpdateArgs
  ): Promise<PrismaB2bSubmissionGogeta> {
    return this.prisma.b2bSubmissionGogeta.update(args);
  }
  async deleteB2bSubmissionGogeta(
    args: Prisma.B2bSubmissionGogetaDeleteArgs
  ): Promise<PrismaB2bSubmissionGogeta> {
    return this.prisma.b2bSubmissionGogeta.delete(args);
  }
}
