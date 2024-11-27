let session = 0; // Track the current session (0 = main menu, 1 = alamat, 2 = cara penggunaan, 3 = tebak-tebakan)

function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  if (chatbox.style.visibility === "hidden") {
    chatbox.style.visibility = "visible";
    chatbox.style.height = "400px"; // Set sesuai tinggi yang diinginkan
  } else {
    chatbox.style.visibility = "hidden";
    chatbox.style.height = "0";
  }
}

// Handle user message
function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (!message) return;

  // Display user's message
  displayMessage("user", message);

  // Show loading animation
  displayLoading();

  // Generate bot response after a delay
  setTimeout(() => {
    let botResponse = "";

    // Handle different sessions
    if (session === 0) {
      // Main menu selection
      switch (message) {
        case "1":
          botResponse = "Anda memilih nomor 1. Silahkan pilih nomor di bawah untuk informasi selanjutnya :\n\n1. Apa itu Rumput Laut?\n2. Rumput Laut Yang banyak di Budidaya di Indonesia\n3. Kembali ke menu utama";
          session = 1; // Change session to rumput laut info
          break;
        case "2":
          botResponse =
            "Anda memilih nomor 2. Silahkan pilih nomor di bawah untuk informasi selanjutnya\n\n 1. Cara Melakukan Deteksi Penyakit Rumput Laut\n2. Apa itu Produksi Biomassa Rumput Laut?\n3. Apa itu Laju Pertumbuhan Rumput Laut?\n4. Kembali ke menu utama";
          session = 2; // Change session to app usage
          break;
        case "3":
          botResponse = "Kenapa burung tidak bisa mengetik? Karna jari-jarinya terlalu pendek!\nPilihan:\n1. Tebak-tebakan lainnya\n2. Kembali ke menu utama";
          session = 3; // Change session to jokes
          break;
        default:
          botResponse = "Maaf, saya tidak mengerti. Silakan pilih nomor 1, 2, atau 3.";
      }
    } else if (session === 1) {
      // Rumput laut info session
      if (message === "1") {
        botResponse =
          "Rumput laut adalah makro alga yang hidup di laut dan biasanya terdapat di dasar perairan dan tidak memiliki akar, batang dan daun sejati.\n\nPilihan:\n2. Rumput Laut yang banyak di budidaya di Indoensia?\n2. Kembali ke menu utama";
      }
      if (message === "2") {
        botResponse = "Eucheuma, Gelidium, Gracilaria, Gelidiella dan Hypnea.\n\nPilihan:\n\n2. Kembali ke menu utama";
      } else if (message === "3") {
        botResponse = "Kembali ke menu utama.\nSilakan pilih nomor 1, 2, atau 3.";
        session = 0; // Reset to main menu
      }
    } else if (session === 2) {
      // App usage info session
      if (message === "1") {
        botResponse =
          "- Siap Objek rumput lautnya.\n- Jika menggunakan fitur upload foto, upload fotonya\n- Jika menggunakan kamera langsung, fotokan rummput lautnya.\n- Sebisa mungkin foto atau kemeranya menggunakan resolusi terbaik atau jangan burem\n\nPilihan:\n2. Apa itu Produksi Biomassa Rumput Laut?\n3. Apa itu Laju Pertumbuhan Rumput Laut?\n4. Kembali ke menu utama";
      }
      if (message === "2") {
        botResponse =
          "Perhitungan hasil produksi rumput laut dilakukan untuk mengetahui hasil panen keseluruhan yang diperoleh dan tingkat efisiensi produksi rumput laut yang dibudidayakan.\n\nPilihan:\n1. Cara Melakukan Deteksi Penyakit Rumput Laut? \n4. Kembali ke menu utama";
      }
      if (message === "3") {
        botResponse =
          "perhitungan laju pertumbuhan harian bertujuan untuk mengetahui laju pertumbuhan rumput laut yang terjadi setiap harinya, semakin tinggi laju pertumbuhan harian menunjukkan pertumbuhan rumput laut semakin baik.\n1. Cara Melakukan Deteksi Penyakit Rumput Laut ?\n4. Kembali ke menu utama";
      } else if (message === "4") {
        botResponse = "Kembali ke menu utama.\nSilakan pilih nomor 1, 2, atau 3.";
        session = 0; // Reset to main menu
      }
    } else if (session === 3) {
      // Jokes session
      if (message === "1") {
        botResponse = "Tebak-tebakan lainnya: \nCuci apa yang tidak pernah menggunakan sabun?\nCuci Mata\n\nPilihan:\n2. Coba lagi\n3. Kembali ke menu utama";
      }
      if (message === "2") {
        botResponse = "Tebak-tebakan lainnya: \nRumput Laut apa yang ga bisa di jual?\nRumput Laut yang gagal panen\n\nPilihan:\n3. Kembali ke menu utama";
      } else if (message === "3") {
        botResponse = "Kembali ke menu utama.\nSilakan pilih nomor 1, 2, atau 3.";
        session = 0; // Reset to main menu
      }
    }

    // Remove loading and show response
    removeLoading();
    displayMessage("bot", botResponse);
  }, 1500); // Simulate loading delay
}

// Function to display messages in the chatbox
function displayMessage(sender, message) {
  const chatboxContent = document.getElementById("chatbox-content");
  const messageElement = document.createElement("div");
  messageElement.classList.add(`${sender}-message`);
  messageElement.textContent = message;
  chatboxContent.appendChild(messageElement);
  chatboxContent.scrollTop = chatboxContent.scrollHeight; // Scroll to bottom
  document.getElementById("user-input").value = ""; // Clear input field
}

// Function to show loading animation
function displayLoading() {
  const chatboxContent = document.getElementById("chatbox-content");
  const loadingElement = document.createElement("div");
  loadingElement.id = "loading";
  loadingElement.classList.add("loading-animation");
  loadingElement.innerHTML = "<span></span><span></span><span></span>";
  chatboxContent.appendChild(loadingElement);
}

// Function to remove loading animation
function removeLoading() {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.remove();
  }
}
