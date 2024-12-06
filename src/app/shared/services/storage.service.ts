import { Injectable } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { ref, Storage, uploadBytes } from '@angular/fire/storage';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL } from 'firebase/storage';
import { LoggedUser } from '../interfaces/loggedUser';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  
  constructor(private firestore: Firestore, private storage: Storage) {}

  clean(): void {
    window.localStorage.clear();
  }

  public saveUser(user: LoggedUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): LoggedUser | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user) as LoggedUser;
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  /*=============================================
  =            Database management            =
  =============================================*/
  
  getDocumentByAddress(
    address: string
  ) {
    const subdocRef = doc(this.firestore, address);
    return docData(subdocRef);
  }

  
  /**
   * @description Create or update a document in the database
   */
  setDocumentByAddress(address: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, address);
    return setDoc(docRef, data);
  }
  
  /*=====  Final de Database management  ======*/

  /*=============================================
  =            Storage management            =
  =============================================*/
  
  uploadFile(address: string, file: File) {
    const storageRef = ref(this.storage, address);
    return uploadBytes(storageRef, file);
  }

  getFileUrl(address: string) {
    const storageRef = ref(this.storage, address);
    return getDownloadURL(storageRef);
  }
  
  /*=====  Final de Storage management  ======*/
}
