export function setCookie(name: string, value: {}) {
  let expires = "";

  const date = new Date();
  date.setTime(date.getTime() + 30 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name: string) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookie = decodedCookie.split("=")[1];

  return cookie && JSON.parse(cookie);
}
