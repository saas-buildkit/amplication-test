/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { B2bSubmissionGogetaWhereUniqueInput } from "./B2bSubmissionGogetaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { B2bSubmissionGogetaUpdateInput } from "./B2bSubmissionGogetaUpdateInput";

@ArgsType()
class UpdateB2bSubmissionGogetaArgs {
  @ApiProperty({
    required: true,
    type: () => B2bSubmissionGogetaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => B2bSubmissionGogetaWhereUniqueInput)
  @Field(() => B2bSubmissionGogetaWhereUniqueInput, { nullable: false })
  where!: B2bSubmissionGogetaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => B2bSubmissionGogetaUpdateInput,
  })
  @ValidateNested()
  @Type(() => B2bSubmissionGogetaUpdateInput)
  @Field(() => B2bSubmissionGogetaUpdateInput, { nullable: false })
  data!: B2bSubmissionGogetaUpdateInput;
}

export { UpdateB2bSubmissionGogetaArgs as UpdateB2bSubmissionGogetaArgs };
