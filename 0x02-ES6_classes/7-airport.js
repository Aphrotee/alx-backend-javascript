export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() { return this._name; }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must ba a string');
    }
  }

  get code() { return this._code; }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  toString() { return `[Object ${this.code}]`; }
}
