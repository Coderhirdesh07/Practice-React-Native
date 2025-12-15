import { Client, Account, ID } from 'appwrite';
import { DATABASE_CONFIGURATION } from '../config/index';
class AuthService {
  client: Client = new Client();
  account: Account;
  constructor() {
    this.client
      .setEndpoint(DATABASE_CONFIGURATION.ENDPOINT)
      .setProject(DATABASE_CONFIGURATION.PROJECT_ID);
    this.account = new Account(this.client);
  }

  async handleUserRegistration(
    email: string,
    password: string,
    fullName: string,
  ) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName,
      );
      if (!userAccount) {
        return this.handleUserLogin(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async handleUserLogin(email: string, password: string) {
    try {
      const loginCredintials = await this.account.createEmailPasswordSession(
        email,
        password,
      );
      return loginCredintials;
    } catch (error) {
      console.log(error);
    }
  }

  async handleUserLogout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log('Appwrite serive :: logout :: error', error);
    }
  }
  async handleGetCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite serive :: getCurrentUser :: error', error);
    }
  }
}

const authService = new AuthService();

export default authService;
