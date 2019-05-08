export default class InputValidation {
  static isEmpty(value) {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  }

  static isNotEmail(email) {
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !validEmail.test(email);
  }

  static isNotAlpha(text) {
    const containsAlphabets = /^[a-zA-Z ]*$/;
    return !containsAlphabets.test(text);
  }

  static isNotNum(num) {
    const containsNumbers = /^[0-9]*$/;
    return !containsNumbers.test(num);
  }
}
