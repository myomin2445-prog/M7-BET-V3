import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      message.innerText = "User မရှိပါ";
      return;
    }

    const data = docSnap.data();

    if (data.Password !== password) {
      message.innerText = "Password မှားနေပါတယ်";
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    window.location.href = "index.html";

  } catch (err) {
    message.innerText = err.message;
  }
});
