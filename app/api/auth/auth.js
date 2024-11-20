import api from '../api';

export const sendOtp = async (phoneNumber) => {
  try {
    const sanitizedPhone = phoneNumber.replace(/\D/g, '').slice(-10); // Clean up the phone number
    const payload = {
      usr: sanitizedPhone,
      pwd: 'Abcd@1234',
    };

    const response = await api.post('/consultant.api.loginOtp', payload);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error in sendOtp:', error.response || error.message);
    throw error; // Rethrow to let the caller handle it
  }
};
