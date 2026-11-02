(function () {
  "use strict";

  const escapeHtml = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const svg = (paths) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    paths +
    "</svg>";
  const icons = {
    compose: svg(
      '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m14.5 7.5 3 3"/>',
    ),
    search: svg('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>'),
    back: svg('<path d="m14.5 5.5-6.5 6.5 6.5 6.5"/>'),
    video: svg(
      '<rect x="3" y="6.5" width="12.5" height="11" rx="3"/><path d="m15.5 11 5-3v8l-5-3"/>',
    ),
    phone: svg(
      '<path d="M6.6 3.8 9.4 3c.8-.2 1.5.2 1.8.9l1.3 3.2c.3.7.1 1.4-.5 1.9l-1.6 1.3a14 14 0 0 0 5.3 5.3l1.3-1.6c.5-.6 1.2-.8 1.9-.5l3.2 1.3c.7.3 1.1 1 .9 1.8l-.8 2.8c-.2.8-1 1.3-1.8 1.3A17 17 0 0 1 4.9 5.6c0-.8.5-1.6 1.7-1.8z"/>',
    ),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    send: svg('<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/>'),
    clock: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    calls: svg('<path d="M5 4h14v11H9l-4 4z"/><path d="M9 8h6M9 11h4"/>'),
    people: svg(
      '<circle cx="9" cy="8" r="3"/><path d="M3 20c.5-3.5 2.5-5 6-5s5.5 1.5 6 5M16 5.5a3 3 0 0 1 0 5.8M18 15c1.8.6 2.7 2.1 3 5"/>',
    ),
    chats: svg(
      '<path d="M20.5 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-4.6A8 8 0 1 1 20.5 12z"/>',
    ),
    settings: svg(
      '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
    ),
  };
  const statusBar =
    '<div class="wa-ios-status" aria-label="Status bar"><time>9:41</time><span><svg viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg viewBox="0 0 18 13" aria-hidden="true"><path d="M1 4.5a11 11 0 0 1 16 0M4 7.5a7 7 0 0 1 10 0M7 10.5a3 3 0 0 1 4 0"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/></svg><span class="wa-ios-battery"><i></i></span></span></div>';
  const chatHistories = {
    nasa: [
      { sender: "me", text: "cantik", time: "10.01", status: "delivered" },
      { sender: "me", text: "jadwal kamu selesai jam berapa?", time: "10.02", status: "delivered" },
    ],
  };
  const conversationScripts = {
    nasa: [
      {
        sender: "me",
        text: "aku jemput ya sama dedek",
        time: "10.02",
        status: "delivered",
        callAfterSend: true,
      },
    ],
  };
  if (
    typeof conversationScripts !== "object" ||
    Array.isArray(conversationScripts)
  ) {
    throw new TypeError("WhatsApp conversation scripts must be an object.");
  }
  if (typeof chatHistories !== "object" || Array.isArray(chatHistories)) {
    throw new TypeError("WhatsApp chat histories must be an object.");
  }
  const chats = [
    {
      id: "nasa",
      name: "nanas",
      initials: "A",
      color: "#b97956",
      status: "online",
      updated: 4,
      messages: [
        { sender: "them", text: "Hey, are you free tomorrow?", time: "19.03" },
        {
          sender: "me",
          text: "I think so. What did you have in mind?",
          time: "19.05",
        },
        { sender: "them", text: "Coffee and a walk?", time: "19.06" },
        { sender: "me", text: "Sounds good", time: "19.08" },
      ],
    },
    {
      id: "papa",
      name: "papa bawel",
      initials: "K",
      color: "#8f7399",
      status: "last seen today at 15:42",
      updated: 3,
      messages: [
        { sender: "them", text: "Orion, masih sibuk ya?", time: "18.30" },
        { sender: "me", text: "Nasa udah mulai kerja lagi, pa", time: "18.32" },
        { sender: "me", text: "Jadi belum bisa bagi waktunya", time: "18.33" },
        {
          sender: "me",
          text: "Nanti kalo udah lebih longgar orion main kesana, pa",
          time: "18.35",
        },
        { sender: "them", text: "Kangen dedek", time: "18.37" },
        { sender: "me", text: "Ga kangen orion nya pa?", time: "18.38" },
        { sender: "them", text: "Kamu udah gede", time: "18.39" },
        { sender: "me", text: "Kan masih anaknya papa", time: "18.39" },
        {
          sender: "them",
          text: "Anak mana yang sebulan lebih gak ngabarin orang tuanya",
          time: "18.39",
        },
        { sender: "me", text: "Hehehe, maaf pa", time: "18.40" },
        {
          sender: "me",
          text: "Janji deh abis kerjaan Nasa selesai, ini kita kesana",
          time: "18.42",
        },
        { sender: "them", text: "Buruan ya", time: "18.43" },
        {
          sender: "them",
          text: "Nanti papa masakin ayaam serundeng kesukaan kamu sama Nasa",
          time: "18.43",
        },
        { sender: "me", text: "Siap, bos", time: "18.44" },
      ],
    },
    {
      id: "samu",
      name: "kak samudera",
      initials: "M",
      color: "#718d79",
      status: "tap here for contact info",
      updated: 2,
      messages: [
        {
          sender: "me",
          text: "balikin ayang gue sebelum jam 3 ya",
          time: "12.01",
        },
        {
          sender: "me",
          text: "anaknya udah rewel nyariin papanya",
          time: "12.01",
        },
      ],
    },
    {
      id: "nando",
      name: "bang nando",
      initials: "SG",
      color: "#647f99",
      status: "last seen today at 16:24",
      updated: 1,
      messages: [
        { sender: "them", text: "gw diusir lagi dari rumah", time: "16.20" },
        {
          sender: "me",
          text: "wkwkwk emg harus sabar ngadepin pregnant omega",
          time: "16.24",
        },
      ],
    },
  ];

  const contactAvatars = window.whatsappContactAvatars || {};
  if (typeof contactAvatars !== "object" || Array.isArray(contactAvatars)) {
    throw new TypeError("WhatsApp contact avatars must be an object.");
  }
  Object.keys(contactAvatars).forEach((chatId) => {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) throw new Error("Unknown WhatsApp contact: " + chatId);
    if (typeof contactAvatars[chatId] !== "string") {
      throw new TypeError("WhatsApp contact avatar paths must be strings.");
    }
    chat.avatar = contactAvatars[chatId].trim();
  });
  let activeChat = null;
  let selectedTab = "Chats";

  const avatar = (chat, className) =>
    chat.avatar
      ? '<img class="' +
        className +
        ' wa-ios-avatar-image" src="' +
        escapeHtml(chat.avatar) +
        '" alt="' +
        escapeHtml(chat.name) +
        '" loading="lazy">'
      : '<span class="' +
        className +
        '" style="--wa-avatar-color:' +
        chat.color +
        '">' +
        escapeHtml(chat.initials) +
        "</span>";
  const lastMessage = (chat) =>
    chat.messages.length ? chat.messages[chat.messages.length - 1] : null;
  const currentTime = () => {
    const now = new Date();
    return (
      String(now.getHours()).padStart(2, "0") +
      "." +
      String(now.getMinutes()).padStart(2, "0")
    );
  };
  const conversationStates = new Map();
  const validateMessages = (messages, chatId, source) => {
    if (!Array.isArray(messages)) {
      throw new TypeError(
        "WhatsApp " + source + " for " + chatId + " must be an array.",
      );
    }
    return messages.map((message, index) => {
      const type = message && message.type ? message.type : "text";
      if (
        !message ||
        (message.sender !== "them" && message.sender !== "me") ||
        !["text", "image", "video"].includes(type) ||
        (message.text != null && typeof message.text !== "string") ||
        (type === "text" && !message.text?.trim()) ||
        (type !== "text" &&
          (typeof message.src !== "string" || !message.src.trim())) ||
        (message.time != null && typeof message.time !== "string") ||
        (message.name != null && typeof message.name !== "string") ||
        (message.callAfterSend != null &&
          typeof message.callAfterSend !== "boolean") ||
        (message.status != null &&
          !["delivered", "read"].includes(message.status)) ||
        (message.status != null && message.sender !== "me")
      ) {
        throw new TypeError(
          "Invalid WhatsApp " +
            source +
            " message at " +
            chatId +
            "[" +
            index +
            "].",
        );
      }
      return {
        sender: message.sender,
        ...(message.name ? { name: message.name } : {}),
        ...(message.callAfterSend ? { callAfterSend: true } : {}),
        ...(message.sender === "me"
          ? { status: message.status || "read" }
          : {}),
        type,
        text: typeof message.text === "string" ? message.text.trim() : "",
        ...(type === "text" ? {} : { src: message.src.trim() }),
        time: message.time || currentTime(),
      };
    });
  };
  const messagePreview = (message) => {
    if (!message) return "Start a conversation";
    if (message.text) return message.text;
    if (message.type === "image") return "Photo";
    if (message.type === "video") return "Video";
    return "";
  };
  const checkMarkup = (message, className) => {
    if (!message || message.sender !== "me") return "";
    const delivered = message.status === "delivered";
    return (
      '<span class="' +
      className +
      (delivered ? " delivered" : " read") +
      '" aria-label="' +
      (delivered ? "Delivered" : "Read") +
      '">' +
      (delivered ? "✓" : "✓✓") +
      "</span>"
    );
  };
  const mediaDraftMarkup = (message) => {
    if (!message || message.type === "text") return "";
    if (message.type === "image") {
      return (
        '<img class="wa-ios-draft-media" src="' +
        escapeHtml(message.src) +
        '" alt="Photo preview">'
      );
    }
    return '<span class="wa-ios-draft-media wa-ios-draft-video" aria-label="Video preview">▶</span>';
  };
  const showIncomingMessages = (chat, state) => {
    while (
      state.nextIndex < state.messages.length &&
      state.messages[state.nextIndex].sender === "them"
    ) {
      state.visibleMessages.push(state.messages[state.nextIndex]);
      state.nextIndex += 1;
    }
    chat.messages = chat.history.concat(state.visibleMessages);
  };
  const configureConversationScript = (chat, messages) => {
    const state = {
      messages: validateMessages(messages, chat.id, "script"),
      nextIndex: 0,
      visibleMessages: [],
    };
    chat.messages = chat.history.slice();
    conversationStates.set(chat.id, state);
    showIncomingMessages(chat, state);
    chat.updated = Date.now();
  };
  chats.forEach((chat) => {
    chat.history = validateMessages(chat.messages, chat.id, "history");
    chat.messages = chat.history.slice();
  });
  Object.keys(chatHistories).forEach((chatId) => {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) throw new Error("Unknown WhatsApp contact history: " + chatId);
    chat.history = validateMessages(chatHistories[chatId], chat.id, "history");
    chat.messages = chat.history.slice();
  });
  Object.keys(conversationScripts).forEach((chatId) => {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) {
      throw new Error("Unknown WhatsApp chat in script: " + chatId);
    }
    configureConversationScript(chat, conversationScripts[chatId]);
  });
  window.setWhatsappConversationScript = function (chatId, messages) {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) {
      throw new Error("Unknown WhatsApp chat: " + chatId);
    }
    configureConversationScript(chat, messages);
    if (activeChat === chat) renderChat(chatId);
    else if (document.getElementById("wa-ios-app")) renderList();
  };
  window.setWhatsappChatHistory = function (chatId, messages) {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) throw new Error("Unknown WhatsApp contact: " + chatId);
    chat.history = validateMessages(messages, chat.id, "history");
    const state = conversationStates.get(chat.id);
    chat.messages = chat.history.concat(state ? state.visibleMessages : []);
    chat.updated = Date.now();
    if (activeChat === chat) renderChat(chatId);
    else if (document.getElementById("wa-ios-app")) renderList();
  };
  window.setWhatsappContactAvatar = function (chatId, src) {
    const chat = chats.find((item) => item.id === chatId);
    if (!chat) throw new Error("Unknown WhatsApp contact: " + chatId);
    if (src != null && typeof src !== "string") {
      throw new TypeError("WhatsApp contact avatar path must be a string.");
    }
    chat.avatar = src ? src.trim() : "";
    if (activeChat === chat) renderChat(chatId);
    else if (document.getElementById("wa-ios-app")) renderList();
  };
  const tabItems = [
    ["Updates", icons.clock],
    ["Calls", icons.calls],
    ["Communities", icons.people],
    ["Chats", icons.chats],
    ["Settings", icons.settings],
  ];

  function renderTabs() {
    return (
      '<nav class="wa-ios-tabs" aria-label="WhatsApp navigation">' +
      tabItems
        .map(
          ([name, icon]) =>
            '<button type="button" class="wa-ios-tab' +
            (selectedTab === name ? " active" : "") +
            '" data-wa-tab="' +
            name +
            '">' +
            icon +
            "<small>" +
            name +
            "</small></button>",
        )
        .join("") +
      "</nav>"
    );
  }

  function renderList(filter) {
    const root = document.getElementById("wa-ios-app");
    if (!root) return;
    activeChat = null;
    root.classList.remove("chat-open", "keyboard-open");
    const query = (filter || "").trim().toLowerCase();
    const visibleChats = chats
      .slice()
      .sort((a, b) => b.updated - a.updated)
      .filter((chat) => chat.name.toLowerCase().includes(query));
    root.innerHTML =
      statusBar +
      '<header class="wa-ios-list-header"><button type="button" class="wa-ios-text-btn">Edit</button><h1>Chats</h1><button type="button" class="wa-ios-icon-btn" aria-label="New chat">' +
      icons.compose +
      '</button></header><label class="wa-ios-search">' +
      icons.search +
      '<input type="search" placeholder="Search" aria-label="Search WhatsApp chats" value="' +
      escapeHtml(filter || "") +
      '"></label><main class="wa-ios-chat-list">' +
      (visibleChats.length
        ? visibleChats
            .map((chat) => {
              const last = lastMessage(chat);
              return (
                '<button type="button" class="wa-ios-chat-row" data-wa-chat="' +
                chat.id +
                '">' +
                avatar(chat, "wa-ios-avatar") +
                '<span class="wa-ios-chat-copy"><strong>' +
                escapeHtml(chat.name) +
                '</strong><span class="wa-ios-chat-preview">' +
                escapeHtml(messagePreview(last)) +
                '</span></span><span class="wa-ios-chat-meta"><time>' +
                escapeHtml(last ? last.time : "") +
                "</time></span></button>"
              );
            })
            .join("")
        : '<p class="wa-ios-empty">No chats found</p>') +
      '<p class="wa-ios-encryption-note">Your personal messages are end-to-end encrypted</p></main>' +
      renderTabs() +
      '<div class="wa-ios-keyboard is-hidden" aria-label="Keyboard"></div>';

    root
      .querySelector(".wa-ios-search input")
      .addEventListener("input", (event) => {
        const input = event.currentTarget;
        const caret = input.selectionStart;
        renderList(input.value);
        const next = root.querySelector(".wa-ios-search input");
        next.focus();
        next.setSelectionRange(caret, caret);
      });
    root.querySelectorAll("[data-wa-chat]").forEach((button) => {
      button.addEventListener("click", () => renderChat(button.dataset.waChat));
    });
    root.querySelectorAll("[data-wa-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedTab = button.dataset.waTab;
        root.querySelectorAll("[data-wa-tab]").forEach((tab) => {
          tab.classList.toggle("active", tab === button);
        });
      });
    });
  }

  function renderMessages(chat) {
    return chat.messages
      .map((message, index) => {
        const previous = chat.messages[index - 1];
        const next = chat.messages[index + 1];
        const first =
          !previous ||
          previous.sender !== message.sender ||
          previous.name !== message.name;
        const last =
          !next || next.sender !== message.sender || next.name !== message.name;
        const type = message.type || "text";
        const media =
          type === "image"
            ? '<img class="wa-ios-media" src="' +
              escapeHtml(message.src) +
              '" alt="' +
              escapeHtml(message.text || "Photo") +
              '" loading="lazy">'
            : type === "video"
              ? '<video class="wa-ios-media" src="' +
                escapeHtml(message.src) +
                '" aria-label="' +
                escapeHtml(message.text || "Video message") +
                '" controls playsinline preload="metadata"></video>'
              : "";
        return (
          '<div class="wa-ios-message-row ' +
          (message.sender === "me" ? "outgoing" : "incoming") +
          (first ? " first" : "") +
          (last ? " last" : "") +
          '"><div class="wa-ios-bubble">' +
          (message.name && first
            ? '<strong class="wa-ios-sender">' +
              escapeHtml(message.name) +
              "</strong>"
            : "") +
          (media
            ? '<span class="wa-ios-media-content">' +
              media +
              (message.text
                ? '<span class="wa-ios-media-caption">' +
                  escapeHtml(message.text).replace(/\n/g, "<br>") +
                  "</span>"
                : "") +
              "</span>"
            : escapeHtml(message.text).replace(/\n/g, "<br>")) +
          '<small class="wa-ios-message-meta">' +
          escapeHtml(message.time) +
          checkMarkup(message, "wa-ios-check") +
          "</small></div></div>"
        );
      })
      .join("");
  }

  function buildKeyboard(numeric = false) {
    const rows = numeric
      ? ["1234567890", "@#$&*()-+", "!\"':;,.?/"]
      : ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    return (
      '<div class="wa-ios-keyboard-top"><span></span><span></span><span class="keyboard-chevron"></span></div>' +
      rows
        .map(
          (row, index) =>
            '<div class="wa-ios-key-row' +
            (index === 1 ? " inset" : "") +
            '">' +
            (index === 2 && !numeric
              ? '<button type="button" class="wa-ios-key function-key" data-wa-key="shift" aria-label="Shift">⇧</button>'
              : "") +
            [...row]
              .map(
                (key) =>
                  '<button type="button" class="wa-ios-key" data-wa-key="' +
                  key +
                  '">' +
                  key +
                  "</button>",
              )
              .join("") +
            (index === 2
              ? '<button type="button" class="wa-ios-key function-key" data-wa-key="backspace" aria-label="Backspace">⌫</button>'
              : "") +
            "</div>",
        )
        .join("") +
      '<div class="wa-ios-key-row utility"><button type="button" class="wa-ios-key function-key" data-wa-key="mode">' +
      (numeric ? "ABC" : "123") +
      '</button><button type="button" class="wa-ios-key function-key" data-wa-key="emoji" aria-label="Insert smile">☺</button><button type="button" class="wa-ios-key space-key" data-wa-key="space">English (US)</button><button type="button" class="wa-ios-key function-key" data-wa-key=",">,</button><button type="button" class="wa-ios-key send-key" data-wa-key="send">Send</button></div><span class="wa-ios-keyboard-home" aria-hidden="true"></span>'
    );
  }

  function renderChat(id) {
    const root = document.getElementById("wa-ios-app");
    const chat = chats.find((item) => item.id === id);
    if (!root || !chat) return;
    let state = conversationStates.get(chat.id);
    if (!state) {
      state = { messages: [], nextIndex: 0, visibleMessages: [] };
      conversationStates.set(chat.id, state);
    }
    const pendingMessage =
      state.messages[state.nextIndex]?.sender === "me"
        ? state.messages[state.nextIndex]
        : null;
    activeChat = chat;
    root.classList.add("chat-open");
    root.classList.remove("keyboard-open");
    root.innerHTML =
      statusBar +
      '<header class="wa-ios-chat-header"><button type="button" class="wa-ios-back" aria-label="Back to chats">' +
      icons.back +
      "<span>Chats</span></button>" +
      avatar(chat, "wa-ios-header-avatar") +
      '<span class="wa-ios-contact"><strong>' +
      escapeHtml(chat.name) +
      "</strong><small>" +
      escapeHtml(chat.status) +
      '</small></span><span class="wa-ios-chat-actions"><button type="button" aria-label="Video call">' +
      icons.video +
      '</button><button type="button" aria-label="Voice call">' +
      icons.phone +
      '</button></span></header><main class="wa-ios-messages" id="wa-ios-messages"><div class="wa-ios-date">Today</div>' +
      renderMessages(chat) +
      '</main><form class="wa-ios-composer"><button type="button" class="wa-ios-attach" aria-label="Attach">' +
      icons.plus +
      '</button><div class="wa-ios-input-wrap"><span class="wa-ios-draft-preview" hidden></span><textarea rows="1" placeholder=" " aria-label="Message" inputmode="none"></textarea><button type="button" class="wa-ios-emoji" aria-label="Emoji">☺</button></div><button type="submit" class="wa-ios-send" aria-label="Send"' +
      (pendingMessage ? "" : " disabled") +
      ">" +
      icons.send +
      '</button></form><section class="wa-ios-keyboard is-hidden" aria-label="On-screen keyboard" aria-hidden="true" inert>' +
      buildKeyboard() +
      "</section>";
    root
      .querySelector(".wa-ios-back")
      .addEventListener("click", () => renderList());
    const [videoCallButton, voiceCallButton] = root.querySelectorAll(
      ".wa-ios-chat-actions button",
    );
    const startWhatsappCall = (video) => {
      if (typeof window.startWhatsappCall !== "function") return;
      window.startWhatsappCall(chat.name, {
        avatar: chat.avatar || "",
        sub: video ? "WhatsApp video call" : "WhatsApp voice call",
        video: video,
      });
    };
    videoCallButton.addEventListener("click", () => startWhatsappCall(true));
    voiceCallButton.addEventListener("click", () => startWhatsappCall(false));
    const input = root.querySelector(".wa-ios-input-wrap textarea");
    const keyboard = root.querySelector(".wa-ios-keyboard");
    const form = root.querySelector(".wa-ios-composer");
    const sendButton = root.querySelector(".wa-ios-send");
    const draftPreview = root.querySelector(".wa-ios-draft-preview");
    let typingTimer = null;
    let typingIndex = 0;
    let typingMessageIndex = -1;
    let completedMessageIndex = -1;
    let manualMode = false;
    let numericMode = false;
    let shifted = false;
    const updateDraft = (message) => {
      input.value = message
        ? message.type !== "text"
          ? message.text ||
            (message.type === "image"
              ? "Photo"
              : message.type === "video"
                ? "Video"
                : "")
          : ""
        : "";
      draftPreview.innerHTML = mediaDraftMarkup(message);
      draftPreview.hidden = !message || message.type === "text";
    };
    updateDraft(pendingMessage);
    sendButton.disabled = !pendingMessage || pendingMessage.type === "text";
    const pressKey = (key) => {
      const keyElement = Array.from(
        keyboard.querySelectorAll("[data-wa-key]"),
      ).find((element) => element.dataset.waKey === key);
      if (!keyElement) return;
      keyElement.classList.add("is-pressed");
      window.setTimeout(() => keyElement.classList.remove("is-pressed"), 110);
    };
    const beginManualTyping = (clearDraft = true) => {
      if (manualMode) return;
      manualMode = true;
      if (typingTimer !== null) window.clearTimeout(typingTimer);
      typingTimer = null;
      typingIndex = 0;
      completedMessageIndex = -1;
      if (clearDraft) input.value = "";
      sendButton.disabled = !input.value.trim();
    };
    const insertText = (text) => {
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? input.value.length;
      input.setRangeText(text, start, end, "end");
      sendButton.disabled = !input.value.trim();
      input.focus({ preventScroll: true });
    };
    const typeNextCharacter = (message, messageIndex) => {
      if (
        activeChat !== chat ||
        conversationStates.get(chat.id) !== state ||
        state.nextIndex !== messageIndex ||
        !root.classList.contains("keyboard-open")
      ) {
        typingTimer = null;
        return;
      }
      if (typingIndex >= message.text.length) {
        typingTimer = null;
        completedMessageIndex = messageIndex;
        sendButton.disabled = false;
        return;
      }
      const character = message.text[typingIndex];
      if (character === " ") {
        pressKey("space");
      } else {
        if (character !== character.toLowerCase()) pressKey("shift");
        pressKey(character.toLowerCase());
      }
      typingIndex += 1;
      input.value = message.text.slice(0, typingIndex);
      typingTimer = window.setTimeout(
        () => typeNextCharacter(message, messageIndex),
        85,
      );
    };
    const showKeyboard = () => {
      root.classList.add("keyboard-open");
      keyboard.classList.remove("is-hidden");
      keyboard.inert = false;
      keyboard.setAttribute("aria-hidden", "false");
      const messages = root.querySelector("#wa-ios-messages");
      messages.scrollTop = messages.scrollHeight;
      if (
        manualMode ||
        !pendingMessage ||
        pendingMessage.type !== "text" ||
        completedMessageIndex === state.nextIndex ||
        typingTimer !== null
      ) {
        return;
      }
      if (typingMessageIndex !== state.nextIndex) {
        typingMessageIndex = state.nextIndex;
        typingIndex = 0;
        input.value = "";
      }
      sendButton.disabled = true;
      typingTimer = window.setTimeout(
        () => typeNextCharacter(pendingMessage, typingMessageIndex),
        160,
      );
    };
    const hideKeyboard = () => {
      root.classList.remove("keyboard-open");
      keyboard.classList.add("is-hidden");
      keyboard.inert = true;
      keyboard.setAttribute("aria-hidden", "true");
      if (typingTimer !== null) {
        window.clearTimeout(typingTimer);
        typingTimer = null;
      }
    };
    input.addEventListener("click", showKeyboard);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
        return;
      }
      if (event.key.length === 1 || event.key === "Backspace" || event.key === "Delete") {
        beginManualTyping(true);
      }
    });
    input.addEventListener("input", () => {
      beginManualTyping(false);
      sendButton.disabled = !input.value.trim();
    });
    keyboard.addEventListener("click", (event) => {
      const keyElement = event.target.closest("[data-wa-key]");
      if (!keyElement) return;
      const key = keyElement.dataset.waKey;
      if (key === "send") {
        form.requestSubmit();
        return;
      }
      if (key === "mode") {
        numericMode = !numericMode;
        shifted = false;
        keyboard.innerHTML = buildKeyboard(numericMode);
        return;
      }
      if (key === "shift") {
        shifted = !shifted;
        keyElement.classList.toggle("is-pressed", shifted);
        return;
      }
      beginManualTyping();
      if (key === "backspace") {
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        const removeStart = start === end ? Math.max(0, start - 1) : start;
        input.setRangeText("", removeStart, end, "end");
      } else {
        const value =
          key === "space"
            ? " "
            : key === "emoji"
              ? "😊"
              : shifted && !numericMode
                ? key.toUpperCase()
                : key;
        insertText(value);
      }
      if (shifted) {
        shifted = false;
        keyboard.querySelector('[data-wa-key="shift"]')?.classList.remove("is-pressed");
      }
      sendButton.disabled = !input.value.trim();
      if (keyElement.isConnected) pressKey(key);
    });
    root
      .querySelector("#wa-ios-messages")
      .addEventListener("click", hideKeyboard);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const draftText = input.value.trim();
      if (!draftText) return;
      const scriptedMessage = state.messages[state.nextIndex];
      let sentMessage;
      if (scriptedMessage?.sender === "me") {
        if (
          scriptedMessage.type === "text" &&
          !manualMode &&
          completedMessageIndex !== state.nextIndex
        ) {
          return;
        }
        sentMessage =
          scriptedMessage.type === "text" && manualMode
            ? { ...scriptedMessage, text: draftText }
            : scriptedMessage;
        state.nextIndex += 1;
      } else {
        sentMessage = {
          sender: "me",
          text: draftText,
          time: new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      }
      state.visibleMessages.push(sentMessage);
      showIncomingMessages(chat, state);
      chat.updated = Date.now();
      const nextMessage =
        state.messages[state.nextIndex]?.sender === "me"
          ? state.messages[state.nextIndex]
          : null;
      typingIndex = 0;
      typingMessageIndex = -1;
      completedMessageIndex = -1;
      manualMode = false;
      numericMode = false;
      shifted = false;
      updateDraft(nextMessage);
      keyboard.innerHTML = buildKeyboard();
      sendButton.disabled = !nextMessage || nextMessage.type === "text";
      hideKeyboard();
      root.querySelector("#wa-ios-messages").innerHTML =
        '<div class="wa-ios-date">Today</div>' + renderMessages(chat);
      root.querySelector("#wa-ios-messages").scrollTop =
        root.querySelector("#wa-ios-messages").scrollHeight;
      if (sentMessage.callAfterSend) {
        window.setTimeout(() => {
          if (typeof window.showIncomingCall !== "function") {
            throw new Error("Incoming call support is not available.");
          }
          if (
            !window.showIncomingCall(chat.name, {
              avatar: chat.avatar || "",
              sub: "WhatsApp",
            })
          ) {
            console.warn(
              "Could not show incoming WhatsApp call for " + chat.name,
            );
          }
        }, 3000);
      }
    });
    root.querySelector("#wa-ios-messages").scrollTop =
      root.querySelector("#wa-ios-messages").scrollHeight;
  }

  window.renderWhatsappApp = function () {
    const body = document.getElementById("app-body");
    const header = document.getElementById("app-header");
    const screen = document.getElementById("app-screen");
    if (!body || !header || !screen) {
      throw new Error("WhatsApp requires the iOS app screen.");
    }
    header.style.display = "none";
    screen.classList.add("dark");
    body.innerHTML = '<div class="wa-ios-app" id="wa-ios-app"></div>';
    selectedTab = "Chats";
    renderList();
    showScreen("app-screen");
  };

  const originalOpenApp = window.openApp;
  window.openApp = function (id, title) {
    if (id === "whatsapp") {
      window.renderWhatsappApp();
      return;
    }
    originalOpenApp(id, title);
  };
})();
