// firebase-config.js
// 共用的 Firebase 初始化設定,所有頁面都會 import 這個檔案
// 這個版本不使用 Firebase Authentication,直接用 Firestore 儲存/查詢資料

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhMNnSSVX3ntpUGAA4F8Wa6O6FhFO-FI8",
  authDomain: "sjps-volunteer.firebaseapp.com",
  projectId: "sjps-volunteer",
  storageBucket: "sjps-volunteer.firebasestorage.app",
  messagingSenderId: "101882832849",
  appId: "1:101882832849:web:4a3b6260e1a9ddb45a62f0",
  measurementId: "G-KZMJ84XT22",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
};
