let selectedAnswer = "";

document.getElementById("yes-btn").addEventListener("click", function () {
  selectedAnswer = "IYA ❤️";
  highlightButton(this);
});

document.getElementById("no-btn").addEventListener("click", function () {
  selectedAnswer = "YES ❤️";
  highlightButton(this);
});

document.getElementById("send-btn").addEventListener("click", function () {
  const reason = document.getElementById("reason").value.trim();

  if (selectedAnswer === "") {
    alert("Pilih dulu cacaentut");
  } else if (reason === "") {
    alert("Isi dulu alesannya cacaentut");
  } else {
    sendMessageToTelegram(selectedAnswer, reason);
  }
});

function highlightButton(button) {
  // Hapus kelas 'selected' dari kedua tombol
  document.getElementById("yes-btn").classList.remove("selected");
  document.getElementById("no-btn").classList.remove("selected");

  // Tambahkan kelas 'selected' ke tombol yang dipilih
  button.classList.add("selected");
}

function sendMessageToTelegram(answer, reason) {
  const token = "6711083849:AAHXNZYXLoXPogjj4yWg68WbLnuv_6Idt8A"; // Ganti dengan token bot Anda
  const chatId = "6867879556"; // Ganti dengan chat ID Anda

  const message = `${answer}\n\n${reason}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        window.location.href = "congratulations.html"; // Pengalihan ke halaman ucapan selamat
      } else {
        alert("Gagal mengirim pesan.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan.");
    });
}
