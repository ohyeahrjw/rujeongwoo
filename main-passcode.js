
      const PASSCODE = "0000";
      let currentPasscode = "";
      let touchStartY = 0;

      // save the notif status for each app
      const appBadges = {
        messages: 0,
        kakaotalk: 0,
        whatsapp: 0,
        instagram: 0,
        phone: 0, // missed calls (red di phonenya)
      };

      const photoSectionsData = [
        {
          date: "Today",
          location: "",
          photos: [
            {
              url: "rjw1.jpeg",
              globalIdx: 0,
              dateTitle: "Today",
              dateSub: "19:01 👤",
            },
            {
              url: "rjw2.jpeg",
              globalIdx: 1,
              dateTitle: "Today",
              dateSub: "18:00 👤",
            },
          ],
        },
        {
          date: "Yesterday",
          location: "",
          photos: [
            {
              url: "rjw3.jpeg",
              globalIdx: 2,
              dateTitle: "Yesterday",
              dateSub: "14:20 👤",
            },
            {
              url: "rjw4.jpeg",
              globalIdx: 3,
              dateTitle: "Yesterday",
              dateSub: "12:10 👤",
            },
          ],
        },
        {
          date: "September 2026",
          location: "",
          photos: [
            {
              url: "rjw5.jpeg",
              globalIdx: 4,
              dateTitle: "29 Sept 2026",
              dateSub: "14:05 👤",
            },
            {
              url: "rjw6.jpeg",
              globalIdx: 5,
              dateTitle: "29 Sept 2026",
              dateSub: "10:13 👤",
            },
            {
              url: "rjw7.jpeg",
              globalIdx: 6,
              dateTitle: "29 Sept 2026",
              dateSub: "9:28 👤",
            },
            {
              url: "rjw8.jpeg",
              globalIdx: 7,
              dateTitle: "29 Sept 2026",
              dateSub: "7:13 👤",
            },
            {
              url: "rjw9.jpeg",
              globalIdx: 8,
              dateTitle: "28 Sept 2026",
              dateSub: "21:13 👤",
            },
            {
              url: "rjw10.jpeg",
              globalIdx: 9,
              dateTitle: "28 Sept 2026",
              dateSub: "15:24 👤",
            },
            {
              url: "rjw11.jpeg",
              globalIdx: 10,
              dateTitle: "27 Sept 2026",
              dateSub: "17:41 👤",
            },
            {
              url: "rjw12.jpeg",
              globalIdx: 11,
              dateTitle: "27 Sept 2026",
              dateSub: "15:24 👤",
            },
            {
              url: "rjw13.jpeg",
              globalIdx: 12,
              dateTitle: "27 Sept 2026",
              dateSub: "14:37 👤",
            },
            {
              url: "rjw14.jpeg",
              globalIdx: 13,
              dateTitle: "27 Sept 2026",
              dateSub: "09:24 👤",
            },
            {
              url: "rjw15.jpeg",
              globalIdx: 14,
              dateTitle: "27 Sept 2026",
              dateSub: "08:31 👤",
            },
            {
              url: "rjw16.jpeg",
              globalIdx: 15,
              dateTitle: "27 Sept 2026",
              dateSub: "07:11 👤",
            },
            {
              url: "rjw17.jpeg",
              globalIdx: 16,
              dateTitle: "27 Sept 2026",
              dateSub: "06:42 👤",
            },
            {
              url: "rjw18.jpeg",
              globalIdx: 17,
              dateTitle: "27 Sept 2026",
              dateSub: "05:21 👤",
            },
            
          ],
        },
        {
          date: "August 2026",
          location: "Los Angeles, USA",
          photos: [
            {
              url: "rjw19.jpeg",
              globalIdx: 18,
              dateTitle: "27 Sept 2026",
              dateSub: "04:19 👤",
            },
            {
              url: "rjw20.jpeg",
              globalIdx: 19,
              dateTitle: "27 Sept 2026",
              dateSub: "03:45 👤",
            },
            {
              url: "rjw21.jpeg",
              globalIdx: 20,
              dateTitle: "27 Sept 2026",
              dateSub: "02:46 👤",
            },
            {
              url: "rjw22.jpeg",
              globalIdx: 21,
              dateTitle: "27 Sept 2026",
              dateSub: "01:21 👤",
            },
            {
              url: "rjw23.jpeg",
              globalIdx: 22,
              dateTitle: "27 Sept 2026",
              dateSub: "00:39 👤",
            },
            {
              url: "rjw24.jpeg",
              globalIdx: 23,
              dateTitle: "26 Sept 2026",
              dateSub: "23:11 👤",
            },
            {
              url: "rjw25.jpeg",
              globalIdx: 24,
              dateTitle: "26 Sept 2026",
              dateSub: "22:10 👤",
            },
            
          ],
        },
        {
          date: "2 Years Ago",
          location: "",
          photos: [
            {
              url: "rjw26.jpeg",
              globalIdx: 25,
              dateTitle: "2 Years Ago",
              dateSub: "22:11 👤",
            },
            {
              url: "rjw27.jpeg",
              globalIdx: 26,
              dateTitle: "2 Years Ago",
              dateSub: "21:10 👤",
            },
            {
              url: "rjw28.jpeg",
              globalIdx: 27,
              dateTitle: "2 Years Ago",
              dateSub: "20:09 👤",
            },
            {
              url: "rjw29.jpeg",
              globalIdx: 28,
              dateTitle: "2 Years Ago",
              dateSub: "19:08 👤",
            },
            {
              url: "rjw30.jpeg",
              globalIdx: 29,
              dateTitle: "2 Years Ago",
              dateSub: "18:07 👤",
            },
            {
              url: "rjw31.jpeg",
              globalIdx: 30,
              dateTitle: "2 Years Ago",
              dateSub: "17:06 👤",
            },
            {
              url: "rjw32.jpeg",
              globalIdx: 31,
              dateTitle: "2 Years Ago",
              dateSub: "16:05 👤",
            },
            {
              url: "rjw33.jpeg",
              globalIdx: 32,
              dateTitle: "2 Years Ago",
              dateSub: "15:04 👤",
            },
            {
              url: "rjw34.jpeg",
              globalIdx: 33,
              dateTitle: "2 Years Ago",
              dateSub: "14:03 👤",
            },
            {
              url: "rjw35.jpeg",
              globalIdx: 34,
              dateTitle: "2 Years Ago",
              dateSub: "13:02 👤",
            },
            {
              url: "rjw36.jpeg",
              globalIdx: 35,
              dateTitle: "2 Years Ago",
              dateSub: "12:01 👤",
            },
            {
              url: "rjw37.jpeg",
              globalIdx: 36,
              dateTitle: "2 Years Ago",
              dateSub: "11:00 👤",
            },
            {
              url: "rjw38.jpeg",
              globalIdx: 37,
              dateTitle: "2 Years Ago",
              dateSub: "10:59 👤",
            },
            {
              url: "rjw39.jpeg",
              globalIdx: 38,
              dateTitle: "2 Years Ago",
              dateSub: "09:58 👤",
            },
            {
              url: "rjw40.jpeg",
              globalIdx: 39,
              dateTitle: "2 Years Ago",
              dateSub: "08:57 👤",
            },
            {
              url: "rjw41.jpeg",
              globalIdx: 40,
              dateTitle: "2 Years Ago",
              dateSub: "07:56 👤",
            },
            {
              url: "rjw42.jpeg",
              globalIdx: 41,
              dateTitle: "2 Years Ago",
              dateSub: "06:55 👤",
            },
            {
              url: "rjw43.jpeg",
              globalIdx: 42,
              dateTitle: "2 Years Ago",
              dateSub: "05:54 👤",
            },
            {
              url: "rjw44.jpeg",
              globalIdx: 43,
              dateTitle: "2 Years Ago",
              dateSub: "04:53 👤",
            },
            {
              url: "rjw45.jpeg",
              globalIdx: 44,
              dateTitle: "2 Years Ago",
              dateSub: "03:52 👤",
            },
            {
              url: "rjw46.jpeg",
              globalIdx: 45,
              dateTitle: "2 Years Ago",
              dateSub: "02:51 👤",
            },
            {
              url: "rjw47.jpeg",
              globalIdx: 46,
              dateTitle: "2 Years Ago",
              dateSub: "01:50 👤",
            },
            {
              url: "rjw48.jpeg",
              globalIdx: 47,
              dateTitle: "2 Years Ago",
              dateSub: "00:49 👤",
            },

          ],
        },
      ];

      const photoList = photoSectionsData.flatMap((sec) =>
        sec.photos.map((p) => ({
          url: p.url,
          title: p.dateTitle,
          sub: p.dateSub,
        })),
      );
      let currentPhotoIndex = 0;

      const notesData = {
        anniversary: {
          title: "Kasih apa ya",
          date: "22 August 2026 at 6:20",
          preview: "- Airpods - Couple rings ...",
          content: `
          - <del>Airpods</del>\n - Couple rings\n- <del>Benih tomat (tapi nasa udah punya banyak)</del>\n - Matching outfit (lebih suka nasa wearing my clothes)\n - Couple keychain ( i saw Human Made new releases dan ada warna ijo kesukaan nasa)`,
        },

        real_love: {
          title: "Nasa suka lagu RnB",
          date: "03/05/2026 at 00.03",
          preview: "i fall in love with you babe",
          content: 
          `i fall in love with you babe\n .... tell me what you want from me \n tell me what you need me to do \n \n ah ah ah ah all my love for you \n why you play me like a fool \n \n i gave my all to you \n but you keep breaking my heart, oh that's so true \n i'm feeling lost with you \n i don't know what to do \n i keep running back to you \n \n kirim demo ini ke bang noah, judulnya <b>real love?</b> `,
        },

        dior_moi: {
          title: "For My Princess",
          date: "05/03/2025 at 14:30",
          preview: "karena nasa gak suka dior...",
          content: `
          karena nasa gak suka dior, biar gue bikin dedek moi yang suka dior\n <label class="todo-item"><input type="checkbox" checked /> stroller </label>\n <label class="todo-item"><input type="checkbox" /> handuk (pink/biru, biar dedek yg milih sendiri) </label>\n <label class="todo-item"><input type="checkbox" checked /> dior dress (baby collection newest update) </label>\n <label class="todo-item"><input type="checkbox" checked /> dior sandal </label>\n <label class="todo-item"><input type="checkbox" /> dior ribbon (white) </label>\n
          `,
        },

        protect_rion: {
          title: "Lebih ekstra jaga Nasa",
          date: "7 November 2024 at 18:21",
          preview: "kata papa masuk ke 7 bulan...",
          content: `
          kata papa masuk ke 7 bulan tuh lagi rentan banget. jadi ayo orion, lebih ekstra jagain nasa \n
          <label class="todo-item"><input type="checkbox" checked /> turunin semua wadah bumbu dari tempat tinggi </label>\n <label class="todo-item"><input type="checkbox" checked /> ganti semua meja di rumah (pake yg bulet biar nasa ga kepentok lagi) </label>\n <label class="todo-item"><input type="checkbox" /> hubungin Lushline studio (landscape designer) segera </label> \n <label class="todo-item"><input type="checkbox" checked/> pasang kanopi </label> \n <label class="todo-item"><input type="checkbox" /> atur kebun tomat nasa </label>
          `,
        },

        angry_rion: {
          title: "Jordanio Nasaka...",
          date: "20 July 2024 at 23:20",
          preview: "Jordanio Nasaka, you need...",
          content: `
          Jordanio Nasaka, you need me more than your lips could've ever admit.\n
          Lo yang bakalan dateng sendiri nemuin gue, Nasa. I'll make sure of that.`,
        },

        learn_nasa: {
          title: "Things to Learn from Nasa",
          date: "25 April 2024 at 21:34 ",
          preview: "suka oreo frappe...",
          content: 
          `• suka <b>oreo frappe</b>\n• lebih milih <b>windy weather</b> before the rain\n• suka nonton camping vlogs\n• lebih milih <b>pegunungan</b> (liat warna ijo) dibanding pantai\n(nanti cari referensi ngedate ke alam!!)\n• jago manggang daging : ⭐⭐⭐⭐⭐(five stars!)\n• pipinya gembung kalo lagi makan (one day i'm gonna bite that cheek and he won't complain)\n \n NEW \n • suka homemade food\n • suka warna ijo (nanti gue banyakin koleksi outfit warna ijo)\n • gak suka dior (why nasa whyyyy) `,
        },
      };

      const chatDataMessages = {
        noah_chat: {
          name: "Bang Noah",
          avatar: "noah.jpg",
          preview: "i'll be there",
          time: "5/8/26",
          unread: false,
          messages: [
            // --- 5 Agustus 2026, rekaman ---
            { type: "chat-time-divider", text: "iMessage • 5 August 2026" },
              { type: "incoming", text: "kabar baik, orion" },
              { type: "incoming", text: "mereka penasaran sama demo yang lo kirim kemaren" },
              { type: "incoming", text: "recording di LA ya" },
              { type: "incoming", text: "nanti gw siapin teamnya disini biar lo tinggal berangkat aja" },
              { type: "outgoing", text: "thanks bang" },
              { type: "outgoing", text: "i'll be there" },
          ],
        },
        nasa_chat: {
          name: "Nanas",
          avatar: "jw1.jpeg",
          preview: "can't wait to see you there, cantik",
          time: "21/10/24",
          unread: false,
          messages: [
            // --- 21 October 2024 --- //
            { type: "chat-time-divider", text: "iMessage • 21 October 2026" },
            { type: "incoming", text: "aku udah selesai" },
            { type: "incoming", text: "wa kamu centang satu" },
            { 
              type: "chat-time-divider", text: "21 October 2024 at 8:14 PM" 
            }, 
            { type: "outgoing", text: "hey!" },
            { type: "outgoing", text: "sorry, caught up with so many works" },
            { type: "outgoing", text: "kak samu aku suruh kesitu buat jemput" },
            { type: "incoming", text: "ahh oke" },
            { type: "outgoing", text: "nanti ketemu stylist langganan aku" },
            { type: "outgoing", text: "he knows what to do" },
            { type: "outgoing", text: "can't wait to see you there, cantik" },
          ],
        },
      };

      // ==========================================
      // 1. Update the igProfiles data to include a display name (name) that is separate from the bio/username
      // ==========================================
      const igProfiles = {
        orion: {
          username: "orionsei",
          name: "Orion.", // <--- bold
          avatar: "ruto_2.jpeg",
          postsCount: 3,
          followers: "10,9 M",
          following: "23",
          bio: "@jdnasa",
          posts: [
            { img: "ruto_1.jpeg", caption: "" },
            { img: "ruto_2.jpeg", caption: "🤍" },
            { img: "ruto_3.jpeg", caption: "" },
          ],
        },
        ofc_nasa: {
          username: "jdnasa_official",
          name: "Jordanio Nasaka Official",
          avatar: "jw_ig3.jpeg",
          postsCount: 358,
          followers: "1,7 M",
          following: "9",
          bio: "@jdnasa\n Jordanio Nasaka from ZY Ent",
          posts: [
            { img: "jw_ig1.jpeg", caption: "" },
            { img: "jw_ig2.jpeg", caption: "☁️" },
            { img: "jw_ig3.jpeg", caption: "" },
            { img: "jw_ig4.jpeg", caption: "ㅎㅎ" },
            { img: "jw_ig5.jpeg", caption: "💜" },
            { img: "jw_ig6.jpeg", caption: "" },
            { img: "jw_ig7.jpeg", caption: "🤍" },
            { img: "jw_ig8.jpeg", caption: "..." },
            { img: "jw_ig9.jpeg", caption: "" },
          ],
        },
        nasa: {
          username: "jdnasa",
          name: "Nama profil",
          avatar: "nama-avatar.jpeg",
          postsCount: 1,
          followers: "0",
          following: "0",
          bio: "",
          posts: [{ img: "nama-post.jpeg", caption: "" }],
        },
      };

      /* igs — type: 'normal' | 'cf'  */
      const igStoryData = {
        sion: {
          items: [
            {
              img: "sion-4.jpg",
              type: "normal",
              time: "2 ชม.",
              views: "41.2K",
              likes: "9,846",
              viewers: ["riku", "siyeon", "daeyoung", "yushi"],
              likedBy: ["riku"],
            },
            {
              img: "sion-5.jpg",
              type: "normal",
              time: "2 ชม.",
              views: "38.7K",
              likes: "8,512",
              viewers: ["riku", "siyeon", "daeyoung", "yushi"],
              likedBy: ["riku"],
            },
            {
              img: "onri-12.jpg",
              type: "cf",
              time: "1 ชม.",
              views: "4",
              likes: "2",
              viewers: ["siyeon", "riku", "daeyoung", "yushi"],
              likedBy: ["riku", "siyeon"],
            },
          ],
          closeFriends: [
            {
              id: "siyeon",
              name: "ชียอน",
              user: "oh_si_yeon",
              avatar: "coco-2.jpg",
            },
            {
              id: "riku",
              name: "前田 陸",
              user: "ri_ku_03",
              avatar: "riku-ig6.jpg",
            },
            {
              id: "daeyoung",
              name: "แดยอง",
              user: "k1mdae0",
              avatar: "daeyoung-2.jpg",
            },
            {
              id: "yushi",
              name: "ユウシ",
              user: "toku45shi",
              avatar: "yushi-2.jpg",
            },
          ],
        },
        riku: {
          items: [
            {
              img: "riku-11.jpg",
              type: "normal",
              time: "3 ชม.",
              quick: [
                "น่ารักจัง",
                "Nanasของใครกันนะ",
                "สร้อยคู่กับพี่นี่นา?",
              ],
              replies: [
                "ㅋㅋ ขอบคุณนะ",
                "ของเจ้าชายไง~",
                "พี่เป็นคนชวนใส่เองแท้ ๆ ㅋㅋㅋㅋ",
              ],
              next: ["s1", "s2", "s3"],
            },
            {
              img: "onri-13.jpg",
              type: "cf",
              time: "1 ชม.",
              quick: [
                "คิดถึงเมื่อก่อนเหรอ~",
                "น่ารักจังนะพวกเรา",
                "ยังเด็กกันอยู่เลยแฮะ?",
              ],
              replies: [
                "อื้อ~ พวกเราในตอนนั้น~",
                "ตอนนี้ก็น่ารักใช่ไหม~?",
                "เด็กน้อยกับเด็กน้อย~",
              ],
              next: ["s4", "s5", "s6"],
            },
          ],
        },
      };
      const igFeedPosts = [
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig1.jpeg",
          caption: "",
          likes: "305",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig2.jpeg",
          caption: "💜",
          likes: "511",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig3.jpeg",
          caption: "🚀",
          likes: "420",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig4.jpeg",
          caption: "🌟",
          likes: "385",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig5.jpeg",
          caption: "☁️",
          likes: "356",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig6.jpeg",
          caption: "ㅎㅎ",
          likes: "436",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig7.jpeg",
          caption: "🚀",
          likes: "410",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig8.jpeg",
          caption: "🌟",
          likes: "385",
        },
        {
          username: "jdnasa_official",
          avatar: "jw_ig3.jpeg",
          img: "jw_ig9.jpeg",
          caption: "...",
          likes: "555",
        },
      ];

      function openIgHome() {
        const area = document.getElementById("ig-content-area");

        // 1. render list of all post di feed
        let feedHtml = igFeedPosts
          .map(
            (p) => `
      <div style="border-bottom: 0.5px solid #dbdbdb; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; cursor: pointer;" onclick="openIgProfile('ofc_nasa')">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 50%; overflow: hidden; border: 1px solid #dbdbdb;">
              <img src="${p.avatar}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <span style="font-size: 13px; font-weight: 600;">${p.username}</span>
          </div>
          <span style="font-size: 16px;">•••</span>
        </div>
        
        <!-- post images (ilangin yg engga pentingnya) -->
        <div style="width: 100%; aspect-ratio: 1; background: #efefef;">
          <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <!-- action button bar -->
        <div style="padding: 10px 12px 6px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <span style="cursor: pointer; font-size: 22px; line-height: 1;">♡</span>
            <div style="width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
              <img src="icon-ig_ment.png" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div style="width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
              <img src="icon-ig_share.png" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
          </div>
          <div style="width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
            <img src="icon-ig_save.png" style="width: 100%; height: 100%; object-fit: contain;">
          </div>
        </div>

        <!-- number of likes -->
        <div style="padding: 0 12px 4px; font-size: 13px; font-weight: 600; color: #262626;">
          likes ${p.likes} 
        </div>

        <!-- move caption to the bottom, similar to real Instagram -->
        ${
          p.caption
            ? `
          <div style="padding: 0 12px 10px; font-size: 13px; color: #262626; word-break: break-word;">
            <span style="font-weight: 600; margin-right: 6px;">${p.username}</span>${p.caption}
          </div>
        `
            : ""
        }
      </div>
    `,
          )
          .join("");

        // 2. display stories sect di feed
        area.innerHTML = `
      <div style="display: flex; gap: 12px; padding: 10px 16px; overflow-x: auto; border-bottom: 0.5px solid #dbdbdb;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #ed9564; padding: 2px;">
            <img src="sion-ig7.jpg" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
          </div>
          <span style="font-size: 11px;">Your Story</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #ed9564; padding: 2px;">
            <img src="${igProfiles.ofc_nasa.avatar}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
          </div>
          <span style="font-size: 11px;">${igProfiles.ofc_nasa.username}</span>
        </div>
      </div>
      <div>${feedHtml}</div>
    `;
      }

      // ==========================================
      // 2. function openIgProfile (fixed gray bg + separated name and Bio)
      // ==========================================
      function openIgProfile(username) {
        const profile = igProfiles[username];
        if (!profile) return;

        let profileScreen = document.getElementById("instagram-profile-screen");

        if (!profileScreen) {
          profileScreen = document.createElement("div");
          profileScreen.id = "instagram-profile-screen";
          profileScreen.className = "screen";
          profileScreen.style.cssText =
            "display: flex; flex-direction: column; height: 100%; max-height: 100%; background: #ffffff; color: #000; position: absolute; top: 0; left: 0; width: 100%; z-index: 999; box-sizing: border-box; overflow: hidden;";

          const phoneContainer =
            document.querySelector(".phone") || document.body;
          phoneContainer.appendChild(profileScreen);
        }

        // เchange background grid (#fff) 
        let postsHtml = profile.posts
          .map(
            (p) => `
    <div style="aspect-ratio: 1; background: #ffffff; overflow: hidden;">
      <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
    </div>
  `,
          )
          .join("");

        const igBottomNavBar = `
    <div style="display: flex; justify-content: space-around; align-items: center; padding: 10px 0 12px; background: rgba(255,255,255,0.92); border-top: 0.5px solid rgba(0,0,0,0.1); flex-shrink: 0; z-index: 2;">
      <div style="width: 24px; height: 24px; cursor: pointer;" onclick="showScreen('instagram-screen'); openIgHome();">
        <img src="ig_home.png" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <div style="width: 24px; height: 24px; cursor: pointer;">
        <img src="ig_explore.png" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <div style="width: 24px; height: 24px; cursor: pointer;">
        <img src="ig_post.png" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <div style="width: 24px; height: 24px; cursor: pointer;">
        <img src="ig_reels.png" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <div style="width: 24px; height: 24px; border-radius: 50%; overflow: hidden; cursor: pointer; border: 1.5px solid #000;" onclick="openIgProfile('sion')">
        <img src="${profile.avatar}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  `;

        profileScreen.innerHTML = `
    <!-- Header profile -->
    <div style="padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 0.5px solid #dbdbdb; flex-shrink: 0; background: #fff; z-index: 2;">
      <button onclick="showScreen('instagram-screen')" style="background:none; border:none; color:var(--ios-blue); font-size:16px; font-weight:500; cursor:pointer; padding:0;">‹ ฟีด</button>
      <span style="font-size: 16px; font-weight: 600;">${profile.username}</span>
      <span style="font-size: 16px; opacity: 0;">•••</span>
    </div>

    <!-- change to bg solid white -->
    <div style="flex: 1; overflow-y: auto; overflow-x: hidden; min-height: 0; background: #ffffff; -webkit-overflow-scrolling: touch;">
      <div style="padding: 16px; display: flex; align-items: center; justify-content: space-between;">
        <div style="width: 76px; height: 76px; border-radius: 50%; overflow: hidden; border: 1px solid #dbdbdb; flex-shrink: 0;">
          <img src="${profile.avatar}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="display: flex; gap: 16px; text-align: center; flex: 1; justify-content: space-around; margin-left: 12px;">
          <div>
            <div style="font-weight: 700; font-size: 15px;">${profile.postsCount}</div>
            <div style="font-size: 11px; color: #8e8e93;">Post</div>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 15px;">${profile.followers}</div>
            <div style="font-size: 11px; color: #8e8e93;">Followers</div>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 15px;">${profile.following}</div>
            <div style="font-size: 11px; color: #8e8e93;">Following</div>
          </div>
        </div>
      </div>

      <!-- separate the profile name (Name) and Bio just like IG -->
      <div style="padding: 0 16px 12px; font-size: 13px; background: #ffffff;">
        <div style="font-weight: 600; color: #000000; font-size: 14px;">${profile.name || profile.username}</div>
        <div style="color: #262626; margin-top: 2px; word-break: break-word;">${profile.bio}</div>
      </div>

      <!-- action button -->
      <div style="padding: 0 16px 16px; display: flex; gap: 8px; background: #ffffff;">
        <button style="flex: 1; padding: 6px; background: #efefef; border: none; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer;">Edit profile</button>
        <button style="flex: 1; padding: 6px; background: #efefef; border: none; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer;">Share profile</button>
      </div>

      <!-- post grid (Grid 3 column layout, clean white bg) -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: #ffffff; padding-bottom: 20px;">
        ${postsHtml}
      </div>
    </div>

    <!-- bottom menu bar -->
    ${igBottomNavBar}

    <!-- Home Indicator at the very bottom -->
    <div class="home-indicator-container" onclick="showScreen('home-screen')" style="flex-shrink: 0; background: #fff; position: relative; z-index: 2;">
      <div class="home-indicator" style="background: rgba(0,0,0,0.3);"></div>
    </div>
  `;

        showScreen("instagram-profile-screen");
      }
      function updateClock() {
        const now = new Date();

        const timeStr = now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
          now.getDay()
        ];
        const mo = [
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
        ][now.getMonth()];
        const dateStr = `${wd} ${now.getDate()} ${mo}`;

        const dateEl = document.getElementById("lock-date");
        const timeEl = document.querySelector(".lock-time"); //

        if (dateEl) dateEl.textContent = dateStr;
        if (timeEl) timeEl.textContent = timeStr;
      }

      // Jalankan pas web dibuka
      document.addEventListener("DOMContentLoaded", () => {
        updateClock(); //
        setInterval(updateClock, 1000); //
      });

      /* transisi halaman biar seamless */
      let leaveTimer = 0;
      const DETAIL_SEL =
        ".chat-detail-screen, .kakao-chat-screen, .note-detail-screen, .photo-viewer";
      /* ===== iOS app launch / close motion: zoom out terus shrick ===== */
      let lastIcon = null;
      document.addEventListener(
        "click",
        (e) => {
          const a = e.target.closest("#home-screen .app");
          if (!a) return;
          const ic = a.querySelector(".app-icon") || a,
            ph = document.querySelector(".phone");
          if (!ph) return;
          const pr = ph.getBoundingClientRect(),
            r = ic.getBoundingClientRect(),
            sc = pr.width / ph.offsetWidth || 1;
          lastIcon = {
            el: ic,
            x: (r.left + r.width / 2 - pr.left) / sc,
            y: (r.top + r.height / 2 - pr.top) / sc,
            k: r.width / sc / ph.offsetWidth,
            t: Date.now(),
          };
        },
        true,
      );

      /* ===== Motion engine (Web Animations): deterministic open/close, no timers, no class juggling ===== */
      const EASE = "cubic-bezier(.32,.72,0,1)";
      const motions = new Set();
      const phoneEl = document.querySelector(".phone");
      function motion(el, frames, ms, done, lin, ease) {
        const f0 = frames[0] || {},
          held = [];
        ["transform", "opacity", "borderRadius"].forEach((k) => {
          if (f0[k] !== undefined) {
            el.style[k] = f0[k];
            held.push(k);
          }
        });
        const a = el.animate(frames, {
          duration: ms,
          easing: ease || EASE,
          fill: "forwards",
        });
        const a2 = lin
          ? el.animate(lin, {
              duration: ms,
              easing: "linear",
              fill: "forwards",
            })
          : null;
        const m = { over: false };
        if (phoneEl) phoneEl.classList.add("moving");
        m.end = () => {
          if (m.over) return;
          m.over = true;
          motions.delete(m);
          if (!motions.size && phoneEl) phoneEl.classList.remove("moving");
          if (phoneEl)
            phoneEl.classList.add("no-tr"); /* temporaily disable css dulu */
          held.forEach((k) => {
            el.style[k] = "";
          });
          try {
            done && done();
          } catch (e) {} /* settle the real CSS state first ... */
          try {
            a.cancel();
          } catch (e) {} /* ... then drop the animation: nothing visibly changes */
          try {
            a2 && a2.cancel();
          } catch (e) {}
          if (phoneEl) {
            void phoneEl.offsetWidth;
            phoneEl.classList.remove("no-tr");
          } /* flush wth transisi */
        };
        a.onfinish = m.end;
        motions.add(m);
        return m;
      }
      function settleMotion() {
        [...motions].forEach((m) => m.end());
      }
      function iconTf() {
        const ph = document.querySelector(".phone");
        const k = Math.max(lastIcon.k, 0.12);
        return (
          "translate(" +
          (lastIcon.x - ph.offsetWidth / 2) +
          "px," +
          (lastIcon.y - ph.offsetHeight / 2) +
          "px) scale(" +
          k +
          ")"
        );
      }

      function showScreen(id) {
        const target = document.getElementById(id);
        if (!target) return;
        settleMotion();
        if (window.igCmClose) window.igCmClose(true);
        target.classList.remove("leaving");
        const wasActive = target.classList.contains("active");
        const prev = [...document.querySelectorAll(".screen.active")].filter(
          (s) => s !== target,
        );
        const dets = [...document.querySelectorAll(DETAIL_SEL)].filter((d) =>
          d.classList.contains("active"),
        );
        document
          .querySelectorAll(".screen")
          .forEach((s) => s.classList.remove("active"));
        dets.forEach((d) => d.classList.remove("active"));
        if (wasActive && !prev.length) {
          target.classList.add("active");
          return;
        }

        const toHome = id === "home-screen";
        const opening =
          !toHome &&
          lastIcon &&
          Date.now() - lastIcon.t < 1500 &&
          prev.some((s) => s.id === "home-screen");
        const closing =
          toHome &&
          lastIcon &&
          prev.length &&
          !prev.some(
            (s) =>
              s.id === "home-screen" ||
              s.id === "lock-screen" ||
              s.id === "passcode-screen",
          );
        const R = "80px";
        const unlock = (el) => () => el.classList.remove("noanim");

        target.classList.add(
          "noanim",
          "active",
        ); /* CSS state changes instantly; the animation does all the visible motion */

        if (closing) {
          const tf = iconTf();
          const ph = phoneEl || document.querySelector(".phone");
          const PW = ph.offsetWidth,
            PH = ph.offsetHeight;
          const kk = Math.max(lastIcon.k, 0.12);
          const vCrop = Math.max(
            0,
            (PH - PW) / 2,
          ); /* trim ats bawah biar jadi kotak ikon */
          const rIcon =
            0.2237 * PW + "px"; /* bulet ios ikon tuh 22.37 persenan */
          const ic = lastIcon.el;
          const iw = Math.max(lastIcon.k * PW, 1);
          /* bikin kopian ikon terus scale jadi kotak */
          const mkOverlay = () => {
            if (!ic) return null;
            const ov = document.createElement("div");
            ov.className = "fold-icon";
            ov.style.cssText =
              "position:absolute;left:0;top:" +
              vCrop +
              "px;width:" +
              PW +
              "px;height:" +
              PW +
              "px;overflow:hidden;pointer-events:none;z-index:99999;border-radius:" +
              rIcon +
              ";opacity:0";
            const cl = ic.cloneNode(true);
            cl.removeAttribute("id");
            cl.style.cssText +=
              ";position:absolute;left:0;top:0;margin:0;opacity:1;width:" +
              iw +
              "px;height:" +
              iw +
              "px;transform-origin:0 0;transform:scale(" +
              PW / iw +
              ")";
            ov.appendChild(cl);
            return ov;
          };
          /* biarin actual ikonnya tersembunyi */
          const ovs = [];
          prev.concat(dets).forEach((el) => {
            const o = mkOverlay();
            if (o) {
              el.appendChild(o);
              ovs.push(o);
            }
          });
          if (ic) ic.style.opacity = "0";
          const D = 460;
          const FOLD =
            "cubic-bezier(.3,.05,.2,1)"; /* gradual scaling: ga pop out langsung tapi softens dulu */
          prev.concat(dets).forEach((el) => {
            if (el.classList.contains("screen")) el.classList.add("leaving");
            el.classList.add("noanim");
            el.style.zIndex = "30";
            el.style.overflow = "hidden";
            const clip = el.animate(
              [
                { clipPath: "inset(0px 0px 0px 0px round 0px)", offset: 0 },
                { clipPath: "inset(0px 0px 0px 0px round 56px)", offset: 0.18 },
                {
                  clipPath:
                    "inset(" +
                    vCrop +
                    "px 0px " +
                    vCrop +
                    "px 0px round " +
                    rIcon +
                    ")",
                  offset: 0.88,
                },
                {
                  clipPath:
                    "inset(" +
                    vCrop +
                    "px 0px " +
                    vCrop +
                    "px 0px round " +
                    rIcon +
                    ")",
                  offset: 1,
                },
              ],
              {
                duration: D,
                easing: "cubic-bezier(.4,0,.2,1)",
                fill: "forwards",
              },
            );
            motion(
              el,
              [
                { transform: "none", offset: 0 },
                { transform: tf, offset: 1 },
              ],
              D,
              () => {
                try {
                  clip.cancel();
                } catch (e) {}
                el.querySelectorAll(":scope > .fold-icon").forEach((o) =>
                  o.remove(),
                );
                el.classList.remove("leaving", "noanim");
                el.style.zIndex = "";
                el.style.overflow = "";
              },
              /* card solid sampe akhir terus ikon muncul */
              [
                { opacity: 1, offset: 0 },
                { opacity: 1, offset: 0.82 },
                { opacity: 0, offset: 1 },
              ],
              FOLD,
            );
          });
          /* app content overlay ikon: 25 persen fold, baru muncul solid 70 persen */
          ovs.forEach((o) =>
            o.animate(
              [
                { opacity: 0, offset: 0 },
                { opacity: 0, offset: 0.3 },
                { opacity: 1, offset: 0.68 },
                { opacity: 1, offset: 1 },
              ],
              { duration: D, easing: "linear", fill: "forwards" },
            ),
          );
          /* actual ikon muncul di akhir */
          let icA = null;
          if (ic)
            icA = ic.animate(
              [
                { opacity: 0, offset: 0 },
                { opacity: 0, offset: 0.78 },
                { opacity: 1, offset: 1 },
              ],
              { duration: D, fill: "forwards", easing: "linear" },
            );
          /* homescreen bg : blur dulu pas folding terus jadi sharp waktu ikonnya udah solid */
          motion(
            target,
            [
              {
                transform: "scale(1.03)",
                filter: "blur(10px)",
                opacity: 1,
                offset: 0,
              },
              {
                transform: "scale(1.05)",
                filter: "blur(24px)",
                opacity: 1,
                offset: 0.3,
              },
              {
                transform: "scale(1.03)",
                filter: "blur(18px)",
                opacity: 1,
                offset: 0.6,
              },
              { transform: "none", filter: "blur(0px)", opacity: 1, offset: 1 },
            ],
            640,
            () => {
              unlock(target)();
              if (ic) ic.style.opacity = "";
              try {
                icA && icA.cancel();
              } catch (e) {}
            },
          );
          lastIcon = null;
        } else if (opening) {
          const tf = iconTf();
          const br = getComputedStyle(target).borderRadius || "0px";
          prev.forEach((el) => {
            el.classList.add("leaving", "noanim");
            motion(
              el,
              [
                { transform: "none", opacity: 1 },
                { transform: "scale(.92)", opacity: 0 },
              ],
              480,
              () => el.classList.remove("leaving", "noanim"),
            );
          });
          motion(
            target,
            [
              { transform: tf, opacity: 0, borderRadius: R, offset: 0 },
              { opacity: 1, offset: 0.2 },
              { transform: "none", opacity: 1, borderRadius: br, offset: 1 },
            ],
            480,
            unlock(target),
          );
        } else {
          prev.forEach((el) => el.classList.add("leaving"));
          motion(
            target,
            [
              { opacity: 0, transform: "scale(.97)" },
              { opacity: 1, transform: "none" },
            ],
            380,
            () => {
              target.classList.remove("noanim");
              prev.forEach((el) => el.classList.remove("leaving"));
            },
          );
        }
      }

      const lockScreen = document.getElementById("lock-screen");
      lockScreen.addEventListener(
        "touchstart",
        (e) => {
          touchStartY = e.touches[0].clientY;
        },
        { passive: true },
      );
      lockScreen.addEventListener(
        "touchend",
        (e) => {
          if (touchStartY - e.changedTouches[0].clientY > 50)
            showScreen("passcode-screen");
        },
        { passive: true },
      );

      const keysData = [
        { n: "1", l: "" },
        { n: "2", l: "ABC" },
        { n: "3", l: "DEF" },
        { n: "4", l: "GHI" },
        { n: "5", l: "JKL" },
        { n: "6", l: "MNO" },
        { n: "7", l: "PQRS" },
        { n: "8", l: "TUV" },
        { n: "9", l: "WXYZ" },
        { n: "", l: "" },
        { n: "0", l: "" },
        { n: "⌫", l: "" },
      ];

      const keypad = document.getElementById("keypad");
      keysData.forEach((k) => {
        if (!k.n) {
          keypad.appendChild(document.createElement("div"));
          return;
        }
        const btn = document.createElement("div");
        btn.className = "key";

        if (k.n === "⌫") {
          btn.textContent = "⌫";
          btn.onclick = () => {
            currentPasscode = currentPasscode.slice(0, -1);
            updateDots();
          };
        } else {
          btn.innerHTML = `${k.n}${k.l ? `<small>${k.l}</small>` : ""}`;
          btn.onclick = () => {
            if (currentPasscode.length >= 4) return;
            currentPasscode += k.n;
            updateDots();
            if (currentPasscode.length === 4) setTimeout(verifyPasscode, 150);
          };
        }
        keypad.appendChild(btn);
      });

      function updateDots() {
        document.querySelectorAll(".dot").forEach((dot, idx) => {
          dot.classList.toggle("filled", idx < currentPasscode.length);
        });
      }

      function verifyPasscode() {
        if (currentPasscode === PASSCODE) {
          showScreen("home-screen");
          currentPasscode = "";
          updateDots();
        } else {
          if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
          const screen = document.getElementById("passcode-screen");
          screen.style.animation = "shake 0.4s ease";
          setTimeout(() => {
            screen.style.animation = "";
            currentPasscode = "";
            updateDots();
          }, 400);
        }
      }

      document.getElementById("btn-cancel").onclick = () => {
        currentPasscode = "";
        updateDots();
        showScreen("lock-screen");
      };

      const torchBtn = document.getElementById("btn-flashlight");
      const torchOverlay = document.getElementById("torch-overlay");
      torchBtn.onclick = () => {
        torchBtn.classList.toggle("active-light");
        torchOverlay.classList.toggle("on");
      };

      document.getElementById("btn-camera").onclick = () => {
        openApp("photos", "Photos");
      };

      function renderHomeAndDock() {
        const apps = [
          {
            id: "messages",
            name: "Messages",
            icon: I27.messages,
            badgeKey: "messages",
          },
          {
            id: "kakaotalk",
            name: "KakaoTalk",
            icon: I27.kakaotalk,
            badgeKey: "kakaotalk",
          },
          {
            id: "whatsapp",
            name: "WhatsApp",
            icon: I27.whatsapp,
            badgeKey: "whatsapp",
          },
          { id: "photos", name: "Photos", icon: I27.photos },
          { id: "notes", name: "Notes", icon: I27.notes },
          { id: "calendar", name: "Calendar", icon: I27.calendar },
          { id: "clock", name: "Clock", icon: I27.clock },
          { id: "camera", name: "Camera", icon: I27.camera },
          {
            id: "instagram",
            name: "Instagram",
            icon: "icon-ig.png",
            badgeKey: "instagram",
          },
          { id: "colouring", name: "Kids Book", icon: "kids_colouring.PNG" },
          { id: "hairsalon", name: "Hair Salon", icon: "kids_salon.PNG" },
          { id: "animals", name: "HospitalAnimal..", icon: "kids_animal.PNG" },
          { id: "dinosaur", name: "Dinosaurs", icon: "kids_dino.PNG" }

        ];
        const homeApps = apps.filter((app) => app.id !== "kakaotalk");

        const grid = document.getElementById("app-grid");
        const dockEl = document.getElementById("dock");
        const dockApps0 = ["phone", "messages", "safari", "music"];

        /* ikon muncul, update only badgenya kalo ada notif */
        if (
          grid.children.length === homeApps.length &&
          dockEl.children.length === dockApps0.length
        ) {
          const sync = (host, list) =>
            [...host.children].forEach((el, i) => {
              const a = list[i],
                n = a.badgeKey ? appBadges[a.badgeKey] || 0 : 0;
              let b = el.querySelector(":scope > .badge");
              if (n > 0) {
                if (!b) {
                  b = document.createElement("div");
                  b.className = "badge";
                  el.insertBefore(b, el.firstChild);
                }
                if (b.textContent !== String(n)) b.textContent = n;
              } else if (b) b.remove();
              if (b) b.classList.remove("badge-pop"); // allow notifyaway munculin new animasi
            });
          sync(grid, homeApps);
          sync(
            dockEl,
            dockApps0.map((id) => ({
              badgeKey:
                id === "messages"
                  ? "messages"
                  : id === "phone"
                    ? "phone"
                    : null,
            })),
          );
          return;
        }
        grid.innerHTML = "";
        homeApps.forEach((app) => {
          const badgeCount = app.badgeKey ? appBadges[app.badgeKey] : 0;
          const el = document.createElement("div");
          el.className = "app";
          el.innerHTML = `
        ${badgeCount > 0 ? `<div class="badge">${badgeCount}</div>` : ""}
        <div class="app-icon"><img src="${app.icon}" alt="${app.name}" decoding="sync"></div>
        <span>${app.name}</span>
      `;
          if (app.id === "camera") {
            el.style.pointerEvents = "none";
            el.style.cursor = "default";
          } else {
            el.onclick = () => openApp(app.id, app.name);
          }
          grid.appendChild(el);
        });

        const dockApps = [
          { id: "phone", name: "Phone", icon: I27.phone, badgeKey: "phone" },
          {
            id: "messages",
            name: "Messages",
            icon: I27.messages,
            badgeKey: "messages",
          },
          { id: "safari", name: "Safari", icon: I27.safari },
          { id: "music", name: "Music", icon: I27.music },
        ];

        const dock = document.getElementById("dock");
        dock.innerHTML = "";
        dockApps.forEach((app) => {
          const badgeCount = app.badgeKey ? appBadges[app.badgeKey] : 0;
          const el = document.createElement("div");
          el.className = "app";
          el.innerHTML = `
        ${badgeCount > 0 ? `<div class="badge">${badgeCount}</div>` : ""}
        <div class="app-icon"><img src="${app.icon}" alt="${app.name}" decoding="sync"></div>
      `;
          el.onclick = () => openApp(app.id, app.name);
          dock.appendChild(el);
        });
      }

      renderHomeAndDock();

      function openApp(id, title) {
        if (id === "colouring" || id === "hairsalon" || id === "animals" || id === "dinosaur") return;

        const body = document.getElementById("app-body");
        const header = document.getElementById("app-header");
        document
          .getElementById("app-screen")
          .classList.toggle("dark", id === "clock");
        if (id === "colouring") return;

        if (id === "instagram") {
          openIgHome();
          showScreen("instagram-screen");
          return;
        }

        if (id === "phone") {
          header.style.display = "none";
          body.innerHTML = `
        <div class="phone-app-container">
          <div class="phone-top-header">
            <button onclick="showScreen('home-screen')" style="background:none; border:none; color:var(--ios-blue); font-size:16px; font-weight:500; cursor:pointer; padding:4px 0;">‹ Home</button>
            <span style="color:var(--ios-blue); font-size:16px;">Edit</span>
          </div>
          <div class="phone-main-title">Recents</div>
          
          <div class="phone-scroll-area">
            <div class="recents-list">
              <div class="recent-item">
                <div class="recent-left">
                  <span class="recent-call-icon">↗</span>
                  <span class="recent-name" style="color:var(--ios-red);">Nanas</span>
                </div>
                <div class="recent-right">
                  <span class="recent-time">yesterday</span>
                  <span class="recent-info-btn">ⓘ</span>
                </div>
              </div>
            </div>
          </div>

          <div class="phone-nav-bar">
            <div class="phone-nav-item"><div class="phone-nav-icon">⭐</div>Favorites</div>
            <div class="phone-nav-item active"><div class="phone-nav-icon">🕒</div>Recents</div>
            <div class="phone-nav-item"><div class="phone-nav-icon">👤</div>Contacts</div>
            <div class="phone-nav-item"><div class="phone-nav-icon">⌨️</div>Keypad</div>
            <div class="phone-nav-item"><div class="phone-nav-icon">📞</div>Messages</div>
          </div>
        </div>`;
        } else if (id === "calendar") {
          header.style.display = "none";
          body.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%; background: #ffffff; color: #000; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
          
          <div style="padding: 12px 16px 8px; display: flex; justify-content: space-between; align-items: center; border-bottom: 0.5px solid rgba(0,0,0,0.1);">
            <button onclick="showScreen('home-screen')" style="background:none; border:none; color:var(--ios-blue); font-size:16px; font-weight:500; cursor:pointer;">‹ หน้าหลัก</button>
            <span style="font-size: 17px; font-weight: 600;">มิถุนายน 2026</span>
            <span style="font-size: 18px; color: var(--ios-blue); cursor: pointer;">🔍</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; padding: 8px 0; font-size: 11px; color: #8e8e93; font-weight: 600; border-bottom: 0.5px solid #e5e5ea;">
            <span>อา.</span><span>จ.</span><span>อ.</span><span>พ.</span><span>พฤ.</span><span>ศ.</span><span>ส.</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(7, 1fr); grid-auto-rows: 42px; padding: 4px 8px; text-align: center; font-size: 15px;">
            <span style="color: #c7c7cc; padding-top: 10px;">31</span>
            
            ${Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const isBirthday = day === 28;

              if (isBirthday) {
                return `
                  <div style="display: flex; flex-direction: column; align-items: center; padding-top: 4px; cursor: pointer;" onclick="alert('28 มิถุนายน: อย่าลืมของขวัญของNanas (Matching rings) 💍')">
                    <span style="width: 28px; height: 28px; background: var(--ios-blue); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">${day}</span>
                    <span style="font-size: 8px; color: var(--ios-blue); font-weight: 600; margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 36px;">วันเกิด</span>
                  </div>
                `;
              }

              return `<span style="padding-top: 10px; color: #000; cursor: pointer;" onclick="alert('${day} June 2026')">${day}</span>`;
            }).join("")}
            
            <span style="color: #c7c7cc; padding-top: 10px;">1</span>
            <span style="color: #c7c7cc; padding-top: 10px;">2</span>
            <span style="color: #c7c7cc; padding-top: 10px;">3</span>
            <span style="color: #c7c7cc; padding-top: 10px;">4</span>
          </div>

          <div style="flex: 1; background: #f2f2f7; padding: 16px; border-top: 0.5px solid #e5e5ea; overflow-y: auto;">
            <div style="font-size: 13px; font-weight: 600; color: #8e8e93; margin-bottom: 8px;">28 June 2026</div>
            <div style="background: white; border-radius: 12px; padding: 12px 16px; border-left: 4px solid var(--ios-blue); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div style="font-size: 15px; font-weight: 600; color: #000;">Birthday of the Princess 🎂</div>
              <div style="font-size: 13px; color: #8e8e93; margin-top: 2px;">All-day • Don't forget the princess's gift (Matching rings)</div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-around; padding: 10px 0 20px; background: rgba(248,248,248,0.92); border-top: 0.5px solid #e5e5ea; font-size: 10px; color: #8e8e93;">
            <div style="text-align: center; color: var(--ios-blue);">📅<br>Monthly</div>
            <div style="text-align: center;">📋<br>List</div>
            <div style="text-align: center;">🔍<br>Search</div>
          </div>

        </div>`;
        } else if (id === "safari") {
          header.style.display = "none";
          body.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 100%; background: #f2f2f7; color: #000; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
          
          <div style="padding: 10px 16px; background: rgba(248,248,248,0.92); backdrop-filter: blur(14px); border-bottom: 0.5px solid rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
            <button onclick="showScreen('home-screen')" style="background:none; border:none; color:var(--ios-blue); font-size:16px; font-weight:500; cursor:pointer;">‹ หน้าหลัก</button>
            <div style="flex: 1; max-width: 220px; background: #e3e3e8; border-radius: 10px; padding: 6px 12px; font-size: 14px; text-align: center; color: #3a3a3c; font-weight: 400; display: flex; align-items: center; justify-content: center; gap: 6px; margin: 0 10px;">
              <span>🔍</span> <span>google.com</span>
            </div>
            <span style="font-size: 18px; color: var(--ios-blue); cursor: pointer;">Aa</span>
          </div>

          <div style="flex: 1; overflow-y: auto; padding: 20px 16px;">
            
            <div style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #000;">Favorites</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer;">
                <div style="width: 52px; height: 52px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">G</div>
                <span style="font-size: 11px; color: #3a3a3c;">Google</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer;">
                <div style="width: 52px; height: 52px; background: #ff0000; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">▶</div>
                <span style="font-size: 11px; color: #3a3a3c;">YouTube</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer;">
                <div style="width: 52px; height: 52px; background: #000; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">✖</div>
                <span style="font-size: 11px; color: #3a3a3c;">X</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer;">
                <div style="width: 52px; height: 52px; background: #03c75a; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">N</div>
                <span style="font-size: 11px; color: #3a3a3c;">Naver</span>
              </div>
            </div>

            <div style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #000;">Search History</div>
            <div style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              
              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Matching rings')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Matching rings</span>
              </div>
              
              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Chrome hearts')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Chrome hearts</span>
              </div>

              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Matching pendants')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Matching pendants</span>
              </div>

              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Popular Chrome hearts rings')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Popular Chrome hearts rings</span>
              </div>

              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Heart earrings')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Heart earrings</span>
              </div>

              <div style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Chrome hearts Forever Ring')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Chrome hearts Forever Ring</span>
              </div>

              <div style="padding: 12px 16px; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="alert('Search: Diesel')">
                <span style="color: #8e8e93; font-size: 16px;">🕒</span>
                <span style="font-size: 15px; color: #000;">Diesel</span>
              </div>

            </div>

          </div>

          <div style="padding: 10px 24px 22px; background: rgba(248,248,248,0.92); backdrop-filter: blur(14px); border-top: 0.5px solid rgba(0,0,0,0.15); display: flex; justify-content: space-between; align-items: center; font-size: 20px; color: var(--ios-blue); flex-shrink: 0;">
            <span style="cursor: pointer;">‹</span>
            <span style="cursor: pointer; opacity: 0.4;">›</span>
            <span style="cursor: pointer; font-size: 18px;">📖</span>
            <span style="cursor: pointer; font-size: 18px;">📑</span>
            <span style="cursor: pointer; font-size: 18px;">⋯</span>
          </div>

        </div>`;
        } else if (id === "messages") {
          header.style.display = "none";
          body.innerHTML = `
        <div class="msg-custom-header">
          <button class="notes-back-btn" onclick="showScreen('home-screen')" style="font-size:16px;">‹ หน้าหลัก</button>
          <span>Messages</span>
          <div style="width: 50px;"></div>
        </div>
        <div class="msg-list-scroll" style="flex:1; overflow-y:auto; background:#f2f2f7;">
          <div class="msg-list-header">
            <div class="msg-title-row">
              <span class="msg-edit-btn">แก้ไข</span>
              <span class="msg-main-title">ข้อความ</span>
            </div>
            <div class="msg-search-box">🔍 Search</div>
          </div>
          
          <!-- chat 1: princess -->
<div class="chat-item unread" id="chat-item-riku" onclick="openChatDetail('noah_chat')">
  <img class="chat-avatar" src="riku-1.jpg" alt="princess">
  <div class="chat-info">
    <div class="chat-top">
      <span class="chat-name">Bang Noah</span>
      <span class="chat-time">21:43</span>
    </div>
    <div class="chat-preview">ถ้าใช้ได้แล้วจะติดต่อกลับทางแชทนะ</div>
  </div>
  ${appBadges.messages > 0 ? '<div class="unread-badge-dot" id="msg-dot-riku"></div>' : ""}
</div>

<!-- แชท 2: ริคุ (2023) - ใช้คลาส chat-avatar ทำให้ขนาดเท่ากันเป๊ะ -->
<div class="chat-item" onclick="openChatDetail('nasa_chat')">
  <div class="chat-avatar" style="background: linear-gradient(135deg, #aeaec4 0%, #8e8e93 100%); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; padding: 0;">
    <img src="im-person.png" style="width: 55%; height: 55%; object-fit: contain; filter: brightness(0) invert(1);">
  </div>
  <div class="chat-info">
    <div class="chat-top">
      <span class="chat-name">ริคุ (2023)</span>
      <span class="chat-time">3 ปีที่แล้ว</span>
    </div>
    <div class="chat-preview">ใน dm</div>
  </div>
</div>
</div>`;
        } else if (id === "kakaotalk") {
          header.style.display = "none";
          body.innerHTML = kakaotalkHomeHtml;
          if (appBadges.kakaotalk > 0) {
            const row = body.querySelector('[onclick^="openKakaoChat"]');
            if (row) {
              const dot = document.createElement("div");
              dot.style.cssText =
                "width:10px;height:10px;background:#FEE500;border:1px solid #d8c400;border-radius:50%;flex-shrink:0;";
              row.appendChild(dot);
            }
          }
        } else if (id === "notes") {
          header.style.display = "none";
          body.innerHTML = `
        <div class="notes-container">
          <div class="notes-top-bar">
            <button class="notes-back-btn" onclick="showScreen('home-screen')">‹ หน้าหลัก</button>
            <span class="notes-more-btn">•••</span>
          </div>
          <div class="notes-header-title">All Notes</div>
          <div class="notes-search-box">🔍 Search</div>
          
          <div class="notes-group">
            <div class="note-item" onclick="openNoteDetail('anniversary')">
              <div class="note-item-title">Kasih apa ya</div>
              <div class="note-item-desc">
                <span class="note-item-date">22/08/2026</span>- Matching / Matching rings / ต่างหู
              </div>
            </div>
            <div class="note-item" onclick="openNoteDetail('real_love')">
              <div class="note-item-title">Nasa suka lagu RnB</div>
              <div class="note-item-desc">
                <span class="note-item-date">03/05/2026</span>- i keep running back to you
              </div>
            </div>
            <div class="note-item" onclick="openNoteDetail('dior_moi')">
              <div class="note-item-title">For my princess</div>
              <div class="note-item-desc">
                <span class="note-item-date">05/03/2025</span>- dior ribbon (white)
              </div>
            </div>
            <div class="note-item" onclick="openNoteDetail('protect_rion')">
              <div class="note-item-title">Lebih ekstra jaga Nasa</div>
              <div class="note-item-desc">
                <span class="note-item-date">07/11/2024</span>- Lebih ekstra jaga Nasa
              </div>
            </div>
            <div class="note-item" onclick="openNoteDetail('angry_rion')">
              <div class="note-item-title">Jordanio Nasaka...</div>
              <div class="note-item-desc">
                <span class="note-item-date">20/07/2024</span>- i'll make sure of that
              </div>
            </div>
            <div class="note-item" onclick="openNoteDetail('learn_nasa')">
              <div class="note-item-title">สิ่งที่Nanasชอบ</div>
              <div class="note-item-desc">
                <span class="note-item-date">11/05/2024</span>1. เครื่องประดับ 2. เยลลี่ 3. บ๊วย 4. พวงกุญแจ 5. คุโรมิ 6. ฉัน
              </div>
            </div>
          </div>

          <div class="notes-footer-bar">
            <div>2 Note</div>
            <div class="notes-compose-btn">✏️</div>
          </div>
        </div>`;
        } else if (id === "photos") {
          header.style.display = "none";
          let photosHtml = `
        <div class="photos-app-container">
          <div class="photos-header">
            <button class="notes-back-btn" onclick="showScreen('home-screen')">‹ หน้าหลัก</button>
            <span class="photos-main-title">Library</span>
            <span style="color:var(--ios-blue); font-size:15px; font-weight:500;">Select</span>
          </div>
          <div class="photos-scroll-area">`;

          let photoCounter = 0;
          photoSectionsData.forEach((sec) => {
            photosHtml += `
          <div class="photo-section">
            <div class="photo-section-header">
              <span class="photo-section-date">${sec.date}</span>
              <span class="photo-section-location">${sec.location}</span>
            </div>
            <div class="photo-grid">`;
            sec.photos.forEach((p) => {
              photosHtml += `
            <div class="photo-item" onclick="openPhotoViewer(${photoCounter++})">
              <img src="${p.url}" alt="photo-${p.globalIdx}">
            </div>`;
            });
            photosHtml += `</div></div>`;
          });

          photosHtml += `
          </div>
          <div class="photos-nav-bar">
            <div class="photos-nav-item active">🖼️<span>Library</span></div>
            <div class="photos-nav-item">✨<span>Favorites</span></div>
            <div class="photos-nav-item">📁<span>Albums</span></div>
            <div class="photos-nav-item">🔍<span>Search</span></div>
          </div>
        </div>`;
          body.innerHTML = photosHtml;
        } else if (id === "music") {
          header.style.display = "none";
          renderMusic();
        } else if (id === "clock") {
          header.style.display = "none";
          clockTab = "alarm";
          renderClock();
        } else {
          header.style.display = "flex";
          header.innerHTML = `<button onclick="showScreen('home-screen')" style="background:none;border:none;color:var(--ios-blue);font-size:16px;font-weight:500;cursor:pointer;">‹ Home</button><span style="flex:1;text-align:center;margin-right:64px;">${title}</span>`;
          body.innerHTML = `
        <div style="text-align:center; padding-top: 80px; color: #8e8e93;">
          <p style="font-size: 18px; font-weight: 500;">${title}</p>
          <p style="font-size: 14px; margin-top: 6px;">Only for Moi...</p>
        </div>`;
        }
        showScreen("app-screen");
      }

      /* CLOCK APP */
      const clockAlarms = [
        { time: "07:01", on: true },
        { time: "07:15", on: true },
        { time: "07:25", on: true },
      ];
      let clockTab = "alarm";
      const clockOn = ["world", "alarm"]; /* tab lain belum aktiv" */

      const clockIcons = {
        world:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>',
        alarm:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 2M4 5.5l3-2.2M20 5.5l-3-2.2"/></svg>',
        stopwatch:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.5M10 3h4M12 3v3"/></svg>',
        timer:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 12V7M12 3v0"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
      };

      function renderClock() {
        const body = document.getElementById("app-body");
        const tabs = [
          ["world", "World Clock"],
          ["alarm", "Alarm"],
          ["stopwatch", "Stopwatch"],
          ["timer", "Timer"],
        ];
        let main = "";
        if (clockTab === "alarm") {
          main =
            '<div class="clock-title">Alarm</div><div class="clock-scroll">' +
            '<div class="clock-section">Other</div>' +
            clockAlarms
              .map(
                (a, i) =>
                  '<div class="alarm-row' +
                  (a.on ? "" : " off") +
                  '" id="alarm-row-' +
                  i +
                  '">' +
                  '<div><div class="alarm-time">' +
                  a.time +
                  '</div><div class="alarm-label">Alarm</div></div>' +
                  '<div class="ios-switch' +
                  (a.on ? " on" : "") +
                  '" onclick="toggleAlarm(' +
                  i +
                  ', this)"></div>' +
                  "</div>",
              )
              .join("") +
            "</div>";
        } else if (clockTab === "world") {
          const zones = [
            ["Seoul", "Asia/Seoul"],
            ["Fukuoka", "Asia/Fukuoka"],
          ];
          main =
            '<div class="clock-title">World Clock</div><div class="clock-scroll">' +
            zones
              .map((z) => {
                const t = new Date().toLocaleTimeString("en-GB", {
                  timeZone: z[1],
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  '<div class="world-row"><div><div class="world-sub">Today</div><div class="world-city">' +
                  z[0] +
                  '</div></div><div class="world-time">' +
                  t +
                  "</div></div>"
                );
              })
              .join("") +
            "</div>";
        } else {
          const label = tabs.find((t) => t[0] === clockTab)[1];
          main =
            '<div class="clock-title">' +
            label +
            '</div><div class="clock-empty">Not available</div>';
        }
        body.innerHTML =
          '<div class="clock-app">' +
          '<div class="clock-top"><button class="gl back" onclick="showScreen(\'home-screen\')">' +
          I27.chevL +
          "<span>Home</span></button>" +
          (clockTab === "alarm"
            ? '<button class="gl round clock-plus">' + I27.plus + "</button>"
            : "<span></span>") +
          "</div>" +
          main +
          '<div class="clock-tabs">' +
          tabs
            .map(
              (t) =>
                '<div class="clock-tab' +
                (t[0] === clockTab ? " active" : "") +
                '"' +
                (clockOn.indexOf(t[0]) >= 0
                  ? " onclick=\"clockTab='" + t[0] + "';renderClock()\""
                  : "") +
                ">" +
                clockIcons[t[0]] +
                "<span>" +
                t[1] +
                "</span></div>",
            )
            .join("") +
          "</div>" +
          "</div>";
      }

      function toggleAlarm(i, el) {
        clockAlarms[i].on = !clockAlarms[i].on;
        el.classList.toggle("on", clockAlarms[i].on);
        document
          .getElementById("alarm-row-" + i)
          .classList.toggle("off", !clockAlarms[i].on);
      }

      /* MUSIC APP — tambahin musik sendiri (simpen di folder music/) */
      const musicTracks = [
        {
          title: "i don't know what to say",
          artist: "haruto x park jeongwoo",
          src: "idkwts.mpeg",
          cover: "idkwts.jpeg",
        },
        {
          title: "because i love you",
          artist: "haruto x park jeongwoo",
          src: "bcsiloveu.mp3",
          cover: "bcsiloveu.JPEG",
        },
        {
          title: "real love?",
          artist: "haruto x park jeongwoo",
          src: "real_love.mpeg",
          cover: "real_love.JPEG",
        },
      ];

      // jadi pas playback juga bisa muncul
      const musicAudio = new Audio();
      musicAudio.preload = "metadata";
      musicAudio.setAttribute("playsinline", "");
      let musicIdx = -1,
        musicShuffle = false,
        musicRepeat = "off",
        musicNPOpen = false,
        musicSeeking = false;

      const svg = (d, extra) =>
        '<svg viewBox="0 0 24 24" ' +
        (extra || 'fill="currentColor"') +
        ">" +
        d +
        "</svg>";
      const stroke =
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
      const mi = {
        play: svg(
          '<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/>',
        ),
        pause: svg(
          '<rect x="6" y="5" width="4.2" height="14" rx="1.2"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.2"/>',
        ),
        next: svg(
          '<path d="M4.5 6.3v11.4a.9.9 0 0 0 1.4.75l8-5.7a.9.9 0 0 0 0-1.5l-8-5.7a.9.9 0 0 0-1.4.75zM16 5.5h2.4v13H16z"/>',
        ),
        prev: svg(
          '<path d="M19.5 6.3v11.4a.9.9 0 0 1-1.4.75l-8-5.7a.9.9 0 0 1 0-1.5l8-5.7a.9.9 0 0 1 1.4.75zM8 5.5H5.6v13H8z"/>',
        ),
        shuffle: svg(
          '<path d="M3 7h3.5c5 0 5 10 10 10H21M3 17h3.5c1.6 0 2.8-.7 3.7-1.8M14 8.8C14.9 7.7 15.6 7 17 7h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
          stroke,
        ),
        repeat: svg(
          '<path d="M17 3l3 3-3 3M4 11V9.5A3.5 3.5 0 0 1 7.5 6H20M7 21l-3-3 3-3M20 13v1.5a3.5 3.5 0 0 1-3.5 3.5H4"/>',
          stroke,
        ),
        note: svg(
          '<path d="M9 17.5V6.8c0-.5.4-1 .9-1.1l8-1.6c.6-.1 1.1.3 1.1.9v10.5a2.5 2.5 0 1 1-1.5-2.3V7.4L10.5 8.7v9.9A2.5 2.5 0 1 1 9 17.5z"/>',
        ),
      };

      const esc = (t) =>
        String(t).replace(
          /[&<>"]/g,
          (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
        );
      const fmtTime = (t) => {
        t = Math.max(0, Math.floor(t || 0));
        return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
      };
      const musicHue = (i) => [350, 265, 200, 28, 150][i % 5];

      function musicArt(i, px) {
        const t = musicTracks[i];
        const base = "width:" + px + "px;height:" + px + "px;";
        if (t.cover)
          return (
            '<div class="music-art" style="' +
            base +
            '"><img src="' +
            esc(t.cover) +
            '" style="width:100%;height:100%;object-fit:cover"></div>'
          );
        const h = musicHue(i);
        return (
          '<div class="music-art" style="' +
          base +
          "background:linear-gradient(135deg,hsl(" +
          h +
          ",70%,62%),hsl(" +
          ((h + 35) % 360) +
          ',70%,42%))">' +
          '<span style="display:block;width:' +
          Math.round(px * 0.45) +
          "px;height:" +
          Math.round(px * 0.45) +
          'px">' +
          mi.note +
          "</span></div>"
        );
      }

      function musicToast(msg) {
        const el = document.createElement("div");
        el.className = "music-toast";
        el.textContent = msg;
        document.querySelector(".phone").appendChild(el);
        setTimeout(() => el.remove(), 2600);
      }

      function renderMusic(animateNP) {
        const body = document.getElementById("app-body");
        const prev = body.querySelector(".music-scroll");
        const prevScroll = prev ? prev.scrollTop : 0;
        const playing = musicIdx >= 0 && !musicAudio.paused;
        const cur = musicIdx >= 0 ? musicTracks[musicIdx] : null;

        const rows = musicTracks
          .map(
            (t, i) =>
              '<div class="music-row' +
              (i === musicIdx ? " current" : "") +
              '" onclick="musicRowTap(' +
              i +
              ')">' +
              musicArt(i, 48) +
              '<div class="music-meta"><div class="music-name">' +
              esc(t.title) +
              '</div><div class="music-artist">' +
              esc(t.artist) +
              "</div></div>" +
              (i === musicIdx && playing
                ? '<div class="eq"><i></i><i></i><i></i></div>'
                : "") +
              "</div>",
          )
          .join("");

        const mini = cur
          ? '<div class="music-mini" onclick="musicOpenNP()">' +
            musicArt(musicIdx, 42) +
            '<div class="music-meta"><div class="music-name">' +
            esc(cur.title) +
            "</div></div>" +
            '<button onclick="event.stopPropagation();musicToggle()">' +
            (playing ? mi.pause : mi.play) +
            "</button>" +
            '<button onclick="event.stopPropagation();musicNext(false)">' +
            mi.next +
            "</button>" +
            "</div>"
          : "";

        const sheet = cur
          ? '<div class="np-sheet" id="np-sheet" style="background:linear-gradient(180deg,hsl(' +
            musicHue(musicIdx) +
            ',45%,38%) 0%,#111 100%)">' +
            '<div class="np-grab" onclick="musicCloseNP()"></div>' +
            '<div class="np-art' +
            (playing ? "" : " paused") +
            '">' +
            musicArt(musicIdx, 252) +
            "</div>" +
            '<div class="np-info"><div class="np-title">' +
            esc(cur.title) +
            '</div><div class="np-artist">' +
            esc(cur.artist) +
            "</div>" +
            '<input type="range" class="np-seek" id="mp-seek" min="0" max="1" step="0.01" value="0" oninput="musicSeekTo(this.value)" onchange="musicSeeking=false">' +
            '<div class="np-times"><span id="mp-cur">0:00</span><span id="mp-rem">-0:00</span></div></div>' +
            '<div class="np-ctrl"><button onclick="musicPrev()">' +
            mi.prev +
            "</button>" +
            '<button class="np-main" onclick="musicToggle()">' +
            (playing ? mi.pause : mi.play) +
            "</button>" +
            '<button onclick="musicNext(false)">' +
            mi.next +
            "</button></div>" +
            '<div class="np-sub"><button class="' +
            (musicShuffle ? "on" : "") +
            '" onclick="musicToggleShuffle()">' +
            mi.shuffle +
            "</button>" +
            '<button class="' +
            (musicRepeat !== "off" ? "on" : "") +
            '" onclick="musicCycleRepeat()">' +
            mi.repeat +
            (musicRepeat === "one" ? "<b>1</b>" : "") +
            "</button></div>" +
            "</div>"
          : "";

        body.innerHTML =
          '<div class="music-app">' +
          '<div class="music-top"><button class="gl back" onclick="showScreen(\'home-screen\')">' +
          I27.chevL +
          "<span>Home</span></button>" +
          '<button class="gl round" onclick="document.getElementById(\'music-file\').click()">' +
          I27.plus +
          "</button></div>" +
          '<div class="music-title">Songs</div>' +
          '<div class="music-scroll" style="padding-bottom:' +
          (cur ? 96 : 40) +
          'px">' +
          '<div class="music-actions">' +
          '<button class="music-btn" onclick="musicPlayAll(false)">' +
          mi.play +
          "Play</button>" +
          '<button class="music-btn" onclick="musicPlayAll(true)">' +
          mi.shuffle +
          "Shuffle</button></div>" +
          rows +
          '<div class="music-count">' +
          musicTracks.length +
          " Songs</div>" +
          "</div>" +
          '<div style="position:absolute;left:0;right:0;bottom:0">' +
          mini +
          "</div>" +
          '<input type="file" id="music-file" accept="audio/*" multiple hidden onchange="musicAddFiles(this.files)">' +
          sheet +
          "</div>";

        const sc = body.querySelector(".music-scroll");
        if (sc) sc.scrollTop = prevScroll;
        const sh = document.getElementById("np-sheet");
        if (sh) {
          if (musicNPOpen && animateNP)
            requestAnimationFrame(() =>
              requestAnimationFrame(() => sh.classList.add("open")),
            );
          else if (musicNPOpen) sh.classList.add("open");
        }
        document
          .getElementById("app-screen")
          .classList.toggle("dark", musicNPOpen && !!cur);
        musicProgress();
      }

      function musicRefresh() {
        if (document.querySelector(".music-app")) renderMusic();
      }

      function musicProgress() {
        const seek = document.getElementById("mp-seek");
        if (!seek) return;
        const d = musicAudio.duration || 0,
          c = musicAudio.currentTime || 0;
        if (!musicSeeking) {
          seek.max = d || 1;
          seek.value = c;
        }
        seek.style.setProperty("--p", (d ? (c / d) * 100 : 0) + "%");
        document.getElementById("mp-cur").textContent = fmtTime(c);
        document.getElementById("mp-rem").textContent = "-" + fmtTime(d - c);
        if (
          d &&
          "mediaSession" in navigator &&
          navigator.mediaSession.setPositionState
        ) {
          try {
            navigator.mediaSession.setPositionState({
              duration: d,
              position: Math.min(c, d),
              playbackRate: 1,
            });
          } catch (e) {}
        }
      }

      function musicSeekTo(v) {
        musicSeeking = true;
        musicAudio.currentTime = parseFloat(v);
        musicProgress();
      }

      function musicSetMedia() {
        if (!("mediaSession" in navigator) || musicIdx < 0) return;
        const t = musicTracks[musicIdx];
        navigator.mediaSession.metadata = new MediaMetadata({
          title: t.title,
          artist: t.artist,
          album: t.album || "",
          artwork: t.cover ? [{ src: t.cover }] : [],
        });
      }

      function musicPlay(i) {
        if (i < 0 || i >= musicTracks.length) return;
        musicIdx = i;
        musicAudio.src = musicTracks[i].src;
        const pr = musicAudio.play();
        if (pr && pr.catch)
          pr.catch((e) => {
            if (e.name === "NotAllowedError") musicToast("Tap the play button again");
          });
        musicSetMedia();
        musicRefresh();
      }

      function musicRowTap(i) {
        i === musicIdx ? musicToggle() : musicPlay(i);
      }

      function musicToggle() {
        if (musicIdx < 0) return musicPlay(0);
        if (musicAudio.paused) {
          const pr = musicAudio.play();
          if (pr && pr.catch) pr.catch(() => {});
        } else musicAudio.pause();
      }

      function musicPlayAll(shuffle) {
        musicShuffle = shuffle;
        musicPlay(shuffle ? Math.floor(Math.random() * musicTracks.length) : 0);
      }

      function musicNext(auto) {
        const n = musicTracks.length;
        if (!n) return;
        if (auto && musicRepeat === "one") {
          musicAudio.currentTime = 0;
          musicAudio.play();
          return;
        }
        let i;
        if (musicShuffle && n > 1) {
          do {
            i = Math.floor(Math.random() * n);
          } while (i === musicIdx);
        } else {
          i = musicIdx + 1;
          if (i >= n) {
            if (auto && musicRepeat === "off") {
              musicAudio.pause();
              musicAudio.currentTime = 0;
              musicRefresh();
              return;
            }
            i = 0;
          }
        }
        musicPlay(i);
      }

      function musicPrev() {
        if (musicAudio.currentTime > 3) {
          musicAudio.currentTime = 0;
          return;
        }
        musicPlay((musicIdx - 1 + musicTracks.length) % musicTracks.length);
      }

      function musicToggleShuffle() {
        musicShuffle = !musicShuffle;
        renderMusic();
      }
      function musicCycleRepeat() {
        musicRepeat = { off: "all", all: "one", one: "off" }[musicRepeat];
        renderMusic();
      }
      function musicOpenNP() {
        if (musicIdx < 0) return;
        musicNPOpen = true;
        renderMusic(true);
      }
      function musicCloseNP() {
        const sh = document.getElementById("np-sheet");
        musicNPOpen = false;
        document.getElementById("app-screen").classList.remove("dark");
        if (sh) {
          sh.classList.remove("open");
          setTimeout(renderMusic, 420);
        } else renderMusic();
      }

      function musicAddFiles(files) {
        Array.from(files).forEach((f) =>
          musicTracks.push({
            title: f.name.replace(/\.[^.]+$/, ""),
            artist: "ไฟล์ในเครื่อง",
            src: URL.createObjectURL(f),
            cover: "",
          }),
        );
        renderMusic();
      }

      musicAudio.addEventListener("play", musicRefresh);
      musicAudio.addEventListener("pause", musicRefresh);
      musicAudio.addEventListener("ended", () => musicNext(true));
      musicAudio.addEventListener("timeupdate", musicProgress);
      musicAudio.addEventListener("loadedmetadata", musicProgress);
      musicAudio.addEventListener("error", () => {
        if (musicIdx >= 0 && musicAudio.getAttribute("src"))
          musicToast("Music file not found: " + musicTracks[musicIdx].title);
      });

      if ("mediaSession" in navigator) {
        const ms = navigator.mediaSession;
        ms.setActionHandler("play", () => musicToggle());
        ms.setActionHandler("pause", () => musicToggle());
        ms.setActionHandler("previoustrack", () => musicPrev());
        ms.setActionHandler("nexttrack", () => musicNext(false));
        try {
          ms.setActionHandler("seekto", (d) => {
            musicAudio.currentTime = d.seekTime;
          });
        } catch (e) {}
      }

      /* NOTE DETAIL FUNCTIONS */
      function openNoteDetail(key) {
        const note = notesData[key];
        if (!note) return;

        document.getElementById("note-detail-date").textContent = note.date;
        document.getElementById("note-detail-title").textContent = note.title;
        document.getElementById("note-detail-content").innerHTML = note.content;

        document.getElementById("note-detail-screen").classList.add("active");
      }

      function closeNoteDetail() {
        document
          .getElementById("note-detail-screen")
          .classList.remove("active");
      }

      /* --- fungsi back whaktu exit chat --- */
      function closeChatDetail() {
        const detailScreen = document.getElementById("chat-detail-screen");
        if (detailScreen) {
          detailScreen.classList.remove("active");
        }
      }

      /* --- MESSAGES CHAT FUNCTIONS (integrasi back-button) --- */
      function openChatDetail(key) {
        const chat = chatDataMessages[key];
        if (!chat) return;

        if (typeof appBadges !== "undefined") appBadges["messages"] = 0;
        if (typeof renderHomeAndDock === "function") renderHomeAndDock();

        const dot = document.getElementById("msg-dot-riku");
        if (dot) dot.style.display = "none";

        const headerName = document.getElementById("chat-header-name");
        if (headerName) headerName.textContent = chat.name;

        const avatarBox = document.getElementById("chat-header-avatar-box");
        const avatarImg = document.getElementById("chat-header-avatar");

        if (chat.isDefaultAvatar) {
          if (avatarBox)
            avatarBox.style.background =
              "linear-gradient(135deg, #aeaec4 0%, #8e8e93 100%)";
          if (avatarImg) {
            avatarImg.src = chat.avatar;
            avatarImg.style.width = "60%";
            avatarImg.style.height = "60%";
            avatarImg.style.objectFit = "contain";
            avatarImg.style.filter = "brightness(0) invert(1)";
          }
        } else {
          if (avatarBox) avatarBox.style.background = "transparent";
          if (avatarImg) {
            avatarImg.src = chat.avatar;
            avatarImg.style.width = "100%";
            avatarImg.style.height = "100%";
            avatarImg.style.objectFit = "cover";
            avatarImg.style.filter = "none";
          }
        }

        const area = document.getElementById("chat-messages-area");
        if (area) {
          area.style.display = "flex";
          area.style.flexDirection = "column";
          area.style.gap = "6px";
          area.style.padding = "12px 16px";
          area.style.overflowY = "auto";
        }

        let html = "";

        chat.messages.forEach((m) => {
          if (m.type === "chat-time-divider") {
            html +=
              '<div style="text-align: center; font-size: 11px; color: #8e8e93; margin: 12px 0 6px; font-weight: 500; width: 100%;">' +
              m.text +
              "</div>";
          } else {
            const isSent = m.type === "sent" || m.type === "outgoing";

            const align = isSent ? "flex-end" : "flex-start";
            const bg = isSent ? "#007aff" : "#e9e9eb";
            const color = isSent ? "#ffffff" : "#000000";
            const radius = isSent ? "20px 20px 6px 20px" : "20px 20px 20px 6px";

            html +=
              '<div style="display: flex; width: 100%; justify-content: ' +
              align +
              '; margin-bottom: 2px;">' +
              '<div style="max-width: 70%; padding: 8px 14px; font-size: 15px; line-height: 1.35; background-color: ' +
              bg +
              "; color: " +
              color +
              "; border-radius: " +
              radius +
              '; word-break: break-word;">' +
              m.text +
              "</div>" +
              "</div>";
          }
        });

        if (area) area.innerHTML = html;

        const detailScreen = document.getElementById("chat-detail-screen");
        if (detailScreen) detailScreen.classList.add("active");
      }

      /* PHOTO VIEWER FUNCTIONS */
      function openPhotoViewer(index) {
        currentPhotoIndex = index;
        updatePhotoViewer();

        const container = document.getElementById("filmstrip-container");
        let filmHtml = "";
        photoList.forEach((p, idx) => {
          filmHtml += `
        <div class="ios-thumb-item ${idx === currentPhotoIndex ? "active" : ""}" onclick="openPhotoViewer(${idx})">
          <img src="${p.url}" alt="thumb-${idx}">
        </div>`;
        });
        container.innerHTML = filmHtml;

        document.getElementById("photo-viewer").classList.add("active");
      }

      function closePhotoViewer() {
        document.getElementById("photo-viewer").classList.remove("active");
      }

      function updatePhotoViewer() {
        const current = photoList[currentPhotoIndex];
        document.getElementById("viewer-img").src = current.url;
        document.getElementById("viewer-header-date").textContent =
          current.title;
        document.getElementById("viewer-header-time").textContent = current.sub;

        const thumbs = document.querySelectorAll(".ios-thumb-item");
        thumbs.forEach((t, i) => {
          t.classList.toggle("active", i === currentPhotoIndex);
        });
      }
      // ==========================================
      // 1. รวมข้อมูลข้อความแชททั้งหมด (มั่นใจว่าชื่อ kakaoMessages ตรงกัน)
      // ==========================================
      const kakaoMessages = [
        { type: "date", text: "18 February 2026" },
        {
          sender: "sion",
          text: "Princess, I've changed my ID to this one",
          time: "12:00",
        },
        { sender: "me", text: "Uh", time: "12:01" },
        { sender: "me", text: "Why did you change it?", time: "12:01" },
        {
          sender: "sion",
          text: "There are too many unnecessary names",
          time: "12:02",
        },
        { sender: "sion", text: "I just want the princess", time: "12:02" },
        { sender: "me", text: "?", time: "12:03" },
        { sender: "me", text: "LOL", time: "12:03" },
        { sender: "me", text: "You're such a pain", time: "12:03" },
        { sender: "sion", text: "The princess likes this too", time: "12:04" },
        { sender: "me", text: "Uh", time: "12:04" },

        { type: "date", text: "20 February 2026" },
        { sender: "sion", text: "Then when do we have to fly?", time: "10:15" },
        { sender: "me", text: "Probably next week, right?", time: "10:16" },
        { sender: "sion", text: "Unexpected", time: "10:16" },
        { sender: "me", text: "It's my sister's wedding", time: "10:17" },
        { sender: "me", text: "But you're not coming with me, right?", time: "10:17" },
        { sender: "sion", text: "I'm worried...", time: "10:18" },
        { sender: "me", text: "It's okay at home", time: "10:18" },
        {
          sender: "sion",
          text: "still, you havent told your family yet",
          time: "10:19",
        },
        { sender: "sion", text: "sigh", time: "10:21" },
        { sender: "sion", text: "im going to miss you so much", time: "10:22" },
        { sender: "sion", text: "keep in touch", time: "10:23" },
      
      ];

      // ==========================================
      // store KakaoTalk main screen
      // ==========================================
      const kakaotalkHomeHtml = `
  <div style="display: flex; flex-direction: column; height: 100%; background: #ffffff; width: 100%; box-sizing: border-box; position: relative;">
    <!-- Header chat list page -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #ffffff; border-bottom: 0.5px solid #eee; flex-shrink: 0;">
      <button onclick="showScreen('home-screen')" style="background: none; border: none; font-size: 16px; cursor: pointer; color: #333;">‹ หน้าหลัก</button>
      <span style="font-weight: 600; font-size: 16px;">Chats</span>
      <span style="font-size: 16px;">🔍 💬 ⚙️</span>
    </div>

    <!-- chat room list (click to enter chat sama SN) -->
    <div style="flex: 1; overflow-y: auto;">
      <div onclick="openKakaoChat('sion_kakao')" style="display: flex; align-items: center; padding: 12px 16px; gap: 12px; border-bottom: 0.5px solid #f0f0f0; cursor: pointer;">
        <div style="width: 48px; height: 48px; border-radius: 18px; overflow: hidden; background: #ddd; flex-shrink: 0;">
          <img src="riku-1.jpg" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-weight: 600; font-size: 15px;">Nanas</span>
            <span style="font-size: 11px; color: #999;">21:32</span>
          </div>
          <div style="font-size: 13px; color: #666; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            แปลกจัง
          </div>
        </div>
      </div>
    </div>

    <!-- Footer แท็บด้านล่าง -->
    <div style="display: flex; justify-content: space-around; padding: 10px 0; border-top: 0.5px solid #eee; background: #fafafa; flex-shrink: 0;">
      <div style="text-align: center; font-size: 10px; color: #999;"><div style="font-size: 18px;">👤</div>Friends</div>
      <div style="text-align: center; font-size: 10px; color: #000; font-weight: 600;"><div style="font-size: 18px;">💬</div>Chats</div>
      <div style="text-align: center; font-size: 10px; color: #999;"><div style="font-size: 18px;">👀</div>Openchat</div>
      <div style="text-align: center; font-size: 10px; color: #999;"><div style="font-size: 18px;">•••</div>More</div>
    </div>
  </div>
`;

      // ==========================================
      // 1. function to open a chat room (body.innerHTML) 
      // ==========================================
      function openKakaoChat(chatId) {
        const body = document.getElementById("app-body") || document.body;

        // 🌟 add3 lines buat clear notif waktu chat dibuka dan dibaca
        if (typeof kakaoChats !== "undefined" && kakaoChats[chatId]) {
          kakaoChats[chatId].unread = false; // mark as read
        }
        appBadges["kakaotalk"] = 0; // clear notif count buat semua apps
        renderHomeAndDock(); // update Home/Dock segera

        body.innerHTML = `
    <div class="kakao-chat-room" style="display: flex; flex-direction: column; height: 100%; background: #abc1d1; overflow: hidden; width: 100%; box-sizing: border-box;">
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(171, 193, 209, 0.95); border-bottom: 0.5px solid rgba(0,0,0,0.05); z-index: 10; flex-shrink: 0;">
        <!-- mencet tombol bikin balik ke og chat list tanpa reload -->
        <button onclick="renderKakaoHome()" style="background: none; border: none; font-size: 18px; color: #000; cursor: pointer;">‹</button>
        <span style="font-weight: 600; font-size: 16px;">princess</span>
        <span style="font-size: 16px;">🔍 ☰</span>
      </div>

      <div id="kakao-messages-list" style="flex: 1; overflow-y: auto; overflow-x: hidden; padding: 12px 12px; box-sizing: border-box; width: 100%;"></div>

      <div style="padding: 8px 12px 24px; background: #ffffff; display: flex; align-items: center; gap: 8px; flex-shrink: 0; box-sizing: border-box;">
        <span style="font-size: 20px; color: #707070;">+</span>
        <input type="text" placeholder="Message..." style="flex: 1; border: none; background: #f2f2f2; padding: 8px 12px; border-radius: 16px; outline: none; font-size: 14px; min-width: 0;">
        <span style="font-size: 20px;">🙂</span>
      </div>
    </div>
  `;

        renderKakaoChatList();
      }

      // ==========================================
      // 2. balik ke main page KakaoTalk
      // ==========================================
      function renderKakaoHome() {
        const body = document.getElementById("app-body") || document.body;
        body.innerHTML = kakaotalkHomeHtml;
      }

      // ==========================================
      // 3. function buat render text ke chat box
      // ==========================================
      function renderKakaoChatList() {
        const container = document.getElementById("kakao-messages-list");
        if (!container) return;

        let html = "";
        kakaoMessages.forEach((msg) => {
          html += createKakaoBubbleHtml(msg);
        });

        container.innerHTML = html;
        container.scrollTop = container.scrollHeight;
      }

      // ==========================================
      // 4. function buat genereate HTML buat each bubble
      // ==========================================
      function createKakaoBubbleHtml(msg) {
        if (msg.type === "date") {
          return `<div style="text-align: center; margin: 16px 0 10px; width: 100%;"><span style="background: rgba(0, 0, 0, 0.1); color: #ffffff; font-size: 11px; padding: 4px 12px; border-radius: 12px;">${msg.text}</span></div>`;
        }

        const isMe = msg.sender === "me";
        const formattedText = msg.text.replace(/\n/g, "<br>");

        if (isMe) {
          // RK (left /white)
          return `
      <div style="display: flex; justify-content: flex-start; align-items: flex-start; gap: 8px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
        <div style="width: 36px; height: 36px; border-radius: 14px; overflow: hidden; flex-shrink: 0; background: #ddd;">
          <img src="riku-1.jpg" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="max-width: 80%; min-width: 0;">
          <div style="font-size: 11px; color: rgba(0, 0, 0, 0.5); margin-bottom: 3px;">Nanas</div>
          <div style="display: flex; align-items: flex-end; gap: 4px;">
            <div style="background: #ffffff; color: #000000; padding: 8px 12px; border-radius: 2px 14px 14px 14px; font-size: 13.5px; line-height: 1.45; word-break: break-word; overflow-wrap: anywhere; box-shadow: 0 1px 2px rgba(0,0,0,0.05); box-sizing: border-box;">
              ${formattedText}
            </div>
            <span style="font-size: 10px; color: rgba(0, 0, 0, 0.4); flex-shrink: 0;">${msg.time}</span>
          </div>
        </div>
      </div>
    `;
        } else {
          // SN (right / yellow)
          return `
      <div style="display: flex; justify-content: flex-end; align-items: flex-end; gap: 4px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
        <span style="font-size: 10px; color: rgba(0, 0, 0, 0.4); flex-shrink: 0;">${msg.time}</span>
        <div style="background: #fee500; color: #000000; padding: 8px 12px; border-radius: 14px 2px 14px 14px; max-width: 80%; font-size: 13.5px; line-height: 1.45; word-break: break-word; overflow-wrap: anywhere; box-sizing: border-box; min-width: 0;">
          ${formattedText}
        </div>
      </div>
    `;
        }
      }
    