import { db } from "./firebase.js";
import { getDocs, collection, query, orderBy } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

console.log("list.js loaded");

const tbody = document.getElementById("data");

const q = query(
  collection(db, "violations"),
  orderBy("time", "desc")
);

const snapshot = await getDocs(q);
console.log("Số bản ghi:", snapshot.size);

snapshot.forEach(doc => {
  const v = doc.data();
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${v.masv}</td>
    <td>${v.hoten}</td>
    <td>${v.lop}</td>
    <td>${v.noidung}</td>
    <td>${v.time?.toDate().toLocaleString() || ""}</td>
  `;
  tbody.appendChild(tr);
});

