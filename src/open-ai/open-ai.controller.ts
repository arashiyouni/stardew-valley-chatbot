import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAIRequestDto } from './dto/open-ia.request.dto';
import { ChatCompletionMessage } from 'openai/resources/chat/completions/completions';

@Controller('open-ai')
export class OpenAiController {
    constructor(private OpenAiService: OpenAiService) { }

    @Post('/generate-conversation')
    async generateResponse(@Body() request: OpenAIRequestDto): Promise<ChatCompletionMessage> {
        return this.OpenAiService.chatCompletion(request)
    }
}
