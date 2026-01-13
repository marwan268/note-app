import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

const authService = {
  // Register user
  async register(email, password) {
    try {
      const response = await account.createAccount(
        ID.unique(),
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Registration failed. Please try again",
      };
    }
  },

  // Login user
  async login(email, password) {
    try {
      const response = await account.createEmailSession(email, password);
      return response;
    } catch (error) {
      return { error: error.message || "Login failed. Please try again" };
    }
  },

  //Get logged in user
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      return { error: error.message || "Failed to get user" };
    }
  },

  // Logout user
  async logout() {
    try {
      await account.deleteSessions();
      return { success: true };
    } catch (error) {
      return { error: error.message || 'Logout failed. Please try again' };
    }
  },
};

export default authService;
