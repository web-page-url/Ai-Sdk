# AI Agents SDK

A comprehensive Node.js application for building AI agents with OpenAI API integration.

## Features

- 🤖 **OpenAI Agents SDK**: Create and manage custom AI agents
- 📄 **PDF Chat**: Upload and chat with PDF documents
- 🗣️ **Text-to-Speech**: Convert text to high-quality speech with multiple voices
- 🖼️ **Text-to-Image**: Generate images from text descriptions using DALL-E
- 🌐 **Web Search**: Intelligent web search capabilities
- 💻 **Computer Use**: Automated computer interaction tasks
- 📁 **File Analysis**: Upload and analyze various file types

## Live Demo

🚀 **Live Application**: https://ai-sdk.onrender.com

## Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Ai-Sdk
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
NODE_ENV=development
DEFAULT_MODEL=gpt-4o-mini
MAX_TOKENS=2000
TEMPERATURE=0.7
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads
```

4. **Start the server**
```bash
npm start
```

Visit `http://localhost:3000` to access the application.

### Production Deployment on Render

This application is configured for easy deployment on [Render](https://render.com).

#### Automatic Deployment

1. **Fork/Clone this repository** to your GitHub account

2. **Connect to Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**:
   - **Name**: `ai-sdk`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

4. **Set Environment Variables** in Render Dashboard:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key
   NODE_ENV=production
   DEFAULT_MODEL=gpt-4o-mini
   MAX_TOKENS=2000
   TEMPERATURE=0.7
   MAX_FILE_SIZE=10485760
   UPLOAD_DIR=./uploads
   ```

5. **Deploy**: Click "Create Web Service"

#### Manual Deployment Configuration

The repository includes a `render.yaml` file for infrastructure-as-code deployment. Simply:

1. Set your `OPENAI_API_KEY` in Render's environment variables
2. Deploy from the Render dashboard

## API Endpoints

### Core Features
- `POST /api/chat` - General chat with AI
- `POST /api/web-search` - Web search capabilities  
- `POST /api/file-upload` - Upload and analyze files
- `POST /api/chat-pdf` - Chat with PDF documents

### Text-to-Speech
- `POST /api/text-to-speech` - Convert text to speech audio 🗣️
- `GET /api/text-to-speech/voices` - Get available TTS voices

### Text-to-Image  
- `POST /api/text-to-image` - Generate images from text descriptions 🖼️
- `GET /api/text-to-image/models` - Get available image generation models

### OpenAI Agents SDK
- `POST /api/openai-agents/run` - Run OpenAI Agents SDK agents
- `POST /api/openai-agents/create` - Create custom OpenAI agents
- `GET /api/openai-agents` - List OpenAI agents

### Agent Management
- `GET /api/agents` - List available agents
- `POST /api/agents/create` - Create a custom agent
- `POST /api/agents/:id/execute` - Execute an agent task

## Frontend Interfaces

- **Main Dashboard**: `/` - Overview of all features
- **PDF Chat**: `/chat-pdf.html` - Upload and chat with PDFs
- **Text-to-Speech**: `/text-to-speech.html` - Convert text to speech
- **Text-to-Image**: `/text-to-image.html` - Generate images from text
- **OpenAI Agents**: `/openai-agents.html` - Manage OpenAI agents
- **Code Explanation**: `/code-explanation.html` - Analyze and explain code

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | - | ✅ |
| `PORT` | Server port | 3000 | ❌ |
| `NODE_ENV` | Environment mode | development | ❌ |
| `DEFAULT_MODEL` | Default OpenAI model | gpt-4o-mini | ❌ |
| `MAX_TOKENS` | Maximum tokens per request | 2000 | ❌ |
| `TEMPERATURE` | AI response creativity | 0.7 | ❌ |
| `MAX_FILE_SIZE` | Maximum upload file size | 10485760 | ❌ |
| `UPLOAD_DIR` | File upload directory | ./uploads | ❌ |

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI Integration**: OpenAI API (GPT, DALL-E, TTS)
- **File Processing**: Multer, PDF2JSON, Mammoth
- **Web Scraping**: Puppeteer, Cheerio
- **Automation**: Computer Use Agent

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
1. Check the GitHub issues
2. Review the API documentation at the root endpoint
3. Ensure your OpenAI API key is properly configured

---

**🚀 Live Demo**: https://ai-sdk.onrender.com