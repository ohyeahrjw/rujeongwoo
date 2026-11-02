/* =====================================================
   MODERN iOS LAYER — renderers for Messages, Notes, Photos,
   Calendar, Safari, KakaoTalk, Instagram.
   Phone / Clock / Music / lock / home screens are untouched.
   ===================================================== */
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const E = (t) =>
    String(t).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    );
  const ic = (d, sw) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
    (sw || 1.8) +
    '" stroke-linecap="round" stroke-linejoin="round">' +
    d +
    "</svg>";

  const IC = {
    chevL: ic('<path d="M14.5 5.5 8 12l6.5 6.5"/>', 2.3),
    chevR: ic('<path d="M9.5 5.5 16 12l-6.5 6.5"/>', 2.3),
    search: ic(
      '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
      2,
    ),
    compose: ic(
      '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m14.5 7.5 3 3"/>',
    ),
    share: ic(
      '<path d="M12 15V3.5M7.5 8 12 3.5 16.5 8"/><path d="M6.5 11H6a2 2 0 0 0-2 2v5.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V13a2 2 0 0 0-2-2h-.5"/>',
    ),
    more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18.5" cy="12" r="1.5"/></svg>',
    video: ic(
      '<rect x="3" y="6.5" width="12.5" height="11" rx="3"/><path d="m15.5 11 5-3v8l-5-3"/>',
    ),
    plus: ic('<path d="M12 5v14M5 12h14"/>', 2.2),
    mic: ic(
      '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/>',
    ),
    up: ic('<path d="M12 19V5M6 11l6-6 6 6"/>', 2.6),
    book: ic(
      '<path d="M12 6.5C10 5 7 4.6 4 5v13c3-.4 6 0 8 1.5 2-1.5 5-1.9 8-1.5V5c-3-.4-6 0-8 1.5zM12 6.5v13"/>',
    ),
    tabs: ic(
      '<rect x="4" y="7" width="12" height="12" rx="2.5"/><path d="M8 4h9.5A2.5 2.5 0 0 1 20 6.5V16"/>',
    ),
    reload: ic('<path d="M19 12a7 7 0 1 1-2.2-5.1M19 4.5v4h-4"/>'),
    clock: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    heart: ic(
      '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
    ),
    info: ic(
      '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.1"/>',
    ),
    trash: ic(
      '<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l.8 12.5h9.4L17.5 7M10 11v5M14 11v5"/>',
    ),
    photos: ic(
      '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><circle cx="9" cy="10.5" r="1.6"/><path d="m4 17 5-4.5 3.5 3 3-2.5 4.5 4"/>',
    ),
    albums: ic(
      '<path d="M3.5 8.5a2 2 0 0 1 2-2H10l2 2h6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
    ),
    calendar: ic(
      '<rect x="4" y="5.5" width="16" height="14.5" rx="3"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    ),
    list: ic(
      '<path d="M9 7h11M9 12h11M9 17h11M4.5 7h.01M4.5 12h.01M4.5 17h.01"/>',
      2,
    ),
    check: ic('<path d="m5 12.5 4.5 4.5L19 7.5"/>', 3),
    checklist: ic(
      '<circle cx="6" cy="7" r="2.2"/><path d="m5 7 .8.8L7.2 6.3M12 7h8M12 12h8M12 17h8"/><circle cx="6" cy="12" r="2.2"/><circle cx="6" cy="17" r="2.2"/>',
    ),
    aa: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" font-size="15" font-weight="600" font-family="-apple-system,Helvetica,sans-serif">A</text><text x="12.5" y="18" font-size="10.5" font-weight="600" font-family="-apple-system,Helvetica,sans-serif">A</text></svg>',
    clip: ic(
      '<path d="M19 11.5 11.8 18.7a4.2 4.2 0 0 1-6-6l7.3-7.3a2.8 2.8 0 0 1 4 4l-7.3 7.3a1.4 1.4 0 0 1-2-2l6.6-6.6"/>',
    ),
    pencil: ic('<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/>'),
    person: ic(
      '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20c.8-3.8 3.9-5.8 7.5-5.8s6.7 2 7.5 5.8"/>',
    ),
    bubble: ic(
      '<path d="M20.5 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-4.6A8 8 0 1 1 20.5 12z"/>',
    ),
    eye: ic(
      '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    ),
    gear: ic(
      '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
    ),
    grid: ic(
      '<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',
    ),
    reel: ic(
      '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="m10.2 9 4.8 3-4.8 3z"/>',
    ),
    tagged: ic(
      '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="10" r="2.5"/><path d="M7.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6"/>',
    ),
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  };

  /*  Instagram ala iOS (SF Symbols) */
  IC.igHome = ic(
    '<path d="M4 10.6 12 4l8 6.6V19a1 1 0 0 1-1 1h-4.2v-5.4H9.2V20H5a1 1 0 0 1-1-1z"/>',
    1.9,
  );
  IC.igHomeOn = IC.igHome.replace('fill="none"', 'fill="currentColor"');
  IC.igPlus = ic(
    '<rect x="3.8" y="3.8" width="16.4" height="16.4" rx="5"/><path d="M12 8.4v7.2M8.4 12h7.2"/>',
    1.9,
  );
  IC.send = ic(
    '<path d="M17.59 4.49Q20.60 3.40 19.48 6.40L15.25 17.79Q14.20 20.60 12.63 18.04L10.41 14.41Q10.10 13.90 9.60 13.58L5.59 11.00Q3.40 9.60 5.85 8.72z"/><path d="M10.5 13.5 19.2 4.8"/>',
    1.95,
  ); /* paper plane (DM) */
  IC.bookmark = ic(
    '<path d="M7 3.8h10a1 1 0 0 1 1 1V20l-6-4.4L6 20V4.8a1 1 0 0 1 1-1z"/>',
    1.9,
  );
  const igIc = (svg) => '<span class="ig-ic">' + svg + "</span>";
  IC.repost = ic(
    '<path d="M17 2.5 21 6.5l-4 4"/><path d="M3.5 11V9.5a3 3 0 0 1 3-3H21"/><path d="M7 21.5l-4-4 4-4"/><path d="M20.5 13v1.5a3 3 0 0 1-3 3H3"/>',
    1.9,
  );
  window.igRp = window.igRp || {};
  window.igCm = window.igCm || {};
  const igCounts = (img, likes, c, r) => {
    const n = (v) => parseInt(String(v).replace(/[^\d]/g, ""), 10) || 0;
    const L = n(likes);
    let h = 0;
    String(img)
      .split("")
      .forEach((ch) => {
        h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      });
    const com =
      c != null
        ? n(c)
        : Math.min(60, Math.max(2, Math.round(L * (0.02 + (h % 40) / 1000))));
    const rep =
      r != null
        ? n(r)
        : Math.max(1, Math.round(L * (0.006 + ((h >> 3) % 20) / 1500)));
    return { com: com, rep: rep };
  };
  const igCt = (v) => Number(v).toLocaleString("en-US");
  const igActs = (img, likes, c, r) => {
    const k = igCounts(img, likes, c, r),
      on = !!window.igRp[img];
    return (
      '<span class="ig-ac ig-cm" data-base="' +
      k.com +
      '" onclick="igComments(this)" aria-label="Comments">' +
      igIc(IC.bubble) +
      '<b class="ig-n">' +
      igCt(k.com + (window.igCm[img] || []).length) +
      "</b></span>" +
      '<span class="ig-ac ig-rp' +
      (on ? " on" : "") +
      '" data-base="' +
      k.rep +
      '" onclick="igRepost(this)" aria-label="Repost">' +
      igIc(IC.repost) +
      '<b class="ig-n">' +
      igCt(k.rep + (on ? 1 : 0)) +
      "</b></span>" +
      igIc(IC.send)
    );
  };
  window.igRepost = function (el) {
    const post = el.closest(".ig-post"),
      im = post && post.querySelector(".ig-img img");
    const key = im ? im.getAttribute("src") : "";
    if (!key) return;
    const on = !window.igRp[key];
    window.igRp[key] = on;
    const nEl = el.querySelector(".ig-n");
    if (nEl)
      nEl.textContent = Number(
        (parseInt(el.dataset.base, 10) || 0) + (on ? 1 : 0),
      ).toLocaleString("en-US");
    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.toggle("on", on);
    if (on) el.classList.add("pop");
  };
  window.igCmSeed = window.igCmSeed || {};
  window.igComments = function (el) {
    const post = el.closest(".ig-post"),
      im = post && post.querySelector(".ig-img img");
    const key = im ? im.getAttribute("src") : "";
    if (!key) return;
    const scr = document.getElementById("instagram-screen");
    if (!scr) return;
    window.igCmClose(true);
    const base = parseInt(el.dataset.base, 10) || 0;
    let me = { username: "si0n___5", avatar: "sion-ig7.jpg" },
      friends = [];
    try {
      if (typeof igProfiles !== "undefined") {
        if (igProfiles.sion) me = igProfiles.sion;
        friends = Object.keys(igProfiles)
          .filter(
            (k) =>
              k !== "sion" &&
              k !== "riku" &&
              igProfiles[k] &&
              igProfiles[k].avatar &&
              igProfiles[k].username,
          )
          .map((k) => igProfiles[k]);
      }
    } catch (e) {}
    /* ----- seeded comments: few/moderate, unique, NOT tied to the counter ----- */
    const seedKey = key + "|" + base;
    if (!window.igCmSeed[seedKey]) {
      const CM = {
        RIKU: {
          t: [
            "おー、いい写真じゃん",
            "今日どこ行ってたの？",
            "めっちゃ雰囲気いいね",
            "これ前に言ってたとこ？",
            "陸らしい写真だね☺️",
            "今度ご飯行こうよ",
            "天気よかったんだね",
            "久しぶりに見た笑",
            "髪切った？",
            "おつかれー！",
            "私も行きたかったな",
            "元気そうでよかった",
            "今度写真撮らせて",
            "この前はありがとね",
            "いい顔してる",
            "あとで連絡するわ",
            "えっ、これいつ撮ったの",
            "センスあるなぁ",
            "また遊ぼう！",
            "😂😂",
            "🙌",
            "✨",
            "陸くんだ〜",
          ],
          n: [
            "yuuki_0612",
            "haruto.m",
            "sota_1999",
            "ren.k_",
            "aoi_nagi",
            "kaito.t",
            "mizuki__03",
            "yuna.s0",
            "takumi_ok",
            "hina_0807",
            "riko.n",
            "daichi.f",
            "miyu_823",
            "shun.ito",
            "nanami.k_",
            "kouhei_8",
            "saki.m_",
            "tomoya.s",
            "airi_0214",
            "yamato.h",
            "mei__tsuki",
            "kento_0105",
            "rina.y_",
            "hiro.sato_",
            "momo.k03",
            "ryota_n",
            "akari.97",
            "sho.takagi",
            "emi_1120",
            "tsubasa.o",
          ],
        },
        SION: [
          {
            w: 70,
            t: [
              "미쳤다 진짜",
              "오늘도 잘생겼네요",
              "이 사진 저장했어요",
              "컨셉 뭐예요 ㅠㅠ",
              "헐 이거 어디예요?",
              "ㅋㅋㅋㅋ 귀엽다",
              "이 톤 너무 좋다",
              "🔥🔥",
              "🤍",
              "요즘 자주 올려줘서 좋아요",
              "오 이 옷 어디 거예요?",
              "실물이 더 잘생겼을 듯",
              "날씨 좋은 날 찍었나 봐요",
              "사진 찍는 사람 누구예요 잘 찍었다",
            ],
            n: [
              "mi_na.93",
              "j.hyun_",
              "sooyaa",
              "haru_0412",
              "kim.chaeri",
              "minjae.k",
              "yuna_lee",
              "nari.s",
              "bomi__",
              "taeyang.j",
              "eun.woo_",
              "hana.0719",
              "jiho_s",
              "yerin.k",
              "dongmin_",
              "suzy.97",
              "ara_ra",
              "woo.jin",
              "chae.won",
              "seo.yeon_",
              "doyun.k",
              "ha_eun03",
              "jun.seo_",
              "minsu0",
              "sia.park",
              "jaehyun_b",
              "yuri.oh",
              "taeil_95",
              "somin.l",
              "gyu.min_",
              "da.eun_",
              "wonwoo.j",
              "nayeon.k",
              "hyeri_s",
              "seungmin__",
            ],
          },
          {
            w: 10,
            t: [
              "so good omg",
              "literally can't stop looking at this",
              "love your vibe 🖤",
              "how are you real 😭",
            ],
            n: [
              "emma.rose_",
              "jake.holloway",
              "lila.moon",
              "carlosv_",
              "angelicaa.s",
              "marcus.t",
              "jenna.cruz",
              "bryan_lee",
            ],
          },
          {
            w: 8,
            t: ["かっこよすぎる…", "素敵すぎます🥹"],
            n: ["yui_0409", "sakura.n", "kou_kun", "miku.t_"],
          },
          {
            w: 8,
            t: ["หล่อมากกก 😭", "ชอบมากเลยค่ะ", "ภาพสวยมากค่ะ"],
            n: ["ploy.nn", "namtan_k", "pat.tarn", "earthy.th"],
          },
          {
            w: 4,
            t: ["ganteng banget 😭", "semangat terus ya kak!"],
            n: ["dewi.ayu_", "rizky.p"],
          },
        ],
        SPECIAL: {
          "riku-ig11.jpg": {
            t: [
              "かわいい！このぬいぐるみどこの？",
              "ぬいぐるみ好きなんだね笑",
              "名前あるの？",
              "連れて帰りたい",
              "癒される〜",
              "意外な一面笑",
              "目がかわいい",
              "ふわふわそう",
              "🥹",
            ],
            n: [
              "yuuki_0612",
              "haruto.m",
              "sota_1999",
              "ren.k_",
              "aoi_nagi",
              "kaito.t",
              "mizuki__03",
              "yuna.s0",
              "takumi_ok",
              "hina_0807",
              "riko.n",
              "daichi.f",
              "miyu_823",
              "shun.ito",
              "nanami.k_",
              "kouhei_8",
              "saki.m_",
              "tomoya.s",
              "airi_0214",
              "yamato.h",
              "mei__tsuki",
              "kento_0105",
              "rina.y_",
              "hiro.sato_",
              "momo.k03",
              "ryota_n",
              "akari.97",
              "sho.takagi",
              "emi_1120",
              "tsubasa.o",
            ],
          },
          "onri-2.jpg": {
            t: [
              "二人とも楽しそう！",
              "仲いいなぁ",
              "ツーショット珍しいね",
              "いい写真撮れたね",
              "二人ともいい顔してる",
              "どこで撮ったの？",
              "今度私も混ぜて笑",
              "いつもの二人だ",
              "💜",
              "✨",
            ],
            n: [
              "yuuki_0612",
              "haruto.m",
              "sota_1999",
              "ren.k_",
              "aoi_nagi",
              "kaito.t",
              "mizuki__03",
              "yuna.s0",
              "takumi_ok",
              "hina_0807",
              "riko.n",
              "daichi.f",
              "miyu_823",
              "shun.ito",
              "nanami.k_",
              "kouhei_8",
              "saki.m_",
              "tomoya.s",
              "airi_0214",
              "yamato.h",
              "mei__tsuki",
              "kento_0105",
              "rina.y_",
              "hiro.sato_",
              "momo.k03",
              "ryota_n",
              "akari.97",
              "sho.takagi",
              "emi_1120",
              "tsubasa.o",
            ],
          },
        },
      };
      let s = 0;
      String(seedKey)
        .split("")
        .forEach((ch) => {
          s = (s * 31 + ch.charCodeAt(0)) >>> 0;
        });
      const rnd = () => {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
      const pick = (a) => a[Math.floor(rnd() * a.length)];
      /* op RK = japan / SN = korean */
      let isSion = false;
      try {
        isSion = !!(
          igProfiles.sion && igProfiles.sion.posts.some((p) => p.img === key)
        );
      } catch (e) {}
      /* onri-1 foto of a couple onri-2 → cp foto */
      if (CM.SPECIAL["onri-2.jpg"] && !CM.SPECIAL["onri-1.jpg"])
        CM.SPECIAL["onri-1.jpg"] = CM.SPECIAL["onri-2.jpg"];
      const special = CM.SPECIAL[key] || null;
      /* no ygb muncul ga harus sesuai sm yg komen */
      const want = special
        ? 3 + Math.floor(rnd() * 6)
        : isSion
          ? 4 + Math.floor(rnd() * 9)
          : 2 + Math.floor(rnd() * 5);
      const n = Math.min(base, want),
        out = [],
        usedN = {},
        now = Date.now();
      /* random smapling biar gak samaan */
      const shuf = (a) => {
        const b = a.slice();
        for (let i = b.length - 1; i > 0; i--) {
          const j = Math.floor(rnd() * (i + 1));
          const t = b[i];
          b[i] = b[j];
          b[j] = t;
        }
        return b;
      };
      const groups = special ? [special] : isSion ? CM.SION : [CM.RIKU];
      const bag = groups.map((g) => ({
        g: g,
        t: shuf(g.t),
        n: shuf(g.n),
      }));
      const takeGroup = () => {
        const live = bag.filter((x) => x.t.length && x.n.length);
        if (!live.length) return null;
        if (live.length === 1) return live[0];
        const tot = live.reduce((m, x) => m + (x.g.w || 1), 0);
        let r = rnd() * tot;
        for (const x of live) {
          const w = x.g.w || 1;
          if (r < w) return x;
          r -= w;
        }
        return live[0];
      };
      for (let i = 0; i < n; i++) {
        const x = takeGroup();
        if (!x) break;
        const txt = x.t.pop();
        /* yg muncul di profile RK  sering, sedangkan SN occasionally aje */
        let f =
          friends.length && rnd() < (isSion && !special ? 0.06 : 0.12)
            ? friends[Math.floor(rnd() * friends.length)]
            : null;
        if (f && usedN[f.username]) f = null;
        let nm = "";
        if (f) nm = f.username;
        else {
          do {
            nm = x.n.pop() + (rnd() < 0.3 ? Math.floor(rnd() * 90 + 10) : "");
          } while (usedN[nm] && x.n.length);
        }
        usedN[nm] = 1;
        /* SN komenan sering terus jarang */
        const gap = isSion && !special ? 6 + rnd() * 40 : 20 + rnd() * 90;
        out.push({
          text: txt,
          name: nm,
          avatar: f ? f.avatar : "",
          t: now - (n - i) * gap * 60000,
          likes: isSion
            ? Math.floor(rnd() * rnd() * 60)
            : Math.floor(rnd() * rnd() * 6),
          liked: false,
          seed: true,
        });
      }
      window.igCmSeed[seedKey] = out;
    }
    const seeds = window.igCmSeed[seedKey];
    const w = document.createElement("div");
    w.className = "ig-cmw";
    w.innerHTML =
      '<div class="ig-cm-shade"></div><div class="ig-cm-panel"><div class="ig-cm-grab"></div>' +
      '<div class="ig-cm-h">Comments</div><div class="ig-cm-list"></div>' +
      '<div class="ig-cm-in"><img alt=""><input type="text" maxlength="300" autocomplete="off" placeholder="Add a comment..."><button type="button" disabled>Post</button></div></div>';
    scr.appendChild(w);
    const list = w.querySelector(".ig-cm-list"),
      inp = w.querySelector("input"),
      btn = w.querySelector("button");
    w.querySelector(".ig-cm-in img").src = me.avatar;
    const ago = (t) => {
      const s = Math.floor((Date.now() - t) / 1000);
      return s < 60
        ? "ตอนนี้"
        : s < 3600
          ? Math.floor(s / 60) + " minute"
          : s < 86400
            ? Math.floor(s / 3600) + " views"
            : Math.floor(s / 86400) + " day";
    };
    const hue = (nm) => {
      let h = 0;
      String(nm)
        .split("")
        .forEach((ch) => {
          h = (h * 31 + ch.charCodeAt(0)) % 360;
        });
      return h;
    };
    const render = (toBottom) => {
      const mine = window.igCm[key] || [];
      list.innerHTML = "";
      const all = seeds.concat(mine);
      if (!all.length) {
        const e = document.createElement("div");
        e.className = "ig-cm-empty";
        e.textContent = "No comments yet...";
        list.appendChild(e);
        return;
      }
      all.forEach((c) => {
        const r = document.createElement("div");
        r.className = "ig-cm-row";
        const nm = c.seed ? c.name : me.username,
          av = c.seed ? c.avatar : me.avatar;
        let a;
        if (av) {
          a = document.createElement("img");
          a.src = av;
          a.alt = "";
        } else {
          a = document.createElement("div");
          a.className = "ig-cm-av";
          a.style.background = "hsl(" + hue(nm) + ",45%,55%)";
          a.textContent = nm.charAt(0).toUpperCase();
        }
        const b = document.createElement("div");
        b.className = "ig-cm-body";
        const n = document.createElement("b");
        n.textContent = nm;
        const t = document.createElement("span");
        t.className = "ig-cm-txt";
        t.textContent = c.text;
        const m = document.createElement("small");
        m.textContent = ago(c.t);
        b.appendChild(n);
        b.appendChild(t);
        b.appendChild(m);
        const lk = document.createElement("div");
        lk.className = "ig-cm-lk" + (c.liked ? " on" : "");
        lk.innerHTML = IC.heart + "<span></span>";
        const cnt = () => {
          const v = (c.likes || 0) + (c.liked ? 1 : 0);
          lk.lastChild.textContent = v ? v : "";
        };
        cnt();
        lk.addEventListener("click", () => {
          c.liked = !c.liked;
          lk.classList.toggle("on", c.liked);
          cnt();
        });
        r.appendChild(a);
        r.appendChild(b);
        r.appendChild(lk);
        list.appendChild(r);
      });
      list.scrollTop = toBottom ? list.scrollHeight : 0;
    };
    const sync = () =>
      document.querySelectorAll(".ig-post").forEach((p) => {
        const i = p.querySelector(".ig-img img");
        if (!i || i.getAttribute("src") !== key) return;
        const c = p.querySelector(".ig-cm");
        if (!c) return;
        const n = c.querySelector(".ig-n");
        if (n)
          n.textContent = Number(
            (parseInt(c.dataset.base, 10) || 0) +
              (window.igCm[key] || []).length,
          ).toLocaleString("en-US");
      });
    const send = () => {
      const v = inp.value.trim();
      if (!v) return;
      (window.igCm[key] = window.igCm[key] || []).push({
        text: v,
        t: Date.now(),
        likes: 0,
        liked: false,
      });
      inp.value = "";
      btn.disabled = true;
      render(true);
      sync();
      inp.focus({ preventScroll: true });
    };
    inp.addEventListener("input", () => {
      btn.disabled = !inp.value.trim();
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.isComposing) {
        e.preventDefault();
        send();
      }
    });
    btn.addEventListener("mousedown", (e) =>
      e.preventDefault(),
    ); /* keep the keyboard up when tapping Post */
    btn.addEventListener("click", send);
    w.querySelector(".ig-cm-shade").addEventListener("click", () =>
      window.igCmClose(),
    );
    w.querySelector(".ig-cm-grab").addEventListener("click", () =>
      window.igCmClose(),
    );
    render(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => w.classList.add("on")),
    );
  };
  window.igCmClose = function (now) {
    document.querySelectorAll("#instagram-screen .ig-cmw").forEach((w) => {
      if (now) {
        w.remove();
        return;
      }
      w.classList.remove("on");
      setTimeout(() => w.remove(), 320);
    });
  };

  const HOME = "showScreen('home-screen')";
  const back = (label, fn) =>
    '<button class="gl back" onclick="' +
    fn +
    '">' +
    IC.chevL +
    (label ? "<span>" + label + "</span>" : "") +
    "</button>";
  const backRound = (fn) =>
    '<button class="gl round" onclick="' + fn + '">' + IC.chevL + "</button>";
  const mount = (h) => {
    $("#app-body").innerHTML = h;
  };
  const homeIndicator =
    '<div class="home-indicator-container" onclick="showScreen(\'home-screen\')"><div class="home-indicator"></div></div>';
  const stripEmoji = (s) =>
    String(s)
      .replace(/\s*\p{Extended_Pictographic}/gu, "")
      .trim();

  /* =============== MESSAGES =============== */

  function renderMessages() {
    const unread = appBadges.messages > 0;
    const row = (key, c, dot) =>
      '<div class="row m-row" onclick="openChatDetail(\'' +
      key +
      "')\">" +
      (dot ? '<i class="m-dot"></i>' : "") +
      (c.isDefaultAvatar
        ? '<span class="av ph m-av"><img src="' + c.avatar + '" alt=""></span>'
        : '<img class="av m-av" src="' + c.avatar + '" alt="">') +
      '<div class="m-info"><div class="m-top"><span class="m-name">' +
      E(c.name) +
      "</span>" +
      '<span class="m-time">' +
      E(c.time) +
      IC.chevR +
      "</span></div>" +
      '<div class="m-prev">' +
      E(c.preview) +
      "</div></div></div>";
    mount(
      '<div class="ios-app">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<button class="gl round">' +
        IC.compose +
        "</button></div>" +
        '<div class="ios-scroll">' +
        '<div class="ios-title">Messages</div>' +
        '<div class="sf">' +
        IC.search +
        "<span>Search</span></div>" +
        "<div>" +
        row("noah_chat", chatDataMessages.noah_chat, false) +
        row("nasa_chat", chatDataMessages.nasa_chat, false) +
        "</div>" +
        "</div>" +
        "</div>",
    );
  }

  function chatBubbles(msgs) {
    const dir = (m) =>
      m.type === "chat-time-divider"
        ? "d"
        : m.type === "sent" || m.type === "outgoing"
          ? "out"
          : "in";
    let h = "";
    msgs.forEach((m, i) => {
      const d = dir(m);
      if (d === "d") {
        h +=
          '<div class="cd-time">' + E(m.text).replace(" • ", "<br>") + "</div>";
        return;
      }
      const pd = i ? dir(msgs[i - 1]) : "d";
      const nd = i < msgs.length - 1 ? dir(msgs[i + 1]) : "d";
      h +=
        '<div class="cd-line ' +
        d +
        (pd !== d ? " first" : "") +
        '"><div class="b ' +
        d +
        (nd !== d ? " last" : "") +
        '">' +
        E(m.text) +
        "</div></div>";
    });
    if (msgs.length && dir(msgs[msgs.length - 1]) === "out")
      h += '<div class="cd-deliv">Delivered</div>';
    return h;
  }

  window.openChatDetail = function (key) {
    const chat = chatDataMessages[key];
    if (!chat) return;
    appBadges.messages = 0;
    renderHomeAndDock();
    document.querySelectorAll(".m-dot").forEach((d) => d.remove());
    const av = chat.isDefaultAvatar
      ? '<span class="av ph"><img src="' + chat.avatar + '" alt=""></span>'
      : '<img class="av" src="' + chat.avatar + '" alt="">';
    const scr = $("#chat-detail-screen");
    scr.innerHTML =
      '<div class="cd-top"><button class="gl back cd-back" onclick="closeChatDetail()">' +
      IC.chevL +
      '<i class="cd-badge" style="display:none"></i>' +
      "</button>" +
      '<div class="cd-center">' +
      av +
      '<span class="nm">' +
      E(chat.name) +
      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg></span></div>' +
      '<button class="gl round">' +
      IC.video +
      "</button></div>" +
      '<div class="cd-area" id="cd-area">' +
      chatBubbles(chat.messages) +
      "</div>" +
      '<div class="cd-input"><button class="gl round">' +
      IC.plus +
      "</button>" +
      '<div class="cd-field"><input type="text" placeholder="iMessage"><svg class="cd-wave" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 11v2M7 8v8M11 4.5v15M15 8v8M19 10v4M22 11.5v1"/></svg></div></div>' +
      homeIndicator;
    scr.classList.add("active");
    const area = $("#cd-area");
    area.scrollTop = area.scrollHeight;
  };

  /* =============== NOTES =============== */
  const noteShort = {
    anniversary: "22/08/2026",
    real_love: "03/05/2026",
    dior_moi: "07/11/2025",
    protect_rion: "07/11/2024",
    angry_rion: "20/07/2024",
    learn_nasa: "25/04/2024",
  };

  function renderNotes() {
    const keys = Object.keys(notesData);
    const years = [];
    keys.forEach((k) => {
      const y = (noteShort[k] || "").slice(-4);
      if (!years.includes(y)) years.push(y);
    });
    let groups = "";
    years.forEach((y) => {
      groups += '<div class="grp-h">' + E(y) + '</div><div class="grp">';
      keys
        .filter((k) => (noteShort[k] || "").slice(-4) === y)
        .forEach((k) => {
          const n = notesData[k];
          groups +=
            '<div class="row n-row" onclick="openNoteDetail(\'' +
            k +
            "')\">" +
            '<div class="n-title">' +
            E(n.title) +
            "</div>" +
            '<div class="n-sub"><b>' +
            E(noteShort[k] || "") +
            "</b><span>" +
            E(n.preview) +
            "</span></div></div>";
        });
      groups += "</div>";
    });
    mount(
      '<div class="ios-app grouped" style="--acc:var(--ios-notes-amber)">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<button class="gl round">' +
        IC.more +
        "</button></div>" +
        '<div class="ios-scroll"><div class="ios-title">All Notes</div><div style="height:8px"></div>' +
        groups +
        '<div class="n-count">' +
        keys.length +
        " Note</div></div>" +
        '<div class="n-foot"><div class="n-search">' +
        IC.search +
        "<span>Search</span></div>" +
        '<button class="gl tint round">' +
        IC.compose +
        "</button></div>" +
        "</div>",
    );
  }

  function noteBody(content) {
    const formatNoteText = (text) =>
      String(text)
        .split(/(<\/?(?:b|del)>)/gi)
        .map((part) =>
          /^<\/?(?:b|del)>$/i.test(part) ? part.toLowerCase() : E(part),
        )
        .join("");

    let todoIndex = 0;
    return String(content)
      .split("\n")
      .map((l) => {
        const todo = l.match(
          /^\s*<label\s+class=["']todo-item["']>\s*<input\b([^>]*)>\s*(.*?)\s*<\/label>\s*$/i,
        );
        if (todo && /\btype=["']checkbox["']/i.test(todo[1])) {
          const index = todoIndex++;
          const checked = /\bchecked(?:\s|=|$)/i.test(todo[1]);
          return (
            '<button type="button" data-todo-index="' +
            index +
            '" class="nd-chk' +
            (checked ? " done" : "") +
            '" aria-pressed="' +
            checked +
            '"><i aria-hidden="true">' +
            (checked
              ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>'
              : "") +
            "</i><span>" +
            formatNoteText(todo[2]) +
            "</span></button>"
          );
        }

        const m = l.match(/^- (.*)$/);
        if (!m)
          return (
            '<div class="nd-line">' +
            (l ? formatNoteText(l) : "&nbsp;") +
            "</div>"
          );
        const done = /<del>/.test(m[1]);
        const txt = formatNoteText(m[1].replace(/<\/?del>/g, ""));
        return (
          '<div class="nd-line nd-bul">- ' +
          (done ? "<del>" + txt + "</del>" : txt) +
          "</div>"
        );
      })
      .join("");
  }

  window.openNoteDetail = function (key) {
    const n = notesData[key];
    if (!n) return;
    const scr = $("#note-detail-screen");
    scr.innerHTML =
      '<div class="nd-top">' +
      back("Note", "closeNoteDetail()") +
      '<div class="nd-acts"><button class="gl round">' +
      IC.share +
      '</button><button class="gl round">' +
      IC.more +
      "</button></div></div>" +
      '<div class="nd-body"><div class="nd-date">' +
      E(n.date) +
      '</div><div class="nd-title">' +
      E(n.title) +
      "</div>" +
      noteBody(n.content) +
      "</div>" +
      '<div class="nd-bar">' +
      IC.checklist +
      "<span>Aa</span>" +
      IC.clip +
      IC.pencil +
      "</div>" +
      homeIndicator;
    scr.querySelectorAll(".nd-chk").forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        const checked = checkbox.getAttribute("aria-pressed") !== "true";
        checkbox.setAttribute("aria-pressed", String(checked));
        checkbox.classList.toggle("done", checked);
        checkbox.querySelector("i").innerHTML = checked
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>'
          : "";

        let todoIndex = 0;
        const selectedIndex = Number(checkbox.dataset.todoIndex);
        n.content = String(n.content)
          .split("\n")
          .map((line) => {
            if (!/^\s*<label\s+class=["']todo-item["']/i.test(line))
              return line;
            if (todoIndex++ !== selectedIndex) return line;
            return line.replace(
              /(<input\b[^>]*type=["']checkbox["'][^>]*)(\s*\/?>)/i,
              (_, input, end) => {
                const withoutChecked = input.replace(
                  /\s+checked(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/i,
                  "",
                );
                return (checked ? withoutChecked + " checked" : withoutChecked) + end;
              },
            );
          })
          .join("\n");
      });
    });
    scr.classList.add("active");
  };

  /* =============== PHOTOS =============== */
  function renderPhotos() {
    let counter = 0,
      secs = "";
    photoSectionsData.forEach((sec) => {
      secs +=
        '<div class="p-sec"><div class="p-sec-h"><span class="p-sec-d">' +
        E(sec.date) +
        '</span><span class="p-sec-l">' +
        E(sec.location) +
        '</span></div><div class="p-grid">';
      sec.photos.forEach((p) => {
        secs +=
          '<div class="p-item" onclick="openPhotoViewer(' +
          counter++ +
          ')"><img src="' +
          E(p.url) +
          '" alt="" loading="lazy"></div>';
      });
      secs += "</div></div>";
    });
    const tab = (icon, label, on) =>
      '<div class="ftab' +
      (on ? " on" : "") +
      '">' +
      icon +
      "<span>" +
      label +
      "</span></div>";
    mount(
      '<div class="ios-app">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<button class="gl">Select</button></div>' +
        '<div class="ios-scroll"><div class="ios-title">Library</div><div style="height:6px"></div>' +
        secs +
        "</div>" +
        '<div class="ftabs">' +
        tab(IC.photos, "Library", true) +
        tab(IC.heart, "Favorites") +
        tab(IC.albums, "Albums") +
        tab(IC.search, "Search") +
        "</div>" +
        "</div>",
    );
  }

  let pvIdx = 0;
  const pvLiked = {};

  function pvBuild() {
    const v = $("#photo-viewer");
    let thumbs = "";
    photoList.forEach((p, i) => {
      thumbs +=
        '<div class="t" onclick="pvGo(' +
        i +
        ')"><img src="' +
        E(p.url) +
        '" alt=""></div>';
    });
    v.innerHTML =
      '<div class="pv-top">' +
      backRound("closePhotoViewer()") +
      '<div class="pv-badge"><b id="pv-t"></b><small id="pv-s"></small></div>' +
      '<button class="gl round">' +
      IC.more +
      "</button></div>" +
      '<div class="pv-stage" id="pv-stage"><img id="pv-img" src="" alt=""></div>' +
      '<div class="pv-strip" id="pv-strip">' +
      thumbs +
      "</div>" +
      '<div class="pv-bottom"><button class="gl round">' +
      IC.share +
      "</button>" +
      '<div class="gl multi"><span id="pv-heart" onclick="pvHeart()" style="display:flex">' +
      IC.heart +
      "</span>" +
      IC.info +
      "</div>" +
      '<button class="gl round">' +
      IC.trash +
      "</button></div>" +
      homeIndicator;
   
      /* ===== oh bisa zoom by pinch ===== */

    const st = $("#pv-stage"),
      zimg = $("#pv-img");
    const Z = { s: 1, x: 0, y: 0 },
      MAXS = 5;
    const ptrs = new Map();
    let pinch = null,
      drag = null,
      x0 = null,
      moved = 0,
      tapT = 0,
      tapX = 0,
      tapY = 0,
      downT = 0;
    const phoneSc = () => {
      const ph = document.querySelector(".phone");
      return ph ? ph.getBoundingClientRect().width / ph.offsetWidth || 1 : 1;
    };
    const zApply = (anim) => {
      zimg.style.transition = anim
        ? "transform .28s cubic-bezier(.2,.8,.3,1)"
        : "none";
      zimg.style.transform =
        Z.s === 1 && !Z.x && !Z.y
          ? ""
          : "translate(" + Z.x + "px," + Z.y + "px) scale(" + Z.s + ")";
    };
    const zClamp = () => {
      if (Z.s <= 1) {
        Z.x = Z.y = 0;
        return;
      }
      const mx = Math.max(0, (zimg.offsetWidth * Z.s - st.clientWidth) / 2);
      const my = Math.max(0, (zimg.offsetHeight * Z.s - st.clientHeight) / 2);
      Z.x = Math.min(mx, Math.max(-mx, Z.x));
      Z.y = Math.min(my, Math.max(-my, Z.y));
    };
    const zAt = (ns, px, py) => {
      /* zoom tp px py ga berubah */
      ns = Math.min(MAXS, Math.max(1, ns));
      const sc = phoneSc(),
        r = zimg.getBoundingClientRect();
      const c0x = r.left + r.width / 2 - Z.x * sc,
        c0y = r.top + r.height / 2 - Z.y * sc,
        k = ns / Z.s;
      Z.x = (px - c0x - (px - c0x - Z.x * sc) * k) / sc;
      Z.y = (py - c0y - (py - c0y - Z.y * sc) * k) / sc;
      Z.s = ns;
      zClamp();
    };
    window.__pvReset = () => {
      Z.s = 1;
      Z.x = Z.y = 0;
      ptrs.clear();
      pinch = drag = null;
      zimg.style.transition = "none";
      zimg.style.transform = "";
    };
    zimg.draggable = false;
    st.addEventListener("pointerdown", (e) => {
      try {
        st.setPointerCapture(e.pointerId);
      } catch (_) {}
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (ptrs.size === 1) {
        x0 = e.clientX;
        moved = 0;
        downT = Date.now();
        drag = { x: e.clientX, y: e.clientY };
      }
      if (ptrs.size === 2) {
        const [a, b] = [...ptrs.values()];
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s: Z.s };
        drag = null;
      }
    });
    st.addEventListener("pointermove", (e) => {
      const p = ptrs.get(e.pointerId);
      if (!p) return;
      const prevX = p.x,
        prevY = p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      moved = Math.max(
        moved,
        Math.hypot(e.clientX - (x0 === null ? e.clientX : x0), 0),
      );
      if (ptrs.size >= 2 && pinch) {
        const [a, b] = [...ptrs.values()],
          d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        zAt((pinch.s * d) / pinch.d, (a.x + b.x) / 2, (a.y + b.y) / 2);
        zApply(false);
      } else if (drag && Z.s > 1) {
        const sc = phoneSc();
        Z.x += (e.clientX - prevX) / sc;
        Z.y += (e.clientY - prevY) / sc;
        zClamp();
        zApply(false);
      }
    });
    const pEnd = (e) => {
      const had = ptrs.has(e.pointerId);
      ptrs.delete(e.pointerId);
      if (!had) return;
      if (pinch && ptrs.size < 2) {
        pinch = null;
        if (Z.s < 1.05) {
          Z.s = 1;
          Z.x = Z.y = 0;
          zApply(true);
        }
        drag = null;
        if (ptrs.size === 1) {
          const q = [...ptrs.values()][0];
          drag = { x: q.x, y: q.y };
          x0 = null;
        }
        return;
      }
      if (ptrs.size) return;
      const dx = e.clientX - (x0 === null ? e.clientX : x0),
        dy = drag ? e.clientY - drag.y : 0;
      drag = null;
      const isTap =
        Date.now() - downT < 300 && Math.abs(dx) < 8 && Math.abs(dy) < 8;
      if (isTap) {
        const now = Date.now();
        if (
          now - tapT < 320 &&
          Math.hypot(e.clientX - tapX, e.clientY - tapY) < 30
        ) {
          /* double tap */
          tapT = 0;
          if (Z.s > 1.05) {
            Z.s = 1;
            Z.x = Z.y = 0;
          } else zAt(2.6, e.clientX, e.clientY);
          zApply(true);
        } else {
          tapT = now;
          tapX = e.clientX;
          tapY = e.clientY;
        }
      } else if (Z.s <= 1.02 && x0 !== null) {
        if (dx < -45) pvGo(pvIdx + 1);
        else if (dx > 45) pvGo(pvIdx - 1); /* swipe to change image */
      }
      x0 = null;
    };
    st.addEventListener("pointerup", pEnd);
    st.addEventListener("pointercancel", pEnd);
    st.addEventListener(
      "wheel",
      (e) => {
        /* zoom in/out pzke kursor */
        e.preventDefault();
        zAt(
          Z.s * Math.exp(-e.deltaY * (e.ctrlKey ? 0.012 : 0.0025)),
          e.clientX,
          e.clientY,
        );
        zApply(false);
      },
      { passive: false },
    );
  }

  window.pvGo = function (i) {
    if (i < 0 || i >= photoList.length) return;
    pvIdx = i;
    if (window.__pvReset) window.__pvReset();
    const p = photoList[i];
    const img = $("#pv-img");
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "";
    img.src = p.url;
    $("#pv-t").textContent = p.title;
    $("#pv-s").textContent = stripEmoji(p.sub);
    const strip = $("#pv-strip");
    strip
      .querySelectorAll(".t")
      .forEach((t, k) => t.classList.toggle("on", k === i));
    const on = strip.children[i];
    if (on)
      strip.scrollLeft =
        on.offsetLeft - strip.clientWidth / 2 + on.offsetWidth / 2;
    const h = $("#pv-heart");
    if (h) h.parentElement.classList.toggle("liked", !!pvLiked[i]);
  };
  window.pvHeart = function () {
    pvLiked[pvIdx] = !pvLiked[pvIdx];
    $("#pv-heart").parentElement.classList.toggle("liked", pvLiked[pvIdx]);
  };
  window.openPhotoViewer = function (idx) {
    pvBuild();
    $("#photo-viewer").classList.add("active");
    pvGo(idx);
  };
  window.updatePhotoViewer = function () {
    pvGo(pvIdx);
  };

  /* =============== CALENDAR =============== */
  const TH_M = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const TH_D = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const TH_D_SHORT = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  const CAL_EVENTS = [
    {
      month: 5,
      day: 28,
      recurring: true,
      title: "Birthday of the Princess 🎂",
      note: "Remember to prepare a birthday gift.",
    },
  ];
  const calEventsFor = (y, m, d) => {
    const events = CAL_EVENTS.filter(
      (event) =>
        event.month === m &&
        event.day === d &&
        (event.recurring || event.year === y),
    ).map((event) => ({
      time: event.time || "All-day",
      title: event.title,
      note: event.note || "",
    }));
    return events.length ? events : null;
  };
  /* first day of the month yg ada eventnya (dipake otomatis select a day ketika navigating between bulannya) */
  const calFirstEventDay = (y, m) => {
    const n = new Date(y, m + 1, 0).getDate();
    for (let d = 1; d <= n; d++) if (calEventsFor(y, m, d)) return d;
    return null;
  };
  const cal = { y: 2026, m: 5, sel: 28 };
  const keyOf = (y, m, d) => y + "-" + (m + 1) + "-" + d;

  const EN_M = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const EN_M3 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const EN_D = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function renderCalendar() {
    const now = new Date();
    if (!cal._open) {
      cal._open = 1;
      cal.y = now.getFullYear();
      cal.m = now.getMonth();
      cal.sel = now.getDate();
    }
    const RANGE = 18,
      cy = now.getFullYear(),
      cmn = now.getMonth();
    const svg = (d) =>
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      d +
      "</svg>";
    let html = "";
    for (let k = -RANGE; k <= RANGE; k++) {
      const dt = new Date(cy, cmn + k, 1),
        y = dt.getFullYear(),
        m = dt.getMonth();
      const first = dt.getDay(),
        days = new Date(y, m + 1, 0).getDate();
      let cells = "";
      for (let i = 0; i < first; i++) cells += '<div class="cd"></div>';
      for (let d = 1; d <= days; d++) {
        const col = (first + d - 1) % 7,
          evs = calEventsFor(y, m, d);
        const isToday =
          y === now.getFullYear() &&
          m === now.getMonth() &&
          d === now.getDate();
        let pills = "";
        if (evs) {
          pills =
            '<i class="cp">' +
            E(evs[0].title) +
            "</i>" +
            (evs.length > 1
              ? '<i class="cp more">+' + (evs.length - 1) + "</i>"
              : "");
        }
        cells +=
          '<div class="cd' +
          (col === 0 || col === 6 ? " we" : "") +
          (isToday ? " today" : "") +
          (evs ? " hasev" : "") +
          '"' +
          (evs ? ' onclick="calDay(' + y + "," + m + "," + d + ')"' : "") +
          '><span class="dn">' +
          d +
          "</span>" +
          pills +
          "</div>";
      }
      const rest = (7 - ((first + days) % 7)) % 7;
      for (let i = 0; i < rest; i++) cells += '<div class="cd"></div>';
      const cur = y === now.getFullYear() && m === now.getMonth();
      html +=
        '<section class="cm" data-y="' +
        y +
        '" data-m="' +
        m +
        '"><div class="cm-l' +
        (cur ? " now" : "") +
        '" style="padding-left:calc(' +
        first +
        ' * 100% / 7 + 9px)">' +
        EN_M3[m] +
        '</div><div class="cm-g">' +
        cells +
        "</div></section>";
    }
    mount(
      '<div class="ios-app grouped cal-27 cal-real" style="--acc:#ff3b30">' +
        '<div class="ios-top"><button class="gl back cal-yr" onclick="' +
        HOME +
        '">' +
        IC.chevL +
        '<span id="cal-yr">' +
        cal.y +
        "</span></button>" +
        '<div class="gl multi"><span style="display:flex">' +
        svg(
          '<rect x="3" y="3.5" width="18" height="7.5" rx="2.2"/><rect x="3" y="13" width="18" height="7.5" rx="2.2"/><path d="M7 7.2h5M7 16.8h5"/>',
        ) +
        "</span>" +
        '<span style="display:flex">' +
        IC.search +
        '</span><span style="display:flex">' +
        svg('<path d="M12 5v14M5 12h14"/>') +
        "</span></div></div>" +
        '<div class="cal-hd"><h1 id="cal-mt">' +
        EN_M[cal.m] +
        '</h1><div class="cal-wdl"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div></div>' +
        '<div class="cal-months" id="cal-months">' +
        html +
        "</div>" +
        '<div class="cal-bar"><button class="cb-pill cb-today" onclick="calToday()">Today</button>' +
        '<div class="cb-pill cb-duo"><span onclick="calSheet(\'cals\')">' +
        svg(
          '<rect x="3.5" y="4" width="17" height="16" rx="3"/><path d="M8 9.5h.01M12 9.5h.01M16 9.5h.01M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01"/>',
        ) +
        "</span>" +
        "<span onclick=\"calSheet('inbox')\">" +
        svg(
          '<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',
        ) +
        "</span></div></div>" +
        "</div>",
    );
    const box = document.getElementById("cal-months");
    if (!box) return;
    const secs = [].slice.call(box.querySelectorAll(".cm")),
      lab = secs[0].querySelector(".cm-l").offsetHeight;
    const sync = function () {
      const st = box.scrollTop + 2;
      let cur = secs[0];
      for (let i = 0; i < secs.length; i++) {
        if (secs[i].offsetTop + lab <= st) cur = secs[i];
        else break;
      }
      const y = +cur.dataset.y,
        m = +cur.dataset.m;
      cal.y = y;
      cal.m = m;
      const t = document.getElementById("cal-mt"),
        r = document.getElementById("cal-yr");
      if (t && t.textContent !== EN_M[m]) t.textContent = EN_M[m];
      if (r) r.textContent = y;
    };
    const tgt =
      secs.filter(function (x) {
        return +x.dataset.y === cal.y && +x.dataset.m === cal.m;
      })[0] || secs[RANGE];
    box.scrollTop = tgt.offsetTop + lab;
    box.addEventListener("scroll", sync, { passive: true });
    sync();
  }
  window.calDay = function (y, m, d) {
    const evs = calEventsFor(y, m, d) || [];
    if (!evs.length) return;
    cal.y = y;
    cal.m = m;
    cal.sel = d;
    if (evs.length === 1) {
      calEv(0);
      return;
    }
    const host = document.querySelector(".cal-27");
    if (!host || document.querySelector(".cal-sheet-bg")) return;
    const el = document.createElement("div");
    el.className = "cal-sheet-bg";
    el.onclick = calEvClose;
    el.innerHTML =
      '<div class="cal-sheet" onclick="event.stopPropagation()"><div class="cs-top"><button class="gl round" onclick="calEvClose()"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      "<h2>" +
      EN_D[new Date(y, m, d).getDay()] +
      ", " +
      d +
      " " +
      EN_M[m] +
      "</h2>" +
      evs
        .map(function (e, k) {
          return (
            '<div class="cal-ev" style="margin:0 0 8px" onclick="calEvClose();calEv(' +
            k +
            ')"><div class="bar"></div><div><div class="tm">' +
            (e.time === "All-day" ? "All-day" : E(e.time)) +
            "</div><b>" +
            E(e.title) +
            "</b></div></div>"
          );
        })
        .join("") +
      "</div>";
    host.appendChild(el);
  };
  window.calPick = function (d) {
    cal.sel = d;
    renderCalendar();
  };
  (function () {
    var x0 = 0,
      y0 = 0,
      on = false;
    document.addEventListener("pointerdown", function (e) {
      on = !!e.target.closest(".cal-27 .ios-scroll");
      x0 = e.clientX;
      y0 = e.clientY;
    });
    document.addEventListener("pointerup", function (e) {
      if (!on) return;
      on = false;
      var dx = e.clientX - x0,
        dy = e.clientY - y0;
      if (
        Math.abs(dx) > 50 &&
        Math.abs(dx) > Math.abs(dy) * 1.5 &&
        !document.querySelector(".cal-sheet-bg")
      )
        calNav(dx < 0 ? 1 : -1);
    });
  })();
  var CI = function (d) {
    return (
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      d +
      "</svg>"
    );
  };
  window.calEv = function (k) {
    var evs = calEventsFor(cal.y, cal.m, cal.sel) || [],
      e = evs[k];
    if (!e) return;
    var wd = TH_D[new Date(cal.y, cal.m, cal.sel).getDay()];
    var host = document.querySelector(".cal-27");
    if (!host) return;
    var el = document.createElement("div");
    el.className = "cal-sheet-bg";
    el.onclick = calEvClose;
    el.innerHTML =
      '<div class="cal-sheet" onclick="event.stopPropagation()">' +
      '<div class="cs-top"><button class="gl round" onclick="calEvClose()">' +
      CI('<path d="M6 6l12 12M18 6L6 18"/>') +
      "</button></div>" +
      "<h2>" +
      E(e.title) +
      "</h2>" +
      '<div class="cs-row"><i>' +
      CI('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>') +
      "</i><div><b>" +
      EN_D[new Date(cal.y, cal.m, cal.sel).getDay()] +
      ", " +
      cal.sel +
      " " +
      EN_M[cal.m] +
      " " +
      cal.y +
      "</b><small>" +
      (e.time === "All-day" ? "All-day" : E(e.time)) +
      "</small></div></div>" +
      '<div class="cs-row"><i>' +
      CI(
        '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
      ) +
      '</i><div><b>Calendar</b><small><span class="cs-dot"></span>Events</small></div></div>' +
      (e.note
        ? '<div class="cs-row"><i>' +
          CI('<path d="M5 6h14M5 12h14M5 18h9"/>') +
          "</i><div><b>Notes</b><small>" +
          E(e.note) +
          "</small></div></div>"
        : "") +
      "</div>";
    host.appendChild(el);
  };
  window.calSheet = function (kind) {
    var host = document.querySelector(".cal-27");
    if (!host || document.querySelector(".cal-sheet-bg")) return;
    var cals = kind === "cals";
    var el = document.createElement("div");
    el.className = "cal-sheet-bg";
    el.onclick = calEvClose;
    el.innerHTML =
      '<div class="cal-sheet" onclick="event.stopPropagation()">' +
      '<div class="cs-top"><button class="gl round" onclick="calEvClose()">' +
      CI('<path d="M6 6l12 12M18 6L6 18"/>') +
      "</button></div>" +
      "<h2>" +
      (cals ? "Calendars" : "Inbox") +
      "</h2>" +
      (cals
        ? '<div class="cs-row"><i>' +
          CI('<path d="M5 12.5l4.5 4.5L19 7.5"/>') +
          '</i><div><b><span class="cs-dot"></span> Events</b></div></div>'
        : '<div class="cal-empty">No invitations</div>') +
      "</div>";
    host.appendChild(el);
  };
  window.calEvClose = function () {
    var b = document.querySelector(".cal-sheet-bg");
    if (b) b.remove();
  };
  window.calNav = function (n) {
    cal.m += n;
    if (cal.m < 0) {
      cal.m = 11;
      cal.y--;
    } else if (cal.m > 11) {
      cal.m = 0;
      cal.y++;
    }
    cal.sel = calFirstEventDay(cal.y, cal.m);
    renderCalendar();
    var w = document.querySelector(".cal-27 .cal-top-wrap");
    if (w) {
      w.classList.add(n > 0 ? "slide-n" : "slide-p");
    }
  };
  window.calToday = function () {
    const n = new Date();
    cal.y = n.getFullYear();
    cal.m = n.getMonth();
    cal.sel = n.getDate();
    const box = document.getElementById("cal-months");
    const t =
      box &&
      box.querySelector('.cm[data-y="' + cal.y + '"][data-m="' + cal.m + '"]');
    if (t)
      box.scrollTo({
        top: t.offsetTop + t.querySelector(".cm-l").offsetHeight,
        behavior: "smooth",
      });
    else renderCalendar();
  };

  /* =============== SAFARI =============== */

  const sfHistory = [
    "Girls Cooking Games",
    "Couple Keychain Human Made",
    "Dior dress for baby",
    "Pretty name for baby girl",
    "How to grow tomatoes",
    "Orion Seika and Jordanio Nasaka",
    "Jordanio Nasaka's mate",
  ];

  function renderSafari() {
    if (typeof sfYTStop === "function") sfYTStop();
    const favs = [
      ["SHOCK", "rgba(189, 85, 5, 0.8)", '<span style="color: #f9fafc">S</span>'],
      ["SHOCK", "#eb4cf7", "S"],
      [
        "YouTube",
        "#ff0000",
        IC.play.replace("<svg", '<svg style="width:24px;height:24px"'),
      ],
      ["Open Arms", "#5dffa6", "RJW"],
    ]
      .map(
        (f) =>
          "<div onclick=\"sfToast('" +
          f[0] +
          '\')"><div class="sf-tile" style="background:' +
          f[1] +
          '">' +
          f[2] +
          "</div><span>" +
          f[0] +
          "</span></div>",
      )
      .join("");
    const hist = sfHistory
      .map(
        (h, i) =>
          '<div class="row" onclick="sfPick(' +
          i +
          ')">' +
          IC.clock +
          "<span>" +
          E(h) +
          "</span></div>",
      )
      .join("");
    mount(
      '<div class="ios-app grouped">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        "<span></span></div>" +
        '<div class="ios-scroll" style="padding-bottom:160px">' +
        '<div class="sec-h" style="margin-top:6px">Favorites</div><div class="sf-fav">' +
        favs +
        "</div>" +
        '<div class="sec-h">History Search</div><div class="grp sf-hist">' +
        hist +
        "</div>" +
        "</div>" +
        '<div class="sf-bar"><div class="sf-url">' +
        IC.aa.replace("<svg", '<svg style="width:20px;height:20px"') +
        '<span id="sf-url-t">google.com</span>' +
        IC.reload +
        "</div>" +
        '<div class="sf-tools">' +
        IC.chevL +
        IC.chevR.replace("<svg", '<svg class="dis"') +
        IC.share +
        IC.book +
        IC.tabs +
        "</div></div>" +
        "</div>",
    );
  }
  /* render safari gimana */
  window.sfHome = function () {
    renderSafari();
  };
  window.sfToast = function (name) {
    if (name === "YouTube") {
      sfOpenYT();
      return;
    }
    if (name === "K.C. Comp") {
      window.open("https://x.com/ygtreasuremaker/status/2115730449880490342", "Haruto");
      musicToast("open " + name);
      return;
    }
    if (name === "Shopee") {
      window.open("https://x.com/ygtreasuremaker/status/2115730476950515904", "Park Jeongwoo");
      musicToast("open " + name);
      return;
    }
    if (name === "Naver") {
      window.open("https://x.com/treasuremembers/status/1932385253899096201", "Open Arms by Rujeongwoo");
      musicToast("open " + name);
      return;
    }
    musicToast("open " + name);
  };

  /* ---- embed yt video di safari ---- */
  const SF_YT = {
    id: "X5kRwSq49oI",
    title: "TREASURE: PARK JEONGWOO X HARUTO - Stack It Up Cover",
    channel: "TREASURE Official",
  };
  let sfYTPlayer = null,
    sfYTTimer = 0,
    sfYTFailed = false;
  const sfYTLink = "https://youtu.be/" + SF_YT.id;

  function sfYTStop() {
    clearTimeout(sfYTTimer);
    if (sfYTPlayer && sfYTPlayer.destroy) {
      try {
        sfYTPlayer.destroy();
      } catch (e) {}
    }
    sfYTPlayer = null;
  }
  function sfYTFallback() {
    if (sfYTFailed) return;
    sfYTFailed = true;
    clearTimeout(sfYTTimer);
    if (sfYTPlayer && sfYTPlayer.destroy) {
      try {
        sfYTPlayer.destroy();
      } catch (e) {}
    }
    sfYTPlayer = null;
    const box = $("#sf-yt-box");
    if (box)
      box.innerHTML =
        '<div class="sf-yt-fb on"><span>This video cannot be played on this page</span><a href="' +
        sfYTLink +
        '" target="_blank" rel="noopener">Open on YouTube</a></div>';
    musicToast("open YouTube app instead");
    try {
      window.open(sfYTLink, "_blank");
    } catch (e) {} /* if safari blocks pop-ups, user ngeklik button di atas */
  }
  function sfYTLoadApi(cb) {
    if (window.YT && window.YT.Player) {
      cb();
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (prev) {
        try {
          prev();
        } catch (e) {}
      }
      cb();
    };
    if (!document.getElementById("yt-iframe-api")) {
      const sc = document.createElement("script");
      sc.id = "yt-iframe-api";
      sc.src = "https://www.youtube.com/iframe_api";
      sc.onerror = sfYTFallback;
      document.head.appendChild(sc);
    }
  }
  window.sfYTUnmute = function () {
    if (sfYTPlayer && sfYTPlayer.unMute) {
      try {
        sfYTPlayer.unMute();
        sfYTPlayer.setVolume(100);
        sfYTPlayer.playVideo();
      } catch (e) {}
    }
    const b = $("#sf-yt-unmute");
    if (b) b.remove();
  };
  window.sfOpenYT = function () {
    sfYTStop();
    sfYTFailed = false;
    mount(
      '<div class="ios-app grouped">' +
        '<div class="ios-top">' +
        back("Favorites", "sfHome()") +
        "<span></span></div>" +
        '<div class="ios-scroll" style="padding-bottom:160px">' +
        '<div class="sf-yt" id="sf-yt-box"><div id="sf-yt-player"></div><button class="sf-yt-unmute" id="sf-yt-unmute" onclick="sfYTUnmute()">Tap to unmute</button></div>' +
        '<div class="sf-yt-meta"><b>' +
        E(SF_YT.title) +
        "</b><small>" +
        E(SF_YT.channel) +
        "</small></div>" +
        "</div>" +
        '<div class="sf-bar"><div class="sf-url">' +
        IC.aa.replace("<svg", '<svg style="width:20px;height:20px"') +
        '<span id="sf-url-t">youtube.com</span>' +
        IC.reload +
        "</div>" +
        '<div class="sf-tools"><span class="sf-back" onclick="sfHome()">' +
        IC.chevL +
        "</span>" +
        IC.chevR.replace("<svg", '<svg class="dis"') +
        IC.share +
        IC.book +
        IC.tabs +
        "</div></div>" +
        "</div>",
    );
    sfYTTimer = setTimeout(sfYTFallback, 8000); /* โfails load kalo 8s */
    sfYTLoadApi(function () {
      const holder = $("#sf-yt-player");
      if (sfYTFailed || !holder) return;
      /* otomatis playback */
      const ifr = document.createElement("iframe");
      ifr.id = "sf-yt-frame";
      const org = /^https?:/.test(location.protocol)
        ? "&origin=" + encodeURIComponent(location.origin)
        : "";
      ifr.src =
        "https://www.youtube.com/embed/" +
        SF_YT.id +
        "?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1" +
        org;
      ifr.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      ifr.allowFullscreen = true;
      holder.replaceWith(ifr);
      sfYTPlayer = new YT.Player(ifr, {
        events: {
          onReady: function (e) {
            clearTimeout(sfYTTimer);
            try {
              e.target.mute();
              e.target.playVideo();
            } catch (err) {}
            const u = $("#sf-yt-unmute");
            if (u) u.style.display = "block";
          },
          onError: sfYTFallback /* kode apa njir */,
        },
      });
    });
  };
  window.sfOpenTweet = function () {
    sfTWStop();
    sfTWFailed = false;
  };
  
  window.sfPick = function (i) {
    const t = $("#sf-url-t");
    if (t) t.textContent = sfHistory[i];
    musicToast("Search: " + sfHistory[i]);
  };

  /* =============== KAKAOTALK =============== */
  const KK_AV = "riku-10.jpg";
  const kkDef =
    '<div class="k-av k-def"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="9" r="4"/><path d="M4 21c1-4.5 4.2-6.5 8-6.5s7 2 8 6.5z"/></svg></div>';
  const kkTabs = (on) => {
    const t = (icon, label, k, fn) =>
      '<div class="ftab' +
      (on === k ? " on" : "") +
      '"' +
      (fn ? ' onclick="' + fn + '"' : "") +
      ">" +
      icon +
      "<span>" +
      label +
      "</span></div>";
    return (
      '<div class="ftabs">' +
      t(IC.person, "Friends", "f", "renderKakaoFriends()") +
      t(IC.bubble, "Chats", "c", "renderKakaoHome()") +
      t(IC.eye, "Openchat", "o") +
      t(
        IC.more.replace("<svg", '<svg style="width:24px;height:24px"'),
        "More",
        "m",
      ) +
      "</div>"
    );
  };

  const kkFmt = (y, mo, d, h, mi) => Date.UTC(y, mo - 1, d, h, mi);
  const kkChats = {
    sion_kakao: {
      name: "Princess",
      av: "riku-10.jpg",
      pinned: true,
      msgs: kakaoMessages,
    },
    siyeon: {
      name: "Siyeon",
      av: "coco-1.jpg",
      label: "3 July",
      ts: kkFmt(2026, 7, 3, 22, 10),
      msgs: [
        { type: "date", text: "8 July 2026" },
        { sender: "them", text: "Have you eaten yet?", time: "12:30" },
        { sender: "sion", text: "I've eaten", time: "12:41" },
        { sender: "them", text: "What did you eat?", time: "12:41" },
        { sender: "sion", text: "Rice with soup", time: "12:42" },
        {
          sender: "them",
          text: "Don't just stick to coffee",
          time: "12:43",
        },
        { sender: "them", text: "What time did you go to bed?", time: "12:43" },
        { sender: "sion", text: "It's not that late", time: "12:45" },
        { sender: "them", text: "That means it's late, right?", time: "12:45" },
        { sender: "sion", text: "ㅋㅋㅋ", time: "12:46" },
        {
          sender: "them",
          text: "Go to bed early, tonight!",
          time: "12:46",
        },

        { type: "date", text: "27 June 2026" },
        {
          sender: "them",
          text: "Hey, isn't tomorrow RK bday?",
          time: "20:05",
        },
        {
          sender: "them",
          text: "HAve you prepared gift yet?",
          time: "20:05",
        },
        { sender: "sion", text: "Ready", time: "20:12" },
        { sender: "them", text: "What is it?", time: "20:12" },
        { sender: "sion", text: "A secret", time: "20:13" },
        { sender: "them", text: "A lot of secrets", time: "20:13" },
        { sender: "them", text: "But please take care of RK", time: "20:14" },
        { sender: "sion", text: "Okay, I know", time: "20:15" },
      ],
    },
    mom: {
      name: "Mom",
      av: null,
      label: "3 July",
      ts: kkFmt(2026, 7, 3, 12, 41),
      msgs: [
        { type: "date", text: "10 June 2026" },
        { sender: "them", text: "Are you awake yet?", time: "09:00" },
        {
          sender: "them",
          text: "Did you have breakfast? Don't skip meals",
          time: "09:00",
        },
        { sender: "sion", text: "I've eaten Mom", time: "11:30" },
        {
          sender: "them",
          text: "That's good, dear",
          time: "11:32",
        },
      ],
    },
    daeyoung: {
      name: "Daeyoung",
      av: "daeyoung-1.jpg",
      label: "2 July",
      ts: kkFmt(2026, 7, 2, 23, 10),
      msgs: [
        { type: "date", text: "14 June 2026" },
        { sender: "them", text: "SN -san~", time: "13:20" },
        {
          sender: "them",
          text: "How have you been?",
          time: "13:20",
        },
        {
          sender: "sion",
          text: "I'm doing well. How about you, DY?",
          time: "13:34",
        },
      ],
    },
  };
  const kkOrder = () =>
    Object.keys(kkChats).sort((a, b) => {
      const A = kkChats[a],
        B = kkChats[b];
      if (A.pinned !== B.pinned)
        return A.pinned ? -1 : 1; /* si putri selalu recents cenah */
      return (B.ts || 0) - (A.ts || 0);
    });
  const kkAvHtml = (c, cls) =>
    c.av
      ? '<div class="' + cls + '"><img src="' + c.av + '" alt=""></div>'
      : kkDef.replace("k-av", cls);
  const kkLastMsg = (c) => {
    for (let i = c.msgs.length - 1; i >= 0; i--)
      if (c.msgs[i].type !== "date") return c.msgs[i];
    return { text: "", time: "" };
  };

  function renderKakaoHome() {
    const rows = kkOrder()
      .map((id) => {
        const c = kkChats[id],
          last = kkLastMsg(c);
        const unread = c.pinned && appBadges.kakaotalk > 0;
        return (
          '<div class="row k-row" onclick="openKakaoChat(\'' +
          id +
          "')\">" +
          kkAvHtml(c, "k-av") +
          '<div class="k-info"><div class="k-name">' +
          E(c.name) +
          '</div><div class="k-prev">' +
          E(last.text).replace(/\n/g, " ") +
          "</div></div>" +
          '<div class="k-meta"><span class="k-time">' +
          E(c.label || last.time) +
          "</span>" +
          (unread
            ? '<span class="k-badge">' + appBadges.kakaotalk + "</span>"
            : "") +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    mount(
      '<div class="ios-app kk">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<div class="gl multi" style="color:#000;gap:12px">' +
        IC.search +
        IC.bubble +
        IC.gear +
        "</div></div>" +
        '<div class="ios-scroll"><div class="k-big">Chats</div>' +
        rows +
        "</div>" +
        kkTabs("c") +
        "</div>",
    );
  }

  function renderKakaoFriends() {
    const ids = ["sion_kakao", "mom", "siyeon", "yushi", "daeyoung"];
    const rows = ids
      .map((id) => {
        const c = kkChats[id];
        return (
          '<div class="row k-row" onclick="openKakaoChat(\'' +
          id +
          "')\">" +
          kkAvHtml(c, "k-av k-sm") +
          '<div class="k-info"><div class="k-name">' +
          E(c.name) +
          "</div></div></div>"
        );
      })
      .join("");
    mount(
      '<div class="ios-app kk">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<div class="gl multi" style="color:#000;gap:12px">' +
        IC.search +
        IC.person.replace("<svg", '<svg style="width:20px;height:20px"') +
        IC.gear +
        "</div></div>" +
        '<div class="ios-scroll"><div class="k-big">Friends</div>' +
        '<div class="row k-row k-me" onclick="musicToast(\'S\')"><div class="k-av"><img src="sion-3.jpg" alt=""></div>' +
        '<div class="k-info"><div class="k-name" style="font-size:17px;font-weight:700">S</div></div></div>' +
        '<div class="k-sec">Friends <span>' +
        ids.length +
        "</span></div>" +
        rows +
        "</div>" +
        kkTabs("f") +
        "</div>",
    );
  }
  window.renderKakaoFriends = renderKakaoFriends;
  window.renderKakaoHome = renderKakaoHome;

  function kakaoBubbles(c) {
    const msgs = c.msgs;
    const avInner = c.av
      ? '<img src="' + c.av + '" alt="">'
      : kkDef.replace(/^<div[^>]*>/, "").replace(/<\/div>$/, "");
    const avCls = c.av ? "kk-av2" : "kk-av2 k-def";
    let h = "";
    msgs.forEach((m, i) => {
      if (m.type === "date") {
        h += '<div class="kk-date"><span>' + E(m.text) + "</span></div>";
        return;
      }
      const prev = msgs[i - 1],
        next = msgs[i + 1];
      const first = !prev || prev.type === "date" || prev.sender !== m.sender;
      const showTime =
        !next ||
        next.type === "date" ||
        next.sender !== m.sender ||
        next.time !== m.time;
      const text = E(m.text).replace(/\n/g, "<br>");
      const time = showTime
        ? '<span class="kk-t">' + E(m.time) + "</span>"
        : "";
      if (m.sender !== "sion") {
        h +=
          '<div class="kk-l' +
          (first ? " first" : "") +
          '">' +
          (first
            ? '<div class="' + avCls + '">' + avInner + "</div>"
            : '<div class="kk-spacer"></div>') +
          '<div class="kk-col">' +
          (first ? '<div class="kk-sender">' + E(c.name) + "</div>" : "") +
          '<div class="kk-wrap"><div class="kk-b l">' +
          text +
          "</div>" +
          time +
          "</div></div></div>";
      } else {
        h +=
          '<div class="kk-r' +
          (first ? " first" : "") +
          '">' +
          time +
          '<div class="kk-b r">' +
          text +
          "</div></div>";
      }
    });
    return h;
  }

  window.openKakaoChat = function (id) {
    const c = kkChats[id] || kkChats.sion_kakao;
    if (c.pinned) {
      appBadges.kakaotalk = 0;
      renderHomeAndDock();
    }
    mount(
      '<div class="ios-app full kk kk-room" style="height:calc(100% + 34px);margin-bottom:-34px">' +
        '<div class="ios-top">' +
        backRound("renderKakaoHome()") +
        '<span class="ctr kk-name" style="top:50px">' +
        E(c.name) +
        "</span>" +
        '<div class="gl multi" style="color:#000;gap:12px">' +
        IC.search +
        IC.more +
        "</div></div>" +
        '<div class="kk-area" id="kk-area">' +
        kakaoBubbles(c) +
        "</div>" +
        '<div class="kk-input"><button class="gl round">' +
        IC.plus +
        "</button>" +
        '<div class="kk-field"><input type="text" placeholder="Send a message..."><span class="ib">#</span></div></div>' +
        "</div>",
    );
    const a = $("#kk-area");
    if (a) a.scrollTop = a.scrollHeight;
    if (id === "sion_kakao" && window.__kkAttach)
      window.__kkAttach(); /* main room : scripted (ga ada pilihannye) */
  };

  /* =============== INSTAGRAM =============== */
  const igState = {}; /* kalo ngelike nanti jadi liked */
  const igNum = (s) => parseInt(String(s).replace(/[^\d]/g, ""), 10) || 0;
  const igFmt = (n) => Number(n).toLocaleString("en-US");
  const igUserKey = {
    jdnasa_official: "ofc_nasa",
    orionsei: "orion",
    jdnasa: "nasa",
  };
  let igFrom = null; /* back button ke tempat seharusnya */

  function igBase(img, ownerKey) {
    const f = igFeedPosts.find((p) => p.img === img);
    if (f) return igNum(f.likes);
    let h = 0;
    for (let i = 0; i < img.length; i++)
      h = (h * 31 + img.charCodeAt(i)) % 100003;
    return ownerKey === "sion" ? 8000 + (h % 40000) : 180 + (h % 520);
  }
  function igBioHtml(text) {
    return E(text).replace(/@([A-Za-z0-9_.]+)/g, (m, u) =>
      igUserKey[u]
        ? '<a class="ig-mention" onclick="igGoto(\'' +
          igUserKey[u] +
          "')\">" +
          m +
          "</a>"
        : m,
    );
  }

  function igFeed() {
    const ring = (src, cls) =>
      '<div class="ig-ring ' +
      (cls || "") +
      '"><div><img src="' +
      E(src) +
      '" alt=""></div></div>';
    const posts = igFeedPosts
      .map(
        (p, i) =>
          '<div class="ig-post">' +
          '<div class="ig-ph"><div onclick="igGoto(\'ofc_nasa\')">' +
          ring(p.avatar, "sm " + igRingCls("ofc_nasa")) +
          "<b>" +
          E(p.username) +
          "</b></div>" +
          "</div>" +
          '<div class="ig-img" onclick="igTap(' +
          i +
          ',this,event)"><img src="' +
          E(p.img) +
          '" alt=""></div>' +
          '<div class="ig-acts"><div>' +
          '<button class="ig-heart' +
          (igState[p.img] ? " on" : "") +
          '" id="ig-h' +
          i +
          '" onclick="igLike(' +
          i +
          ')">' +
          IC.heart +
          "</button>" +
          "</div>" +
          "</div>" +
          '<div class="ig-likes" id="ig-l' +
          i +
          '">likes ' +
          igFmt(igNum(p.likes) + (igState[p.img] ? 1 : 0)) +
          " </div>" +
          (p.caption && p.caption.trim()
            ? '<div class="ig-cap"><b>' +
              E(p.username) +
              "</b>" +
              E(p.caption) +
              "</div>"
            : "") +
          "</div>",
      )
      .join("");
    return (
      '<div class="ios-title" style="display:none"></div>' +
      posts
    );
  }

  function igMeKey() {
    return igProfiles.orion
      ? "orion"
      : igProfiles.sion
        ? "sion"
        : Object.keys(igProfiles)[0];
  }

  function igProfile(k) {
    const p = igProfiles[k];
    const mine = k === igMeKey();
    return (
      '<div class="ig-prof"><div class="ig-ring lg ' +
      igRingCls(k) +
      '"' +
      (igStoryData[k]
        ? ' style="cursor:pointer" onclick="openIgStory(\'' + k + "')\""
        : "") +
      '><div><img src="' +
      E(p.avatar) +
      '" alt=""></div></div>' +
      '<div class="ig-stats"><div><b>' +
      E(p.postsCount) +
      "</b><small>Post</small></div><div><b>" +
      E(p.followers) +
      "</b><small>Followers</small></div><div><b>" +
      E(p.following) +
      "</b><small>Following</small></div></div></div>" +
      '<div class="ig-bio"><b>' +
      E(p.name || p.username) +
      "</b><span>" +
      igBioHtml(p.bio) +
      "</span></div>" +
      '<div class="ig-btns">' +
      (mine
        ? "<button>Edit profile</button><button>Share profile</button>"
        : '<button>Following</button><button type="button" onclick="igMessage(\'' +
          k +
          "')\">Message</button>") +
      "</div>" +
      '<div class="ig-ptabs"><div class="on">' +
      IC.grid +
      "</div><div>" +
      IC.reel +
      "</div><div>" +
      IC.tagged +
      "</div></div>" +
      '<div class="ig-grid">' +
      p.posts
        .map(
          (x, i) =>
            "<div onclick=\"openIgPost('" +
            k +
            "'," +
            i +
            ')"><img src="' +
            E(x.img) +
            '" alt="" loading="lazy"></div>',
        )
        .join("") +
      "</div>"
    );
  }

  function igPostView(k, i) {
    const p = igProfiles[k];
    const head =
      '<div class="ig-pv-head"><small>' +
      E(p.username) +
      "</small><b>Post</b></div>";
    const posts = p.posts
      .map((x, n) => {
        const on = !!igState[x.img];
        return (
          '<div class="ig-post" id="ig-pv-' +
          n +
          '">' +
          '<div class="ig-ph"><div onclick="igGoto(\'' +
          k +
          '\')"><div class="ig-ring sm ' +
          igRingCls(k) +
          '"><div><img src="' +
          E(p.avatar) +
          '" alt=""></div></div><b>' +
          E(p.username) +
          "</b></div>" +
          IC.more +
          "</div>" +
          '<div class="ig-img" onclick="igTapPost(\'' +
          k +
          "'," +
          n +
          ',this,event)"><img src="' +
          E(x.img) +
          '" alt=""></div>' +
          '<div class="ig-acts"><div>' +
          '<button class="ig-heart' +
          (on ? " on" : "") +
          '" id="ig-hp' +
          n +
          '" onclick="igLikePost(\'' +
          k +
          "'," +
          n +
          ')">' +
          IC.heart +
          "</button>" +
          igActs(x.img, igBase(x.img, k), x.comments, x.reposts) +
          "</div>" +
          igIc(IC.bookmark) +
          "</div>" +
          '<div class="ig-likes" id="ig-lp' +
          n +
          '">likes ' +
          igFmt(igBase(x.img, k) + (on ? 1 : 0)) +
          " </div>" +
          (x.caption && x.caption.trim()
            ? '<div class="ig-cap"><b>' +
              E(p.username) +
              "</b>" +
              E(x.caption) +
              "</div>"
            : "") +
          "</div>"
        );
      })
      .join("");
    return head + posts;
  }

  /* Ig floating bawah */
  function igUnreadBadge() {
    const n =
      (typeof instagramDmChats !== "undefined" &&
        instagramDmChats.riku_new &&
        instagramDmChats.riku_new.unreadN) ||
      0;
    return n > 0 ? '<b class="ig-tb">' + n + "</b>" : "";
  }
  function igTabBar(on) {
    const meKey = igMeKey();
    const me = meKey ? igProfiles[meKey] : null;
    return (
      '<div class="ig-tabs">' +
      '<div class="ig-t' +
      (on === "home" ? " on" : "") +
      '" onclick="openIgHome()">' +
      (on === "home" ? IC.igHomeOn : IC.igHome) +
      "</div>" +
      '<div class="ig-t">' +
      IC.reel +
      "</div>" +
      '<div class="ig-t' +
      (on === "dm" ? " on" : "") +
      '" onclick="openInstagramDM()" aria-label="Messages">' +
      IC.send +
      igUnreadBadge() +
      "</div>" +
      '<div class="ig-t">' +
      IC.search +
      "</div>" +
      '<div class="ig-t me' +
      (on === "me" ? " on" : "") +
      '"' +
      (meKey ? ' onclick="openIgProfile(\'' + meKey + '\')"' : "") +
      '><img src="' +
      E(me ? me.avatar : "") +
      '" alt=""></div>' +
      "</div>"
    );
  }
  function igRender(view, postIdx) {
    const isHome = view === "home";
    const isPost = postIdx !== undefined;
    const prof = isHome ? null : igProfiles[view];
    let top;
    if (isHome) {
      top =
        '<div class="ios-top">' +
        backRound(HOME) +
        '<span class="ctr ig-word">Instagram</span><span class="ig-top-spacer"></span></div>';
    } else if (isPost) {
      top =
        '<div class="ios-top">' +
        back(prof.username, "openIgProfile('" + view + "',true)") +
        '<span class="ctr ig-uname" style="opacity:0"></span><button class="gl round" style="color:#000">' +
        IC.more +
        "</button></div>";
    } else {
      const bl = igFrom ? igFrom.label : "ฟีด",
        bf = igFrom ? igFrom.fn : "openIgHome()";
      top =
        '<div class="ios-top">' +
        back(bl, bf) +
        '<span class="ctr ig-uname">' +
        E(prof.username) +
        '</span><button class="gl round" style="color:#000">' +
        IC.more +
        "</button></div>";
    }
    $("#instagram-screen").innerHTML =
      '<div class="ios-app full">' +
      top +
      '<div class="ios-scroll" id="ig-content-area" style="padding-bottom:24px">' +
      (isHome
        ? igFeed()
        : isPost
          ? igPostView(view, postIdx)
          : igProfile(view)) +
      "</div>" +
      igTabBar(isHome ? "home" : "me") +
      homeIndicator +
      "</div>";
    if (isPost) {
      const sc = $("#ig-content-area"),
        t = $("#ig-pv-" + postIdx);
      if (sc && t) sc.scrollTop = Math.max(0, t.offsetTop - 96);
    }
  }

  /* ===================== Instagram Stories ===================== */
  const igSeen = {}; /* igSeen[user] = number of stories diliat */
  const igStoryLiked = {};
  function igRingCls(k) {
    const d = igStoryData[k];
    if (!d) return "";
    const n = igSeen[k] || 0;
    if (n >= d.items.length) return "seen";
    /* ring buat stories: kalo cf ijo, lainnya biasa */
    const latest = d.items[d.items.length - 1];
    if (!latest || latest.type !== "cf") return "";
    /* yg punya story bisa liat sendiri = masuk ke cf */
    return "cf";
  }
  const igStarIc =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.8 2.7 5.8 6.3.8-4.6 4.4 1.2 6.3L12 17.1l-5.6 3 1.2-6.3L3 9.4l6.3-.8z"/></svg>';
  const igXIc =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  let igSv = null;
  const igOrder = ["sion", "riku"];
  const igFakeViewers = [
    ["jisoo.__lee", "이지수"],
    ["mina_0315", "Mina 🌷"],
    ["yuna.kr", "유나"],
    ["haru_ssi", "haru"],
    ["nanami.t", "Nanami"],
    ["seoul.daily_", "서울 데일리"],
    ["ten.ten_10", "tenten"],
    ["aoi_rin", "Aoi Rin"],
    ["jiho.pic", "지호 | photo"],
    ["soyeon_99", "soyeon ☁️"],
  ];
  const igReacts = ["😂", "😮", "😍", "😢", "👏", "🔥"];
  const igQuick = [
    "อืม ดูดีนะ",
    "กินข้าวหรือยัง",
    "อย่านอนดึกล่ะ",
    "เจอกันนะ",
  ]; /* tonenya SN kalem */

  window.openIgStory = function (k) {
    const d = igStoryData[k];
    if (!d) return;
    const scr = $("#instagram-screen"),
      host = scr.querySelector(".ios-app") || scr;
    const startAt = (igSeen[k] || 0) >= d.items.length ? 0 : igSeen[k] || 0;
    closeIgStory(true);
    const el = document.createElement("div");
    el.className = "ig-sv";
    host.appendChild(el);
    igSv = {
      k,
      d,
      i: startAt,
      el,
      timer: null,
      t0: 0,
      left: 0,
      paused: false,
      sheet: false,
    };
    igSvShow();
    /* gestures */
    let sx = 0,
      sy = 0,
      st = 0,
      moved = false,
      dy = 0;
    el.addEventListener("mousedown", (e) => {
      if (e.target.closest(".ig-sv-react, .ig-sv-quick, .ig-sv-foot > span"))
        e.preventDefault();
    });
    el.addEventListener("pointerdown", (e) => {
      if (igSv && igSv.sheet) return;
      if (
        e.target.closest(
          ".ig-sv-foot, .ig-sv-sheet, .ig-sv-head svg, .ig-sv-react, .ig-sv-quick",
        )
      )
        return;
      sx = e.clientX;
      sy = e.clientY;
      st = Date.now();
      moved = false;
      dy = 0;
      igSvPause(true);
      try {
        el.setPointerCapture(e.pointerId);
      } catch (_) {}
    });
    el.addEventListener("pointermove", (e) => {
      if (!st) return;
      dy = e.clientY - sy;
      if (Math.abs(dy) > 8) moved = true;
      if (dy > 0 && moved)
        el.style.transform =
          "translateY(" +
          dy * 0.6 +
          "px) scale(" +
          (1 - Math.min(dy, 300) / 1800) +
          ")";
    });
    const end = (e) => {
      if (!st) return;
      const held = Date.now() - st,
        x = e.clientX - el.getBoundingClientRect().left,
        w = el.clientWidth;
      st = 0;
      el.style.transform = "";
      if (moved && dy > 90) {
        closeIgStory();
        return;
      }
      igSvPause(false);
      if (!moved && held < 220) {
        x < w * 0.3 ? igSvStep(-1) : igSvStep(1);
      }
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", () => {
      st = 0;
      el.style.transform = "";
      igSvPause(false);
    });
  };

  function igSvShow() {
    const S = igSv;
    if (!S) return;
    const k = S.k,
      d = S.d,
      it = d.items[S.i],
      prof = igProfiles[k],
      mine = k === "sion";
    igSeen[k] = Math.max(igSeen[k] || 0, S.i + 1);
    const bars = d.items
      .map(
        (x, n) =>
          '<i class="' +
          (n < S.i ? "done" : n === S.i ? "run" : "") +
          '"><b></b></i>',
      )
      .join("");
    const cf = it.type === "cf";
    const heartOn = !!igStoryLiked[k + S.i];
    const cfN = (d.closeFriends || []).length;
    let foot;
    if (mine) {
      const people = igPeople(d),
        av = it.viewers
          .slice(0, 3)
          .map((id) => '<img src="' + E(people[id].avatar) + '" alt="">')
          .join("");
      foot =
        '<div class="own" onclick="igSvSheet(true)"><span class="seen"><span class="stk">' +
        av +
        "</span>ผู้ชม " +
        E(it.views) +
        '</span><span class="lk">' +
        IC.heart +
        E(it.likes) +
        "</span></div>";
    } else {
      foot =
        '<input class="msg" id="ig-sv-in" placeholder="Message..." autocomplete="off" inputmode="none" enterkeyhint="send" autocapitalize="off" spellcheck="false" onfocus="igSvTyping(true)" onblur="igSvTyping(false)" onkeydown="if(event.key===\'Enter\')igSvSend()"><span onclick="igSvLike()">' +
        IC.heart.replace(
          "<svg",
          '<svg id="ig-sv-h" class="' + (heartOn ? "on" : "") + '"',
        ) +
        '</span><span onclick="igSvSend()">' +
        IC.send +
        "</span>";
    }
    S.el.innerHTML =
      '<div class="ig-sv-bg" style="background-image:url(\'' +
      E(it.img) +
      "')\"></div>" +
      '<div class="ig-sv-frame"><img src="' +
      E(it.img) +
      '" alt=""></div>' +
      '<div class="ig-sv-bars">' +
      bars +
      "</div>" +
      '<div class="ig-sv-head"><img class="av" src="' +
      E(prof.avatar) +
      '" alt=""><b>' +
      E(prof.username) +
      "</b><small>" +
      E(it.time) +
      "</small>" +
      (cf ? '<span class="ig-sv-cf">' + igStarIc + "</span>" : "") +
      '<span class="sp"></span><span onclick="igSvMenu()">' +
      IC.more +
      '</span><span onclick="closeIgStory()">' +
      igXIc +
      "</span></div>" +
      (mine
        ? ""
        : '<div class="ig-sv-quick">' +
          (it.quick || igQuick)
            .map(
              (q, n) =>
                '<b onpointerdown="igSvQuick(' + n + ', event)">' + q + "</b>",
            )
            .join("") +
          '</div><div class="ig-sv-react">' +
          igReacts
            .map(
              (e) =>
                "<span onpointerdown=\"igSvReact('" +
                e +
                "', event)\">" +
                e +
                "</span>",
            )
            .join("") +
          "</div>") +
      '<div class="ig-sv-foot">' +
      foot +
      "</div>" +
      '<div class="ig-sv-shade" onclick="igSvSheet(false)"></div>' +
      '<div class="ig-sv-sheet" id="ig-sv-sheet">' +
      igSvSheetHtml(S, cf) +
      "</div>";
    /* biar tombol di header ga ketrigger */
    S.el
      .querySelectorAll(".ig-sv-head svg, .ig-sv-head span[onclick]")
      .forEach((n) =>
        n.addEventListener("pointerdown", (e) => e.stopPropagation()),
      );
    const run = S.el.querySelector(".ig-sv-bars i.run");
    S.left = 5000;
    if (run) run.style.setProperty("--d", "5s");
    S.t0 = Date.now();
    S.paused = false;
    clearTimeout(S.timer);
    S.timer = setTimeout(() => igSvStep(1), S.left);
  }
  function igPeople(d) {
    const o = {};
    (d.closeFriends || []).forEach((f) => (o[f.id] = f));
    return o;
  }
  function igSvSheetHtml(S, cf) {
    if (S.k !== "sion") return "";
    const it = S.d.items[S.i],
      people = igPeople(S.d);
    const heart =
      '<svg class="hr" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/></svg>';
    const order = it.viewers
      .slice()
      .sort(
        (a, b) => (it.likedBy.indexOf(b) >= 0) - (it.likedBy.indexOf(a) >= 0),
      );
    const rows = order
      .map((id) => {
        const f = people[id],
          liked = it.likedBy.indexOf(id) >= 0;
        return (
          '<div class="ig-sv-row"><img src="' +
          E(f.avatar) +
          '" alt=""><div><b>' +
          E(f.user) +
          "</b><small>" +
          E(f.name) +
          "</small></div>" +
          (liked ? heart : "") +
          "</div>"
        );
      })
      .join("");
    const hue = (n) => (n * 47) % 360;
    const extra = cf
      ? ""
      : igFakeViewers
          .map(
            (v, n) =>
              '<div class="ig-sv-row"><span class="iav" style="background:hsl(' +
              hue(n + 3) +
              ',45%,42%)">' +
              E(v[0][0].toUpperCase()) +
              "</span><div><b>" +
              E(v[0]) +
              "</b><small>" +
              E(v[1]) +
              "</small></div>" +
              (n % 4 === 1 ? heart : "") +
              "</div>",
          )
          .join("");
    return (
      '<div class="grab"></div><h4>กิจกรรมของสตอรี่</h4>' +
      '<div class="sub">' +
      (cf
        ? igStarIc.replace("<svg", '<svg class="st"') +
          " แชร์กับเพื่อนสนิท " +
          (S.d.closeFriends || []).length +
          " · "
        : "") +
      "ดูแล้ว " +
      E(it.views) +
      " · likes " +
      E(it.likes) +
      "</div>" +
      '<div class="srch">' +
      IC.search +
      "Search</div>" +
      rows +
      extra
    );
  }
  window.igSvSheet = function (open) {
    if (!igSv) return;
    const sh = $("#ig-sv-sheet"),
      sd = igSv.el.querySelector(".ig-sv-shade");
    if (!sh) return;
    if (!open && sh.dataset.prev) {
      setTimeout(() => {
        if (sh.dataset.prev) {
          sh.innerHTML = sh.dataset.prev;
          sh.dataset.prev = "";
        }
      }, 300);
    }
    sh.classList.toggle("open", open);
    sd.classList.toggle("open", open);
    igSv.sheet = open;
    igSvPause(open);
  };
  function igSvPause(on) {
    const S = igSv;
    if (!S) return;
    if (!on && S.sheet) return;
    if (on && !S.paused) {
      S.paused = true;
      clearTimeout(S.timer);
      S.left = Math.max(0, S.left - (Date.now() - S.t0));
      S.el.classList.add("paused");
    } else if (!on && S.paused) {
      S.paused = false;
      S.t0 = Date.now();
      S.el.classList.remove("paused");
      S.timer = setTimeout(() => igSvStep(1), S.left);
    }
  }
  function igSvStep(dir) {
    const S = igSv;
    if (!S) return;
    const n = S.i + dir;
    if (n < 0) {
      const pk = igOrder[igOrder.indexOf(S.k) - 1];
      if (pk && igStoryData[pk]) {
        igSvSwitch(pk, igStoryData[pk].items.length - 1, "swr");
        return;
      }
      S.i = 0;
      igSvShow();
      return;
    }
    if (n >= S.d.items.length) {
      const nk = igOrder[igOrder.indexOf(S.k) + 1];
      if (nk && igStoryData[nk]) {
        igSvSwitch(nk, 0, "swl");
        return;
      }
      closeIgStory();
      return;
    }
    S.i = n;
    igSvShow();
  }

  function igSvSwitch(k, i, cls) {
    const S = igSv;
    if (!S) return;
    clearTimeout(S.timer);
    S.k = k;
    S.d = igStoryData[k];
    S.i = i;
    S.sheet = false;
    S.el.classList.remove("swl", "swr", "paused", "typing");
    void S.el.offsetWidth;
    S.el.classList.add(cls);
    igSvShow();
  }
  window.igSvTyping = function (on) {
    const S = igSv;
    if (!S) return;
    S.el.classList.toggle("typing", on);
    if (on) igSvPause(true);
    else
      setTimeout(() => {
        const i = $("#ig-sv-in");
        if (igSv && !(i && i.value)) igSvPause(false);
      }, 120);
  };
  function igSvToast(t) {
    const S = igSv;
    if (!S) return;
    const d = document.createElement("div");
    d.className = "ig-sv-sent";
    d.textContent = t;
    S.el.appendChild(d);
    setTimeout(() => d.remove(), 1400);
  }
  /* rep story langsung buka DM RK */
  function igSvPushDm(text, react) {
    const c = instagramDmChats && instagramDmChats.riku_new;
    if (!c) return;
    const S = igSv,
      it = S && S.d && S.d.items[S.i];
    const m = { type: "outgoing", text: text };
    if (it && S.k !== "sion") {
      m.story = it.img;
      if (react) m.react = true;
    }
    c.messages.push(m);
  }
  window.igSvSend = function () {
    const S = igSv;
    if (!S || S.k === "sion") return;
    const i = $("#ig-sv-in");
    const v = i ? i.value.trim() : "";
    if (!v) return;
    igSvPushDm(v);
    i.value = "";
    i.blur();
    igSvToast("ส่งแล้ว");
    S.el.classList.remove("typing");
    setTimeout(() => igSvPause(false), 50);
  };
  /* mirip kek reactions IG) */
  function igSvBurst(emoji, src, n) {
    const S = igSv;
    if (!S) return;
    const el = S.el,
      r = el.getBoundingClientRect(),
      sc = r.width / el.offsetWidth || 1;
    let ox = el.offsetWidth / 2,
      oy = el.offsetHeight - 150;
    if (src && src.getBoundingClientRect) {
      const b = src.getBoundingClientRect();
      ox = (b.left + b.width / 2 - r.left) / sc;
      oy = (b.top + b.height / 2 - r.top) / sc;
    }
    for (let k = 0; k < n; k++) {
      const f = document.createElement("div");
      f.className = "ig-sv-fly";
      f.textContent = emoji;
      const sz = 26 + Math.random() * 30;
      f.style.cssText =
        "left:" +
        ox +
        "px;top:" +
        oy +
        "px;font-size:" +
        sz +
        "px;--dx:" +
        ((Math.random() - 0.5) * 150).toFixed(0) +
        "px;--dy:" +
        (-(220 + Math.random() * 190)).toFixed(0) +
        "px;--rot:" +
        ((Math.random() - 0.5) * 50).toFixed(0) +
        "deg;--dur:" +
        (1.3 + Math.random() * 0.9).toFixed(2) +
        "s;animation-delay:" +
        (k * 70 + Math.random() * 60).toFixed(0) +
        "ms";
      el.appendChild(f);
      setTimeout(() => f.remove(), 2800);
    }
  }
  window.igSvQuick = function (n, ev) {
    const S = igSv;
    if (!S || S.k === "sion") return;
    if (ev) {
      ev.preventDefault && ev.preventDefault();
      ev.stopPropagation && ev.stopPropagation();
    }
    const it = S.d.items[S.i];
    if (!it) return;
    const text = (it.quick || igQuick)[n];
    if (!text) return;
    igSvPushDm(text);
    const i = $("#ig-sv-in");
    if (i) {
      i.value = "";
      i.blur();
    }
    igSvToast("ส่งแล้ว");
    S.el.classList.remove("typing");
    setTimeout(() => igSvPause(false), 50);
    if (it.replies && it.replies[n])
      igRikuReply(it.replies[n], it.next && it.next[n]); /* RK ngerep DM */
  };
  window.igSvReact = function (e, ev) {
    const S = igSv;
    if (!S || S.k === "sion") return;
    if (ev) {
      ev.preventDefault && ev.preventDefault();
      ev.stopPropagation && ev.stopPropagation();
    }
    const src =
      ev && ev.currentTarget && ev.currentTarget.getBoundingClientRect
        ? ev.currentTarget
        : null;
    if (src) {
      src.classList.remove("pop");
      void src.offsetWidth;
      src.classList.add("pop");
    }
    if (S.rxAt && Date.now() - S.rxAt < 180)
      return; /* rapid taps biar gak double message */
    S.rxAt = Date.now();
    igSvPushDm(e, true);
    igSvBurst(e, src, 9);
    S.el.classList.add("rx-keep"); /* emoji bar tetep muncul */
    clearTimeout(S.rxT);
    S.rxT = setTimeout(() => {
      if (!igSv) return;
      S.el.classList.remove("rx-keep");
      const i = $("#ig-sv-in");
      if (i) i.blur();
    }, 900);
  };
  window.igSvMenu = function () {
    const S = igSv;
    if (!S) return;
    const sh = $("#ig-sv-sheet"),
      sd = S.el.querySelector(".ig-sv-shade");
    if (!sh) return;
    const mine = S.k === "sion";
    sh.dataset.prev = sh.innerHTML;
    sh.innerHTML =
      '<div class="grab"></div><div class="ig-sv-menu">' +
      (mine
        ? '<div class="it red" onclick="igSvSheet(false)">ลบ</div><div class="it" onclick="igSvSheet(false)">บันทึก...</div><div class="it" onclick="igSvSheet(false)">แชร์เป็นโพสต์</div><div class="it" onclick="igSvSheet(false)">ตั้งค่าสตอรี่</div>'
        : '<div class="it red" onclick="igSvSheet(false)">รายงาน...</div><div class="it" onclick="igSvSheet(false)">ปิดเสียง</div><div class="it" onclick="igSvSheet(false)">คัดลอกลิงก์</div><div class="it" onclick="igSvSheet(false)">ไปที่โปรไฟล์</div>') +
      "</div>";
    sh.classList.add("open");
    sd.classList.add("open");
    S.sheet = true;
    igSvPause(true);
  };
  window.igSvLike = function () {
    const S = igSv;
    if (!S) return;
    const key = S.k + S.i;
    igStoryLiked[key] = !igStoryLiked[key];
    const h = $("#ig-sv-h");
    if (h) {
      h.classList.toggle("on", !!igStoryLiked[key]);
      h.classList.remove("pop");
      void h.getBoundingClientRect();
      h.classList.add("pop");
      if (igStoryLiked[key]) igSvBurst("❤️", h, 6);
    }
  };
  window.closeIgStory = function (silent) {
    const S = igSv;
    if (!S) return;
    clearTimeout(S.timer);
    igSv = null;
    const el = S.el;
    if (silent) {
      el.remove();
      return;
    }
    el.classList.add("out");
    setTimeout(() => {
      el.remove();
      if (igCur === "home") igRender("home");
      else if (igProfiles[igCur]) igRender(igCur);
    }, 190);
  };

  let igCur = "home";
  window.openIgHome = function () {
    igFrom = null;
    igCur = "home";
    igRender("home");
    showScreen("instagram-screen");
  };
  const instagramDmChats = {
    riku_new: {
      name: "前田 陸",
      username: "ri_ku_03",
      initials: "前",
      avatar: "riku-ig6.jpg",
      status: "ใช้งานอยู่ตอนนี้",
      mutualSince: "2 กุมภาพันธ์ 2023",
      time: "21:41",
      activityAt: Date.UTC(2026, 9, 22, 21, 41),
      messages: [
        { type: "date", text: "2 กุมภาพันธ์ 2023" },
        { type: "incoming", text: "สวัสดีครับ ㅋㅋ" },
        { type: "incoming", text: "โอ้ ตื่นเต้นจัง" },
        { type: "outgoing", text: "ตื่นเต้นอะไร ㅋㅋ" },
        { type: "incoming", text: "ก็คุยกับคนดังนี่นา?" },
        { type: "outgoing", text: "ไม่ได้ดังอะไรสักหน่อย" },
        { type: "incoming", text: "ดูยอดผู้ติดตามสิ" },
        { type: "outgoing", text: "ไม่เห็นจะมีอะไรเลย" },
        { type: "incoming", text: "สำหรับผมมันเยอะนี่" },
        { type: "outgoing", text: "สนใจพี่หรือยอดผู้ติดตามกันแน่เนี่ย" },
        { type: "incoming", text: "ทั้งสองอย่างไม่ได้เหรอ~?" },
        { type: "outgoing", text: "อยากให้ริคุสนใจพี่มากกว่า" },
        { type: "outgoing", text: "ได้ไหม" },
        { type: "incoming", text: "ถ้าเป็นคนอื่นผมก็ไม่ตื่นเต้นหรอก" },
        { type: "incoming", text: "เพราะเป็นพี่ถึงได้ตื่นเต้นต่างหาก" },
        { type: "outgoing", text: "งั้นเหรอ~" },
        { type: "outgoing", text: "งั้นก็ดี" },
        { type: "date", text: "6 กุมภาพันธ์ 2023" },
        { type: "outgoing", text: "ริคุ" },
        { type: "outgoing", text: "ทำไรอยู่" },
        { type: "incoming", text: "?" },
        { type: "incoming", text: "ไม่ได้ทำอะไรครับ" },
        { type: "incoming", text: "คิดถึงผมเหรอ?" },
        { type: "outgoing", text: "ถ้าใช่ล่ะ" },
        { type: "outgoing", text: "ㅋㅋ" },
        { type: "incoming", text: "ก็ไม่ยังไงหรอกครับ~" },
        { type: "incoming", text: "ทำแบบนี้" },
        { type: "incoming", text: "อยากไปเดทก่อนวันที่ 14 หรือไงครับ" },
        { type: "outgoing", text: "ถ้าพี่ชวน" },
        { type: "outgoing", text: "จะไปไหมล่ะ" },
        {
          type: "incoming",
          text: "ก็บอกแล้วนี่ครับว่าไม่ปฏิเสธคนหล่อน่ะ",
        },
        { type: "date", text: "7 กุมภาพันธ์ 2023" },
        { type: "outgoing", text: "โทษที" },
        { type: "outgoing", text: "หายไปแบบนี้ไม่โกรธใช่ไหม" },
        { type: "incoming", text: "ไม่โกรธหรอกครับ" },
        { type: "incoming", text: "ไม่ได้เป็นอะไรกันนี่นา" },
        { type: "outgoing", text: "ขอโทษนะ" },
        { type: "outgoing", text: "พี่ไม่ค่อยเล่นอินสตาหรอก" },
        { type: "outgoing", text: "นาน ๆ ทีจะเล่น" },
        { type: "outgoing", text: "แค่มาลงรูป" },
        {
          type: "incoming",
          text: "จะบอกว่าเข้ามาคุยกับริคุคนเดียวเหรอครับ",
        },
        { type: "outgoing", text: "อือ" },
        { type: "outgoing", text: "ตลกดีไหม ㅋㅋ" },
        { type: "incoming", text: "ไม่มีอะไรตลกหรอก" },
        { type: "outgoing", text: "มีไอดี kakaotalk หรือเปล่า" },
        { type: "outgoing", text: "ริคุรู้จักไหม?" },
        { type: "incoming", text: "รู้ครับ" },
        { type: "incoming", text: "มี... แต่ว่ามีเพื่อนแค่ประมาณ 2 คน" },
        { type: "incoming", text: "คือพี่สาวผม 2 คนน่ะ" },
        { type: "outgoing", text: "ให้พี่เป็นคนที่ 3 ได้หรือเปล่า" },
        { type: "outgoing", text: "ขอไอดีหน่อยสิ" },
        { type: "incoming", text: "ma3da_r1ku" },
        { type: "incoming", text: "ครับ~" },
        { type: "outgoing", text: "ขอบใจนะ" },
        { type: "outgoing", text: "ไว้พี่ทักไป" },
        { type: "outgoing", text: "ไปคุยกันในนั้นนะ" },
        { type: "date", text: "14 กุมภาพันธ์ 2023" },
        { type: "incoming", text: "Todayสนุกมากครับ ขอบคุณนะ~" },
        { type: "outgoing", text: "อยากไปด้วยกันอีกไหม" },
        { type: "incoming", text: "ㅋㅋ" },
        { type: "incoming", text: "แน่อยู่แล้ว" },
        { type: "outgoing", text: "ขอลงรูปริคุในโคลสเฟรนด์ได้ไหม?" },
        { type: "incoming", text: "อืออือ" },
        { type: "incoming", text: "เอาสิครับ" },
        { type: "date", text: "26 กุมภาพันธ์ 2023" },
        { type: "outgoing", text: "กลับญี่ปุ่นแล้วเหรอ?" },
        { type: "incoming", text: "ครับ~" },
        { type: "outgoing", text: "ไม่เห็นบอกเลย" },
        { type: "incoming", text: "พี่ไม่ได้ถามนี่" },
        { type: "incoming", text: "อยากรู้เหรอครับ" },
        { type: "outgoing", text: "อือ" },
        { type: "incoming", text: "งั้นคราวหลังจะบอก" },
        { type: "date", text: "4 มีนาคม 2023" },
        { type: "incoming", text: "ผมมาโซลแล้ว" },
        { type: "outgoing", text: "อ่า" },
        { type: "outgoing", text: "พี่อยู่มกโพ" },
        { type: "outgoing", text: "บ้านเกิดน่ะ" },
        { type: "incoming", text: "อ้าว" },
        { type: "incoming", text: "พี่เกิดที่นั่นเหรอครับ" },
        { type: "outgoing", text: "ใช่" },
        { type: "outgoing", text: "ริคุอยู่โซลถึงเมื่อไหร่" },
        { type: "incoming", text: "คราวนี้ก็สักสัปดาห์นึงมั้งครับ?" },
        { type: "incoming", text: "ไป ๆ มา ๆ" },
        { type: "incoming", text: "ยังคิดอยู่เลยว่าอยากมาเรียนภาษา" },
        { type: "outgoing", text: "เหรอ" },
        { type: "outgoing", text: "เรียนกับพี่ก็ได้นะ" },
        {
          type: "outgoing",
          text: "เขาว่าคุยกับเจ้าของภาษาแล้วจะเก่งเร็ว",
        },
        { type: "incoming", text: "สอนภาษาแน่เหรอครับ" },
        { type: "incoming", text: "มีอย่างอื่นด้วยหรือเปล่า ㅋㅋ" },
        { type: "outgoing", text: "ก็มี" },
        { type: "outgoing", text: "สถานการณ์ในชีวิตจริงไง" },
        { type: "incoming", text: "เช่นอะไรครับ" },
        { type: "outgoing", text: "ตอนถูกจีบ ต้องตอบว่ายังไง" },
        { type: "outgoing", text: "ตอนอยากอ้อน ต้องพูดว่าอะไร" },
        { type: "outgoing", text: "ของแบบนี้ห้องเรียนไม่สอนหรอกนะ" },
        { type: "outgoing", text: "มีแค่พี่ที่สอนให้ได้" },
        { type: "outgoing", text: "ริคุอยากเรียนหรือเปล่า" },
        { type: "incoming", text: "พี่จีบเก่งนะ" },
        { type: "incoming", text: "ไหนว่าไม่เคยจีบใครก่อน" },
        { type: "outgoing", text: "กับคนที่อยากคุยมันก็เป็นไปเอง?" },
        { type: "incoming", text: "จิ้งจอกหุ้มหนังกระต่ายชัด ๆ" },
        { type: "incoming", text: "คุณชิอน ผมไว้ใจคุณได้จริงใช่ไหมครับ" },
        { type: "outgoing", text: "ไว้ใจได้สิครับ" },
        { type: "outgoing", text: "ผมเป็นคนดีนะ" },
        { type: "date", text: "6 เมษายน 2023" },
        { type: "outgoing", text: "ริคุ" },
        { type: "incoming", text: "ครับ?" },
        { type: "outgoing", text: "พี่อยากเจอริคุ" },
        { type: "incoming", text: "อ่า" },
        { type: "incoming", text: "ผมก็อยากเจอพี่เหมือนกัน" },
        { type: "date", text: "8 เมษายน 2023" },
        { type: "outgoing", text: "ว่างหรือเปล่า" },
        { type: "incoming", text: "อยู่โตเกียวแล้วน่ะสิครับ" },
        { type: "incoming", text: "ㅜㅜ" },
        { type: "outgoing", text: "งั้นเหรอ..." },
        { type: "incoming", text: "ขอโทษที่ไม่ได้บอกครับ" },
        { type: "outgoing", text: "ไม่เป็นไร" },
        {
          type: "incoming",
          text: "พี่สาวคนกลางอยากให้ไปหาแบบกะทันหันน่ะ",
        },
        { type: "incoming", text: "เห็นว่าอกหักงั้นล่ะมั้ง" },
        { type: "outgoing", text: "เข้าใจได้" },
        {
          type: "outgoing",
          text: "ถ้างั้นริคุอยู่โตเกียวถึงเมื่อไหร่เหรอ",
        },
        { type: "incoming", text: "สักพักเลยครับ" },
        { type: "outgoing", text: "งั้น..." },
        { type: "outgoing", text: "พี่ไปหาได้หรือเปล่า" },
        { type: "incoming", text: "จะมาที่นี่เหรอครับ?" },
        { type: "incoming", text: "จะลำบากไปหรือเปล่า" },
        { type: "outgoing", text: "ไม่ลำบากหรอก" },
        { type: "outgoing", text: "พี่อยากเจอริคุ" },
        { type: "date", text: "16 เมษายน 2023" },
        { type: "incoming", text: "ขอบคุณที่มาหาครับ" },
        { type: "incoming", text: "ขอโทษนะที่ผมไม่ค่อยมีเวลาให้พี่" },
        { type: "outgoing", text: "ไม่เป็นไร" },
        { type: "outgoing", text: "พี่เข้าใจ" },
        { type: "incoming", text: "ขอบคุณนะครับ" },
        { type: "outgoing", text: "ต้องอยู่กับครอบครัวนี่นา" },
        { type: "incoming", text: "เพราะว่าครอบครัวไม่รู้ด้วย" },
        { type: "incoming", text: "ผมไม่รู้จะบอกยังไง" },
        { type: "outgoing", text: "ที่เราเป็นอะไรกันน่ะเหรอ" },
        { type: "incoming", text: "เราดูไม่น่าจะโคจรมารู้จักกันได้เลย" },
        { type: "incoming", text: "พูดยากนะครับ" },
        { type: "outgoing", text: "พรหมลิขิตมั้ง" },
        { type: "outgoing", text: "แต่ก็บอกครอบครัวไปแบบนั้นไม่ได้หรอก" },
        { type: "outgoing", text: "ㅋㅋ" },
        { type: "outgoing", text: "ใช่ไหม" },
        { type: "incoming", text: "ก็ใช่น่ะสิครับ" },
        { type: "incoming", text: "จะให้บอกว่าเพราะทำกระเป๋าสตางค์หาย" },
        { type: "incoming", text: "แต่สนิทกันระดับนี้" },
        { type: "incoming", text: "มิตรภาพแบบหนึ่งในล้านเลยมั้งครับ" },
        { type: "outgoing", text: "พี่สนิทกับริคุแล้วเหรอ~" },
        { type: "outgoing", text: "ดีใจจัง" },
        {
          type: "incoming",
          text: "คนไม่สนิทกันที่ไหนบินมาหากันด้วยเหรอครับ",
        },
        { type: "outgoing", text: "นั่นสินะ~" },
        { type: "date", text: "30 เมษายน 2023" },
        { type: "incoming", text: "พฤษภานี้พี่มีแพลนอะไรไหมครับ" },
        { type: "outgoing", text: "ยังไม่มี" },
        { type: "incoming", text: "เหรอครับ" },
        { type: "incoming", text: "พี่ไม่ชอบเที่ยวเหรอ" },
        { type: "outgoing", text: "อือ" },
        { type: "incoming", text: "พี่ติดบ้านกว่าที่ผมคิดนะ" },
        { type: "outgoing", text: "แต่ถ้าเป็นริคุ" },
        { type: "outgoing", text: "พี่ไปด้วยได้" },
        { type: "date", text: "10 พฤษภาคม 2023" },
        { type: "outgoing", text: "ไม่เห็นบอกเลยว่าจะมา" },
        { type: "incoming", text: "บอกก็ไม่เซอร์ไพรส์สิครับ" },
        { type: "incoming", text: "ผมอยากอยู่ในวันสำคัญของพี่" },
        { type: "incoming", text: "ปีแรกที่เรารู้จักกันทั้งที" },
        { type: "outgoing", text: "ขอบคุณนะ" },
        { type: "date", text: "11 พฤษภาคม 2023" },
        { type: "incoming", text: "สุขสันต์วันเกิดนะครับ พี่ชิอน" },
        { type: "outgoing", text: "อือ ขอบคุณจริง ๆ นะ ริคุ" },
        { type: "date", text: "18 พฤษภาคม 2023" },
        { type: "outgoing", text: "คิดถึง" },
        { type: "date", text: "26 พฤษภาคม 2023" },
        { type: "incoming", text: "พี่" },
        { type: "incoming", text: "ผมทำโทรศัพท์หาย ㅜㅜ" },
        { type: "incoming", text: "คงต้องหาทางกู้แชทเก่า" },
        { type: "outgoing", text: "อ่า" },
        { type: "outgoing", text: "แล้วริคุไม่เป็นไรนะ?" },
        { type: "incoming", text: "อือ" },
        { type: "incoming", text: "ซื้อใหม่แล้ว" },
        {
          type: "incoming",
          text: "พยายามซิงก์ไอคลาวด์ ไม่รู้ว่าจะกู้ได้แค่ไหน",
        },
        { type: "outgoing", text: "แย่เลย" },
        { type: "outgoing", text: "แต่ริคุไม่เป็นไรก็ดีแล้ว" },
        { type: "outgoing", text: "เห็นหายไปพี่ก็เป็นห่วง" },
        { type: "incoming", text: "อือ ㅜㅜ" },
        { type: "incoming", text: "ขอโทษนะ" },
        { type: "outgoing", text: "ไม่มีอะไรต้องขอโทษเลย" },
        {
          type: "outgoing",
          text: "ริคุไม่ได้ตั้งใจ อีกอย่าง โทรศัพท์หายไปเลยนะ",
        },
        { type: "outgoing", text: "ไม่ใช่เวลาต้องมาห่วงพี่หรอก" },
        { type: "incoming", text: "กลัวไม่ได้คุยกับพี่อีก" },
        { type: "incoming", text: "ถ้าไม่ได้คุยอีกจะทำยังไงล่ะ" },
        { type: "outgoing", text: "ต่อให้ริคุหายไป" },
        { type: "outgoing", text: "พี่ก็จะหาทางตามหาริคุเอง" },
        { type: "incoming", text: "จริงนะ?" },
        { type: "outgoing", text: "อืม" },
        {
          type: "outgoing",
          text: "ความทรงจำน่ะ ไว้สร้างใหม่ด้วยกันก็ได้นี่",
        },
        { type: "outgoing", text: "ขอแค่พี่ตามหาริคุเจอก็พอ" },
        { type: "outgoing", text: "ไม่ใช่เหรอ?" },
        { type: "incoming", text: "ก็ใช่~" },
        {
          type: "incoming",
          text: "งั้นช่วยสร้างใหม่ไปกับผมเรื่อย ๆ เลยนะ",
        },
        { type: "date", text: "28 มิถุนายน 2023" },
        { type: "outgoing", text: "ริคุ สุขสันต์วันเกิดนะ" },
        { type: "outgoing", text: "ขอบคุณที่เข้ามาในชีวิตพี่" },
        { type: "incoming", text: "อะไรเนี่ย~" },
        {
          type: "incoming",
          text: "ขอบคุณที่เข้ามาในชีวิตผมเหมือนกันนะครับ",
        },
        { type: "date", text: "25 ธันวาคม 2023" },
        { type: "incoming", text: "ไม่นึกเลยว่าพี่จะมา" },
        { type: "outgoing", text: "คริสต์มาสนี่นา" },
        { type: "incoming", text: "พี่นับถือคริสต์หรือไงครับ" },
        { type: "outgoing", text: "เปล่า" },
        { type: "outgoing", text: "นับถือศาสนาริคุไง" },
        { type: "outgoing", text: "ก็เลยมาหาพระเจ้าของพี่" },
        { type: "incoming", text: "ㅋㅋ" },
        { type: "incoming", text: "บ้าชะมัด" },
        { type: "date", text: "1 มกราคม 2024" },
        { type: "incoming", text: "สวัสดีปีใหม่ครับพี่" },
        { type: "outgoing", text: "สวัสดีปีใหม่เช่นกันนะ" },
        { type: "incoming", text: "ปีนี้ขอให้พี่มีความสุขมาก ๆ นะครับ" },
        { type: "outgoing", text: "ขอบคุณนะ" },
        { type: "outgoing", text: "ขอให้ริคุมีความสุขมาก ๆ เหมือนกัน" },
        { type: "outgoing", text: "อยู่กับพี่ไปทุกปีเลยนะ?" },
        { type: "incoming", text: "ㅋㅋ อือ" },
        { type: "date", text: "14 กุมภาพันธ์ 2024" },
        { type: "incoming", text: "พี่" },
        { type: "incoming", text: "ไปเดทกันไหม?" },
        { type: "outgoing", text: "อือ~" },
        { type: "outgoing", text: "ไปกันเถอะ" },
        { type: "incoming", text: "จริงเหรอครับ~" },
        { type: "outgoing", text: "จริงสิ~" },
        { type: "incoming", text: "งั้นผมขอจัดแพลนเดทเองนะ!" },
        { type: "outgoing", text: "ได้เลย~" },
        { type: "date", text: "30 มีนาคม 2024" },
        { type: "outgoing", text: "โกรธหรือเปล่า?" },
        { type: "outgoing", text: "ขอโทษนะ" },
        { type: "incoming", text: "ไม่เป็นไรครับ" },
        { type: "incoming", text: "ผมเข้าใจ" },
        { type: "incoming", text: "พี่คงให้ผมไปด้วยไม่ได้ใช่ไหม" },
        { type: "outgoing", text: "อือ" },
        { type: "outgoing", text: "แต่พี่ก็อยากให้ริคุไปด้วย" },
        { type: "incoming", text: "อือ" },
        { type: "outgoing", text: "ยังไม่ได้บอกชียอนไป เรื่องเรา" },
        {
          type: "outgoing",
          text: "ไว้ครั้งหน้าจริง ๆ ถ้าบอกแล้วเราไปกันนะ",
        },
        { type: "outgoing", text: "ที่บ้านของพี่" },
        { type: "date", text: "29 เมษายน 2024" },
        { type: "incoming", text: "เซอร์ไพรส์เหรอครับ" },
        { type: "outgoing", text: "ㅋㅋ" },
        { type: "outgoing", text: "ตกใจไหม" },
        { type: "incoming", text: "ตกใจสิ ไม่บอกไม่กล่าวก่อนเนี่ย" },
        { type: "outgoing", text: "เพราะคิดถึงไง" },
        { type: "incoming", text: "ผมก็เหมือนกัน" },
        { type: "date", text: "3 พฤษภาคม 2024" },
        { type: "outgoing", text: "ริคุ คบกับพี่นะ" },
        {
          type: "outgoing",
          text: "ถึงจะพูดให้ริคุได้ยินไปแล้ว แต่ก็อยากจะเก็บเป็นความทรงจำ",
        },
        {
          type: "outgoing",
          text: "อยากจะพูดซ้ำ ๆ ให้ริคุรู้ว่าริคุมีความหมายกับพี่แค่ไหน",
        },
        { type: "outgoing", text: "รักนะ รักริคุ" },
        { type: "outgoing", text: "ไม่ต้องตอบอะไรตรงนี้ก็ได้" },
        { type: "outgoing", text: "พี่แค่อยากทำแบบนี้" },
        { type: "outgoing", text: "หวังว่าริคุจะเข้าใจนะ" },
        { type: "incoming", text: "ตกลงครับ" },
        { type: "incoming", text: "คบกันนะ เราสองคน" },
        { type: "incoming", text: "ถึงพี่จะบอกว่าไม่ต้องตอบที่นี่" },
        { type: "incoming", text: "แต่แล้วยังไงล่ะ" },
        { type: "incoming", text: "ผมก็อยากเก็บไว้เหมือนกันนะ" },
        { type: "incoming", text: "ความทรงจำของเราสองคน" },
        { type: "incoming", text: "ที่บอกว่าจะสร้างใหม่" },
        { type: "incoming", text: "ต้องสร้างไปด้วยกันสิ" },
        { type: "incoming", text: "รักเหมือนกันนะครับ พี่ชิอน" },
        { type: "date", text: "11 พฤษภาคม 2024" },
        { type: "incoming", text: "สุขสันต์วันเกิดครับ คุณเจ้าชาย ♥️" },
        { type: "incoming", text: "ขอให้เรามีกันแบบนี้ไปเรื่อย ๆ เลยนะ" },
        { type: "outgoing", text: "ขอบคุณนะ Nanasของพี่" },
        { type: "date", text: "28 มิถุนายน 2024" },
        { type: "outgoing", text: "Nanas สุขสันต์วันเกิด ♥️" },
        { type: "incoming", text: "ขอบคุณนะครับ คุณเจ้าชาย~" },
        { type: "date", text: "25 ธันวาคม 2024" },
        {
          type: "incoming",
          text: "คริสต์มาสปีนี้พี่ก็อยู่กับริคุด้วยนะ?",
        },
        { type: "outgoing", text: "ได้สิ" },
        { type: "outgoing", text: "พี่นับถือศาสนาริคุนี่นา" },
        { type: "date", text: "1 มกราคม 2025" },
        { type: "incoming", text: "สวัสดีปีใหม่ครับ เจ้าชาย" },
        { type: "outgoing", text: "สวัสดีปีใหม่เช่นกันนะ Nanas" },
        { type: "incoming", text: "ปีนี้ขอให้พี่มีความสุขมาก ๆ นะครับ" },
        { type: "outgoing", text: "ขอบคุณนะ" },
        { type: "outgoing", text: "ขอให้ริคุมีความสุขมาก ๆ เหมือนกัน" },
        { type: "outgoing", text: "อยู่กับพี่ไปทุกปีเลยนะ?" },
        { type: "incoming", text: "ㅋㅋ อือ" },
        { type: "date", text: "14 กุมภาพันธ์ 2025" },
        { type: "outgoing", text: "Nanas รักนะ" },
        { type: "incoming", text: "อะไรเนี่ย" },
        { type: "incoming", text: "ㅋㅋ อือ" },
        { type: "incoming", text: "รักเหมือนกันครับ" },
        { type: "date", text: "3 มีนาคม 2025" },
        {
          type: "incoming",
          text: "ผมคิดว่าจะมาเรียนภาษาที่เกาหลีแล้วล่ะ",
        },
        { type: "outgoing", text: "อือ" },
        {
          type: "outgoing",
          text: "ดีเลย พี่ก็อยากให้ริคุมาที่นี่เหมือนกัน",
        },
        { type: "incoming", text: "อือ~" },
        {
          type: "incoming",
          text: "ยังอยากสมัครเป็นคุณครูชิอนให้ผมอยู่ไหมครับ",
        },
        { type: "outgoing", text: "อือ" },
        { type: "outgoing", text: "พี่ก็อยากสอนริคุเหมือนเดิม" },
        { type: "incoming", text: "ทุกอย่างเลยไหมครับ" },
        { type: "outgoing", text: "อือ" },
        { type: "outgoing", text: "พี่อยากสอนริคุทุกอย่าง" },
        {
          type: "outgoing",
          text: "ทั้งเรื่องความรัก ทั้งสิ่งที่ริคุยังไม่เคยรู้ อยากจะสอนให้ทุกอย่างเลย",
        },
        { type: "date", text: "3 พฤษภาคม 2025" },
        { type: "outgoing", text: "สุขสันต์Anniversary" },
        { type: "outgoing", text: "ขอบคุณที่รักพี่มาตลอด 1 ปีนะ" },
        { type: "incoming", text: "ผมก็ด้วย" },
        { type: "incoming", text: "สุขสันต์Anniversary 1 ปีครับ" },
        {
          type: "incoming",
          text: "ขอบคุณที่รักผมมาตลอด 1 ปีเหมือนกันนะ",
        },
        { type: "date", text: "11 พฤษภาคม 2025" },
        { type: "incoming", text: "ปีนี้ก็อยู่ด้วยกันอีกแล้ว~" },
        { type: "incoming", text: "ดีใจหรือเปล่าครับ" },
        { type: "incoming", text: "สุขสันต์วันเกิดนะครับ เจ้าชาย~" },
        { type: "outgoing", text: "อือ" },
        { type: "outgoing", text: "ดีใจที่สุดเลยละ" },
        { type: "outgoing", text: "ขอบคุณนะ Nanas" },
        { type: "outgoing", text: "อยู่บอกกับพี่แบบนี้ไปทุกปีเลยนะ?" },
        { type: "date", text: "28 มิถุนายน 2025" },
        { type: "outgoing", text: "Nanasของพี่ สุขสันต์วันเกิด ♥️" },
        { type: "outgoing", text: "รักมาก ๆ นะ รู้ไหม" },
        { type: "incoming", text: "ขอบคุณครับ เจ้าชายของผม~" },
        { type: "incoming", text: "รู้สิครับ ผมก็รักพี่เหมือนกัน" },
        { type: "date", text: "25 ธันวาคม 2025" },
        {
          type: "incoming",
          text: "ปีนี้ก็นับถือศาสนาริคุหรือเปล่าครับ~",
        },
        { type: "outgoing", text: "ㅋㅋ" },
        { type: "outgoing", text: "นับถือศาสนาริคุเหมือนเดิมเลยครับ" },
        { type: "date", text: "1 มกราคม 2026" },
        {
          type: "outgoing",
          text: "Nanas ปีนี้พี่ขอเป็นคนบอกก่อนนะ สวัสดีปีใหม่ ♥️",
        },
        {
          type: "outgoing",
          text: "ขอให้ริคุมีความสุขมาก ๆ อยู่กับพี่อย่างนี้ไปตลอด",
        },
        { type: "incoming", text: "ㅋㅋ อือ สวัสดีปีใหม่ครับเจ้าชาย" },
        { type: "incoming", text: "ขอให้พี่มีความสุขมาก ๆ เหมือนกัน" },
        { type: "incoming", text: "รักนะ" },
        { type: "date", text: "14 กุมภาพันธ์ 2026" },
        { type: "outgoing", text: "♥️" },
        { type: "incoming", text: "เดี๋ยวนี้ขี้เกียจพิมพ์แล้วเหรอครับ" },
        { type: "incoming", text: "ㅋㅋ" },
        { type: "outgoing", text: "ไม่ใช่สักหน่อย" },
        { type: "incoming", text: "ㅋㅋ" },
        { type: "incoming", text: "รู้แล้วน่า ก็อยู่ด้วยกันนี่นา" },
        { type: "incoming", text: "♥️" },
        { type: "date", text: "3 พฤษภาคม 2026" },
        { type: "incoming", text: "สุขสันต์Anniversary 2 ปีครับ" },
        { type: "incoming", text: "ปีนี้ผมส่งก่อนแหละ!" },
        { type: "outgoing", text: "ㅋㅋㅋㅋㅋㅋ" },
        { type: "outgoing", text: "Nanasของพี่เป็นเด็กน้อยแฮะ" },
        { type: "outgoing", text: "น่ารักจัง" },
        { type: "outgoing", text: "สุขสันต์Anniversary 2 ปี ♥️" },
        { type: "date", text: "11 พฤษภาคม 2026" },
        { type: "incoming", text: "เจ้าชาย สุขสันต์วันเกิดนะครับ" },
        {
          type: "incoming",
          text: "ถึงจะบอกอยู่แล้วทุกปี แต่ก็รู้ใช่ไหมว่าผมรู้สึกขอบคุณที่พี่เกิดมามากแค่ไหน",
        },
        { type: "incoming", text: "รักนะครับ มาก ๆ เลย" },
        {
          type: "outgoing",
          text: "ขอบคุณนะ พี่ก็รักNanasที่สุดเลยเหมือนกัน",
        },
        { type: "date", text: "28 มิถุนายน 2026" },
        { type: "outgoing", text: "ถึงตาพี่แล้ว สุขสันต์วันเกิด♥️" },
        {
          type: "outgoing",
          text: "วันที่Nanasของพี่เติบโตขึ้นมาถึงแล้ว~",
        },
        { type: "outgoing", text: "ขอบคุณที่ปีนี้ก็ยังมีพี่ในชีวิตนะ" },
        { type: "incoming", text: "อือ~" },
        { type: "incoming", text: "รักนะ ขอบคุณครับ" },
        { type: "date", text: "Today" },
        { type: "incoming", text: "คิดถึงพี่จัง" },
        { type: "outgoing", text: "เหมือนกัน" },
        { type: "incoming", text: "รักนะ" },
        { type: "outgoing", text: "รักเหมือนกัน" },
        { type: "outgoing", text: "Nanasรู้ใช่ไหม?" },
      ],
    },
    siyeon: {
      name: "ชียอน",
      username: "oh_si_yeon",
      initials: "ช",
      avatar: "coco-2.jpg",
      status: "ใช้งานเมื่อวาน",
      mutualSince: "11 เมษายน 2016",
      time: "22:14",
      activityAt: Date.UTC(2026, 6, 3, 22, 14),
      messages: [
        { type: "date", text: "11 พฤษภาคม 2025" },
        { type: "incoming", text: "สสวก" },
        { type: "outgoing", text: "ใจ" },
        { type: "date", text: "25 พฤศจิกายน 2025" },
        { type: "outgoing", text: "สุขสันต์วันเกิด" },
        { type: "incoming", text: "เย้ ขอเงินหน่อย" },
        { type: "outgoing", text: "โอนไปแล้ว" },
        { type: "incoming", text: "โว้ววว ขอบคุณนะพี่~" },
        { type: "date", text: "11 พฤษภาคม 2026" },
        { type: "incoming", text: "สุขสันต์วันเกิด" },
        { type: "outgoing", text: "ขอบใจ" },
        { type: "date", text: "10 มิถุนายน 2026" },
        { type: "incoming", text: "พี่ Todayงานเยอะไหม" },
        { type: "outgoing", text: "เพิ่งเสร็จเลย แม่ก็เพิ่งทักมา" },
        { type: "outgoing", text: "เรื่องวิตามิน" },
        {
          type: "incoming",
          text: "แม่ฝากหนูเตือนพี่ไว้แล้ว กินหรือยัง ㅋㅋ",
        },
        { type: "outgoing", text: "กินแล้ว บอกแม่ให้สบายใจได้เลย" },
        { type: "incoming", text: "อย่าลืมกลับมาหาโคโค่บ้างนะ" },
        { type: "outgoing", text: "โอเค" },
      ],
    },
    daeyoung: {
      name: "แดยอง",
      username: "k1mdae0",
      initials: "대",
      avatar: "daeyoung-2.jpg",
      status: "ใช้งานอยู่ตอนนี้",
      mutualSince: "14 พฤษภาคม 2022",
      time: "22:28",
      activityAt: Date.UTC(2026, 6, 3, 22, 28),
      messages: [
        { type: "date", text: "10 มิถุนายน 2026" },
        { type: "incoming", text: "พี่ถึงบ้านหรือยังครับ" },
        {
          type: "outgoing",
          text: "ถึงแล้ว ร้านที่แดยองเลือกร้านอร่อยมากเลย",
        },
        { type: "incoming", text: "โล่งอกเลยครับ นึกว่าพี่จะไม่ชอบ" },
        {
          type: "outgoing",
          text: "อร่อยขนาดนี้ ครั้งหน้าพี่ต้องเลี้ยงกาแฟบ้างแล้ว",
        },
        {
          type: "incoming",
          text: "ได้เลยครับ แต่กาแฟหลังมื้อเย็นแก้วนึงพอนะ ㅋㅋ",
        },
        {
          type: "outgoing",
          text: "โอเค หนังที่คุยกันคราวก่อนก็สนุกดีนะ",
        },
        { type: "incoming", text: "ดีใจที่พี่ชอบครับ ฝันดีนะครับพี่ 🌙" },
      ],
    },
    yushi: {
      name: "ユウシ",
      username: "toku45shi",
      initials: "ユ",
      avatar: "yushi-2.jpg",
      status: "ใช้งานเมื่อวาน",
      mutualSince: "18 มิถุนายน 2025",
      time: "19:12",
      activityAt: Date.UTC(2026, 6, 1, 19, 12),
      messages: [
        { type: "date", text: "15 มิถุนายน 2026" },
        {
          type: "incoming",
          text: "พี่เห็นรูปแมวที่ผมลงในสตอรี่หรือยังครับ",
        },
        { type: "outgoing", text: "เห็นแล้ว ตัวอ้วนกว่าที่คิดอีก ㅋㅋ" },
        { type: "incoming", text: "มันเดินตามผมด้วยนะครับ" },
        { type: "outgoing", text: "พรุ่งนี้พาริคุไปเจอสิ รายนั้นชอบแมว" },
        {
          type: "incoming",
          text: "ได้ครับ แต่ผมจะห้ามเขาถือกาแฟสองแก้วอีก ㅋㅋ",
        },
        {
          type: "outgoing",
          text: "ถ้าหลับในคลาสอีก พี่ฝากยูชิปลุกด้วยนะ",
        },
        { type: "incoming", text: "ครับ คราวนี้ผมจะเฝ้าเอง" },
      ],
    },
  };

  const instagramMessageRequests = {
    starline: {
      name: "GM Casting",
      username: "GM_casting",
      initials: "G",
      category: "แคสติ้งซีรีส์",
      time: "2 วัน",
      messages: [
        { type: "chat-time-divider", text: "1 กรกฎาคม 2026" },
        {
          type: "incoming",
          text: "สวัสดีค่ะ ทีมแคสติ้งจาก GM นะคะ พอดีเห็นโปรไฟล์ของคุณแล้วสนใจลุคกับภาพถ่ายค่ะ",
        },
        {
          type: "incoming",
          text: "ตอนนี้กำลังหานักแสดงชายวัยมหาวิทยาลัยสำหรับซีรีส์ coming-of-age ถ้าสนใจ ขอส่งรายละเอียดบทกับวันออดิชันให้พิจารณาได้ไหมคะ",
        },
      ],
    },
    lumina: {
      name: "SM Entertainment",
      username: "sm_ent",
      initials: "S",
      category: "ออดิชันไอดอล",
      time: "3 วัน",
      messages: [
        { type: "chat-time-divider", text: "30 มิถุนายน 2026" },
        {
          type: "incoming",
          text: "สวัสดีครับ ทีม A&R จาก SM Entertainment ครับ เรากำลังเปิดออดิชันรอบคัดเลือกสำหรับโปรเจกต์บอยกรุ๊ปใหม่",
        },
        {
          type: "incoming",
          text: "ถ้าสนใจ สามารถดูรายละเอียดและเลือกส่งคลิปเต้นหรือร้องเพลงตามความถนัดได้ครับ สะดวกให้ผมส่งข้อมูลเพิ่มเติมไหมครับ",
        },
      ],
    },
    wish: {
      name: "WISH Casting",
      username: "wish.casting",
      initials: "W",
      category: "แคสติ้งโฆษณา",
      time: "4 วัน",
      messages: [
        { type: "chat-time-divider", text: "29 มิถุนายน 2026" },
        {
          type: "incoming",
          text: "สวัสดีค่ะ ติดต่อจาก WISH Casting นะคะ กำลังคัดเลือกนักแสดงสำหรับโฆษณาไลฟ์สไตล์และเว็บซีรีส์สั้นค่ะ",
        },
        {
          type: "incoming",
          text: "ทีมงานชอบภาพในโปรไฟล์ของคุณ อยากเช็กว่าสนใจรับรายละเอียดงานและกำหนดการแคสติ้งไหมคะ",
        },
      ],
    },
    bluehour: {
      name: "BH Audition",
      username: "bh.audition",
      initials: "B",
      category: "ออดิชันไอดอล",
      time: "5 วัน",
      messages: [
        { type: "chat-time-divider", text: "28 มิถุนายน 2026" },
        {
          type: "incoming",
          text: "สวัสดีครับ ผมดูแลการคัดเลือกของ BH ครับ เรากำลังเปิดรอบออดิชันศิลปินฝึกหัดสำหรับทีม performance ชุดใหม่",
        },
        {
          type: "incoming",
          text: "ถ้าคุณสนใจร้อง เต้น หรือแร็ป ผมส่งเงื่อนไขและขั้นตอนสมัครให้ดูก่อนได้ครับ ยังไม่ต้องตัดสินใจตอนนี้",
        },
      ],
    },
    scene4: {
      name: "ONLY Production",
      username: "only.production",
      initials: "O",
      category: "แคสติ้งหนังสั้น",
      time: "1 สัปดาห์",
      messages: [
        { type: "chat-time-divider", text: "25 มิถุนายน 2026" },
        {
          type: "incoming",
          text: "สวัสดีค่ะ ทีม ONLY Production กำลังเตรียมหนังสั้นเรื่องใหม่ และกำลังหานักแสดงนำชายค่ะ",
        },
        {
          type: "incoming",
          text: "เห็นภาพและสไตล์ในโปรไฟล์แล้วคิดว่าน่าจะเข้ากับตัวละคร ถ้าสนใจรับบท ขอส่งเรื่องย่อกับรายละเอียดวันแคสติ้งให้ไหมคะ",
        },
      ],
    },
  };

  function igLastMessage(chat) {
    return [...chat.messages]
      .reverse()
      .find(
        (message) =>
          message.type !== "chat-time-divider" && message.type !== "date",
      );
  }

  const igTimeLabel = (t) => (t === "now" ? "ตอนนี้" : t || "");
  const dmSvg = (d, w) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
    (w || 1.8) +
    '" stroke-linecap="round" stroke-linejoin="round">' +
    d +
    "</svg>";
  const DMI = {
    camera: dmSvg(
      '<path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.2l1.2-1.7h6.2L16.3 6h1.2A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="12" cy="12.5" r="3.4"/>',
    ),
    phone: dmSvg(
      '<path d="M5.5 4.5h3l1.5 4-2 1.3a10 10 0 0 0 5.2 5.2l1.3-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 3.5 6.5a2 2 0 0 1 2-2z"/>',
    ),
    image: dmSvg(
      '<rect x="4" y="5" width="16" height="14" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="m5 17 4.5-4.5 3.5 3 2.5-2L19 17"/>',
    ),
    sticker: dmSvg(
      '<path d="M20 12a8 8 0 1 1-8-8h1.5a6.5 6.5 0 0 0 6.5 6.5z"/><path d="M9 14c.8 1 1.8 1.5 3 1.5M9 9.5v.01M13 9.5v.01"/>',
      2,
    ),
    down: dmSvg('<path d="m6 9.5 6 6 6-6"/>', 2.6),
  };
  const dmOnline = (chat) =>
    chat.time === "now" || chat.status === "ใช้งานอยู่ตอนนี้";
  const dmIsOut = (m) => m.type === "sent" || m.type === "outgoing";
  const dmIsDate = (m) => m.type === "chat-time-divider" || m.type === "date";
  const dmBack = (fn) =>
    '<button class="dm-ic" type="button" aria-label="Back" onclick="' +
    fn +
    '">' +
    IC.chevL +
    "</button>";
  const dmAv = (chat, cls) =>
    '<span class="dm-av ' +
    (cls || "") +
    '"><span class="dm-avi">' +
    (chat.avatar
      ? '<img src="' + E(chat.avatar) + '" alt="">'
      : "<span>" + E(chat.initials || chat.name.slice(0, 1)) + "</span>") +
    "</span>" +
    (dmOnline(chat) ? '<i class="dm-on"></i>' : "") +
    "</span>";

  window.openInstagramDM = function () {
    const entries = Object.entries(instagramDmChats).sort(
      ([, first], [, second]) => {
        const firstNow = first.time === "now";
        const secondNow = second.time === "now";
        if (firstNow !== secondNow) return firstNow ? -1 : 1;
        return (second.activityAt || 0) - (first.activityAt || 0);
      },
    );
    const rows = entries
      .map(([id, chat]) => {
        const last = igLastMessage(chat);
        const preview = last ? E(last.text).replace(/\n/g, " ") : "";
        const mine = last && dmIsOut(last);
        return (
          '<button class="dm-row' +
          (chat.unread ? " unread" : "") +
          '" type="button" -name="' +
          E(chat.name.toLowerCase()) +
          '" onclick="openInstagramChat(\'' +
          E(id) +
          "')\">" +
          dmAv(chat) +
          '<span class="dm-copy"><strong>' +
          E(chat.name) +
          "</strong>" +
          '<span class="dm-prev">' +
          (mine ? '<span class="dm-pf"><span>คุณ</span>:</span>' : "") +
          '<span class="dm-pt">' +
          preview +
          '</span><span class="dm-t"><span>' +
          E(igTimeLabel(chat.time)) +
          "</span></span></span></span>" +
          (chat.unread && chat.unreadN
            ? '<i class="dm-ud">' + chat.unreadN + "</i>"
            : "") +
          '<span class="dm-cam">' +
          DMI.camera +
          "</span></button>"
        );
      })
      .join("");
    const noteText = {
      riku_new: "ง่วง",
      siyeon: "Todayก็สู้ ๆ",
      daeyoung: "หิวจัง",
      yushi: "อืม...",
    };
    const noteItems = Object.entries(noteText)
      .map(([id, text]) => {
        const chat = instagramDmChats[id];
        const avatar = chat.avatar
          ? '<img src="' + E(chat.avatar) + '" alt="">'
          : "<span>" + E(chat.initials) + "</span>";
        return (
          '<div class="ig-dm-note"><span class="ig-dm-note-stack"><span class="ig-dm-note-avatar">' +
          avatar +
          '</span><span class="ig-dm-note-bubble">' +
          E(text) +
          "</span></span><small>" +
          E(chat.name) +
          "</small></div>"
        );
      })
      .join("");
    const notes =
      '<div class="ig-dm-notes"><div class="ig-dm-note"><span class="ig-dm-note-stack"><span class="ig-dm-note-avatar own"><img src="sion-ig7.jpg" alt=""><b>+</b></span><span class="ig-dm-note-bubble ghost">Note...</span></span><small>Noteของคุณ</small></div>' +
      noteItems +
      "</div>";

    $("#instagram-screen").innerHTML =
      '<div class="ios-app full ig-dm-app">' +
      '<div class="dm-nav">' +
      dmBack("openIgHome()") +
      '<button class="dm-title" type="button"><span>si0n___5</span>' +
      DMI.down +
      "</button>" +
      '<button class="dm-ic" type="button" aria-label="New message">' +
      IC.compose +
      "</button></div>" +
      '<div class="ios-scroll ig-dm-list"><label class="ig-dm-search">' +
      IC.search +
      '<input type="search" placeholder="Search" oninput="filterInstagramDM(this.value)"></label>' +
      notes +
      '<div class="ig-dm-heading"><h1>Message</h1><button type="button" onclick="openInstagramRequests()">Request <span>' +
      Object.keys(instagramMessageRequests).length +
      "</span></button></div>" +
      rows +
      "</div>" +
      igTabBar("dm") +
      homeIndicator +
      "</div>";
    showScreen("instagram-screen");
  };

  window.filterInstagramDM = function (query) {
    const normalized = query.trim().toLowerCase();
    document.querySelectorAll("#instagram-screen .dm-row").forEach((row) => {
      row.hidden = !row.dataset.chatName.includes(normalized);
    });
  };

  window.openInstagramRequests = function () {
    const rows = Object.entries(instagramMessageRequests)
      .map(([id, request]) => {
        const last = igLastMessage(request);
        return (
          '<button class="ig-dm-row ig-request-row" type="button" onclick="openInstagramRequest(\'' +
          E(id) +
          "')\">" +
          '<span class="ig-dm-avatar ig-request-avatar">' +
          E(request.initials) +
          "</span>" +
          '<span class="ig-dm-copy"><strong>' +
          E(request.name) +
          "</strong><span>@" +
          E(request.username) +
          " · " +
          E(request.category) +
          "</span><span>" +
          E(last ? last.text : "") +
          "</span></span>" +
          '<span class="ig-dm-time">' +
          E(request.time) +
          "</span></button>"
        );
      })
      .join("");
    $("#instagram-screen").innerHTML =
      '<div class="ios-app full ig-dm-app">' +
      '<div class="dm-nav">' +
      dmBack("openInstagramDM()") +
      '<span class="dm-title"><span>Requests</span></span><span class="dm-ic"></span></div>' +
      '<div class="ios-scroll ig-dm-list ig-request-list"><div class="ig-request-intro"><h1>Message Requests</h1><p>People who don\'t follow you may send you messages here</p></div>' +
      (rows || '<p class="ig-request-empty">No message requests</p>') +
      "</div>" +
      igTabBar("dm") +
      homeIndicator +
      "</div>";
    showScreen("instagram-screen");
  };

  window.openInstagramRequest = function (id) {
    const request = instagramMessageRequests[id];
    if (!request) return;
    const messages = request.messages
      .map((message) =>
        message.type === "chat-time-divider"
          ? '<div class="ig-dm-date">' + E(message.text) + "</div>"
          : '<div class="ig-dm-bubble incoming">' +
            E(message.text).replace(/\n/g, "<br>") +
            "</div>",
      )
      .join("");
    $("#instagram-screen").innerHTML =
      '<div class="ios-app full ig-dm-app">' +
      '<div class="dm-nav">' +
      dmBack("openInstagramRequests()") +
      '<span class="dm-title"><span>' +
      E(request.name) +
      '</span></span><span class="dm-ic"></span></div>' +
      '<div class="ig-dm-room ig-request-room">' +
      '<div class="ig-dm-contact ig-request-contact"><span class="ig-dm-avatar large ig-request-avatar">' +
      E(request.initials) +
      "</span>" +
      "<strong>" +
      E(request.name) +
      "</strong><span>@" +
      E(request.username) +
      "</span><span>" +
      E(request.category) +
      "</span>" +
      '<span class="ig-dm-mutual">คุณทั้งสองไม่ได้ติดตามกันบน Instagram</span></div>' +
      '<div class="ig-dm-messages" id="ig-dm-messages">' +
      messages +
      "</div>" +
      '<div class="ig-request-actions"><div class="ig-request-confirm"><strong>ยอมรับคำขอส่งข้อความจาก ' +
      E(request.name) +
      " (@" +
      E(request.username) +
      ") ไหม?</strong>" +
      '<p>หากคุณยอมรับ เขาจะสามารถโทรหาคุณและเห็นข้อมูล เช่น สถานะการใช้งานและเวลาที่คุณอ่านข้อความได้ด้วย</p></div><div class="ig-request-buttons">' +
      '<button type="button" class="ig-request-block" onclick="blockInstagramRequest(\'' +
      E(id) +
      "')\">บล็อก</button>" +
      '<button type="button" class="ig-request-delete" onclick="deleteInstagramRequest(\'' +
      E(id) +
      "')\">ลบ</button>" +
      '<button type="button" class="ig-request-accept" onclick="acceptInstagramRequest(\'' +
      E(id) +
      "')\">ยอมรับ</button>" +
      "</div></div>" +
      homeIndicator +
      "</div></div>";
    showScreen("instagram-screen");
    const area = $("#ig-dm-messages");
    if (area) area.scrollTop = area.scrollHeight;
  };

  window.deleteInstagramRequest = function (id) {
    delete instagramMessageRequests[id];
    window.openInstagramRequests();
  };

  window.blockInstagramRequest = function (id) {
    delete instagramMessageRequests[id];
    window.openInstagramRequests();
  };

  window.acceptInstagramRequest = function (id) {
    const request = instagramMessageRequests[id];
    if (!request) return;
    const chatId = "casting_" + id;
    instagramDmChats[chatId] = {
      name: request.name,
      username: request.username,
      initials: request.initials,
      avatar: null,
      /* company/casting team acc : dont show status show aja original messagenya */
      time: request.time,
      activityAt: Date.now(),
      messages: request.messages.slice(),
    };
    delete instagramMessageRequests[id];
    window.openInstagramChat(chatId);
  };

  window.openInstagramChat = function (id, keepFocus) {
    const chat = instagramDmChats[id];
    if (!chat) return;
    const msgs = chat.messages;
    const backFn = window.__igDmBack || "openInstagramDM()";
    window.__igDmBack = null;
    let body = "";
    msgs.forEach((m, i) => {
      if (dmIsDate(m)) {
        body += '<div class="dm-date"><span>' + E(m.text) + "</span></div>";
        return;
      }
      const out = dmIsOut(m),
        prev = msgs[i - 1],
        next = msgs[i + 1];
      const sp = !!prev && !dmIsDate(prev) && dmIsOut(prev) === out;
      const sn = !!next && !dmIsDate(next) && dmIsOut(next) === out;
      const text = E(m.text).replace(/\n/g, "<br>");
      const slot = out
        ? ""
        : sn
          ? '<span class="dm-sp"></span>'
          : '<span class="dm-mav">' +
            (chat.avatar
              ? '<img src="' + E(chat.avatar) + '" alt="">'
              : "<span>" +
                E(chat.initials || chat.name.slice(0, 1)) +
                "</span>") +
            "</span>";
      if (m.story) {
        body +=
          '<div class="dm-sr ' +
          (out ? "out" : "in") +
          '"><span>' +
          (out
            ? m.react
              ? "คุณรีแอคต่อสตอรี่ของเขา"
              : "คุณตอบกลับสตอรี่ของเขา"
            : "ตอบกลับสตอรี่ของคุณ") +
          '</span><img src="' +
          E(m.story) +
          '" alt=""></div>';
      }
      if (m.react) {
        body +=
          '<div class="dm-m out"><div class="dm-rx">' + text + "</div></div>";
        return;
      }
      body +=
        '<div class="dm-m ' +
        (out ? "out" : "in") +
        (sp ? "" : " gs") +
        '">' +
        slot +
        '<div class="dm-b ' +
        (out ? "out" : "in") +
        (sp ? " sp" : "") +
        (sn ? " sn" : "") +
        '">' +
        text +
        "</div></div>";
    });
    const lastMsg = igLastMessage(chat);
    if (lastMsg && dmIsOut(lastMsg))
      body +=
        '<div class="dm-seen">เห็นแล้ว ' + E(igTimeLabel(chat.time)) + "</div>";

    const followInfo = chat.mutualSince
      ? '<span class="dm-mutual">คุณทั้งสองติดตามกันบน Instagram</span><span class="dm-mutual">ติดตามกันมาตั้งแต่ ' +
        E(chat.mutualSince) +
        "</span>"
      : '<span class="dm-mutual">คุณทั้งสองไม่ได้ติดตามกันบน Instagram</span>';
    const profileButton =
      id === "riku_new"
        ? '<button class="dm-prof" type="button" onclick="openInstagramProfile(\'riku_new\')">ดูโปรไฟล์</button>'
        : '<button class="dm-prof" type="button" disabled aria-disabled="true">ดูโปรไฟล์</button>';
    const intro =
      '<div class="dm-intro">' +
      dmAv(chat, "xl") +
      "<strong>" +
      E(chat.name) +
      "</strong><span>" +
      E(chat.username || "") +
      " · Instagram</span>" +
      followInfo +
      profileButton +
      "</div>";

    $("#instagram-screen").innerHTML =
      '<div class="ios-app full ig-dm-app">' +
      '<div class="dm-nav">' +
      dmBack(backFn) +
      '<button class="dm-who" type="button"' +
      (id === "riku_new"
        ? " onclick=\"openInstagramProfile('riku_new')\""
        : "") +
      ">" +
      dmAv(chat, "sm") +
      '<span class="dm-id"><strong>' +
      E(chat.name) +
      "</strong><small>" +
      E(chat.username || "") +
      "</small></span></button>" +
      '<span class="dm-acts"><button class="dm-ic" type="button" aria-label="Audio call">' +
      DMI.phone +
      "</button>" +
      '<button class="dm-ic" type="button" aria-label="Video call">' +
      IC.video +
      "</button></span></div>" +
      '<div class="dm-room"><div class="dm-msgs" id="ig-dm-messages">' +
      intro +
      body +
      "</div>" +
      '<div class="dm-input"><span class="dm-pill">' +
      '<span class="dm-cam-btn">' +
      DMI.camera +
      "</span>" +
      '<span class="dm-ph">Message...</span>' +
      '<span class="dm-tools">' +
      IC.mic +
      DMI.image +
      DMI.sticker +
      "</span></span></div></div>" +
      homeIndicator +
      "</div>";
    showScreen("instagram-screen");
    const area = $("#ig-dm-messages");
    if (area)
      area.scrollTop = id === "riku_new" && !keepFocus ? 0 : area.scrollHeight;
  };

  /* =============== RK ngerep story plus notif DM =============== */
  let igDmOpen = null,
    igRkQ = Promise.resolve(),
    igBn = null,
    igBnT = 0;
  const igOpenChatOrig = window.openInstagramChat;
  window.openInstagramChat = function (id, keepFocus) {
    igDmOpen = id;
    if (id === "riku_new") {
      const c = instagramDmChats.riku_new;
      if (c) {
        if (c.unread)
          keepFocus = true; /* kalo ada pesan baru muncul chat dan scroll ke paling baru */
        c.unread = false;
        c.unreadN = 0;
      }
      igBnHide();
      if (appBadges.instagram) {
        appBadges.instagram = 0;
        try {
          renderHomeAndDock();
        } catch (e) {}
      }
    }
    return igOpenChatOrig.call(this, id, keepFocus);
  };
  /* open DM chat RK */
  const igViewingRiku = () =>
    igDmOpen === "riku_new" &&
    !!document.querySelector("#instagram-screen.active #ig-dm-messages");
  const igSfx = (n) => {
    try {
      if (window.SFX && SFX[n]) SFX[n]();
    } catch (e) {}
  };

  function igBnHide() {
    clearTimeout(igBnT);
    if (igBn) igBn.classList.remove("show");
  }
  function igBnShow(text) {
    const c = instagramDmChats.riku_new;
    if (!c) return;
    if (!igBn) {
      igBn = document.createElement("div");
      igBn.className = "msg-banner ig-banner";
      (document.querySelector(".phone") || document.body).appendChild(igBn);
      let y0 = null;
      igBn.addEventListener("pointerdown", (e) => {
        y0 = e.clientY;
        try {
          igBn.setPointerCapture(e.pointerId);
        } catch (_) {}
      });
      igBn.addEventListener("pointerup", (e) => {
        const dy = y0 === null ? 0 : e.clientY - y0;
        y0 = null;
        if (dy < -16) {
          igBnHide();
          return;
        }
        igBnHide();
        if (igSv) closeIgStory(true);
        window.__igDmBack = "openInstagramDM()";
        window.openInstagramChat("riku_new");
      });
      igBn.addEventListener("pointercancel", () => {
        y0 = null;
      });
    }
    const was = igBn.classList.contains("show");
    const html =
      '<span class="avw"><img class="av" src="' +
      E(c.avatar || "icon-ig.png") +
      '" alt="" decoding="sync"><img class="ai" src="icon-ig.png" alt="" decoding="sync"></span><div class="tx"><div class="t1"><span>' +
      E(c.username || c.name) +
      '</span><small>ตอนนี้</small></div><div class="t2">' +
      E(text) +
      "</div></div>";
    if (igBn.dataset.html !== html) {
      igBn.innerHTML = html;
      igBn.dataset.html = html;
    }
    igBn.classList.remove("bump");
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        igBn.classList.add("show");
        if (was) igBn.classList.add("bump");
      }),
    );
    clearTimeout(igBnT);
    igBnT = setTimeout(igBnHide, 4500);
  }

  /* HTML buat semua pesan di chat room (buat choice-based chat juga tanpa render ulang) */
  function igBodyHtml(chat) {
    const msgs = chat.messages;
    let body = "";
    msgs.forEach((m, i) => {
      if (dmIsDate(m)) {
        body += '<div class="dm-date"><span>' + E(m.text) + "</span></div>";
        return;
      }
      const out = dmIsOut(m),
        prev = msgs[i - 1],
        next = msgs[i + 1];
      const sp = !!prev && !dmIsDate(prev) && dmIsOut(prev) === out;
      const sn = !!next && !dmIsDate(next) && dmIsOut(next) === out;
      const text = E(m.text).replace(/\n/g, "<br>");
      const slot = out
        ? ""
        : sn
          ? '<span class="dm-sp"></span>'
          : '<span class="dm-mav">' +
            (chat.avatar
              ? '<img src="' + E(chat.avatar) + '" alt="">'
              : "<span>" +
                E(chat.initials || chat.name.slice(0, 1)) +
                "</span>") +
            "</span>";
      if (m.story) {
        body +=
          '<div class="dm-sr ' +
          (out ? "out" : "in") +
          '"><span>' +
          (out
            ? m.react
              ? "คุณรีแอคต่อสตอรี่ของเขา"
              : "คุณตอบกลับสตอรี่ของเขา"
            : "ตอบกลับสตอรี่ของคุณ") +
          '</span><img src="' +
          E(m.story) +
          '" alt=""></div>';
      }
      if (m.react) {
        body +=
          '<div class="dm-m out"><div class="dm-rx">' + text + "</div></div>";
        return;
      }
      body +=
        '<div class="dm-m ' +
        (out ? "out" : "in") +
        (sp ? "" : " gs") +
        '">' +
        slot +
        '<div class="dm-b ' +
        (out ? "out" : "in") +
        (sp ? " sp" : "") +
        (sn ? " sn" : "") +
        '">' +
        text +
        "</div></div>";
    });
    const lastMsg = igLastMessage(chat);
    if (lastMsg && dmIsOut(lastMsg))
      body +=
        '<div class="dm-seen">เห็นแล้ว ' + E(igTimeLabel(chat.time)) + "</div>";
    return body;
  }
  window.__igBodyHtml = igBodyHtml;
  window.__igChat = () => instagramDmChats.riku_new;

  /* RK ngirim pesan while ga di DM chat, muncul badge sama notif sound */
  function igNotifyAway(text) {
    const c = instagramDmChats.riku_new;
    if (!c) return;
    c.unread = true;
    c.unreadN = (c.unreadN || 0) + 1;
    document
      .querySelectorAll('#instagram-screen .ig-t[aria-label="Messages"]')
      .forEach((t) => {
        let b = t.querySelector(".ig-tb");
        if (!b) {
          b = document.createElement("b");
          b.className = "ig-tb";
          t.appendChild(b);
        }
        b.textContent = c.unreadN;
      });
    appBadges.instagram = (appBadges.instagram || 0) + 1;
    try {
      renderHomeAndDock();
    } catch (e) {}
    document.querySelectorAll("#app-grid .app").forEach((a) => {
      const sp = a.querySelector(":scope > span");
      const b = a.querySelector(":scope > .badge");
      if (b && sp && sp.textContent === "Instagram")
        b.classList.add("badge-pop");
    });
    try {
      window.lockNotifAdd &&
        window.lockNotifAdd({
          app: "instagram",
          name: c.username || "ri_ku_03",
          text: text,
          av: c.avatar,
        });
    } catch (e) {}
    igBnShow(text);
    igSfx("notify");
    /* if we're on  */
    if (document.querySelector("#instagram-screen.active .ig-dm-list")) {
      try {
        window.openInstagramDM();
      } catch (e) {}
    }
  }
  window.__igNotifyAway = igNotifyAway;

  /* if ig dm's list jadi refresh ke preview pesan dan pesan blm terbacanya */
  function igRikuReply(text, node) {
    igRkQ = igRkQ
      .then(
        () => new Promise((r) => setTimeout(r, 2200 + Math.random() * 1800)),
      )
      .then(() => {
        const c = instagramDmChats.riku_new;
        if (!c) return;
        c.messages.push({ type: "incoming", text: text });
        c.time = "now";
        c.activityAt = Date.now();
        if (node && window.__igSetNode) window.__igSetNode(node);
        if (igViewingRiku()) {
          if (window.__igAppend && window.__igAppend()) return;
          const back = document.querySelector(
            "#instagram-screen .dm-nav .dm-ic",
          );
          window.__igDmBack = (back && back.getAttribute("onclick")) || null;
          window.openInstagramChat("riku_new", true);
          igSfx("receive");
          return;
        }
        igNotifyAway(text);
      });
  }

  window.__igRikuReply = igRikuReply;

  /* RK bales reaksi story terus ngirim DM */
  window.igMessage = function (k) {
    if (k !== "riku" || !instagramDmChats.riku_new) return;
    window.__igDmBack = "openIgProfile('riku', true)";
    window.openInstagramChat("riku_new");
  };

  window.openInstagramProfile = function (id) {
    if (id !== "riku_new") return;
    igFrom = { label: "Message", fn: "openInstagramChat('riku_new')" };
    window.openIgProfile("riku", true);
  };

  /* keepFrom = true Ketika navigasi dari post page ke profile */
  window.openIgProfile = function (u, keepFrom) {
    if (!igProfiles[u]) return;
    if (!keepFrom) igFrom = null;
    igCur = u;
    igRender(u);
    showScreen("instagram-screen");
  };
  /* a heart pops up at the exact spot : gradient pink */
  window.igGoto = function (u) {
    if (!igProfiles[u]) return;
    if (igCur === u) return;
    igFrom =
      igCur === "home"
        ? null
        : {
            label: igProfiles[igCur].username,
            fn: "openIgProfile('" + igCur + "')",
          };
    igCur = u;
    igRender(u);
    showScreen("instagram-screen");
  };
  window.openIgPost = function (u, i) {
    igRender(u, i);
    showScreen("instagram-screen");
    const sc = $("#ig-content-area"),
      t = $("#ig-pv-" + i);
    if (sc && t)
      requestAnimationFrame(() => {
        sc.scrollTop = Math.max(0, t.offsetTop - 96);
      });
  };

  function igApply(img, base, hid, lid, forceOn) {
    const was = !!igState[img];
    if (forceOn && was) return;
    igState[img] = !was;
    const btn = $("#" + hid),
      lab = $("#" + lid);
    if (btn) btn.classList.toggle("on", igState[img]);
    if (lab)
      lab.textContent = "likes " + igFmt(base + (igState[img] ? 1 : 0)) + " ";
  }
  /* A heart pops up at the point of contact: it features a pink gradient, sits at a slight tilt, bounces with a springy motion, lingers for a moment, then drifts upward and fades away. */
  function igBurst(el, ev) {
    const ph = document.querySelector(".phone"),
      sc = ph.getBoundingClientRect().width / ph.offsetWidth || 1,
      r = el.getBoundingClientRect();
    const x =
      ev && ev.clientX != null ? (ev.clientX - r.left) / sc : r.width / sc / 2;
    const y =
      ev && ev.clientY != null ? (ev.clientY - r.top) / sc : r.height / sc / 2;
    const rot = (Math.random() * 30 - 15).toFixed(1) + "deg",
      id = "hg" + Date.now();
    const b = document.createElement("div");
    b.style.cssText =
      "position:absolute;left:" +
      x +
      "px;top:" +
      y +
      "px;width:86px;height:86px;pointer-events:none;z-index:5;filter:drop-shadow(0 4px 10px rgba(255,40,110,.35))";
    b.innerHTML =
      '<svg viewBox="0 0 24 24" width="100%" height="100%"><defs><linearGradient id="' +
      id +
      '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF5FA2"/><stop offset="1" stop-color="#F4206E"/></linearGradient></defs><path d="M12 21.2s-8.7-5.4-8.7-11.8A5 5 0 0 1 12 6.5a5 5 0 0 1 8.7 2.9c0 6.4-8.7 11.8-8.7 11.8z" fill="url(#' +
      id +
      ')" stroke="url(#' +
      id +
      ')" stroke-width="1.2" stroke-linejoin="round"/></svg>';
    el.appendChild(b);
    const t = "translate(-50%,-50%) rotate(" + rot + ") ";
    const an = b.animate(
      [
        { transform: t + "scale(0)", opacity: 0, offset: 0 },
        { transform: t + "scale(1.25)", opacity: 1, offset: 0.2 },
        { transform: t + "scale(.92)", opacity: 1, offset: 0.34 },
        { transform: t + "scale(1)", opacity: 1, offset: 0.46 },
        { transform: t + "scale(1)", opacity: 1, offset: 0.75 },
        {
          transform: t + "translateY(-26px) scale(1.12)",
          opacity: 0,
          offset: 1,
        },
      ],
      { duration: 1000, easing: "ease-out", fill: "forwards" },
    );
    an.onfinish = () => b.remove();
  }
  window.igLike = function (i, forceOn) {
    const p = igFeedPosts[i];
    igApply(p.img, igNum(p.likes), "ig-h" + i, "ig-l" + i, forceOn);
  };
  window.igLikePost = function (k, i, forceOn) {
    const x = igProfiles[k].posts[i];
    igApply(x.img, igBase(x.img, k), "ig-hp" + i, "ig-lp" + i, forceOn);
  };
  window.igTap = function (i, el, ev) {
    const now = Date.now();
    if (now - (window.igTap.t || 0) < 320) {
      igLike(i, true);
      igBurst(el, ev);
    }
    window.igTap.t = now;
  };
  window.igTapPost = function (k, i, el, ev) {
    const now = Date.now();
    if (now - (window.igTapPost.t || 0) < 320) {
      igLikePost(k, i, true);
      igBurst(el, ev);
    }
    window.igTapPost.t = now;
  };

  /* =============== PHONE =============== */
  const phIc = {
    star: ic(
      '<path d="m12 3.8 2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4-4 5.6-.8z"/>',
    ),
    clock: IC.clock,
    person: IC.person,
    keypad:
      '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="5" r="1.7"/><circle cx="12" cy="5" r="1.7"/><circle cx="18" cy="5" r="1.7"/><circle cx="6" cy="11" r="1.7"/><circle cx="12" cy="11" r="1.7"/><circle cx="18" cy="11" r="1.7"/><circle cx="6" cy="17" r="1.7"/><circle cx="12" cy="17" r="1.7"/><circle cx="18" cy="17" r="1.7"/><circle cx="12" cy="22" r="1.7"/></svg>',
    vm: ic(
      '<circle cx="7" cy="12" r="3.6"/><circle cx="17" cy="12" r="3.6"/><path d="M7 15.6h10"/>',
    ),
    out: ic('<path d="M7 17 17 7M9 7h8v8"/>', 2.2),
    inn: ic('<path d="M17 7 7 17M7 9v8h8"/>', 2.2),
    miss: ic('<path d="M17 7 7 17M7 9v8h8"/>', 2.2),
  };
  const ph = { filter: "all" };
  /* outgoing calls made while the webpage is open - store them temporarily in memory (jangan disimpen ke device) */
  const phLog = [];

  function phCalls() {
    const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    let unk = null;
    try {
      unk = JSON.parse(localStorage.getItem("ph_unk2") || "null");
    } catch (e) {}
    if (!unk) {
      unk = {
        num: "+82 10 " + rnd(1000, 9999) + " " + rnd(1000, 9999),
        days: rnd(4, 9),
        h: rnd(8, 22),
        m: rnd(0, 59),
      };
      try {
        localStorage.setItem("ph_unk2", JSON.stringify(unk));
      } catch (e) {}
    }
    const at = (days, h, m) => {
      const d = new Date();
      d.setDate(d.getDate() - days);
      d.setHours(h, m, 0, 0);
      return d;
    };
    // Always on Recent
    const calls = [
      {
        name: "Nanas",
        sub: "Mobile",
        type: "out",
        when: at(0, 12, 14),
      },
      { name: "Nanas", sub: "Mobile", type: "in", when: at(0, 9, 31) },
      { name: "Papa", sub: "Mobile", type: "in", when: at(0, 11, 42) },
      { name: "Kak Samu", sub: "Mobile", type: "in", when: at(1, 20, 5) },
      { name: "Bang Nando", sub: "Mobile", type: "in", when: at(10, 19, 30) },
      { name: "Bang Noah", sub: "Mobile", type: "in", when: at(11, 13, 48) },
    ];
    phLog.forEach((l) =>
      calls.push({
        name: l.name,
        sub: l.sub,
        type: l.type || "out",
        when: new Date(l.when),
      }),
    );
    calls.sort((a, b) => b.when - a.when);
    return calls;
  }

  function phWhen(d) {
    const t0 = new Date();
    t0.setHours(0, 0, 0, 0);
    const d0 = new Date(d);
    d0.setHours(0, 0, 0, 0);
    const days = Math.round((t0 - d0) / 86400000);
    if (days <= 0)
      return (
        String(d.getHours()).padStart(2, "0") +
        ":" +
        String(d.getMinutes()).padStart(2, "0")
      );
    if (days === 1) return "Yesterday";
    if (days < 7) return +EN_D[d.getDay()];
    return (
      String(d.getDate()).padStart(2, "0") +
      "/" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "/" +
      d.getFullYear()
    );
  }

  function renderPhone() {
    if (appBadges.phone) {
      appBadges.phone = 0;
      try {
        renderHomeAndDock();
      } catch (e) {}
    } /* Waktu phone dibuka, badge misscal nya ngilang */
    const calls = phCalls().filter(
      (c) => ph.filter === "all" || c.type === "miss",
    );
    ph.rows = calls;
    const rows = calls
      .map(
        (c, n) =>
          '<div class="row ph-row" onclick="phCall(' +
          n +
          ')">' +
          '<div class="ph-main"><div class="ph-name' +
          (c.type === "miss" ? " miss" : "") +
          '">' +
          E(c.name) +
          "</div>" +
          '<div class="ph-sub">' +
          (c.type === "out"
            ? phIc.out
            : c.type === "in"
              ? phIc.inn
              : phIc.miss) +
          "<span>" +
          E(c.sub) +
          "</span></div></div>" +
          '<span class="ph-when">' +
          E(phWhen(c.when)) +
          '</span><span class="ph-info">' +
          IC.info +
          "</span></div>",
      )
      .join("");
    const tab = (icon, label, on) =>
      '<div class="ftab' +
      (on ? " on" : "") +
      '">' +
      icon +
      "<span>" +
      label +
      "</span></div>";
    mount(
      '<div class="ios-app grouped">' +
        '<div class="ios-top">' +
        back("หน้าหลัก", HOME) +
        '<button class="gl">Edit</button></div>' +
        '<div class="ios-scroll"><div class="ios-title">Recents</div><div style="height:8px"></div>' +
        '<div class="ph-seg"><div class="' +
        (ph.filter === "all" ? "on" : "") +
        '" onclick="phFilter(\'all\')">All</div><div class="' +
        (ph.filter === "miss" ? "on" : "") +
        '" onclick="phFilter(\'miss\')">Missed</div></div>' +
        (rows
          ? '<div class="grp">' + rows + "</div>"
          : '<div class="ph-empty">No missed calls</div>') +
        "</div>" +
        '<div class="ftabs">' +
        tab(phIc.star, "Favorites") +
        tab(phIc.clock, "Recents", true) +
        tab(phIc.person, "Contacts") +
        tab(phIc.keypad, "Keypad") +
        tab(phIc.vm, "Voicemail") +
        "</div>" +
        "</div>",
    );
  }
  window.phFilter = function (f) {
    ph.filter = f;
    renderPhone();
  };

  /* =============== CALL: outgoing call screen =============== */
  /* audio caption script: delay before appearing seconds, who, text
    : 'them' = other person, 'me' = kita, 'nar' = narasi audio, 'end' = other person hangs up
     edit message sesuai ini (keyname = name in the call list, '*' = applies to everyone yg ga punya script) */
  const CALL_SCRIPTS = {
    Nanas: [
      [0.8, "nar", "(Nasa picked up)"],
      [1.2, "them", "Halo, sayang~"],
      [1.5, "me", "Cantik, jadwal kamu selesai jam berapa?"],
      [1.9, "me", "Aku sama dedek jemput kesitu ya?"],
      [2.1, "them", "Aku masih hectic"],
      [2.3, "them", "Nanti aku chat lagi ya"],
    ],
    แม่: [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "ว่าไงลูก กินข้าวหรือยัง"],
      [3.0, "me", "กินแล้วครับแม่ แม่ล่ะครับ"],
      [3.0, "them", "แม่ก็เพิ่งกินเสร็จ ดูแลตัวเองด้วยนะ อย่าหักโหมล่ะ"],
      [3.2, "me", "ครับ แม่ก็พักผ่อนด้วยนะ"],
      [3.0, "them", "จ้ะ ไว้โทรมาใหม่นะลูก"],
    ],
    "+": [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "여보세요?"],
      [2.8, "me", "ขอโทษครับ ผมโทรผิดหรือเปล่า"],
      [3.0, "nar", "(ปลายสายพูดภาษาเกาหลีเร็ว ๆ แล้ววางสาย)"],
      [2.0, "end"],
    ],
    "*": [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "ฮัลโหล"],
      [2.6, "me", "ฮัลโหล สะดวกคุยไหม"],
      [3.0, "them", "สะดวกครับ มีอะไรหรือเปล่า"],
      [3.2, "me", "ไม่มีอะไรหรอก แค่โทรมาทักทาย"],
      [3.0, "them", "อ๋อ ขอบคุณที่โทรมานะ"],
    ],
  };

  /* dialog tambahan buat karakternya (mixed sama lines diatas) */
  const CALL_MORE = {
    Nanas: [
      [
        [0.8, "nar", "(Nasa picked up)"],
      [1.2, "them", "Halo, sayang~"],
      [1.5, "me", "Cantik, jadwal kamu selesai jam berapa?"],
      [1.9, "me", "Aku sama dedek jemput kesitu ya?"],
      [2.1, "them", "Aku masih hectic"],
      ],
      [
        [0.8, "nar", "(aNJING)"],
        [1.2, "them", "พี่ยังไม่นอนเหรอครับ ดึกแล้วนะ"],
        [3.0, "me", "นอนไม่หลับ เลยโทรมาหา"],
        [3.0, "them", "(หัวเราะเบา ๆ) ผมก็เหมือนกัน นอนไม่หลับเลย"],
        [3.2, "me", "งั้นคุยกันไปก่อนก็ได้"],
        [3.0, "nar", "(ได้ยินเสียงผ้าห่มขยับ เหมือนเขากำลังซุกตัวลงนอน)"],
        [2.8, "them", "ไม่ต้องวางนะพี่ ผมอยากฟังเสียงพี่จนหลับ"],
      ],
      [
        [0.8, "nar", "(MONYETSIAH)"],
        [1.2, "them", "พี่~ ผมเพิ่งเห็นพยากรณ์ว่าพรุ่งนี้ฝนตก"],
        [3.2, "me", "ไม่เป็นไร ไปนั่งคาเฟ่กันก็ได้"],
        [3.0, "them", "ดีเลยครับ ผมรู้จักร้านนึงน่ารักมาก"],
        [3.2, "me", "งั้นพี่ฝากริคุเลือกร้านนะ"],
        [3.0, "them", "(หัวเราะ) ได้เลยครับ เดี๋ยวส่งรูปให้ดู"],
      ],
    ],
    แม่: [
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "ว่าไงลูก Todayทำงานเหนื่อยไหม"],
        [3.0, "me", "ก็พอไหวครับแม่"],
        [3.0, "them", "อย่าลืมกินยาบำรุงที่แม่ส่งไปให้นะ"],
        [3.0, "me", "ครับ กินอยู่ครับ"],
        [3.0, "them", "ดีแล้วลูก แม่เป็นห่วงนะ นอนให้พอด้วย"],
      ],
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "ลูก ที่นั่นฝนตกหรือเปล่า"],
        [3.0, "me", "ตกนิดหน่อยครับ"],
        [3.0, "them", "พกร่มด้วยนะ อย่าเดินตากฝน เดี๋ยวไม่สบาย"],
        [3.0, "me", "ครับแม่ ผมมีร่มอยู่"],
        [3.0, "them", "เก่งมาก แม่กำลังทำกับข้าวอยู่ เดี๋ยวส่งไปให้อีกนะ"],
      ],
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "แม่ก็กำลังคิดถึงลูกอยู่พอดี เสียงลูกฟังดูเหนื่อย ๆ นะ"],
        [3.2, "me", "ไม่เป็นไรครับ แค่ง่วงนิดหน่อย"],
        [3.0, "them", "งั้นรีบพักเถอะ ว่าง ๆ กลับบ้านมาหาแม่บ้างนะ"],
        [3.0, "me", "ครับ เดี๋ยวผมดูตารางก่อน"],
        [3.0, "them", "จ้ะ รักลูกนะ"],
      ],
    ],
    "*": [
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "ฮัลโหล"],
        [2.6, "me", "ว่างไหม พอดีมีเรื่องอยากถามนิดหน่อย"],
        [3.0, "them", "ถามได้เลย"],
        [3.2, "me", "ไว้ค่อยคุยตอนเจอกันดีกว่า"],
        [3.0, "them", "โอเค ได้เลย"],
      ],
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "ครับ ว่าไง"],
        [2.6, "me", "พรุ่งนี้ว่างหรือเปล่า"],
        [3.0, "them", "ว่างอยู่ มีอะไรเหรอ"],
        [3.2, "me", "ว่าจะชวนไปกินข้าว"],
        [3.0, "them", "ได้เลย เดี๋ยวทักไปคุยเรื่องเวลานะ"],
      ],
      [
        [0.8, "nar", "(รับสายแล้ว)"],
        [1.2, "them", "ฮัลโหล เสียงไม่ค่อยชัดเลย"],
        [2.6, "me", "ตอนนี้ชัดขึ้นไหม"],
        [3.0, "them", "ชัดแล้ว ว่าไง"],
        [3.2, "me", "ไม่มีอะไร แค่คิดถึงเลยโทรมา"],
        [3.0, "them", "ขอบคุณนะที่โทรมา"],
      ],
    ],
  };

  /* closing remaks buat chapter, ending call dengan closing remarks */
  CALL_SCRIPTS["Nanas"].bye =
    "ผมต้องวางก่อนนะครับพี่ แต่ไว้เจอกันเร็ว ๆ นี้นะ คิดถึงพี่นะ";
  CALL_MORE["Nanas"][0].bye =
    "งั้นผมรีบไปเก็บของก่อนนะครับ เจอกันที่ร้านนะพี่";
  CALL_MORE["Nanas"][1].bye =
    "(เสียงงัวเงีย) ผมเริ่มง่วงแล้วครับ... พี่ฝันดีนะ ผมขอหลับก่อน";
  CALL_MORE["Nanas"][2].bye =
    "งั้นผมไปหาร้านก่อนนะครับ เดี๋ยวส่งรูปให้พี่ดู อย่าลืมว่างพรุ่งนี้นะ";
  CALL_SCRIPTS["แม่"].bye = "แม่ไปจัดของก่อนนะลูก ดูแลตัวเองด้วย";
  CALL_MORE["แม่"][0].bye = "งั้นแม่วางก่อนนะ อย่าลืมกินยาแล้วรีบพักผ่อนด้วย";
  CALL_MORE["แม่"][1].bye = "แม่ไปดูหม้อต้มก่อนนะ เดี๋ยวไหม้ ไว้ค่อยคุยกันใหม่";
  CALL_MORE["แม่"][2].bye = "แม่วางก่อนนะลูก คืนนี้นอนหลับฝันดีนะ";
  CALL_SCRIPTS["*"].bye = "งั้นขอวางสายก่อนนะ ไว้คุยกันใหม่";
  CALL_MORE["*"][0].bye = "โอเค งั้นเจอกันแล้วค่อยคุยนะ วางก่อนนะ";
  CALL_MORE["*"][1].bye = "โอเค งั้นเดี๋ยวทักไปนะ ไว้เจอกัน";
  CALL_MORE["*"][2].bye = "ขอบคุณนะ งั้นไว้คุยกันใหม่ วางก่อนนะ";

  /* ===== addressing younger person politely ===== */
  CALL_SCRIPTS["โอชียอน"] = [
    [0.8, "nar", "(รับสายแล้ว)"],
    [1.2, "them", "ว่าไงพี่ อยู่ดี ๆ ก็โทรมา มีเรื่องอะไรหรือเปล่า"],
    [3.0, "me", "ไม่มีอะไรหรอก แค่โทรมาเช็กหน่อย ชียอนกินข้าวหรือยัง"],
    [3.0, "them", "กินแล้ว พี่นั่นแหละ อย่าบอกนะว่ากินกาแฟแทนข้าวอีก"],
    [3.0, "me", "กินแล้วน่า ไม่ต้องห่วง"],
    [3.0, "them", "ไม่เชื่อหรอก เดี๋ยวหนูโทรมาเช็กอีกรอบนะ"],
  ];
  CALL_MORE["โอชียอน"] = [
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "พี่~ โคโค่นั่งมองประตูอีกแล้ว คงรอพี่อยู่แน่ ๆ"],
      [3.0, "me", "พี่ก็คิดถึงโคโค่ เดี๋ยวพี่ดูตารางแล้วจะรีบกลับไป"],
      [3.0, "them", "พูดแบบนี้ทุกครั้งเลย ว่างเมื่อไหร่ก็กลับมาจริง ๆ สักทีสิ"],
      [3.0, "me", "รู้แล้วน่า รอบนี้พี่พาริคุไปด้วยก็ได้"],
      [3.0, "them", "จริงนะ! งั้นหนูให้แม่ทำของอร่อยรอเลย"],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "พี่ กินยาบำรุงที่แม่ส่งไปหรือยัง"],
      [3.0, "me", "เอ่อ… เดี๋ยวกิน"],
      [3.0, "them", "เดี๋ยวคือยังใช่ไหม ไปกินเดี๋ยวนี้เลย หนูรออยู่"],
      [2.5, "nar", "(ได้ยินเสียงขวดยาเขย่าเบา ๆ)"],
      [3.0, "me", "กินแล้ว พอใจหรือยัง"],
      [3.0, "them", "ค่อยยังชั่ว คราวหน้าอย่าให้หนูต้องบ่นอีกนะ"],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "พี่ ช่วงนี้ริคุเป็นยังไงบ้าง"],
      [3.0, "me", "ก็ดี ทำไมเหรอ"],
      [3.0, "them", "ไม่มีอะไร แค่อยากรู้ว่าพี่ดูแลเขาดีหรือเปล่า"],
      [3.0, "me", "ดีสิ ไม่ต้องห่วงหรอก"],
      [
        3.0,
        "them",
        "(หัวเราะ) งั้นก็ดี ถ้าเขาร้องไห้เพราะพี่ หนูไปเอาเรื่องพี่เองนะ",
      ],
    ],
  ];
  CALL_SCRIPTS["โอชียอน"].bye =
    "หนูต้องไปแล้วนะ ไว้โทรมาใหม่ แล้วกินข้าวจริง ๆ ด้วยล่ะ";
  CALL_MORE["โอชียอน"][0].bye = "โอเค ๆ หนูไปบอกแม่ก่อนนะ แล้วพี่ห้ามผิดสัญญา!";
  CALL_MORE["โอชียอน"][1].bye =
    "หนูวางก่อนนะ Todayรีบนอนด้วย ห้ามเถียงเหมือนเดิม";
  CALL_MORE["โอชียอน"][2].bye = "โอเค แค่นี้ก่อนนะ ฝากความคิดถึงให้ริคุด้วย";
  CALL_SCRIPTS["แดยอง"] = [
    [0.8, "nar", "(รับสายแล้ว)"],
    [1.2, "them", "พี่โทรมาพอดีเลยครับ ผมกำลังนึกถึงพี่อยู่พอดี"],
    [3.0, "me", "จริงเหรอ พี่แค่โทรมาถามสารทุกข์สุกดิบ แดยองสบายดีไหม"],
    [
      3.0,
      "them",
      "สบายดีครับ แต่ช่วงนี้ผมเป็นห่วงพี่มากกว่า เห็นพี่ดูเหนื่อย ๆ นะครับ",
    ],
    [3.0, "me", "ขอบใจนะ พี่ไม่เป็นไร แดยองก็ดูแลตัวเองด้วย"],
    [3.0, "them", "ครับ พี่ก็พักผ่อนเยอะ ๆ นะครับ"],
  ];
  CALL_MORE["แดยอง"] = [
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [
        1.2,
        "them",
        "พี่ครับ ร้านข้าวที่ผมเคยชวนพี่ไป ตอนนี้มีเมนูใหม่แล้วนะครับ",
      ],
      [3.0, "me", "จริงเหรอ เมนูอะไร"],
      [3.0, "them", "ซุปเต้าหู้นุ่มครับ ผมว่าพี่ต้องชอบแน่ ๆ"],
      [3.0, "me", "งั้นไปกันเร็ว ๆ นี้ พี่เลี้ยงเอง"],
      [
        3.0,
        "them",
        "ไม่ต้องหรอกครับ... แต่ถ้าพี่ยืนยัน ผมก็ไม่กล้าขัดครับ ㅎㅎ",
      ],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [
        1.2,
        "them",
        "พี่ครับ ผมไปดูหนังเรื่องที่พี่เคยแนะนำรอบสองมาแล้ว ยังประทับใจไม่หายเลย",
      ],
      [3.0, "me", "ㅋㅋ ชอบขนาดนั้นเลยเหรอ"],
      [3.0, "them", "ครับ ผมชอบฉากสุดท้ายมากที่สุดเลย เกือบร้องไห้อีกแล้วครับ"],
      [3.0, "me", "เดี๋ยวคราวหน้าพี่แนะนำเรื่องอื่นให้อีก"],
      [3.0, "them", "จริงเหรอครับ! ผมรออยู่นะครับ"],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [
        1.2,
        "them",
        "พี่ครับ ช่วงนี้ผมเห็นพี่ตอบแชทดึก ๆ บ่อยเลย งานหนักไหมครับ",
      ],
      [3.0, "me", "ก็นิดหน่อย แต่ไหวอยู่"],
      [3.0, "them", "ถ้ามีอะไรให้ผมช่วย บอกได้เสมอนะครับ ผมยินดีเลย"],
      [3.0, "me", "ขอบใจนะ ได้ยินแค่นี้ก็ดีใจแล้ว"],
      [3.0, "them", "พี่เป็นรุ่นพี่ที่ผมเคารพที่สุดเลยนะครับ"],
    ],
  ];
  CALL_SCRIPTS["แดยอง"].bye = "งั้นผมไม่รบกวนพี่แล้วนะครับ ไว้เจอกันครับ";
  CALL_MORE["แดยอง"][0].bye =
    "ครับ เดี๋ยวผมส่งเวลากับที่อยู่ให้ทางแชทนะครับ แล้วเจอกันครับพี่";
  CALL_MORE["แดยอง"][1].bye =
    "ถ้างั้นผมขอตัวก่อนนะครับพี่ ไว้คุยเรื่องหนังกันต่อครับ";
  CALL_MORE["แดยอง"][2].bye =
    "ครับ งั้นผมวางก่อนนะครับ พักผ่อนเยอะ ๆ นะครับพี่";
  CALL_SCRIPTS["ยูชิ"] = [
    [0.8, "nar", "(รับสายแล้ว)"],
    [1.2, "them", "พี่ครับ รู้ไหมครับว่าเมฆก้อนนั้นเหมือนแพนเค้กเลย"],
    [3.0, "me", "เมฆไหน ยูชิอยู่ข้างนอกเหรอ"],
    [3.0, "them", "ไม่ครับ ผมอยู่ในห้อง แต่เมื่อกี้เห็นผ่านหน้าต่าง"],
    [3.0, "me", "แล้วตอนนี้ล่ะ ยังเหมือนอยู่ไหม"],
    [3.0, "them", "หายไปแล้วครับ มันคงโดนใครกินไปแล้ว"],
  ];
  CALL_MORE["ยูชิ"] = [
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "พี่ครับ Todayริคุเข้าคลาสมาพร้อมถุงเท้าคนละสีครับ"],
      [3.0, "me", "ㅋㅋㅋ แล้วเขารู้ตัวไหม"],
      [3.0, "them", "ไม่รู้ครับ ผมเลยไม่บอก ผมว่าเข้ากันดี"],
      [3.0, "me", "ยูชิ... อย่างน้อยก็บอกเขาหลังเลิกคลาสนะ"],
      [3.0, "them", "ครับ ผมจะบอกครับ พร้อมถ่ายรูปไว้ด้วย"],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [
        1.2,
        "them",
        "พี่ครับ ผมคิดอยู่ว่าถ้าแมวส้มตัวนั้นมีชื่อ มันน่าจะชื่อฟักทอง",
      ],
      [3.0, "me", "ตัวหน้าตึกนั่นเหรอ ทำไมต้องฟักทอง"],
      [3.0, "them", "เพราะกลมครับ แล้วก็ดูอบอุ่น"],
      [3.0, "me", "ฟังดูมีเหตุผลแปลก ๆ แต่ก็น่ารักดี"],
      [3.0, "them", "ผมจะเอาขนมไปให้มันพรุ่งนี้ครับ พี่อยากไปด้วยไหมครับ"],
      [3.0, "me", "ไปสิ เดี๋ยวพี่ไปด้วย"],
    ],
    [
      [0.8, "nar", "(รับสายแล้ว)"],
      [1.2, "them", "พี่ครับ ถ้าฝนตกขึ้นฟ้า มันจะยังเรียกว่าฝนอยู่ไหมครับ"],
      [3.0, "me", "อยู่ ๆ ถามอะไรของยูชิ ㅋㅋ"],
      [3.0, "them", "เมื่อคืนผมนอนไม่หลับเพราะคิดเรื่องนี้ครับ"],
      [3.0, "me", "งั้นไปนอนก่อน แล้วค่อยคิดต่อ"],
      [3.0, "them", "ครับ ผมจะลองนอนดูครับ ถ้าฝันเห็นฝนขึ้นฟ้าจะมารายงานพี่"],
    ],
  ];
  CALL_SCRIPTS["ยูชิ"].bye =
    "อ๊ะ ผมนึกขึ้นได้ว่าลืมรดน้ำต้นไม้ ไว้ค่อยคุยนะครับพี่";
  CALL_MORE["ยูชิ"][0].bye =
    "อ๊ะ ได้ยินเสียงกริ่งคาบถัดไปแล้วครับ ผมวางก่อนนะครับพี่";
  CALL_MORE["ยูชิ"][1].bye =
    "ถ้างั้นผมไปซื้อขนมก่อนนะครับ ไว้เจอกันที่หน้าตึกครับพี่";
  CALL_MORE["ยูชิ"][2].bye = "งั้นผมไปนอนก่อนนะครับ ไว้ค่อยคุยกันใหม่ครับพี่";
  /* SY pake scripts sama kayak OSY */
  CALL_SCRIPTS["ชียอน"] = CALL_SCRIPTS["โอชียอน"];
  CALL_MORE["ชียอน"] = CALL_MORE["โอชียอน"];

  /* kalo SN yang manggil duluan berarti general calls "*" dan yg no tidak diketahui "+" */
  const CALL_GREET = {
    Nanas: [
      ["ฮัลโหล~ พี่", "อือ ริคุ พี่เอง"],
      ["ฮัลโหล~ พี่ชิอนเหรอ", "อือ พี่เอง"],
    ],
    แม่: [
      ["ฮัลโหล ลูกเหรอ", "ครับแม่ ผมเอง"],
      ["จ้ะ ลูก", "ครับแม่ ผมเอง"],
    ],
    โอชียอน: [
      ["ฮัลโหล~ พี่เหรอ", "อือ พี่เอง"],
      ["ฮัลโหล", "ชียอน พี่เองนะ"],
    ],
    แดยอง: [
      ["ฮัลโหลครับ พี่ชิอน", "อือ แดยอง พี่เอง"],
      ["สวัสดีครับพี่ชิอน", "สวัสดี แดยอง"],
    ],
    ยูชิ: [
      ["ฮัลโหลครับพี่", "อือ ยูชิ พี่เอง"],
      ["สวัสดีครับพี่", "สวัสดี ยูชิ"],
    ],
  };
  CALL_GREET["ชียอน"] = CALL_GREET["โอชียอน"];
  function callGreet(sc, key) {
    const g = CALL_GREET[key];
    if (!g) return sc;
    const pair = g[Math.floor(Math.random() * g.length)];
    const rest = sc
      .slice(1)
      .map((l, i) =>
        i === 0 ? [2.6].concat(l.slice(1)) : l,
      ); /* first line og script nunggu sampe greetings selesai */
    const out = [sc[0], [1.0, "them", pair[0]], [2.2, "me", pair[1]]].concat(
      rest,
    );
    if ("bye" in sc) out.bye = sc.bye;
    if (sc.t) out.t = sc.t;
    return out;
  }
  /* ===== Repeated Call Context: Previous call unanswered / Calling too frequently =====
     - kalo ga dijawab dan line nya busy, nanti ngebales lagi sibuk (CALL_EXCUSE)
     - terus-terusan manggil → kamu baru nelp (CALL_REPEAT = initial remark, CALL_REPEAT_HEAVY = keseringan)
     ini kalo SN yg mulai call duluan bahkan no baru
     keseringan bisa diatur CALL_CTX (aturan milisecond) — kalo refresh berarti reset */
  const CALL_CTX = {
    missWin: 20 * 60 * 1000 /* aku ga liat tadi → minta maaf pas jawab */,
    freqWin: 10 * 60 * 1000 /* itung brp kali nelpon org yg sama */,
    repeatFrom: 2 /* kalo 2 kali, jawabnya kamu baru aja nelpon */,
    heavyFrom: 4 /* kalo 4 kali, jadi gabisa dijangkau */,
    excuseChance: 0.85 /* buat minta maaf gak angkat */,
  };
  const CALL_EXCUSE = {
    Nanas: [
      [
        "ริคุ เมื่อกี้พี่โทรไปไม่รับเลย อาบน้ำอยู่เหรอ",
        "ขอโทษนะครับพี่ เมื่อกี้ผมอาบน้ำอยู่ เลยไม่ได้ยินเสียงโทรศัพท์",
      ],
      [
        "เมื่อกี้พี่โทรไปตั้งนาน ทำไมไม่รับล่ะ",
        "เมื่อกี้มือถืออยู่ในกระเป๋า เพิ่งเห็นว่าพี่โทรมาครับ ขอโทษนะ",
      ],
      [
        "I tried calling you just now but couldn't get through—are you busy?",
        "I’m so sorry—I really wasn’t available just a moment ago. My heart sank when I saw the missed call.",
      ],
    ],
    แม่: [
      [
        "แม่ครับ เมื่อกี้ผมโทรไปไม่รับเลย แม่ไม่ว่างเหรอครับ",
        "โทษทีนะลูก เมื่อกี้แม่ทำกับข้าวอยู่ มือเปื้อนไปหมดเลยรับไม่ทัน",
      ],
      [
        "แม่ครับ เมื่อกี้ผมโทรหาแม่ ทำไมไม่รับครับ",
        "เมื่อกี้แม่ไปตลาดมา ไม่ได้ยินเสียงโทรศัพท์เลย โทรมานานหรือยังลูก",
      ],
      [
        "แม่ครับ เมื่อกี้โทรไปไม่เห็นรับสายเลย แม่อยู่บ้านหรือเปล่า",
        "แม่หาแว่นไม่เจอ เลยมองหน้าจอไม่เห็นว่าใครโทรมา ขอโทษนะลูก",
      ],
    ],
    โอชียอน: [
      [
        "ชียอน เมื่อกี้พี่โทรไปไม่รับเลยนะ หายไปไหนมา",
        "ขอโทษนะพี่ เมื่อกี้หนูอยู่ในห้องน้ำ มือถืออยู่อีกห้องเลย",
      ],
      [
        "เมื่อกี้พี่โทรไปไม่ติด หนูไม่ว่างเหรอ",
        "เมื่อกี้หนูไม่ว่างน่ะ มีงานต้องรีบส่ง เห็นสายพี่แล้วว่าจะโทรกลับอยู่พอดี",
      ],
      [
        "ชียอน เมื่อกี้พี่โทรไปตั้งนาน ทำไมไม่รับ",
        "เมื่อกี้หนูเผลอหลับไปแป๊บนึงพี่ เสียงโทรศัพท์ก็ไม่ดังด้วย",
      ],
    ],
    แดยอง: [
      [
        "แดยอง เมื่อกี้พี่โทรไปไม่รับเลย ไม่ว่างเหรอ",
        "ขอโทษครับพี่ เมื่อกี้ผมติดประชุมกลุ่มอยู่ เลยรับสายไม่ได้ครับ",
      ],
      [
        "เมื่อกี้พี่โทรไปไม่ติด แดยองอยู่ที่ไหนเหรอ",
        "ผมขอโทษครับ เมื่อกี้ผมอยู่ในห้องสมุด ต้องปิดเสียงไว้ครับ",
      ],
      [
        "แดยอง เมื่อกี้ทำไมไม่รับสายล่ะ",
        "เมื่อกี้ผมอยู่บนรถไฟใต้ดินครับ สัญญาณไม่ดีเลย ขอโทษด้วยนะครับพี่",
      ],
    ],
    ยูชิ: [
      [
        "ยูชิ เมื่อกี้พี่โทรไปไม่รับเลย ทำอะไรอยู่",
        "ขอโทษครับพี่ เมื่อกี้ผมรดน้ำต้นไม้อยู่ ถ้ารบกวนเวลากินน้ำ ต้นไม้จะงอนครับ",
      ],
      [
        "เมื่อกี้พี่โทรไปไม่ติด ยูชิไม่ว่างเหรอ",
        "เมื่อกี้ผมไม่ว่างครับ กำลังตัดสินใจว่าจะกินขนมรสไหน เรื่องใหญ่มากเลยครับ",
      ],
      [
        "ยูชิ เมื่อกี้พี่โทรไปตั้งนาน ทำไมไม่รับ",
        "ผมวางโทรศัพท์ไว้ตรงไหนก็จำไม่ได้ครับ เพิ่งเจอตอนนี้เอง อยู่ในกระเป๋าเสื้อผมเองครับ",
      ],
    ],
    "*": [
      [
        "เมื่อกี้โทรไปไม่รับเลย ไม่ว่างเหรอ",
        "โทษทีนะ เมื่อกี้ติดธุระอยู่ เลยรับสายไม่ทัน",
      ],
      [
        "เมื่อกี้โทรไปไม่ติดเลยนะ",
        "เมื่อกี้มือถืออยู่ไกลตัวเลยไม่ได้ยิน ขอโทษนะ",
      ],
      [
        "เมื่อกี้โทรไปทำไมไม่รับล่ะ",
        "ขอโทษที เมื่อกี้กำลังคุยกับคนอื่นอยู่ ไม่ว่างรับสาย",
      ],
    ],
  };
  const CALL_REPEAT = {
    Nanas: [
      [
        "โทษทีนะ พี่โทรมาอีกแล้ว",
        "พี่~ เมื่อกี้ก็เพิ่งโทรมาไม่ใช่เหรอครับ คิดถึงผมขนาดนั้นเลยเหรอ (หัวเราะ)",
      ],
      [
        "อยู่ดี ๆ ก็นึกถึงริคุ เลยโทรมาอีกรอบ",
        "พี่ครับ เมื่อกี้พี่ก็โทรมาแล้วนะ มีอะไรหรือเปล่าครับ",
      ],
    ],
    แม่: [
      [
        "แม่ครับ ผมโทรมาอีกแล้ว",
        "เมื่อกี้ก็เพิ่งโทรมาไม่ใช่เหรอลูก มีอะไรหรือเปล่า",
      ],
      [
        "แม่ครับ ผมนึกอะไรขึ้นมาได้เลยโทรมาอีก",
        "Todayลูกโทรมาบ่อยจังนะ เกิดอะไรขึ้นหรือเปล่า บอกแม่ได้นะ",
      ],
    ],
    โอชียอน: [
      [
        "ชียอน พี่เองนะ โทรมาอีกรอบ",
        "พี่ เมื่อกี้ก็เพิ่งโทรมาไม่ใช่เหรอ มีอะไรอีกหรือเปล่า",
      ],
      [
        "นึกอะไรขึ้นมาได้เลยโทรมาอีกรอบ",
        "โทรมาอีกแล้วเหรอ เมื่อกี้ยังคุยกันอยู่เลย พี่ไม่มีอะไรทำหรือไง",
      ],
    ],
    แดยอง: [
      [
        "แดยอง พี่โทรมาอีกรอบนะ",
        "พี่ครับ เมื่อกี้พี่ก็โทรมาแล้วใช่ไหมครับ มีอะไรให้ผมช่วยหรือเปล่า",
      ],
      [
        "พี่นึกอะไรขึ้นมาได้เลยโทรมาอีกรอบ",
        "เอ๊ะ เมื่อกี้เพิ่งคุยกันไปไม่ใช่เหรอครับ ผมตอบอะไรผิดไปหรือเปล่า",
      ],
    ],
    ยูชิ: [
      [
        "ยูชิ พี่โทรมาอีกรอบนะ",
        "พี่ครับ เมื่อกี้พี่ก็โทรมาแล้วนะครับ หรือว่าผมเผลอฝันไปเอง",
      ],
      [
        "พอดีนึกเรื่องขึ้นมาได้ เลยโทรมาอีกรอบ",
        "ผมยังคิดเรื่องที่คุยกันเมื่อกี้ไม่จบเลยครับ พี่ก็โทรมาอีกแล้ว",
      ],
    ],
    "*": [
      [
        "โทษที โทรมาอีกรอบน่ะ",
        "เมื่อกี้ก็เพิ่งโทรมาไม่ใช่เหรอ มีอะไรหรือเปล่า",
      ],
      [
        "พอดีนึกอะไรขึ้นมาได้ เลยโทรมาอีกรอบ",
        "เอ๊ะ โทรมาอีกแล้ว เมื่อกี้ก็เพิ่งคุยกันไปนี่",
      ],
    ],
  };
  const CALL_REPEAT_HEAVY = {
    Nanas: [
      [
        "พี่โทรมาบ่อยไปหน่อยใช่ไหม",
        "พี่... Todayโทรมาหลายรอบแล้วนะครับ ผมนับไม่ถูกแล้ว (หัวเราะ)",
      ],
      [
        "ริคุ พี่ขอโทษที่โทรมาซ้ำ ๆ นะ",
        "ถ้าพี่โทรมาอีก ผมจะคิดว่าพี่ไม่ได้มีเรื่องอะไร แค่คิดถึงผมเฉย ๆ นะครับ",
      ],
    ],
    แม่: [
      [
        "แม่ครับ ผมโทรมาอีกแล้ว ขอโทษที่รบกวนนะครับ",
        "โอ๊ะ โทรมาอีกแล้วเหรอลูก เมื่อกี้ก็เพิ่งคุยกันไปเอง แม่ใจไม่ดีเลย มีอะไรไม่สบายใจหรือเปล่า",
      ],
      [
        "แม่ครับ ผมโทรมาบ่อยไปหน่อยใช่ไหมครับ",
        "ลูกโทรมาหลายสายแล้วนะ แม่เริ่มห่วงแล้ว ตอบแม่ตรง ๆ นะ มีเรื่องอะไรหรือเปล่า",
      ],
    ],
    โอชียอน: [
      [
        "ชียอน พี่โทรมาบ่อยไปหน่อยใช่ไหม",
        "พี่ โทรมากี่รอบแล้วเนี่ย หนูเริ่มนับไม่ไหวแล้วนะ",
      ],
      [
        "ชียอน ขอโทษนะที่โทรมาซ้ำ ๆ",
        "ถ้าโทรมาอีกรอบ หนูจะบล็อกเบอร์พี่จริง ๆ นะ ล้อเล่นน่า (หัวเราะ)",
      ],
    ],
    แดยอง: [
      [
        "แดยอง พี่โทรมาบ่อยไปหน่อยใช่ไหม",
        "พี่ครับ Todayพี่โทรมาหลายสายเลย ผมเริ่มเป็นห่วงแล้วนะครับ เกิดอะไรขึ้นหรือเปล่า",
      ],
      [
        "ขอโทษนะ พี่โทรมารบกวนบ่อยเกินไป",
        "ผมนับได้หลายสายแล้วครับ ถ้าพี่เหนื่อยก็พักก่อนนะครับ ไม่ต้องห่วงผม",
      ],
    ],
    ยูชิ: [
      [
        "ยูชิ พี่โทรมาบ่อยไปหน่อยใช่ไหม",
        "พี่ครับ พี่โทรมาบ่อยจนผมเริ่มคิดว่ามือถือผมเป็นของพี่ไปแล้ว",
      ],
      [
        "ยูชิ ขอโทษนะที่โทรมารบกวนบ่อย ๆ",
        "ผมจะเริ่มนับแล้วนะครับว่าพี่โทรมากี่สาย ไว้รายงานตอนจบวัน",
      ],
    ],
    "*": [
      [
        "โทรมาบ่อยไปหน่อยนะ",
        "Todayโทรมาหลายรอบแล้วนะ มีเรื่องด่วนอะไรหรือเปล่า",
      ],
      [
        "ขอโทษทีนะ โทรมารบกวนบ่อยเกินไป",
        "นี่โทรมากี่สายแล้วเนี่ย เริ่มงงแล้วนะ",
      ],
    ],
  };
  /* SN short name buat OSY */
  [CALL_EXCUSE, CALL_REPEAT, CALL_REPEAT_HEAVY].forEach((o) => {
    o["ชียอน"] = o["โอชียอน"];
  });

  const CALL_HIST =
    {}; /* Nama -> [{t: Waktu pas nelp, ok: diangkat apa engga}] */
  const callCtxLast = {};

  /* ===== aturan buat menyelesaikan konflik =====
     .plain = opening line pas nelp pertama
     .hrs = [form hour, to hour) berdasarkan jam [22,5])
     .t   = jangan pake same tag buat main story dan apology */
  CALL_SCRIPTS["Nanas"].plain = true; /* kamu nelp di Waktu yg tepat eeaa */
  CALL_SCRIPTS["โอชียอน"].plain = true; /*nelp tiba tiba emg ada apa */
  CALL_SCRIPTS["แดยอง"].plain = true; /* sama kek Waktu yg tepat */
  CALL_MORE["แม่"][2].plain = true; /* aku kepikiran kamu */
  CALL_SCRIPTS["*"].plain = true; /* lagi luang ga buat ngobrol */
  CALL_MORE["*"][2].plain = true; /* suaranya ga jelas, udh jelas belom */
  CALL_MORE["Nanas"][0].hrs = [12, 21]; /* baru kelar kelas */
  CALL_MORE["Nanas"][1].hrs = [22, 5]; /* udh larut tp gabisa tidur */
  CALL_MORE["ยูชิ"][0].hrs = [
    8, 17,
  ]; /* masuk kelas / bel buat kelas selanjutnya */
  CALL_MORE["โอชียอน"][1].hrs = [18, 3]; /* tidur cepet ya */
  CALL_MORE["แม่"][0].hrs = [12, 24]; /* capek ya hari ini? */
  CALL_EXCUSE["แดยอง"][0].hrs = [9, 20]; /*kelompokan */
  CALL_EXCUSE["แดยอง"][1].hrs = [9, 22]; /* perpus */
  CALL_EXCUSE["แดยอง"][2].hrs = [6, 24]; /* subway */
  CALL_EXCUSE["แม่"][1].hrs = [6, 17]; /* ke pasar */
  CALL_EXCUSE["แม่"][0].hrs = [5, 21]; /* lagi masak */
  CALL_EXCUSE["ยูชิ"][0].hrs = [6, 21]; /* lagi nyiram */
  CALL_EXCUSE["แดยอง"].push([
    "แดยอง เมื่อกี้พี่โทรไปไม่รับเลย หลับไปแล้วเหรอ",
    "ขอโทษครับพี่ เมื่อกี้ผมเผลอหลับไป ปิดเสียงไว้เลยไม่ได้ยินครับ",
  ]);
  CALL_EXCUSE["แดยอง"][3].hrs = [22, 7]; /* night: sleep */
  CALL_EXCUSE["ยูชิ"][0].t = "water"; /*watering plants jd konflik hah */
  CALL_SCRIPTS["ยูชิ"].t = "water";

  /* ===== ngecek scene yg gak fit ===== */
  CALL_SCRIPTS["Nanas"].hrs = [7, 22]; /* makan */
  CALL_MORE["Nanas"][2].hrs = [7, 23]; /* mau ke kafe */
  CALL_SCRIPTS["แม่"].hrs = [7, 22]; /*udh makan nasi */
  CALL_MORE["แม่"][1].hrs = [6, 21]; /* mama masak */
  CALL_MORE["แม่"][2].hrs = [17, 24]; /* istirahat */
  CALL_SCRIPTS["โอชียอน"].hrs = [7, 24]; /* udh makan */
  CALL_SCRIPTS["ยูชิ"].hrs = [7, 18]; /* awan keliatan dari jendela */
  CALL_EXCUSE["Nanas"][1].hrs = [7, 22]; /* มือถืออยู่ในกระเป๋า */
  /* บทใหม่: โทรไปตอนเช้ามืด (ริคุ 5–7 น. / แม่ 0–6 น.) — เติมช่องว่างที่เกิดจากการจำกัดเวลาด้านบน */
  CALL_MORE["Nanas"].push([
    [0.8, "nar", "(รับสายแล้ว)"],
    [1.2, "them", "(เสียงงัวเงีย) พี่ครับ... นี่เช้ามากเลยนะ"],
    [3.2, "me", "ขอโทษที่ปลุก พี่แค่นึกถึงริคุขึ้นมา"],
    [3.0, "them", "(หัวเราะเบา ๆ) ได้ยินเสียงพี่เป็นอย่างแรกของวันเลยนะครับ"],
    [3.2, "me", "งั้นนอนต่ออีกหน่อยก็ได้ ยังเช้าอยู่"],
    [3.0, "them", "ครับ... ขออีกสิบนาทีนะพี่"],
  ]);
  CALL_MORE["Nanas"][3].bye =
    "ผมขอนอนต่ออีกแป๊บนะครับ ไว้ตื่นแล้วค่อยคุยกันนะพี่";
  CALL_MORE["Nanas"][3].hrs = [5, 7];
  CALL_MORE["แม่"].push([
    [0.8, "nar", "(รับสายแล้ว)"],
    [1.2, "them", "(เสียงงัวเงีย) ลูก... นี่มันเวลาไหนแล้วเนี่ย แม่ตกใจหมด"],
    [3.0, "me", "ขอโทษครับแม่ ผมแค่นึกถึงแม่ เลยโทรมา"],
    [
      3.0,
      "them",
      "ลูกเอ๊ย ไม่มีอะไรก็ดีแล้ว แต่รีบนอนต่อนะ เดี๋ยวจะไม่มีแรงทั้งวัน",
    ],
    [3.0, "me", "ครับแม่ ผมจะนอนแล้ว แม่ก็นอนต่อเถอะครับ"],
    [3.0, "them", "จ้ะ ดูแลตัวเองด้วยนะลูก"],
  ]);
  CALL_MORE["แม่"][3].bye = "แม่นอนต่ออีกหน่อยนะ ไว้ค่อยคุยกันตอนสว่าง";
  CALL_MORE["แม่"][3].hrs = [0, 6];

  /* ชิอนตอบหลังอีกฝ่ายถาม/ขอโทษ (กันไม่ให้ them พูดสองบรรทัดติดโดยไม่มีใครตอบ) — ใช้ข้อความที่มีคำแปลอยู่แล้ว */
  const CALL_WHY = {
    แม่: "ไม่มีอะไรครับแม่ แค่คิดถึงเลยโทรมา",
    Nanas: "ไม่มีอะไร แค่คิดถึงเลยโทรมา",
    "*": "ไม่มีอะไรหรอก แค่โทรมาทักทาย",
  };
  const CALL_ACK = { แม่: "ไม่เป็นไรครับแม่", "*": "ไม่เป็นไร" };

  const callHour = () => new Date().getHours();
  const callInHrs = (o, h) =>
    !o.hrs ||
    (o.hrs[0] <= o.hrs[1]
      ? h >= o.hrs[0] && h < o.hrs[1]
      : h >= o.hrs[0] || h < o.hrs[1]);

  /* เลือกรายการจากพูลโดยไม่ซ้ำครั้งก่อน; ok = ตัวกรอง (ถ้ากรองหมดให้ถอยกลับไปใช้ทั้งพูล) */
  function callCtxPick(pool, id, ok) {
    let idx = pool.map((_, i) => i).filter((i) => !ok || ok(pool[i]));
    if (!idx.length) idx = pool.map((_, i) => i);
    let i;
    do {
      i = idx[Math.floor(Math.random() * idx.length)];
    } while (idx.length > 1 && i === callCtxLast[id]);
    callCtxLast[id] = i;
    return pool[i];
  }
  function callCtx(name) {
    const now = Date.now();
    const h = (CALL_HIST[name] || []).filter(
      (r) => r !== call.rec,
    ); /* ไม่นับสายนี้เอง */
    const last = h[h.length - 1];
    const recent = h.filter((r) => now - r.t <= CALL_CTX.freqWin);
    const excuse =
      !!last &&
      !last.ok &&
      now - last.t <= CALL_CTX.missWin &&
      Math.random() < CALL_CTX.excuseChance;
    const prev = recent.length;
    return {
      excuse: excuse,
      /* ถ้าเพิ่งตำหนิว่าทำไมไม่รับสาย จะไม่ขอโทษที่โทรซ้ำในสายเดียวกัน (สองบทนี้ขัดกัน) */
      level: excuse
        ? 0
        : prev >= CALL_CTX.heavyFrom
          ? 2
          : prev >= CALL_CTX.repeatFrom
            ? 1
            : 0,
      talked: recent.some(
        (r) => r.ok,
      ) /* เคยคุยกันจริงในช่วงนี้ → ใช้คำว่า "เมื่อกี้คุยกันไป" ได้ */,
    };
  }
  /* แทรกบทถามที่ไม่รับสาย/บทโทรซ้ำ (ชิอนพูดก่อน อีกฝ่ายตอบ) หลังทักทายตอนรับสาย แล้วค่อยเข้าบทสนทนาเดิม */
  function callContext(sc, key, name, ctx) {
    if (!ctx.excuse && !ctx.level) return sc;
    const at = CALL_GREET[key]
      ? 3
      : 2; /* มีทักทายคู่ (them+me) = แทรกหลังบรรทัดที่ 3, สายทั่วไป = หลังอีกฝ่ายทักบรรทัดแรก */
    const h = callHour();
    const rest = sc
      .slice(at)
      .map((l, i) => (i === 0 ? [Math.max(l[0], 2.8)].concat(l.slice(1)) : l));
    const ins = [];
    const add = (set, id, ans) => {
      const okf = (q) =>
        callInHrs(q, h) &&
        !(q.t && q.t === sc.t) &&
        (ctx.talked || !/คุยกัน/.test(q[1]));
      let pl = set[key] || set["*"];
      if (!pl.some(okf))
        pl = set["*"]; /* ไม่มีบทของคนนี้ที่เข้ากับเวลา/เรื่อง → ใช้บททั่วไป */
      const p = callCtxPick(pl, key + id, okf);
      ins.push([2.8, "me", p[0]], [3.0, "them", p[1]]);
      /* บทหลักขึ้นต้นด้วยอีกฝ่ายพูดต่อ → ชิอนต้องตอบก่อน (ถ้าบทหลักขึ้นด้วยชิอนอยู่แล้ว เช่นสายทั่วไป ไม่ต้องเติม) */
      if (rest[0] && rest[0][1] === "them")
        ins.push([2.6, "me", ans[key] || ans["*"]]);
    };
    if (ctx.excuse) add(CALL_EXCUSE, "x", CALL_ACK);
    else
      add(
        ctx.level === 2 ? CALL_REPEAT_HEAVY : CALL_REPEAT,
        ctx.level === 2 ? "h" : "r",
        CALL_WHY,
      );
    const out = sc.slice(0, at).concat(ins, rest);
    if ("bye" in sc) out.bye = sc.bye;
    if (sc.t) out.t = sc.t;
    return out;
  }

  const callLast = {};
  CALL_SCRIPTS.Nanas = [
    [0.8, "nar", "(Nanas mengangkat telepon)"],
    [1.2, "them", "Halo, sayang~"],
    [1.5, "me", "Cantik, jadwalmu selesai jam berapa?"],
    [1.9, "me", "Aku sama Dedek jemput ke sana, ya?"],
    [2.1, "them", "Aku masih sibuk banget."],
    [2.3, "them", "Nanti aku kabari lagi, ya."],
  ];
  CALL_SCRIPTS.Nanas.plain = true;
  CALL_SCRIPTS.Nanas.hrs = [7, 22];
  CALL_SCRIPTS.Nanas.bye =
    "Aku tutup dulu, ya. Nanti kita ketemu. Aku kangen kamu.";
  CALL_MORE.Nanas = [
    [
      [0.8, "nar", "(Nanas mengangkat telepon)"],
      [1.2, "them", "Halo, sayang~"],
      [1.5, "me", "Cantik, jadwalmu selesai jam berapa?"],
      [1.9, "me", "Aku sama Dedek jemput ke sana, ya?"],
      [2.1, "them", "Aku masih sibuk banget."],
    ],
    [
      [0.8, "nar", "(Nanas mengangkat telepon)"],
      [1.2, "them", "Kak, belum tidur? Sudah malam, lho."],
      [3.0, "me", "Aku nggak bisa tidur, jadi meneleponmu."],
      [3.0, "them", "Aku juga belum bisa tidur."],
      [3.2, "me", "Kalau begitu, kita ngobrol dulu saja."],
      [3.0, "nar", "(Terdengar suara selimut bergeser saat dia mencari posisi nyaman.)"],
      [2.8, "them", "Jangan tutup dulu, Kak. Aku mau mendengar suaramu sampai tertidur."],
    ],
    [
      [0.8, "nar", "(Nanas mengangkat telepon)"],
      [1.2, "them", "Kak~ aku baru melihat ramalan cuaca. Besok hujan."],
      [3.2, "me", "Tidak apa-apa, kita bisa duduk-duduk di kafe."],
      [3.0, "them", "Asyik. Aku tahu kafe yang lucu."],
      [3.2, "me", "Kalau begitu, Kakak serahkan pilihan tempatnya ke Nanas."],
      [3.0, "them", "(Tertawa) Siap, nanti kukirim fotonya."],
    ],
    [
      [0.8, "nar", "(Nanas mengangkat telepon)"],
      [1.2, "them", "Kak... masih pagi sekali, ya."],
      [3.2, "me", "Maaf sudah membangunkanmu. Kakak cuma kepikiran Nanas."],
      [3.0, "them", "(Tertawa pelan) Suara Kakak jadi hal pertama yang kudengar hari ini."],
      [3.2, "me", "Kalau begitu, tidur lagi saja. Masih pagi."],
      [3.0, "them", "Iya... sepuluh menit lagi, ya, Kak."],
    ],
  ];
  CALL_MORE.Nanas[0].hrs = [12, 21];
  CALL_MORE.Nanas[0].bye = "Aku beres-beres dulu, ya. Sampai ketemu di sana, Kak.";
  CALL_MORE.Nanas[1].hrs = [22, 5];
  CALL_MORE.Nanas[1].bye = "Aku mulai mengantuk... selamat tidur, Kak. Aku tidur dulu, ya.";
  CALL_MORE.Nanas[2].hrs = [7, 23];
  CALL_MORE.Nanas[2].bye = "Aku cari kafenya dulu, lalu kukirim fotonya. Besok jadi, ya?";
  CALL_MORE.Nanas[3].hrs = [5, 7];
  CALL_MORE.Nanas[3].bye = "Aku tidur lagi sebentar. Nanti kita ngobrol setelah aku bangun, ya.";
  CALL_GREET.Nanas = [
    ["Halo, Kak~", "Iya, Nanas. Kakak di sini."],
    ["Halo, Kak Orion?", "Iya, ini Kakak."],
  ];
  CALL_EXCUSE.Nanas = [
    [
      "Nanas, tadi Kakak menelepon tapi tidak diangkat. Lagi mandi?",
      "Maaf, Kak. Tadi aku sedang mandi, jadi tidak dengar ponsel.",
    ],
    [
      "Tadi Kakak menelepon lama, kenapa tidak diangkat?",
      "Ponselku tadi ada di tas. Aku baru melihat Kakak menelepon, maaf ya.",
    ],
    [
      "Aku baru saja mencoba meneleponmu, tapi tidak tersambung. Kamu sibuk?",
      "Maaf banget, tadi aku benar-benar tidak bisa mengangkat. Aku langsung merasa tidak enak waktu melihat panggilan tak terjawab darimu.",
    ],
  ];
  CALL_REPEAT.Nanas = [
    [
      "Maaf, Kakak menelepon lagi.",
      "Kak~ Kakak baru saja menelepon, kan? Kangen banget sama aku? (tertawa)",
    ],
    [
      "Tiba-tiba aku kepikiran Nanas, jadi menelepon lagi.",
      "Kak, tadi Kakak sudah menelepon. Ada apa?",
    ],
  ];
  CALL_REPEAT_HEAVY.Nanas = [
    [
      "Kakak terlalu sering menelepon, ya?",
      "Kak... Kakak sudah menelepon berkali-kali, aku sampai tidak ingat jumlahnya. (tertawa)",
    ],
    [
      "Nanas, maaf ya aku menelepon terus.",
      "Kalau Kakak menelepon lagi, aku akan mengira Kakak cuma kangen, bukan ada urusan.",
    ],
  ];
  CALL_WHY.Nanas = "Tidak ada apa-apa. Aku cuma kangen, jadi menelepon.";
  CALL_ACK.Nanas = "Tidak apa-apa.";

  function callPick(name) {
    if (name.charAt(0) === "+")
      return CALL_SCRIPTS["+"]; /* unfamiliar number */
    const key =
      name !== "+" && CALL_SCRIPTS.hasOwnProperty(name)
        ? name
        : "*";
    const pool = [CALL_SCRIPTS[key]].concat(CALL_MORE[key] || []);
    const ctx = callCtx(name),
      h = callHour(),
      ctxOn = ctx.excuse || ctx.level > 0;
    let idx = pool
      .map((_, i) => i)
      .filter((i) => callInHrs(pool[i], h) && !(ctxOn && pool[i].plain));
    if (!idx.length) idx = pool.map((_, i) => i);
    let i;
    do {
      i = idx[Math.floor(Math.random() * idx.length)];
    } while (idx.length > 1 && i === callLast[key]);
    callLast[key] = i;
    return callContext(callGreet(pool[i], key), key, name, ctx);
  }

  const callIc = {
    mic: ic(
      '<rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M4 4l16 16"/>',
      1.9,
    ),
    spk: ic(
      '<path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
      1.9,
    ),
    add: ic('<path d="M12 5v14M5 12h14"/>', 2),
    video: ic(
      '<rect x="3" y="6.5" width="12.5" height="11" rx="3"/><path d="m15.5 11 5-3v8l-5-3"/>',
      1.9,
    ),
    end: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8.2c-3.2 0-6.1 1-8 2.6-.6.5-.7 1.4-.3 2l1 1.5c.4.6 1.2.8 1.8.5l2.2-1c.5-.2.8-.7.8-1.2v-1.1c1.2-.4 2.7-.4 3.9 0v1.1c0 .5.3 1 .8 1.2l2.2 1c.6.3 1.4.1 1.8-.5l1-1.5c.4-.6.3-1.5-.3-2-1.9-1.6-4.8-2.6-8-2.6z"/></svg>',
  };
  const CALL_KEYS = [
    ["1", ""],
    ["2", "ABC"],
    ["3", "DEF"],
    ["4", "GHI"],
    ["5", "JKL"],
    ["6", "MNO"],
    ["7", "PQRS"],
    ["8", "TUV"],
    ["9", "WXYZ"],
    ["*", ""],
    ["0", "+"],
    ["#", ""],
  ];
  /* kalo other party end the calls: nunggu dulu milisekon (min. max) */
  const CALL_HANGUP_WAIT = [4000, 7000];
  const call = { on: false, timers: [] };
  const callRnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const WHATSAPP_CALL_BACKGROUND_TEXT = [
    "Kamu, aku, dan cerita kita",
    "Tetap dekat meski berjauhan",
    "Setiap panggilan terasa seperti pulang",
  ];
  function whatsappCallBackgroundText() {
    if (!WHATSAPP_CALL_BACKGROUND_TEXT.length) return "";
    const rows = Array.from({ length: 4 }, (_, index) => {
      const phrases = WHATSAPP_CALL_BACKGROUND_TEXT;
      const rowText = phrases
        .slice(index % phrases.length)
        .concat(phrases.slice(0, index % phrases.length))
        .join("  •  ");
      const loopText = E(rowText + "  •  " + rowText + "  •  " + rowText);
      return (
        '<div class="wa-call-marquee-row"><div class="wa-call-marquee-track' +
        (index % 2 ? " reverse" : "") +
        '"><span>' +
        loopText +
        '</span><span aria-hidden="true">' +
        loopText +
        "</span></div></div>"
      );
    }).join("");
    return '<div class="wa-call-marquee" aria-hidden="true">' + rows + "</div>";
  }
  const snd = (n, ...a) => {
    try {
      if (window.SFX && SFX[n]) SFX[n](...a);
    } catch (e) {}
  }; /* incoming call sound */
  const callLater = (fn, ms) => {
    const id = setTimeout(fn, ms);
    call.timers.push(id);
    return id;
  };
  const callClear = () => {
    call.timers.forEach(clearTimeout);
    call.timers = [];
    clearInterval(call.tick);
  };
  const callStat = (t) => {
    const el = $("#call-stat");
    if (el) el.textContent = t;
  };
  const callFmt = (sec) => {
    const p = (n) => String(n).padStart(2, "0"),
      h = Math.floor(sec / 3600);
    return (
      (h ? h + ":" : "") + p(Math.floor(sec / 60) % 60) + ":" + p(sec % 60)
    );
  };

  window.phCall = function (i) {
    const c = ph.rows && ph.rows[i];
    if (c) callStart(c.name, c.sub);
  };
  const normalizeCallName = (name) => {
    const value = String(name || "").trim();
    return value.toLowerCase() === "nanas" ? "Nanas" : value;
  };
  window.startWhatsappCall = function (name, options) {
    const config = options || {};
    const callerName = normalizeCallName(name);
    if (!callerName) return;
    callStart(callerName, config.sub || "WhatsApp", {
      kind: "whatsapp",
      avatar: config.avatar || "",
      video: !!config.video,
    });
  };

  function callStart(name, sub, opt) {
    if (call.on || (inc.on && !(opt && opt.incoming)))
      return; /* incoming call in progress → gabisa manggil keluar */
    opt = opt || {};
    const callerAvatar = opt.avatar || IN_AV[name] || "";
    callClear();
    Object.assign(call, {
      on: true,
      ending: false,
      byeSaid: false,
      name,
      sub,
      answered: false,
      mute: false,
      spk: false,
      muteHint: false,
      digits: "",
      sec: 0,
      dir: opt.incoming ? "in" : "out",
      kind: opt.kind || "",
      video: !!opt.video,
      avatar: callerAvatar,
      failed: false,
      tDial: Date.now(),
      sc0: null,
    });
    /* keep a log of your calls */
    if (opt.incoming)
      call.rec = null; /* สายเข้าไม่นับเป็นประวัติ "เราโทรออก" */
    else {
      call.rec = { t: Date.now(), ok: false };
      (CALL_HIST[name] = CALL_HIST[name] || []).push(call.rec);
      if (CALL_HIST[name].length > 20) CALL_HIST[name].shift();
    }
    let el = document.getElementById("call-screen");
    if (!el) {
      el = document.createElement("div");
      el.id = "call-screen";
      document.querySelector(".phone").appendChild(el);
    }
    el.className =
      "call-screen ring" +
      (name === "Nanas" ? " pink" : "") +
      (call.kind === "whatsapp" ? " wa-call" : "") +
      (call.video ? " wa-video" : "");
    el.style.removeProperty("--poster");
    if (callerAvatar) {
      /* มีรูปผู้โทร → ใช้เป็นพื้นหลังตอนโทร/คุยสาย */
      el.classList.add("poster");
      el.style.setProperty("--poster", 'url("' + callerAvatar + '")');
    }
    const sb = document.querySelector(".status-bar");
    el.innerHTML =
      '<div class="status-bar">' +
      (sb ? sb.innerHTML : "") +
      "</div>" +
      (call.kind === "whatsapp" ? whatsappCallBackgroundText() : "") +
      '<div class="call-who"><div class="call-name">' +
      E(callDisplayName(name)) +
      '</div><div class="call-stat" id="call-stat"></div><div class="call-digits" id="call-digits"></div></div>' +
      '<div class="call-cap" id="call-cap"></div>' +
      '<div class="call-grid">' +
      '<div class="call-b" id="cb-mute" onclick="callMute()"><i>' +
      callIc.mic +
      "</i>Mute</div>" +
      '<div class="call-b" onclick="callPad(true)"><i>' +
      phIc.keypad +
      "</i>Keypad</div>" +
      '<div class="call-b" id="cb-spk" onclick="callSpk()"><i>' +
      callIc.spk +
      "</i>Speaker</div>" +
      '<div class="call-b" onclick="callNA()"><i>' +
      callIc.add +
      "</i>Add Call</div>" +
      '<div class="call-b" onclick="callNA()"><i>' +
      callIc.video +
      "</i>FaceTime</div>" +
      '<div class="call-b" onclick="callNA()"><i>' +
      IC.person +
      "</i>Contacts</div>" +
      "</div>" +
      '<div class="call-pad">' +
      CALL_KEYS.map(
        (k) =>
          '<div class="call-key" onclick="callKey(\'' +
          k[0] +
          "')\">" +
          k[0] +
          "<small>" +
          k[1] +
          "</small></div>",
      ).join("") +
      "</div>" +
      '<div class="call-foot"><div class="call-end" onclick="callEnd()">' +
      callIc.end +
      '</div><button class="call-hide" onclick="callPad(false)">ซ่อน</button></div>' +
      '<div class="call-bar"></div>';
    const t = document.querySelector(".clock-time");
    el.querySelectorAll(".clock-time").forEach((x) => {
      if (t) x.textContent = t.textContent;
    });
    call.el = el;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.add("on")),
    );

    if (opt.incoming) {
      /* auto answer incoming calls */
      call.sc0 = incScript(name, opt.kind);
      callLater(callAnswer, 450);
      return;
    }
    callStat("Calling…");
    snd("ringback");
    callLater(() => callStat("Ringing…"), 1200);
    /* dijawab 60, no answer 25, sibuk 15 */
    const r = Math.random();
    if (r < 0.6) callLater(callAnswer, callRnd(4000, 8000));
    else if (r < 0.85)
      callLater(() => callFail("No answer"), callRnd(8000, 11000));
    else callLater(() => callFail("The line is busy"), callRnd(2500, 4500));
  }

  function callAnswer() {
    if (!call.on || call.ending) return;
    call.answered = true;
    call.t0 = Date.now();
    if (call.rec) call.rec.ok = true;
    snd("ringStop");
    snd("connect");
    call.el.classList.remove("ring");
    callStat("00:00");
    call.tick = setInterval(() => {
      call.sec = Math.floor((Date.now() - call.t0) / 1000);
      callStat(callFmt(call.sec));
    }, 250);
    const sc = call.sc0 || callPick(call.name);
    call.sc = sc;
    let t = 0;
    sc.forEach((l) => {
      t += l[0] * 1000;
      callLater(() => callLine(l[1], l[2]), t);
    });
    /* No further conversation: The other party remains silent for a moment and then ends the call (unless the script already concludes with 'end'). */
    if (sc[sc.length - 1][1] !== "end")
      callLater(
        callTheyHangup,
        t + callRnd(CALL_HANGUP_WAIT[0], CALL_HANGUP_WAIT[1]),
      );
  }

  /* Closing phrase before hanging up (spoken by the other party) — set to null = no closing phrase (hang up immediately) */
  const CALL_BYE = {
    Nanas: "In that case, I’ll hang up now. Let’s talk again later!",
    Nanas: "Aku tutup teleponnya dulu, ya. Nanti kita ngobrol lagi.",
    แม่: "Alright, I’ll hang up now, dear. Take care of yourself.",
    "+": null,
    "*": null,
  };

  function callTheyHangup() {
    if (!call.on || call.ending) return;
    const key = CALL_BYE.hasOwnProperty(call.name)
      ? call.name
      : call.name.charAt(0) === "+"
        ? "+"
        : "*";
    /* Use the specific exit routine (sc.bye) first; if it is unavailable, use CALL_BYE instead. */
    const bye = call.sc && "bye" in call.sc ? call.sc.bye : CALL_BYE[key];
    let wait = 0;
    if (bye && !call.byeSaid) {
      call.byeSaid = true;
      callLine("them", bye);
      wait = 2200;
    }
    callLater(() => {
      callLine("nar", "(The other party hung up)");
      callLater(callEnd, 1200);
    }, wait);
  }

  function callFail(msg) {
    if (!call.on || call.ending) return;
    call.failed = true;
    call.ending = true;
    callClear();
    call.el.classList.remove("ring");
    call.el.classList.add("fail");
    snd("ringStop");
    snd(msg === "The line is busy" ? "busy" : "failed");
    callStat(msg);
    callLater(callFinish, 1500);
  }

  function callLine(who, text) {
    if (!call.on || call.ending) return;
    if (who === "end") return callTheyHangup();

    if (call.name !== "Nanas") return; /* Hanya dialog Nanas yg ditampilkan */
    if (who === "me" && call.mute) return; /* Your microphone is muted; the other person cannot hear you. */
    const cap = $("#call-cap");
    if (!cap) return;
    const d = document.createElement("div");
    d.className = "ln " + who;
    d.innerHTML =
      who === "nar"
        ? E(text)
        : "<small>" +
          (who === "me" ? "Orion" : E(callDisplayName(call.name))) +
          "</small>" +
          E(text);
    cap.appendChild(d);
    while (cap.children.length > 5) cap.removeChild(cap.firstChild);
  }

  window.callMute = function () {
    if (!call.answered && call.on) {
      /* ยังไม่รับสาย ก็กดได้เหมือน iOS */
    }
    call.mute = !call.mute;
    snd("toggle");
    $("#cb-mute").classList.toggle("on", call.mute);
    if (!call.answered || call.ending) return;
    if (call.mute) {
      call.muteHint = false;
      callLater(() => {
        if (call.mute && call.on && !call.ending) {
          call.muteHint = true;
          callLine("them", "Halo? Kedengaran?");
        }
      }, 3500);
    } else if (call.muteHint) {
      call.muteHint = false;
      callLine("them", "Oh, sekarang kedengaran.");
    }
  };
  window.callSpk = function () {
    call.spk = !call.spk;
    snd("toggle");
    $("#cb-spk").classList.toggle("on", call.spk);
    if (call.answered && !call.ending)
      callLine("nar", call.spk ? "(Turn on the speaker)" : "(Turn off the speaker)");
  };
  window.callNA = function () {
    musicToast("Not yet activated");
  };
  window.callPad = function (on) {
    if (call.el) call.el.classList.toggle("pad", on);
  };
  window.callKey = function (k) {
    if (call.digits.length >= 24) return;
    call.digits += k;
    snd("dtmf", k);
    const d = $("#call-digits");
    if (d) d.textContent = call.digits;
  };

  window.callEnd = function () {
    if (!call.on) return;
    if (call.ending && !call.answered) return;
    call.ending = true;
    const was = call.answered;
    snd("ringStop");
    snd("hangup");
    callClear();
    call.el.classList.remove("ring", "pad");
    callStat(was ? "End call" : "Cancel call");
    callLater(callFinish, 800);
  };

  function callFinish() {
    callClear();
    snd("ringStop");
    phLog.push({
      name: call.name,
      sub: call.sub,
      when: Date.now(),
      type: call.dir === "in" ? "in" : "out",
    }); /*Store in memory only: Reloading the page resets it to the default list. */
    if (phLog.length > 25) phLog.shift();
    const el = call.el;
    if (el) el.classList.remove("on");
    setTimeout(() => {
      if (el) el.innerHTML = "";
      call.on = false;
      call.ending = false;
    }, 420);
    if (document.querySelector(".ph-seg"))
      renderPhone(); /* Update the Recents list immediately */
  }

  /* =============== CALL: incoming call =============== */
  const CALL_IN = {
    enabled: true,
    firstDelay: 300,
    ringMax: 25,
  };
  const IN_DATA = {
    Nanas: {
      rand: [
        {
          hrs: null,
          bye: "Aku tutup dulu, ya. Mendengar suaramu membuatku semangat lagi.",
          lines: [
            ["me", "Halo, Nanas."],
            ["them", "Kak~ aku baru selesai kelas dan sedang berjalan pulang."],
            ["me", "Tumben menelepon tiba-tiba."],
            ["them", "Aku kangen~ Kakak sudah makan belum?"],
            ["me", "Belum, nanti saja."],
            ["them", "Jangan sampai melewatkan makan, ya. Nanti aku telepon lagi untuk memastikan."],
          ],
        },
      ],
    },
  };
  const IN_AV = { Nanas: "jeongwoo2.jpeg" };
  IN_AV.Nanas = IN_AV["Nanas"];
  const callDisplayName = (name) =>
    name === "Nanas" ? "Nanas" : name;

  const inc = { on: false, el: null, timer: null };
  let incUnlocked = false,
    incNextAt = 0,
    incStarted = false;
  const RIKU = "Nanas";
  const incLocked = () =>
    !!document.querySelector("#lock-screen.active, #passcode-screen.active");
  const incTyping = () => !!document.querySelector(".kb-on");

  function incScript(name, kind) {
    if (name !== RIKU || kind !== "rand") return null;
    const script = IN_DATA[RIKU].rand[0];
    const lines = [[0.8, "nar", "(รับสายแล้ว)"]];
    script.lines.forEach((line, index) => {
      const wait =
        index === 0
          ? 1.2
          : Math.min(4.8, 1.8 + script.lines[index - 1][1].length * 0.04);
      lines.push([wait, line[0], line[1]]);
    });
    lines.bye = script.bye;
    return lines;
  }
  const incIc = {
    bell: ic(
      '<path d="M6 17h12l-1.6-2.2V11a4.4 4.4 0 0 0-8.8 0v3.8zM10 20a2 2 0 0 0 4 0"/>',
      1.8,
    ),
    msg: ic(
      '<path d="M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7l-4 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>',
      1.8,
    ),
  };
  const incAv = (name) =>
    inc.avatar || IN_AV[name]
      ? '<span class="ci-av"><img src="' +
        E(inc.avatar || IN_AV[name]) +
        '" alt=""></span>'
      : '<span class="ci-av def">' + IC.person + "</span>";

  function incUnmount(now) {
    const el = inc.el;
    inc.el = null;
    if (!el) return;
    el.classList.remove("on", "show");
    if (now) el.remove();
    else setTimeout(() => el.remove(), 480);
  }
  /* full = เต็มจอ (ตอนล็อกหน้าจออยู่ หรือแตะแบนเนอร์) / ไม่ใช่ = แบนเนอร์ด้านบนแบบ iOS */
  function incMount(full) {
    incUnmount(true);
    const host = document.querySelector(".phone");
    if (!host) return;
    const el = document.createElement("div");
    inc.full = full;
    inc.el = el;
    if (full) {
      const sb = document.querySelector(".status-bar");
      el.id = "call-in";
      el.className =
        "call-screen ci-full" + (inc.name === "Nanas" ? " pink" : "");
      el.innerHTML =
        '<div class="status-bar">' +
        (sb ? sb.innerHTML : "") +
        "</div>" +
        '<div class="call-who"><div class="call-name">' +
        E(callDisplayName(inc.name)) +
        '</div><div class="call-stat">' +
        E(inc.sub) +
        "</div></div>" +
        '<div class="ci-av-lg">' +
        incAv(inc.name) +
        "</div>" +
        '<div class="ci-quick"><div class="ci-q" onclick="callNA()"><i>' +
        incIc.bell +
        "</i>เตือนฉัน</div>" +
        '<div class="ci-q" onclick="callNA()"><i>' +
        incIc.msg +
        "</i>Message</div></div>" +
        '<div class="ci-acts">' +
        '<div class="ci-a"><button class="ci-btn big dec" onclick="incDecline(event)">' +
        callIc.end +
        "</button>ปฏิเสธ</div>" +
        '<div class="ci-a"><button class="ci-btn big acc" onclick="incAccept(event)">' +
        callIc.end +
        "</button>รับสาย</div>" +
        '</div><div class="call-bar"></div>';
      const t = document.querySelector(".clock-time");
      el.querySelectorAll(".clock-time").forEach((x) => {
        if (t) x.textContent = t.textContent;
      });
      if (inc.avatar || IN_AV[inc.name]) {
        /* มีรูปผู้โทร → ใช้เป็นพื้นหลังเต็มจอ */
        el.classList.add("poster");
        el.style.setProperty(
          "--poster",
          'url("' + (inc.avatar || IN_AV[inc.name]) + '")',
        );
      }
    } else {
      el.className = "ci-banner";
      el.innerHTML =
        incAv(inc.name) +
        '<div class="ci-tx"><b>' +
        E(callDisplayName(inc.name)) +
        "</b><small>" +
        E(inc.sub) +
        "</small></div>" +
        '<button class="ci-btn dec" onclick="incDecline(event)">' +
        callIc.end +
        "</button>" +
        '<button class="ci-btn acc" onclick="incAccept(event)">' +
        callIc.end +
        "</button>";
      el.onclick = () => window.incExpand();
    }
    host.appendChild(el);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.add(full ? "on" : "show")),
    );
  }
  window.incExpand = function () {
    if (inc.on && !inc.full) incMount(true);
  };

  function incClear() {
    clearTimeout(inc.timer);
    inc.timer = null;
    inc.on = false;
    inc.avatar = "";
    snd("ringStop");
    incUnmount(false);
  }

  /* Start the single scheduled Nanas incoming call. */
  function incRing(name, kind) {
    if (
      !CALL_IN.enabled ||
      incStarted ||
      inc.on ||
      call.on ||
      name !== RIKU ||
      kind !== "rand" ||
      !IN_DATA[RIKU].rand.length
    )
      return false;
    incStarted = true;
    Object.assign(inc, { on: true, name, kind, sub: "Mobile" });
    incMount(incLocked());
    snd("ringtone");
    try {
      if (navigator.vibrate) navigator.vibrate([500, 250, 500, 250, 500]);
    } catch (e) {}
    inc.timer = setTimeout(() => incMiss("timeout"), CALL_IN.ringMax * 1000);
    return true;
  }

  window.showIncomingCall = function (name, options) {
    if (typeof name !== "string" || !name.trim()) {
      throw new TypeError("Incoming call name must be a non-empty string.");
    }
    options = options || {};
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new TypeError("Incoming call options must be an object.");
    }
    if (
      (options.sub != null && typeof options.sub !== "string") ||
      (options.avatar != null && typeof options.avatar !== "string")
    ) {
      throw new TypeError("Incoming call subtitle and avatar must be strings.");
    }
    if (inc.on || call.on) return false;
    Object.assign(inc, {
      on: true,
      name: normalizeCallName(name),
      kind: "whatsapp",
      sub: options.sub || "Incoming call",
      avatar: options.avatar || "",
    });
    incMount(incLocked());
    snd("ringtone");
    try {
      if (navigator.vibrate) navigator.vibrate([500, 250, 500, 250, 500]);
    } catch (e) {}
    inc.timer = setTimeout(() => incMiss("timeout"), CALL_IN.ringMax * 1000);
    return true;
  };

  window.incAccept = function (ev) {
    if (ev) ev.stopPropagation();
    if (!inc.on) return;
    const d = {
      name: inc.name,
      sub: inc.sub,
      kind: inc.kind,
      avatar: inc.avatar || "",
    };
    incClear();
    callStart(d.name, d.sub, {
      incoming: true,
      kind: d.kind,
      avatar: d.avatar,
    });
  };
  window.incDecline = function (ev) {
    if (ev) ev.stopPropagation();
    incMiss("decline");
  };

  function incMiss() {
    if (!inc.on) return;
    const d = { name: inc.name, sub: inc.sub, avatar: inc.avatar || "" };
    incClear();
    try {
      window.lockNotifAdd &&
        window.lockNotifAdd({
          app: "phone",
          name: d.name,
          text: "Missed call",
          av: d.avatar || IN_AV[d.name],
        });
    } catch (e) {}
    phLog.push({
      name: d.name,
      sub: d.sub,
      when: Date.now(),
      type: "miss",
    });
    if (phLog.length > 25) phLog.shift();
    if (document.querySelector(".ph-seg")) renderPhone();
    else {
      appBadges.phone = (appBadges.phone || 0) + 1;
      try {
        renderHomeAndDock();
      } catch (e) {}
      document
        .querySelectorAll("#dock .badge")
        .forEach((b) => b.classList.add("badge-pop"));
    }
  }

  function incTick() {
    if (!CALL_IN.enabled || document.hidden || incStarted) return;
    const now = Date.now();
    if (!incUnlocked) {
      if (incLocked()) return;
      incUnlocked = true;
      incNextAt = now + CALL_IN.firstDelay * 1000;
      return;
    }
    if (inc.on || call.on || incTyping() || now < incNextAt) return;
    incRing(RIKU, "rand");
  }
  setInterval(incTick, 5000);
  window.CALL_IN = CALL_IN;

  /* =============== ROUTER =============== */
  const _openApp = window.openApp;
  const modern = {
    messages: renderMessages,
    notes: renderNotes,
    photos: renderPhotos,
    calendar: renderCalendar,
    safari: renderSafari,
    kakaotalk: renderKakaoHome,
    phone: renderPhone,
  };
  window.openApp = function (id, title) {
    if (id === "instagram") {
      window.openIgHome();
      return;
    }
    if (modern[id]) {
      $("#app-header").style.display = "none";
      $("#app-screen").classList.remove("dark");
      modern[id]();
      showScreen("app-screen");
      return;
    }
    _openApp(id, title);
  };
})();
