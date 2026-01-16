import { db } from "./firebase.js";
import { addDoc, collection, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

console.log("add.js loaded");

document.getElementById("save").onclick = async () => {
  try {
    await addDoc(collection(db, "violations"), {
      masv: document.getElementById("masv").value,
      hoten: document.getElementById("hoten").value,
      lop: document.getElementById("lop").value,
      noidung: document.getElementById("noidung").value,
      time: serverTimestamp()
    });
    alert("Đã lưu");
  } catch (e) {
    console.error("Lỗi ghi:", e);
  }
};

