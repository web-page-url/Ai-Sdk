import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// Validate OpenAI API key
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY is not set in environment variables');
  console.log('Please create a .env file and add your OpenAI API key:');
  console.log('OPENAI_API_KEY=your_openai_api_key_here');
  process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Default configuration
export const config = {
  model: process.env.DEFAULT_MODEL || 'gpt-4',
  temperature: parseFloat(process.env.TEMPERATURE) || 0.7,
  max_tokens: parseInt(process.env.MAX_TOKENS) || 2000,
};

// Helper function to validate and get model
export function getModel(requestedModel) {
  const availableModels = [
    'gpt-4',
    'gpt-4-turbo',
    'gpt-4-turbo-preview',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-16k'
  ];
  
  if (requestedModel && availableModels.includes(requestedModel)) {
    return requestedModel;
  }
  
  return config.model;
}

// Helper function to create chat completion
export async function createChatCompletion(messages, options = {}) {
  try {
    const response = await openai.chat.completions.create({
      model: getModel(options.model),
      messages,
      temperature: options.temperature ?? config.temperature,
      max_tokens: options.max_tokens ?? config.max_tokens,
      ...options
    });
    
    return response;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`OpenAI API Error: ${error.message}`);
  }
}

// Helper function for function calling
export async function createFunctionCall(messages, functions, options = {}) {
  try {
    const response = await openai.chat.completions.create({
      model: getModel(options.model),
      messages,
      functions,
      function_call: options.function_call || 'auto',
      temperature: options.temperature ?? config.temperature,
      max_tokens: options.max_tokens ?? config.max_tokens,
    });
    
    return response;
  } catch (error) {
    console.error('OpenAI Function Call Error:', error);
    throw new Error(`OpenAI Function Call Error: ${error.message}`);
  }
}

export default openai; 