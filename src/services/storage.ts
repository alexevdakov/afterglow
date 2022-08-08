export enum StorageKeys {
  Token = 'token',
  RefreshToken = 'refreshToken',
}

export class Storage {
  store(key: StorageKeys, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: StorageKeys): string | null {
    const value = localStorage.getItem(key);

    return value;
  }

  remove(key: StorageKeys) {
    localStorage.removeItem(key);
  }
}
