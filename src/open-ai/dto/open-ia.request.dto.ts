import { IsString } from "class-validator";

export class OpenAIRequestDto {

    @IsString()
    prompt!: string;
}