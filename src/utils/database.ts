// Simple local storage database for contact form submissions
// In production, this would be replaced with a real database (MongoDB, PostgreSQL, etc.)

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEY = 'askshree_contacts';

export const database = {
  // Get all contact submissions
  getAllSubmissions: (): ContactSubmission[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from database:', error);
      return [];
    }
  },

  // Add a new submission
  addSubmission: (submission: Omit<ContactSubmission, 'id' | 'timestamp'>): ContactSubmission => {
    try {
      const submissions = database.getAllSubmissions();
      const newSubmission: ContactSubmission = {
        ...submission,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      submissions.push(newSubmission);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
      return newSubmission;
    } catch (error) {
      console.error('Error adding submission:', error);
      throw error;
    }
  },

  // Get submission by ID
  getSubmissionById: (id: number): ContactSubmission | undefined => {
    const submissions = database.getAllSubmissions();
    return submissions.find(sub => sub.id === id);
  },

  // Delete a submission
  deleteSubmission: (id: number): boolean => {
    try {
      const submissions = database.getAllSubmissions();
      const filtered = submissions.filter(sub => sub.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting submission:', error);
      return false;
    }
  },

  // Clear all submissions (admin function)
  clearAll: (): boolean => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing database:', error);
      return false;
    }
  },

  // Export submissions as JSON
  exportToJSON: (): string => {
    const submissions = database.getAllSubmissions();
    return JSON.stringify(submissions, null, 2);
  }
};

// Email notification function (mock - would be replaced with real email service)
export const sendEmailNotification = async (submission: ContactSubmission): Promise<boolean> => {
  try {
    // In production, this would call an API endpoint that sends emails
    // using services like SendGrid, AWS SES, or Nodemailer
    console.log('Email notification would be sent:', {
      to: 'princepasi060@gmail.com',
      subject: `New Contact Form Submission from ${submission.name}`,
      body: `
        Name: ${submission.name}
        Email: ${submission.email}
        Phone: ${submission.phone}
        Company: ${submission.company}
        Message: ${submission.message}
        Timestamp: ${submission.timestamp}
      `
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};
