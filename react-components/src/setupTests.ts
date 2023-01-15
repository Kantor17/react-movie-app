// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

interface ILocalStorageMock {
  store: { [key: string]: string };
  getItem(key: string): string;
  setItem(key: string, value: string): void;
  clear(): void;
  removeItem(key: string): void;
  getAll(): { [key: string]: string };
}
const localStorageMock: ILocalStorageMock = {
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

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
