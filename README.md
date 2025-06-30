# 🌾 Stardew Valley Bot – Backend

A backend service built for the [June: Build-A-Bot Challenge 🤖✨](https://www.codedex.io/community/monthly-challenge/4QHMd8GadBZtZbq6W1wD?tab=submissions) on Codex.io.

Inspired by **Stardew Valley**, this project provides a conversational assistant that answers questions, gives tips, and shares insights about the game 🐤

Powered by the **OpenAI API** using the `gpt-4.1-mini` model

---

## 🛠 Features

- 🎮 Game-specific chat assistant
- 🧠 Uses OpenAI to generate contextual responses
- 🔐 .env-based API key configuration

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/stardew-bot-backend.git
cd stardew-bot-backend

# Install dependencies
npm install
```

---

## 🏃‍♀️ Run the project

```bash

npm run star:dev
```

---

## 📬 Endpoint

**POST `/open-ai/generate-conversation`**

Body:

```bash
{
    "prompt": ""How could I catch a triger fish?"
}

```

Response:

```bash
{
    "role": "assistant",
    "content": "Hey there! To catch a Triggerfish in Stardew Valley:\n\n- Location: Summer, in the ocean during high tide (check the beach during the day).\n- Time: Between 6 AM and 7 PM.\n- Weather: Must be sunny.\n- Tip: Use bait to help reel it in faster!\n\nGood luck fishing, friend! 🎣✨",
    "refusal": null,
    "annotations": []
}
```
