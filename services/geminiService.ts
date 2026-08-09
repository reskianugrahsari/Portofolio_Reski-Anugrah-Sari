import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;
let ai: GoogleGenAI | null = null;

// Get API key from environment
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Log API key status (without revealing the actual key)
console.log('API Key status:', apiKey ? `Present (${apiKey.substring(0, 10)}...)` : 'Missing');

const getAiClient = () => {
  if (!apiKey) return null;
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const initializeChat = async (): Promise<void> => {
  try {
    if (!apiKey) {
      console.warn('Gemini disabled: missing VITE_GEMINI_API_KEY');
      chatSession = null;
      return;
    }

    console.log('Initializing chat session...');
    const client = getAiClient();
    if (!client) {
      chatSession = null;
      return;
    }

    chatSession = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the Official AI Portfolio Assistant for RESKI ANUGRAH SARI.
        
        STRICT PERSONA:
        - Name: Reski Anugrah Sari.
        - Roles: Full-Stack Web Developer & Certified Network Specialist.
        - Performance: Always prioritize accuracy and professional tone.
        
        CORE SKILLS KNOWLEDGE (Always use this exact list):
        1. NETWORKING SKILLS:
           - Certifications: BNSP Network Specialist (2024-2027), MTCNA (MikroTik Certified Network Associate, 2025-2028).
           - Technical: IP Routing, Network Security, Cisco Configuration, MikroTik Administration, Junior Network Administrator (JNA).
           - Security: Experience in Cyber Security fundamentals (Certified by PT. Synnex Metrodata Indonesia).
        2. WEB DEVELOPMENT SKILLS:
           - Languages: TypeScript, JavaScript (ECMAScript 2024+), HTML5, CSS3.
           - Frameworks: React.js, Next.js, Vite.
           - Styling: Tailwind CSS, CSS Modules.
           - Backend: Node.js, REST APIs.
        3. GENERAL TECH:
           - Tools: Git, GitHub, VS Code, Generative AI integration.

        STRICT RULES:
        - When asked about skills, list them clearly using the categories above.
        - NEVER make up skills that are not listed here.
        - Keep responses concise (under 3 sentences unless listing items).
        - If asked for contact details, mention the Email and LinkedIn icons available in the website footer.
        - Respond in the language used by the user (Indonesian/English).`,
        temperature: 0.2, // Even lower for absolute consistency
        topP: 0.6, // More focused
        topK: 30,
      },
    });
    console.log('Chat session initialized successfully');
  } catch (error) {
    console.error("Failed to initialize chat session:", error);
    chatSession = null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  let retries = 0;
  const MAX_RETRIES = 3;

  const tryRequest = async (): Promise<string> => {
    try {
      if (!chatSession) {
        console.log('No chat session, initializing...');
        await initializeChat();
      }

      if (!chatSession) {
        return "Sorry, I'm having trouble connecting to the AI service right now.";
      }

      console.log(`Sending message (Attempt ${retries + 1}):`, message);
      const result = await chatSession.sendMessage({
        message,
        config: {
          maxOutputTokens: 300,
        }
      });
      console.log('Received response from Gemini');

      return result.text || "I processed that, but couldn't generate a text response.";
    } catch (error: any) {
      const isOverloaded = error?.message?.includes('high demand') || error?.status === 503 || error?.status === 429;

      if (isOverloaded && retries < MAX_RETRIES) {
        retries++;
        const delay = 2000 * Math.pow(2, retries); // Exponential backoff: 4s, 8s, 16s
        console.log(`Server busy/limited, retrying in ${delay / 1000}s... (${retries}/${MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return tryRequest();
      }

      console.error("Gemini API Error Details:", error);

      if (isOverloaded) {
        return "I'm a bit overwhelmed with questions right now! 😅 Please wait a moment and send your message again.";
      }

      if (error?.message?.includes('API key')) {
        return "API key error. Please check if your Gemini API key is valid.";
      }

      return `Connection error. Please try again in a moment.`;
    }
  };

  return tryRequest();
};
