interface ILocalStorageMock {
  store: { [key: string]: string };
  getItem(key: string): string;
  setItem(key: string, value: string): void;
  clear(): void;
  removeItem(key: string): void;
  getAll(): { [key: string]: string };
}
export const localStorageMock: ILocalStorageMock = {
  store: {},
  getItem(key) {
    return this.store[key];
  },
  setItem(key, value) {
    this.store[key] = value;
  },
  clear() {
    this.store = {};
  },

  removeItem(key) {
    delete this.store[key];
  },

  getAll() {
    return this.store;
  },
};
