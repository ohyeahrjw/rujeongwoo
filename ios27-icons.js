
      /* nah koentji biar svg jadi actual ios icons */
      window.I27 = (function () {
        var FONT =
          "-apple-system,'SF Pro Display','Helvetica Neue',Helvetica,Arial,'Thonburi','Sarabun',sans-serif";
        function uri(s) {
          return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
        }
        function wrap(c1, c2, body, defs) {
          return uri(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs>' +
              '<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' +
              c1 +
              '"/><stop offset="1" stop-color="' +
              c2 +
              '"/></linearGradient>' +
              '<filter id="sd" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity=".22"/></filter>' +
              (defs || "") +
              '</defs><rect width="120" height="120" fill="url(#bg)"/>' +
              body +
              "</svg>",
          );
        }
        var BUBBLE =
          "M60 23C83.5 23 101 37.5 101 56S83.5 89 60 89c-4.6 0-9-.5-13.1-1.5C41 93 31 98 19 98c6-4 9.8-9.2 11.2-15.4C23 76.6 19 66.8 19 56 19 37.5 36.5 23 60 23Z";
        var HANDSET =
          "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z";
        var icons = {};

        icons.messages = wrap(
          "#67F67C",
          "#09B92A",
          '<path d="' + BUBBLE + '" fill="#fff" filter="url(#sd)"/>',
        );
        icons.phone = wrap(
          "#67F67C",
          "#09B92A",
          '<g transform="translate(60 60) scale(3.6) translate(-12 -12)"><path d="' +
            HANDSET +
            '" fill="#fff"/></g>',
        );

        /* ikon safari cenah */
        (function () {
          var t = "";
          for (var i = 0; i < 36; i++) {
            var big = i % 3 === 0;
            t +=
              '<line x1="60" y1="17.5" x2="60" y2="' +
              (big ? 24.5 : 22) +
              '" stroke="#8FE6FF" stroke-width="' +
              (big ? 1.7 : 1.2) +
              '" stroke-linecap="round" transform="rotate(' +
              i * 10 +
              ' 60 60)"/>';
          }
          icons.safari = wrap(
            "#FFFFFF",
            "#F0F1F4",
            '<circle cx="60" cy="60" r="47.5" fill="url(#cp)"/>' +
              t +
              '<g transform="rotate(45 60 60)" filter="url(#sd)"><path d="M60 17 L66 60 L54 60Z" fill="#F4151E"/><path d="M60 103 L66 60 L54 60Z" fill="#fff"/></g>' +
              '<circle cx="60" cy="60" r="7.5" fill="#F4151E"/><circle cx="60" cy="60" r="4" fill="#FFB8B8"/>',
            '<radialGradient id="cp" cx=".5" cy=".35" r=".75"><stop offset="0" stop-color="#2FA9FF"/><stop offset="1" stop-color="#0A78F5"/></radialGradient>',
          );
        })();

        /* Music: white musical notes on a pinkish red bg */
        icons.music = wrap(
          "#FC6483",
          "#F92140",
          '<g fill="#fff" filter="url(#sd)"><path d="M44 33 L84 25 V43 L44 51Z"/><rect x="44" y="33" width="6.4" height="50"/><rect x="78" y="25" width="6.4" height="50"/>' +
            '<ellipse cx="38" cy="84" rx="11.5" ry="8.8" transform="rotate(-20 38 84)"/><ellipse cx="72" cy="76" rx="11.5" ry="8.8" transform="rotate(-20 72 76)"/></g>',
        );

        /* Photos: ikok kek ios photos */
        (function () {
          var c = [
              "#FF9500",
              "#FFC800",
              "#6FD33F",
              "#2FC98E",
              "#1E9BFF",
              "#A35BE6",
              "#F356A8",
              "#FF6B6B",
            ],
            p = "";
          for (var i = 0; i < 8; i++)
            p +=
              '<rect x="47.5" y="12" width="25" height="40" rx="12.5" fill="' +
              c[i] +
              '" opacity=".88" style="mix-blend-mode:multiply" transform="rotate(' +
              i * 45 +
              ' 60 60)"/>';
          icons.photos = wrap("#FFFFFF", "#FBFBFC", p);
        })();

        /* Notes: yellow bar sama gray line */
        icons.notes = wrap(
          "#FFFFFF",
          "#FFFFFF",
          '<rect width="120" height="34" fill="#FDD649"/><g fill="#E9B800" opacity=".55"><circle cx="14" cy="27" r="1.1"/><circle cx="24" cy="27" r="1.1"/><circle cx="34" cy="27" r="1.1"/><circle cx="44" cy="27" r="1.1"/><circle cx="54" cy="27" r="1.1"/><circle cx="64" cy="27" r="1.1"/><circle cx="74" cy="27" r="1.1"/><circle cx="84" cy="27" r="1.1"/><circle cx="94" cy="27" r="1.1"/><circle cx="104" cy="27" r="1.1"/></g>' +
            '<g stroke="#D4D4D8" stroke-width="2.2" stroke-linecap="round"><line x1="14" y1="58" x2="106" y2="58"/><line x1="14" y1="82" x2="106" y2="82"/></g>',
        );

        /* Camera: silver grey base black cam body dark blue lens lengakp men */
        icons.camera = wrap(
          "#E6E6E8",
          "#BEBEC2",
          '<circle cx="60" cy="60" r="48" fill="url(#ro)"/><circle cx="60" cy="60" r="41" fill="#111113"/><circle cx="60" cy="60" r="36" fill="url(#ri)"/>' +
            '<circle cx="60" cy="60" r="30" fill="url(#lens)"/><circle cx="60" cy="60" r="30" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="1.2"/>' +
            '<ellipse cx="68" cy="68" rx="9" ry="14" fill="#4F86FF" opacity=".55" transform="rotate(40 68 68)"/><ellipse cx="53" cy="52" rx="9" ry="6" fill="#6C9CFF" opacity=".7"/><circle cx="52" cy="52" r="3.6" fill="#fff"/>',
          '<linearGradient id="ro" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2B2E"/><stop offset="1" stop-color="#58585C"/></linearGradient><linearGradient id="ri" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3A3E"/><stop offset="1" stop-color="#18181A"/></linearGradient><radialGradient id="lens" cx=".42" cy=".4" r=".75"><stop offset="0" stop-color="#2A3F7E"/><stop offset=".55" stop-color="#121A3C"/><stop offset="1" stop-color="#070914"/></radialGradient>',
        );

        /* Calendar: date and day sesuai perangkat nihhhhh bener */
        icons.mkCal = function () {
          var d = new Date();
          return wrap(
            "#FFFFFF",
            "#FFFFFF",
            '<text x="60" y="36" text-anchor="middle" font-family="' +
              FONT +
              '" font-size="19" font-weight="600" fill="#FF3B30">' +
              ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()] +
              "</text>" +
              '<text x="60" y="97" text-anchor="middle" font-family="' +
              FONT +
              '" font-size="66" font-weight="400" fill="#111">' +
              d.getDate() +
              "</text>",
          );
        };
        icons.calendar = icons.mkCal();

        /* Clock: oh ikon ios white dial with 12/3/6/9 numerals */
        icons.mkClock = function () {
          var d = new Date(),
            t = "",
            sec = d.getSeconds() + d.getMilliseconds() / 1000,
            mi = d.getMinutes() + sec / 60,
            hr = (d.getHours() % 12) + mi / 60;
          for (var i = 0; i < 60; i++) {
            if (i % 5)
              t +=
                '<line x1="60" y1="8" x2="60" y2="13" stroke="#222" stroke-width="1.1" transform="rotate(' +
                i * 6 +
                ' 60 60)"/>';
          }
          var tx = function (n, x, y) {
            return (
              '<text x="' +
              x +
              '" y="' +
              y +
              '" text-anchor="middle" font-family="' +
              FONT +
              '" font-size="19" font-weight="500" fill="#111">' +
              n +
              "</text>"
            );
          };
          /* a smooth rotating hand smil  */
          var hand = function (y1, y2, w, col, ang, dur) {
            return (
              '<line x1="60" y1="' +
              y1 +
              '" x2="60" y2="' +
              y2 +
              '" stroke="' +
              col +
              '" stroke-width="' +
              w +
              '" stroke-linecap="round" transform="rotate(' +
              ang +
              ' 60 60)">' +
              '<animateTransform attributeName="transform" type="rotate" from="' +
              ang +
              ' 60 60" to="' +
              (ang + 360) +
              ' 60 60" dur="' +
              dur +
              's" repeatCount="indefinite"/></line>'
            );
          };
          return wrap(
            "#FFFFFF",
            "#FFFFFF",
            t +
              tx(12, 60, 33) +
              tx(3, 94, 67) +
              tx(6, 60, 101) +
              tx(9, 26, 67) +
              hand(60, 28, 4, "#111", mi * 6, 3600) +
              hand(60, 40, 5.4, "#111", hr * 30, 43200) +
              hand(70, 16, 2, "#FF9500", sec * 6, 60) +
              '<circle cx="60" cy="60" r="3.6" fill="#FF9500"/><circle cx="60" cy="60" r="1.4" fill="#fff"/>',
          );
        };
        icons.clock = icons.mkClock();

        /* KakaoTalk: yellow bg dark brown bubbles lettering TALK */
        icons.kakaotalk = wrap(
          "#FEE500",
          "#FEE500",
          '<ellipse cx="60" cy="55" rx="40" ry="32" fill="#3A1D1D"/><path d="M40 78 L34 98 L60 85Z" fill="#3A1D1D"/>' +
            '<text x="60" y="63" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="21" font-weight="800" fill="#FEE500" letter-spacing="-.5">TALK</text>',
        );

        icons.whatsapp = wrap(
          "#61E57C",
          "#17A94A",
          '<circle cx="60" cy="60" r="39" fill="none" stroke="#fff" stroke-width="5"/><path d="M33 95l5-17" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M47 41c-2 0-5 3-5 7 0 10 14 25 26 28 4 1 8-2 9-5l-8-6-5 4c-4-1-10-7-11-11l4-5-5-8z" fill="#fff"/>',
        );

        /* Instagram: gradient from yellow orange pink purple, white cam */
        icons.instagram = wrap(
          "#FEDA75",
          "#4F5BD5",
          '<rect width="120" height="120" fill="url(#ig)"/><g fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"><rect x="27" y="27" width="66" height="66" rx="20"/><circle cx="60" cy="60" r="16"/></g><circle cx="79" cy="41" r="4.2" fill="#fff"/>',
          '<radialGradient id="ig" cx=".25" cy="1.05" r="1.4"><stop offset="0" stop-color="#FFDD55"/><stop offset=".3" stop-color="#FF543E"/><stop offset=".6" stop-color="#C837AB"/><stop offset="1" stop-color="#4F5BD5"/></radialGradient>',
        );

        icons.wifi = uri(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12.5"><path d="M8.5 11.6a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Z" fill="#fff"/><path d="M5.1 7.4a4.8 4.8 0 0 1 6.8 0" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M2.6 4.9a8.3 8.3 0 0 1 11.8 0" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>',
        );

        var S = function (d, w) {
          return (
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
            (w || 2.3) +
            '" stroke-linecap="round" stroke-linejoin="round">' +
            d +
            "</svg>"
          );
        };
        icons.chevL = S('<path d="M14.5 5.5 8 12l6.5 6.5"/>');
        icons.plus = S('<path d="M12 5v14M5 12h14"/>', 2.2);

        /* ganti <img> yang kek icon-*.png ganti ke SVG */
        var FB = {
          "KakaoTalk_logo.svg": "kakaotalk",
          "icon-ig.png": "instagram",
          "icon-wifi.png": "wifi",
        };
        document.addEventListener(
          "error",
          function (e) {
            var im = e.target;
            if (!im || im.tagName !== "IMG" || im.dataset.i27) return;
            var f = (im.getAttribute("src") || "").split("/").pop(),
              m = /^icon-([a-z]+)\.png$/.exec(f),
              k = FB[f] || (m && m[1]);
            if (k && icons[k]) {
              im.dataset.i27 = 1;
              im.src = icons[k];
            }
          },
          true,
        );
        /* ไclock runs on its own jadi refresh 30s biar akurat */
        var tick = 0;
        setInterval(function () {
          tick++;
          var jobs = [["Calendar", "mkCal", "calendar"]];
          if (tick % 30 === 0) jobs.push(["Clock", "mkClock", "clock"]);
          jobs.forEach(function (x) {
            var u = icons[x[1]]();
            icons[x[2]] = u;
            document
              .querySelectorAll('img[alt="' + x[0] + '"]')
              .forEach(function (im) {
                if (im.src !== u) im.src = u;
              });
          });
        }, 1000);
        return icons;
      })();
    