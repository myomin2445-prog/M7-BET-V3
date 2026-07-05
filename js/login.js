import { db, doc, getDoc } from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  message.innerText = "";

  if (!userId || !password) {
    message.innerText = "User ID နဲ့ Password ထည့်ပါ";
    return;
  }

  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      message.innerText = "User မရှိပါ";
      return;
    }

    const user = userSnap.data();

    if (user.status !== "active") {
      message.innerText = "Account ပိတ်ထားပါတယ်";
      return;
    }

    if (String(user.password).trim() !== String(password).trim()) {
  message.innerText = "Password မှားနေပါတယ်";
  return;
}

    localStorage.setItem("m7User", JSON.stringify({
      userId: user.userId,
      name: user.name,
      role: user.role,
      balance: user.balance
    }));

if (user.role === "admin") {
    window.location.href = "admin.html";
} else {
    window.location.href = "user.html";
}

  } catch (error) {
    message.innerText = "ERROR: " + error.message;
  }
});
