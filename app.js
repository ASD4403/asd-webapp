const supabase = window.supabase.createClient(
  "https://itlfzjdjeneamgvwapee.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bGZ6amRqZW5lYW1ndndhcGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2ODI3NzUsImV4cCI6MjA5MTI1ODc3NX0.WN6_cUXgq-6yAZPh5z-aMQ6oduZrgv7TPLKTLC0G3Ng"
);

document.body.innerHTML = `
  <div style="max-width:420px;margin:60px auto;padding:20px;background:#111827;border:1px solid #1f2937;border-radius:16px;color:white;font-family:sans-serif">
    <h1 style="margin-top:0">ASD Fitness Login</h1>
    <input id="email" type="email" placeholder="Email" style="width:100%;padding:12px;margin:8px 0;border-radius:10px;border:1px solid #374151;background:#0b0d12;color:white" />
    <input id="password" type="password" placeholder="Password" style="width:100%;padding:12px;margin:8px 0;border-radius:10px;border:1px solid #374151;background:#0b0d12;color:white" />
    <button id="signup" style="width:100%;padding:12px;margin-top:10px;border:none;border-radius:10px;background:#2563eb;color:white">إنشاء حساب</button>
    <button id="signin" style="width:100%;padding:12px;margin-top:10px;border:none;border-radius:10px;background:#1f2937;color:white">تسجيل دخول</button>
    <p id="msg" style="margin-top:14px;color:#cbd5e1"></p>
  </div>
`;

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const msg = document.getElementById("msg");

document.getElementById("signup").addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const { error } = await supabase.auth.signUp({ email, password });
  msg.textContent = error ? error.message : "تم إنشاء الحساب أو إرسال رابط التفعيل";
});

document.getElementById("signin").addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  msg.textContent = error ? error.message : "تم تسجيل الدخول بنجاح";
});
