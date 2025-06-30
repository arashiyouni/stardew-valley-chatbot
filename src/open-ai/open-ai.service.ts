import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { OpenAIRequestDto } from './dto/open-ia.request.dto';
import { ChatCompletionMessage } from 'openai/resources/chat/completions';

@Injectable()
export class OpenAiService {

    constructor(private configService: ConfigService) { }

    private openAI = new OpenAI({
        apiKey: this.configService.get<string>('API_KEY')
    })

    async chatCompletion(request: OpenAIRequestDto): Promise<ChatCompletionMessage> {
        const completion = await this.openAI.chat.completions.create({
            model: 'gpt-4.1-mini',
            messages: [
                {
                    role: 'assistant',
                    content: 'You are Krobus, you are very kind, friendly monster and always helps to know about stardew valley, tips, and func fact. Give only the main point and response friendly'
                },
                {
                    role: 'user',
                    content: request.prompt,
                },
            ],

        })
        return completion.choices[0].message;
    }
}
