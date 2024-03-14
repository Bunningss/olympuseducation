export function setCookie(name: string, value: {}) {
  let expires = "";

  const date = new Date();
  date.setTime(date.getTime() + 30 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
