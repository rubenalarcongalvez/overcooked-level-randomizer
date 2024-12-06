import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, deleteUser, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, User, UserCredential, verifyBeforeUpdateEmail } from '@angular/fire/auth';
import { Observable } from 'rxjs';

//So we can have it classified
export enum SocialLoginMethods {
  Google = 'google',
  Facebook = 'facebook',
  Github = 'github',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly auth: Auth
  ) {}

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  getCurrentUserPeticion(): Observable<User | null> {
    return new Observable<User | null>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user); // Devuelve el usuario logueado o null
      });
    });
  }
  
  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  sendVerificationEmail(user: User): Promise<void> {
    return sendEmailVerification(user);
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginRegister(email: string, password: string, register?: boolean): Promise<UserCredential> {
    return !register ? signInWithEmailAndPassword(this.auth, email, password) : this.register(email, password);
  }

  socialLogin(socialLoginMethod: SocialLoginMethods): Promise<UserCredential> {
    let authMethod;
    /* We put the methods we like */
    switch(socialLoginMethod) {
      case SocialLoginMethods.Google: {
        authMethod = new GoogleAuthProvider();
        break;
      }
      case SocialLoginMethods.Facebook: {
        authMethod = new FacebookAuthProvider();
        break;
      }
      case SocialLoginMethods.Github: {
        authMethod = new GithubAuthProvider();
        break;
      }
    }
    return signInWithPopup(this.auth, authMethod); //Just import it
  }

  logout(): void {
    signOut(this.auth); // Method to log out with Firebase
    window.localStorage.removeItem('auth-user'); // Method to log out in our personal backend if we have (not necessary, but an option for more complex apps)
    window.location.reload();
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  updatePassword(user: User, newPassword: string): Promise<void> {
    return updatePassword(user, newPassword);
  }

  updateEmail(user: User, newEmail: string): Promise<void> {
    /* We have to verify first the email before update, the method updateEmail is not the recommended */
    return verifyBeforeUpdateEmail(user, newEmail);
  }

  deleteUser(user: User): Promise<void> {
    return deleteUser(user);
  }
}
