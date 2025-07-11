# 🤖 AI Agents SDK

A comprehensive Node.js application for building intelligent AI agents using OpenAI's API. Create agents that can search the web, process files, automate computer tasks, and communicate with each other.

## ✨ Features

### 🕵️‍♂️ Web Search Agent
- Search the internet for real-time information
- Support for multiple search providers (DuckDuckGo, Bing, Google)
- AI-powered content extraction and synthesis
- Automatic result enrichment

### 📂 File Search Agent  
- Process multiple file formats (PDF, DOCX, XLSX, TXT, CSV, JSON)
- Intelligent content extraction and analysis
- Search within documents
- AI-powered document insights

### 🖥️ Computer Use Agent
- Automate file system operations
- Launch applications
- Web browser automation with Puppeteer
- Safe command execution with security checks
- Cross-platform support (Windows, macOS, Linux)

### 📡 Responses API
- Direct OpenAI API integration
- Multi-turn conversations
- Streaming responses
- Content generation and analysis
- Q&A functionality

### 🧑‍💻 Agent SDK
- Create custom AI agents with specialized capabilities
- Task analysis and execution planning
- Tool integration and management
- Agent-to-agent communication
- Memory and conversation handling

### 🤖 **NEW: OpenAI Agents SDK**
- Official OpenAI Agents SDK integration
- Multi-agent orchestration with intelligent handoffs
- Triage agent for automatic task routing
- Specialized tutor agents (History, Math)
- Custom agent creation with tools
- Built-in tools for calculations and fact retrieval
- Interactive web interface for agent management

### 📄 **NEW: Chat PDF Feature**
Upload PDF documents and interact with AI to:
- **Summarize documents** - Get comprehensive summaries of your PDFs
- **Ask questions** - Query specific information from the document
- **Extract key insights** - Identify main topics, key points, and important details
- **Interactive chat** - Natural conversation about document content

**Access the Chat PDF interface at:** `http://localhost:3000/chat-pdf.html`

### 🤖 **NEW: OpenAI Agents Interface**
Interactive web interface for the official OpenAI Agents SDK:
- **Manage agents** - Select between Triage, History, and Math tutors
- **Create custom agents** - Build specialized agents with custom instructions
- **Agent orchestration** - Watch intelligent handoffs between agents
- **Tool integration** - See agents use built-in tools for calculations and facts

**Access the OpenAI Agents interface at:** `http://localhost:3000/openai-agents.html`

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone <your-repo-url>
cd ai-agents-sdk
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=3000
NODE_ENV=development

# File Upload Configuration
MAX_FILE_SIZE=10485760  # 10MB
UPLOAD_DIR=./uploads

# Agent Configuration
DEFAULT_MODEL=gpt-3.5-turbo
MAX_TOKENS=1000
TEMPERATURE=0.7

# Optional: Additional Search API Keys
BING_SEARCH_API_KEY=your_bing_search_key_here
GOOGLE_SEARCH_API_KEY=your_google_search_key_here
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id_here
```

### 4. Start the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### 5. Test the Application
```bash
npm test
```

Visit `http://localhost:3000` to see the API documentation.

## 📚 API Endpoints

### General Chat
```http
POST /api/chat
Content-Type: application/json

{
  "message": "Hello! How can AI agents help me?",
  "model": "gpt-4",
  "temperature": 0.7
}
```

### Web Search
```http
POST /api/web-search
Content-Type: application/json

{
  "query": "latest AI developments 2024",
  "maxResults": 5
}
```

### File Upload & Analysis
```http
POST /api/file-upload
Content-Type: multipart/form-data

file: [your-file.pdf]
```

### File Search
```http
POST /api/file-search
Content-Type: application/json

{
  "query": "contract due date",
  "filePath": "./uploads/contract.pdf"
}
```

### Computer Automation
```http
POST /api/computer-use
Content-Type: application/json

{
  "action": "create_folder",
  "parameters": {
    "folderPath": "./new-project"
  }
}
```

### Chat PDF
```http
POST /api/chat-pdf
Content-Type: application/json

{
  "message": "Summarize this document",
  "filePath": "./uploads/contract.pdf",
  "fileName": "contract.pdf"
}
```

### Agent Management
```http
# List all agents
GET /api/agents

# Create a new agent
POST /api/agents/create
Content-Type: application/json

{
  "name": "CustomerSupportAgent",
  "description": "Specialized in customer service tasks",
  "capabilities": ["web_search", "file_search"],
  "tools": ["web_search"],
  "systemPrompt": "You are a helpful customer support agent..."
}

# Execute agent task
POST /api/agents/{agent-id}/execute
Content-Type: application/json

{
  "task": "Help me find information about our refund policy",
  "context": {
    "query": "refund policy information"
  }
}
```

### OpenAI Agents SDK
```http
# Run an OpenAI agent (triage, history, math, or custom)
POST /api/openai-agents/run
Content-Type: application/json

{
  "agentType": "triage",
  "input": "What is the capital of France?"
}

# Create a custom OpenAI agent
POST /api/openai-agents/create
Content-Type: application/json

{
  "name": "Science Tutor",
  "instructions": "You provide help with science questions and explain concepts clearly.",
  "model": "gpt-4"
}

# List all available OpenAI agents
GET /api/openai-agents

# Test the OpenAI Agents SDK
GET /api/openai-agents/test
```

## 🛠️ Available Actions

### Computer Use Agent Actions

| Action | Description | Parameters |
|--------|-------------|------------|
| `open_app` | Launch an application | `appName` |
| `open_file` | Open file with default app | `filePath` |
| `rename_file` | Rename a file or folder | `oldPath`, `newPath` |
| `create_folder` | Create a new directory | `folderPath` |
| `list_files` | List directory contents | `directory` |
| `copy_file` | Copy a file | `source`, `destination` |
| `move_file` | Move a file | `source`, `destination` |
| `delete_file` | Delete a file or folder | `filePath` |
| `browse_web` | Automate web browsing | `url`, `options` |
| `take_screenshot` | Capture screenshot | `outputPath` |
| `get_system_info` | Get system information | none |

### File Search Agent Formats

- **PDF Documents** (.pdf)
- **Word Documents** (.docx, .doc) 
- **Excel Spreadsheets** (.xlsx, .xls)
- **Text Files** (.txt)
- **CSV Files** (.csv)
- **JSON Files** (.json)

## 🎯 Example Use Cases

### 1. Travel Booking Agent
```javascript
const agentResult = await agentSDK.createAgent({
  name: 'TravelAgent',
  description: 'Helps with travel planning and booking',
  capabilities: ['web_search', 'information_gathering'],
  tools: ['web_search'],
  systemPrompt: 'You are a travel specialist. Help users plan trips...'
});

const response = await agentSDK.executeAgent(
  agentResult.agent.id,
  'Find the best flights to Tokyo next month',
  { query: 'flights to Tokyo best deals' }
);
```

### 2. Document Analysis Agent
```javascript
const agentResult = await agentSDK.createAgent({
  name: 'DocumentAnalyzer',
  description: 'Analyzes and extracts information from documents',
  capabilities: ['file_search', 'document_analysis'],
  tools: ['file_search']
});

const response = await agentSDK.executeAgent(
  agentResult.agent.id,
  'What are the key terms in this contract?',
  { filePath: './uploads/contract.pdf', query: 'key terms conditions' }
);
```

### 3. Research Assistant Agent
```javascript
const agentResult = await agentSDK.createAgent({
  name: 'ResearchAssistant',
  description: 'Conducts research and gathers information',
  capabilities: ['web_search', 'content_synthesis'],
  tools: ['web_search'],
  systemPrompt: 'You are a research expert. Gather comprehensive information...'
});
```

## 🔧 Advanced Configuration

### Custom Search Providers
Add your API keys to enable additional search providers:

```env
# Bing Search API
BING_SEARCH_API_KEY=your_bing_key

# Google Custom Search
GOOGLE_SEARCH_API_KEY=your_google_key
GOOGLE_SEARCH_ENGINE_ID=your_engine_id
```

### Agent Personality Configuration
```javascript
const agent = await agentSDK.createAgent({
  name: 'FriendlyHelper',
  personality: 'enthusiastic',
  temperature: 0.8,
  maxTokens: 1500,
  systemPrompt: 'You are an enthusiastic and helpful assistant...'
});
```#   A i - S d k 
 
 