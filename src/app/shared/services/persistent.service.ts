import { Injectable } from '@angular/core'

@Injectable()
export class PersistentService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Err saving to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Err getting data from localStorage', e)
      return null
    }
  }
}
