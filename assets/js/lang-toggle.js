const translations = {
  fr: {
    title: "No Work | S’il vous plaît, ne dites pas juste “ça marche pas 😭”",
    buttons: {
      langToggle: "🌐 Changer de langue", // inutile ici mais peut rester
      toggleTheme: "🌙 Mode sombre"
    },
    main: {
      title: { staticText: "No", typingText: "work" },
      subtitle: "s’il vous plaît, ne dites pas juste \"ça marche pas 😭\" dans le chat",
      intro: "Imaginez que vous appelez quelqu'un au téléphone, que vous lui dites <b>“Mon PC marche pas !”</b> et que vous le mettez en attente sans autre mot… 🙄",
      badExample: {
        heading: "❌ Ne fais pas ça",
        chat: [
          { name: "Alex", time: "14:08", message: "ça marche pas 😭" },
          { name: "Maya", time: "14:09", message: "C’est quoi le souci exactement ?" },
          { name: "Alex", time: "14:12", message: "Je sais pas encore, je regarde..." }
        ],
        aside: [
          "Notez qu’Alex aurait pu poser sa vraie question tout de suite. Maya aurait pu commencer à réfléchir au problème plutôt que d’attendre un message flou.",
          "Les gens font ça pour être polis — mais dans un chat, ça ralentit tout. Quand vous dites \"ça marche pas\", vous perdez du temps au lieu d’en faire gagner.",
          "❌ ça marche pas",
          "❌ erreur chelou",
          "❌ tu peux check un truc vite fait ?",
          "❌ t dispo ?",
          "💡 <b>Soyez direct·e.</b> Expliquez le souci dès le premier message !"
        ]
      },
      goodExample: {
        heading: "✅ Fais plutôt ça",
        chat: [
          {
            name: "Julie",
            time: "10:33",
            message: "Hello ! Je fetch /api/data avec axios dans getData(). En staging, je reçois une 500. En local tout passe. Token envoyé. Tu peux jeter un œil ? 🙏"
          },
          {
            name: "Ben",
            time: "10:35",
            message: "Merci pour les détails, je regarde !"
          }
        ],
        aside: [
          "Julie donne toutes les infos utiles dès le départ :",
          "✅ Ce qu’elle essaie de faire",
          "✅ Où ça coince (environnement, fonction)",
          "✅ Le message d’erreur",
          "✅ Ce qu’elle a déjà vérifié",
          "🧠 Donnez le max de détails dès le début. C’est pro et efficace."
        ]
      }
    },
    footer: '<p>Merci d’avoir lu ! Si vous avez trouvé ça utile, partagez-le avec vos collègues !</p> <p>Vous pouvez aussi me suivre sur <a href="https://github.com/NycolazSec" target="_blank">Github</a>'
  },
  en: {
    title: "No Work | Please don’t just say “it doesn’t work 😭”",
    buttons: {
      langToggle: "🌐 Change language", // inutile ici aussi
      toggleTheme: "🌙 Dark mode"
    },
    main: {
      title: { staticText: "No", typingText: "work" },
      subtitle: "please, don’t just say \"it doesn’t work 😭\" in the chat",
      intro: "Imagine you call someone on the phone, say <b>“My PC doesn’t work!”</b> and put them on hold without another word… 🙄",
      badExample: {
        heading: "❌ Don’t do this",
        chat: [
          { name: "Alex", time: "14:08", message: "it doesn’t work 😭" },
          { name: "Maya", time: "14:09", message: "What exactly is the problem?" },
          { name: "Alex", time: "14:12", message: "I don’t know yet, I’m checking..." }
        ],
        aside: [
          "Note that Alex could have asked his real question right away. Maya could have started thinking about the problem instead of waiting for a vague message.",
          "People do this to be polite — but in chat, it slows everything down. When you say \"it doesn’t work,\" you waste time instead of saving it.",
          "❌ it doesn’t work",
          "❌ weird error",
          "❌ can you check something quickly?",
          "❌ are you available?",
          "💡 <b>Be direct.</b> Explain the problem right in the first message!"
        ]
      },
      goodExample: {
        heading: "✅ Do this instead",
        chat: [
          {
            name: "Julie",
            time: "10:33",
            message: "Hello! I’m fetching /api/data with axios in getData(). In staging, I get a 500. Locally everything works. Token sent. Can you take a look? 🙏"
          },
          {
            name: "Ben",
            time: "10:35",
            message: "Thanks for the details, I’m checking!"
          }
        ],
        aside: [
          "Julie gives all useful info right away:",
          "✅ What she’s trying to do",
          "✅ Where it fails (environment, function)",
          "✅ The error message",
          "✅ What she already checked",
          "🧠 Give as many details as possible from the start. It’s professional and efficient."
        ]
      }
    },
    footer: '<p>Thanks for reading! If you found this useful, share it with your colleagues!</p><p>You can also follow me on <a href="https://github.com/NycolazSec" target="_blank">Github</a></p>'
  }
};

// Détection automatique de la langue (fr, en), fallback: en
const userLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
const currentLang = translations[userLang] ? userLang : 'en';

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  document.title = t.title;

  // Boutons (y compris dark mode)
  const themeBtn = document.getElementById('toggle-theme');
  if (themeBtn) themeBtn.textContent = t.buttons.toggleTheme;

  const staticTextEl = document.querySelector('.title-container .static-text');
  const typingTextEl = document.querySelector('.title-container .typing-text');
  if (staticTextEl) staticTextEl.textContent = t.main.title.staticText;
  if (typingTextEl) typingTextEl.textContent = t.main.title.typingText;

  const subtitleEl = document.querySelector('.subtitle');
  if (subtitleEl) subtitleEl.textContent = t.main.subtitle;

  const introEl = document.querySelector('.lead');
  if (introEl) introEl.innerHTML = t.main.intro;

  const badHeading = document.querySelector('h2.red');
  if (badHeading) badHeading.textContent = t.main.badExample.heading;

  const badChatArticles = document.querySelectorAll('section:nth-of-type(1) .chat-box article');
  t.main.badExample.chat.forEach((chat, i) => {
    const article = badChatArticles[i];
    if (article) {
      article.querySelector('header span').textContent = chat.name;
      article.querySelector('header time').textContent = chat.time;
      article.querySelector('p').textContent = chat.message;
    }
  });

  const badAside = document.querySelector('section:nth-of-type(1) aside');
  if (badAside) {
    badAside.innerHTML = '';
    const [text1, text2, ...listItems] = t.main.badExample.aside;

    const p1 = document.createElement('p');
    p1.textContent = text1;
    badAside.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = text2;
    badAside.appendChild(p2);

    const ul = document.createElement('ul');
    listItems.slice(0, 4).forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
    badAside.appendChild(ul);

    const pLast = document.createElement('p');
    pLast.innerHTML = listItems[4];
    badAside.appendChild(pLast);
  }

  const goodHeading = document.querySelector('section:nth-of-type(2) h2.green');
  if (goodHeading) goodHeading.textContent = t.main.goodExample.heading;

  const goodChatArticles = document.querySelectorAll('section:nth-of-type(2) .chat-box article');
  t.main.goodExample.chat.forEach((chat, i) => {
    const article = goodChatArticles[i];
    if (article) {
      article.querySelector('header span').textContent = chat.name;
      article.querySelector('header time').textContent = chat.time;
      article.querySelector('p').textContent = chat.message;
    }
  });

  const goodAside = document.querySelector('section:nth-of-type(2) aside');
  if (goodAside) {
    goodAside.innerHTML = '';
    const [pText, ...rest] = t.main.goodExample.aside;

    const p = document.createElement('p');
    p.textContent = pText;
    goodAside.appendChild(p);

    const ul = document.createElement('ul');
    rest.slice(0, 4).forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
    goodAside.appendChild(ul);

    const pLast = document.createElement('p');
    pLast.textContent = rest[4];
    goodAside.appendChild(pLast);
  }

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = t.footer;
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslation(currentLang);
});
