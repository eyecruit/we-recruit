import axios from 'axios';

interface GoogleUserInfo {
  email: string;
  name: string;
  picture?: string;
}

/**
 * Verify Google ID token and return user information
 * @param idToken Google ID token from frontend
 * @returns User information from Google
 */
export const verifyGoogleToken = async (idToken: string): Promise<GoogleUserInfo | null> => {
  try {
    // Google's OAuth2 server endpoint for token verification
    const response = await axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
      params: { id_token: idToken }
    });
    
    const { email, name, picture } = response.data;
    
    if (!email) {
      console.error('No email found in Google token response');
      return null;
    }
    
    return {
      email,
      name: name || email.split('@')[0], // Use email prefix as name if name not provided
      picture
    };
  } catch (error) {
    console.error('Error verifying Google token:', error);
    return null;
  }
}; 