// 旅帳設定檔 —— 只要改這個檔案；之後更新 index.html 不用再貼設定。
// 這個檔案可以公開放在 GitHub（裡面沒有密碼）。

// ① 把 Firebase 主控台「專案設定 → 你的應用程式 → Config」那段整個貼上，取代下面這一段
const firebaseConfig = {
  apiKey: "AIzaSyCBdgSkjIbqff9vw2BgkVzAP3Zq7F0KQXI",
  authDomain: "account-sharing-87dd8.firebaseapp.com",
  projectId: "account-sharing-87dd8",
  storageBucket: "account-sharing-87dd8.firebasestorage.app",
  messagingSenderId: "486287961104",
  appId: "1:486287961104:web:5897c835e1433e92742e95",
  measurementId: "G-71W1X9HF5S"
};

// ② reCAPTCHA Enterprise（Fraud Defense）的網站金鑰；收據辨識要用，還沒有就先留空
const recaptchaSiteKey = "6Ld8kd8tAAAAAKHV1t5T-osHipeWKyMqi13xxZ1i";

// ↓ 這一行不要改
window.TRIP_CONFIG = { firebaseConfig, recaptchaSiteKey };
