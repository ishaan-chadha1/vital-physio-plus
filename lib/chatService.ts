/**
 * Chat service for communicating with the VitalPhysio+ chatbot backend
 */

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatResponse {
  sessionId: string;
  response: string;
  timestamp: string;
}

export interface ChatError {
  error: string;
  detail?: string;
  timestamp: string;
}

class ChatService {
  private apiUrl: string;
  private apiKey: string;
  private sessionId: string | null = null;

  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL || '';
    this.apiKey = process.env.NEXT_PUBLIC_CHATBOT_API_KEY || '';
    
    if (!this.apiUrl || !this.apiKey) {
      console.warn('Chatbot API configuration missing. Please check environment variables.');
    }
  }

  /**
   * Get or create session ID from sessionStorage
   */
  private getSessionId(): string {
    if (typeof window === 'undefined') return '';
    
    if (!this.sessionId) {
      this.sessionId = sessionStorage.getItem('chatbot_session_id');
      if (!this.sessionId) {
        this.sessionId = this.generateSessionId();
        sessionStorage.setItem('chatbot_session_id', this.sessionId);
      }
    }
    return this.sessionId;
  }

  /**
   * Generate a new session ID
   */
  private generateSessionId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return `${timestamp}${random}`.substring(0, 32);
  }

  /**
   * Send a message to the chatbot
   */
  async sendMessage(message: string): Promise<ChatResponse> {
    if (!this.apiUrl || !this.apiKey) {
      throw new Error('Chatbot service not configured. Please check environment variables.');
    }

    const sessionId = this.getSessionId();

    try {
      const response = await fetch(`${this.apiUrl}/api/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey,
        },
        body: JSON.stringify({
          sessionId,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const errorData: ChatError = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ChatResponse = await response.json();
      
      // Update session ID if it changed
      if (data.sessionId !== sessionId) {
        this.sessionId = data.sessionId;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('chatbot_session_id', data.sessionId);
        }
      }

      return data;
    } catch (error) {
      console.error('Chat service error:', error);
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes('429')) {
          throw new Error('Too many requests. Please wait a moment before trying again.');
        } else if (error.message.includes('401')) {
          throw new Error('Authentication failed. Please refresh the page.');
        } else if (error.message.includes('500')) {
          throw new Error('Server error. Please try again later.');
        } else if (error.message.includes('Failed to fetch')) {
          throw new Error('Network error. Please check your connection and try again.');
        }
      }
      
      throw error;
    }
  }

  /**
   * Check if the chatbot service is healthy
   */
  async checkHealth(): Promise<boolean> {
    if (!this.apiUrl) return false;

    try {
      const response = await fetch(`${this.apiUrl}/api/chat/health`, {
        method: 'GET',
        headers: {
          'X-API-Key': this.apiKey,
        },
      });
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  /**
   * Clear the current session
   */
  clearSession(): void {
    this.sessionId = null;
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('chatbot_session_id');
    }
  }

  /**
   * Get conversation starters
   */
  getConversationStarters(): string[] {
    return [
      "What conditions do you treat?",
      "How can I book an appointment?",
      "What is physiotherapy?",
      "Do you treat sports injuries?",
      "What are your clinic hours?",
      "Do you offer home visits?",
    ];
  }

  /**
   * Get quick action buttons
   */
  getQuickActions(): Array<{ label: string; action: string; type: 'link' | 'phone' | 'email' }> {
    return [
      { label: "Book Appointment", action: "https://vitalphysio.plus", type: "link" },
      { label: "Call Us", action: "+91 80353 17531", type: "phone" },
      { label: "Email Us", action: "Contact@VitalPhysio.Plus", type: "email" },
    ];
  }
}

// Export singleton instance
export const chatService = new ChatService();

