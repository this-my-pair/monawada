const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Bot start time record

// ✅ Random Voice Clips List එක
const VOICE_CLIPS = [
    "https://files.catbox.moe/r4r0hz.mp3",
    "https://files.catbox.moe/3pzzgr.mp3",
    "https://files.catbox.moe/qvpa5o.mp3",
    "https://files.catbox.moe/y29b3n.mp3",
    "https://files.catbox.moe/w7yg8f.mp3",
    "https://files.catbox.moe/4rm2fz.mp3",
    "https://files.catbox.moe/gr8wlt.mp3",
    "https://files.catbox.moe/xvue61.mp3",
    "https://files.catbox.moe/uosvov.mp3",
    "https://files.catbox.moe/2vgkwr.mp3",
    "https://files.catbox.moe/gqw8fl.m4a",
    "https://files.catbox.moe/mc5r2s.mp3",
    "https://files.catbox.moe/ck4reh.mp3",
    "https://files.catbox.moe/ypbfyt.mp3",
    "https://files.catbox.moe/75p1zt.mp3",
    "https://files.catbox.moe/rd21pi.mp3",
    "https://files.catbox.moe/ggebie.mp3",
    "https://files.catbox.moe/r4r0hz.mp3"
];

const ALIVE_VIDEO = "https://files.catbox.moe/52py80.mp4"; // මෙතැන valid MP4 video link එකක් දාන්න

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User";
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `*😼 හායි ${pushname} කොහමද ඔයාට😝♦*
        *┏*
*┃🤖 ʙᴏᴛ ɴᴀᴍᴇ : 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
*┃🔖 ᴠᴇʀsɪᴏɴ : 1.0*
*┃📟 ᴘʟᴀᴛғᴏʀᴍ : Linux*
*┃👨‍💻 ᴏᴡɴᴇʀ: ᴍʀ ꜱᴜʀᴀɴɢᴀ ᴍᴏᴅ-ᴢ*
*┃📆 ʀᴜɴᴛɪᴍᴇ : 🎗️
*┃📈 ʀᴀᴍ ᴜsᴀɢᴇ: 1.9 ɢʙ / 2 ᴛʙ ᴀʟʟ ꜱᴄ*
*┗━━━━━━━━━━━━━━𖣔𖣔 
🕒 *Time*: ${currentTime}
📅 *Date*: ${currentDate}
⏳ *Uptime*: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds

*🤖sᴛᴀᴛᴜs*: *ᴢᴀɴᴛᴀ-xᴍᴅ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴇᴀᴅʏ*

╭━━〔 📥 *DOWNLOAD MENU* 〕━━┈⊷
╭────────❖
│ 🟦 ᴄᴏᴍᴍᴀɴᴅ: facebook
│ 🏷️ ᴜsᴇ: prefix facebook
╰─────────────────❖
╭────────❖
│ 📁 ᴄᴏᴍᴍᴀɴᴅ: mediafire
│ 🏷️ ᴜsᴇ: prefix mediafire
╰─────────────────❖
╭────────❖
│ 🎵 ᴄᴏᴍᴍᴀɴᴅ: tiktok
│ 🏷️ ᴜsᴇ: prefix tiktok
╰─────────────────❖
╭────────❖
│ 🐦 ᴄᴏᴍᴍᴀɴᴅ: twitter
│ 🏷️ ᴜsᴇ: prefix twitter
╰─────────────────❖
╭────────❖
│ 📷 ᴄᴏᴍᴍᴀɴᴅ: insta
│ 🏷️ ᴜsᴇ: prefix insta
╰─────────────────❖
╭────────❖
│ 📦 ᴄᴏᴍᴍᴀɴᴅ: apk
│ 🏷️ ᴜsᴇ: prefix apk
╰─────────────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: img
│ 🏷️ ᴜsᴇ: prefix img
╰─────────────────❖
╭────────❖
│ ▶️ ᴄᴏᴍᴍᴀɴᴅ: tt2
│ 🏷️ ᴜsᴇ: prefix tt2
╰─────────────────❖
╭────────❖
│ 📌 ᴄᴏᴍᴍᴀɴᴅ: pins
│ 🏷️ ᴜsᴇ: prefix pins
╰─────────────────❖
╭────────❖
│ 🔄 ᴄᴏᴍᴍᴀɴᴅ: apk2
│ 🏷️ ᴜsᴇ: prefix apk2
╰─────────────────❖
╭────────❖
│ 🔵 ᴄᴏᴍᴍᴀɴᴅ: fb2
│ 🏷️ ᴜsᴇ: prefix fb2
╰─────────────────❖
╭────────❖
│ 📍 ᴄᴏᴍᴍᴀɴᴅ: pinterest
│ 🏷️ ᴜsᴇ: prefix pinterest
╰─────────────────❖
╭────────❖
│ 🎶 ᴄᴏᴍᴍᴀɴᴅ: spotify
│ 🏷️ ᴜsᴇ: prefix spotify
╰─────────────────❖
╭────────❖
│ 🎧 ᴄᴏᴍᴍᴀɴᴅ: play
│ 🏷️ ᴜsᴇ: prefix play
╰─────────────────❖
╭────────❖
│ 🎧 ᴄᴏᴍᴍᴀɴᴅ: play2
│ 🏷️ ᴜsᴇ: prefix play2
╰─────────────────❖
╭────────❖
│ 🔉 ᴄᴏᴍᴍᴀɴᴅ: audio
│ 🏷️ ᴜsᴇ: prefix audio
╰─────────────────❖
╭────────❖
│ 🎬 ᴄᴏᴍᴍᴀɴᴅ: video
│ 🏷️ ᴜsᴇ: prefix video
╰─────────────────❖
╭────────❖
│ 📹 ᴄᴏᴍᴍᴀɴᴅ: video2
│ 🏷️ ᴜsᴇ: prefix video2
╰─────────────────❖
╭────────❖
│ 🎵 ᴄᴏᴍᴍᴀɴᴅ: ytmp3
│ 🏷️ ᴜsᴇ: prefix ytmp3
╰─────────────────❖
╭────────❖
│ 📹 ᴄᴏᴍᴍᴀɴᴅ: ytmp4
│ 🏷️ ᴜsᴇ: prefix ytmp4
╰─────────────────❖
╭────────❖
│ 🎶 ᴄᴏᴍᴍᴀɴᴅ: song
│ 🏷️ ᴜsᴇ: prefix song
╰─────────────────❖
╭────────❖
│ 🎬 ᴄᴏᴍᴍᴀɴᴅ: darama
│ 🏷️ ᴜsᴇ: prefix darama
╰─────────────────❖
╭────────❖
│ ☁️ ᴄᴏᴍᴍᴀɴᴅ: gdrive
│ 🏷️ ᴜsᴇ: prefix gdrive
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: ssweb
│ 🏷️ ᴜsᴇ: prefix ssweb
╰─────────────────❖
╭────────❖
│ 🎵 ᴄᴏᴍᴍᴀɴᴅ: tiks
│ 🏷️ ᴜsᴇ: prefix tiks
╰─────────────────❖
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👥 *GROUP MENU* 〕━━┈⊷
╭────────❖
│ 🔗 ᴄᴏᴍᴍᴀɴᴅ: grouplink
│ 🏷️ ᴜsᴇ: prefix grouplink
╰────────❖
╭────────❖
│ 🚪 ᴄᴏᴍᴍᴀɴᴅ: kickall
│ 🏷️ ᴜsᴇ: prefix kickall
╰────────❖
╭────────❖
│ 🚷 ᴄᴏᴍᴍᴀɴᴅ: kickall2
│ 🏷️ ᴜsᴇ: prefix kickall2
╰────────❖
╭────────❖
│ 🚫 ᴄᴏᴍᴍᴀɴᴅ: kickall3
│ 🏷️ ᴜsᴇ: prefix kickall3
╰────────❖
╭────────❖
│ ➕ ᴄᴏᴍᴍᴀɴᴅ: add
│ 🏷️ ᴜsᴇ: prefix add
╰────────❖
╭────────❖
│ ➖ ᴄᴏᴍᴍᴀɴᴅ: remove
│ 🏷️ ᴜsᴇ: prefix remove
╰────────❖
╭────────❖
│ 👢 ᴄᴏᴍᴍᴀɴᴅ: kick
│ 🏷️ ᴜsᴇ: prefix kick
╰────────❖
╭────────❖
│ ⬆️ ᴄᴏᴍᴍᴀɴᴅ: promote
│ 🏷️ ᴜsᴇ: prefix promote
╰────────❖
╭────────❖
│ ⬇️ ᴄᴏᴍᴍᴀɴᴅ: demote
│ 🏷️ ᴜsᴇ: prefix demote
╰────────❖
╭────────❖
│ 🚮 ᴄᴏᴍᴍᴀɴᴅ: dismiss
│ 🏷️ ᴜsᴇ: prefix dismiss
╰────────❖
╭────────❖
│ 🔄 ᴄᴏᴍᴍᴀɴᴅ: revoke
│ 🏷️ ᴜsᴇ: prefix revoke
╰────────❖
╭────────❖
│ 👋 ᴄᴏᴍᴍᴀɴᴅ: setgoodbye
│ 🏷️ ᴜsᴇ: prefix setgoodbye
╰────────❖
╭────────❖
│ 🎉 ᴄᴏᴍᴍᴀɴᴅ: setwelcome
│ 🏷️ ᴜsᴇ: prefix setwelcome
╰────────❖
╭────────❖
│ 🗑️ ᴄᴏᴍᴍᴀɴᴅ: delete
│ 🏷️ ᴜsᴇ: prefix delete
╰────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: getpic
│ 🏷️ ᴜsᴇ: prefix getpic
╰────────❖
╭────────❖
│ ℹ️ ᴄᴏᴍᴍᴀɴᴅ: ginfo
│ 🏷️ ᴜsᴇ: prefix ginfo
╰────────❖
╭────────❖
│ ⏳ ᴄᴏᴍᴍᴀɴᴅ: disappear on
│ 🏷️ ᴜsᴇ: prefix disappear on
╰────────❖
╭────────❖
│ ⏳ ᴄᴏᴍᴍᴀɴᴅ: disappear off
│ 🏷️ ᴜsᴇ: prefix disappear off
╰────────❖
╭────────❖
│ ⏳ ᴄᴏᴍᴍᴀɴᴅ: disappear 7D,24H
│ 🏷️ ᴜsᴇ: prefix disappear 7D,24H
╰────────❖
╭────────❖
│ 📝 ᴄᴏᴍᴍᴀɴᴅ: allreq
│ 🏷️ ᴜsᴇ: prefix allreq
╰────────❖
╭────────❖
│ ✏️ ᴄᴏᴍᴍᴀɴᴅ: updategname
│ 🏷️ ᴜsᴇ: prefix updategname
╰────────❖
╭────────❖
│ 📝 ᴄᴏᴍᴍᴀɴᴅ: updategdesc
│ 🏷️ ᴜsᴇ: prefix updategdesc
╰────────❖
╭────────❖
│ 📩 ᴄᴏᴍᴍᴀɴᴅ: joinrequests
│ 🏷️ ᴜsᴇ: prefix joinrequests
╰────────❖
╭────────❖
│ 📨 ᴄᴏᴍᴍᴀɴᴅ: senddm
│ 🏷️ ᴜsᴇ: prefix senddm
╰────────❖
╭────────❖
│ 🏃 ᴄᴏᴍᴍᴀɴᴅ: nikal
│ 🏷️ ᴜsᴇ: prefix nikal
╰────────❖
╭────────❖
│ 🔇 ᴄᴏᴍᴍᴀɴᴅ: mute
│ 🏷️ ᴜsᴇ: prefix mute
╰────────❖
╭────────❖
│ 🔊 ᴄᴏᴍᴍᴀɴᴅ: unmute
│ 🏷️ ᴜsᴇ: prefix unmute
╰────────❖
╭────────❖
│ 🔒 ᴄᴏᴍᴍᴀɴᴅ: lockgc
│ 🏷️ ᴜsᴇ: prefix lockgc
╰────────❖
╭────────❖
│ 🔓 ᴄᴏᴍᴍᴀɴᴅ: unlockgc
│ 🏷️ ᴜsᴇ: prefix unlockgc
╰────────❖
╭────────❖
│ 📩 ᴄᴏᴍᴍᴀɴᴅ: invite
│ 🏷️ ᴜsᴇ: prefix invite
╰────────❖
╭────────❖
│ #️⃣ ᴄᴏᴍᴍᴀɴᴅ: tag
│ 🏷️ ᴜsᴇ: prefix tag
╰────────❖
╭────────❖
│ 🏷️ ᴄᴏᴍᴍᴀɴᴅ: hidetag
│ 🏷️ ᴜsᴇ: prefix hidetag
╰────────❖
╭────────❖
│ @️⃣ ᴄᴏᴍᴍᴀɴᴅ: tagall
│ 🏷️ ᴜsᴇ: prefix tagall
╰────────❖
╭────────❖
│ 👔 ᴄᴏᴍᴍᴀɴᴅ: tagadmins
│ 🏷️ ᴜsᴇ: prefix tagadmins
╰────────❖
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎭 *REACTIONS MENU* 〕━━┈⊷
╭────────❖
│ 👊 ᴄᴏᴍᴍᴀɴᴅ: bully @tag
│ 🏷️ ᴜsᴇ: prefix bully @tag
╰────────❖
╭────────❖
│ 🤗 ᴄᴏᴍᴍᴀɴᴅ: cuddle @tag
│ 🏷️ ᴜsᴇ: prefix cuddle @tag
╰────────❖
╭────────❖
│ 😢 ᴄᴏᴍᴍᴀɴᴅ: cry @tag
│ 🏷️ ᴜsᴇ: prefix cry @tag
╰────────❖
╭────────❖
│ 🤗 ᴄᴏᴍᴍᴀɴᴅ: hug @tag
│ 🏷️ ᴜsᴇ: prefix hug @tag
╰────────❖
╭────────❖
│ 🐺 ᴄᴏᴍᴍᴀɴᴅ: awoo @tag
│ 🏷️ ᴜsᴇ: prefix awoo @tag
╰────────❖
╭────────❖
│ 💋 ᴄᴏᴍᴍᴀɴᴅ: kiss @tag
│ 🏷️ ᴜsᴇ: prefix kiss @tag
╰────────❖
╭────────❖
│ 👅 ᴄᴏᴍᴍᴀɴᴅ: lick @tag
│ 🏷️ ᴜsᴇ: prefix lick @tag
╰────────❖
╭────────❖
│ 🖐️ ᴄᴏᴍᴍᴀɴᴅ: pat @tag
│ 🏷️ ᴜsᴇ: prefix pat @tag
╰────────❖
╭────────❖
│ 😏 ᴄᴏᴍᴍᴀɴᴅ: smug @tag
│ 🏷️ ᴜsᴇ: prefix smug @tag
╰────────❖
╭────────❖
│ 🔨 ᴄᴏᴍᴍᴀɴᴅ: bonk @tag
│ 🏷️ ᴜsᴇ: prefix bonk @tag
╰────────❖
╭────────❖
│ 🚀 ᴄᴏᴍᴍᴀɴᴅ: yeet @tag
│ 🏷️ ᴜsᴇ: prefix yeet @tag
╰────────❖
╭────────❖
│ 😊 ᴄᴏᴍᴍᴀɴᴅ: blush @tag
│ 🏷️ ᴜsᴇ: prefix blush @tag
╰────────❖
╭────────❖
│ 😄 ᴄᴏᴍᴍᴀɴᴅ: smile @tag
│ 🏷️ ᴜsᴇ: prefix smile @tag
╰────────❖
╭────────❖
│ 👋 ᴄᴏᴍᴍᴀɴᴅ: wave @tag
│ 🏷️ ᴜsᴇ: prefix wave @tag
╰────────❖
╭────────❖
│ ✋ ᴄᴏᴍᴍᴀɴᴅ: highfive @tag
│ 🏷️ ᴜsᴇ: prefix highfive @tag
╰────────❖
╭────────❖
│ 🤝 ᴄᴏᴍᴍᴀɴᴅ: handhold @tag
│ 🏷️ ᴜsᴇ: prefix handhold @tag
╰────────❖
╭────────❖
│ 🍜 ᴄᴏᴍᴍᴀɴᴅ: nom @tag
│ 🏷️ ᴜsᴇ: prefix nom @tag
╰────────❖
╭────────❖
│ 🦷 ᴄᴏᴍᴍᴀɴᴅ: bite @tag
│ 🏷️ ᴜsᴇ: prefix bite @tag
╰────────❖
╭────────❖
│ 🤗 ᴄᴏᴍᴍᴀɴᴅ: glomp @tag
│ 🏷️ ᴜsᴇ: prefix glomp @tag
╰────────❖
╭────────❖
│ 👋 ᴄᴏᴍᴍᴀɴᴅ: slap @tag
│ 🏷️ ᴜsᴇ: prefix slap @tag
╰────────❖
╭────────❖
│ 💀 ᴄᴏᴍᴍᴀɴᴅ: kill @tag
│ 🏷️ ᴜsᴇ: prefix kill @tag
╰────────❖
╭────────❖
│ 😊 ᴄᴏᴍᴍᴀɴᴅ: happy @tag
│ 🏷️ ᴜsᴇ: prefix happy @tag
╰────────❖
╭────────❖
│ 😉 ᴄᴏᴍᴍᴀɴᴅ: wink @tag
│ 🏷️ ᴜsᴇ: prefix wink @tag
╰────────❖
╭────────❖
│ 👉 ᴄᴏᴍᴍᴀɴᴅ: poke @tag
│ 🏷️ ᴜsᴇ: prefix poke @tag
╰────────❖
╭────────❖
│ 💃 ᴄᴏᴍᴍᴀɴᴅ: dance @tag
│ 🏷️ ᴜsᴇ: prefix dance @tag
╰────────❖
╭────────❖
│ 😬 ᴄᴏᴍᴍᴀɴᴅ: cringe @tag
│ 🏷️ ᴜsᴇ: prefix cringe @tag
╰────────❖
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎨 LOGO MAKER 〕━━┈⊷
╭────────❖
│ 💡 ᴄᴏᴍᴍᴀɴᴅ: neonlight
│ 🏷️ ᴜsᴇ: prefix neonlight
╰─────────────────❖
╭────────❖
│ 🎀 ᴄᴏᴍᴍᴀɴᴅ: blackpink
│ 🏷️ ᴜsᴇ: prefix blackpink
╰─────────────────❖
╭────────❖
│ 🐉 ᴄᴏᴍᴍᴀɴᴅ: dragonball
│ 🏷️ ᴜsᴇ: prefix dragonball
╰─────────────────❖
╭────────❖
│ 🎭 ᴄᴏᴍᴍᴀɴᴅ: 3dcomic
│ 🏷️ ᴜsᴇ: prefix 3dcomic
╰─────────────────❖
╭────────❖
│ 🇺🇸 ᴄᴏᴍᴍᴀɴᴅ: america
│ 🏷️ ᴜsᴇ: prefix america
╰─────────────────❖
╭────────❖
│ 🍥 ᴄᴏᴍᴍᴀɴᴅ: naruto
│ 🏷️ ᴜsᴇ: prefix naruto
╰─────────────────❖
╭────────❖
│ 😢 ᴄᴏᴍᴍᴀɴᴅ: sadgirl
│ 🏷️ ᴜsᴇ: prefix sadgirl
╰─────────────────❖
╭────────❖
│ ☁️ ᴄᴏᴍᴍᴀɴᴅ: clouds
│ 🏷️ ᴜsᴇ: prefix clouds
╰─────────────────❖
╭────────❖
│ 🚀 ᴄᴏᴍᴍᴀɴᴅ: futuristic
│ 🏷️ ᴜsᴇ: prefix futuristic
╰─────────────────❖
╭────────❖
│ 📜 ᴄᴏᴍᴍᴀɴᴅ: 3dpaper
│ 🏷️ ᴜsᴇ: prefix 3dpaper
╰─────────────────❖
╭────────❖
│ ✏️ ᴄᴏᴍᴍᴀɴᴅ: eraser
│ 🏷️ ᴜsᴇ: prefix eraser
╰─────────────────❖
╭────────❖
│ 🌇 ᴄᴏᴍᴍᴀɴᴅ: sunset
│ 🏷️ ᴜsᴇ: prefix sunset
╰─────────────────❖
╭────────❖
│ 🍃 ᴄᴏᴍᴍᴀɴᴅ: leaf
│ 🏷️ ᴜsᴇ: prefix leaf
╰─────────────────❖
╭────────❖
│ 🌌 ᴄᴏᴍᴍᴀɴᴅ: galaxy
│ 🏷️ ᴜsᴇ: prefix galaxy
╰─────────────────❖
╭────────❖
│ 💀 ᴄᴏᴍᴍᴀɴᴅ: sans
│ 🏷️ ᴜsᴇ: prefix sans
╰─────────────────❖
╭────────❖
│ 💥 ᴄᴏᴍᴍᴀɴᴅ: boom
│ 🏷️ ᴜsᴇ: prefix boom
╰─────────────────❖
╭────────❖
│ 💻 ᴄᴏᴍᴍᴀɴᴅ: hacker
│ 🏷️ ᴜsᴇ: prefix hacker
╰─────────────────❖
╭────────❖
│ 😈 ᴄᴏᴍᴍᴀɴᴅ: devilwings
│ 🏷️ ᴜsᴇ: prefix devilwings
╰─────────────────❖
╭────────❖
│ 🇳🇬 ᴄᴏᴍᴍᴀɴᴅ: nigeria
│ 🏷️ ᴜsᴇ: prefix nigeria
╰─────────────────❖
╭────────❖
│ 💡 ᴄᴏᴍᴍᴀɴᴅ: bulb
│ 🏷️ ᴜsᴇ: prefix bulb
╰─────────────────❖
╭────────❖
│ 👼 ᴄᴏᴍᴍᴀɴᴅ: angelwings
│ 🏷️ ᴜsᴇ: prefix angelwings
╰─────────────────❖
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭───『 𝗦𝘆𝘀𝘁𝗲𝗺 & 𝗢𝘄𝗻𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 』───╮
╭────────❖
│ 👑 ᴄᴏᴍᴍᴀɴᴅ: owner
│ 🏷️ ᴜsᴇ: prefix owner
╰─────────────────❖
╭────────❖
│ 📜 ᴄᴏᴍᴍᴀɴᴅ: menu
│ 🏷️ ᴜsᴇ: prefix menu
╰─────────────────❖
╭────────❖
│ 📜 ᴄᴏᴍᴍᴀɴᴅ: menu2
│ 🏷️ ᴜsᴇ: prefix menu2
╰─────────────────❖
╭────────❖
│ 📊 ᴄᴏᴍᴍᴀɴᴅ: vv
│ 🏷️ ᴜsᴇ: prefix vv
╰─────────────────❖
╭────────❖
│ 📋 ᴄᴏᴍᴍᴀɴᴅ: listcmd
│ 🏷️ ᴜsᴇ: prefix listcmd
╰─────────────────❖
╭────────❖
│ 📚 ᴄᴏᴍᴍᴀɴᴅ: allmenu
│ 🏷️ ᴜsᴇ: prefix allmenu
╰─────────────────❖
╭────────❖
│ 📦 ᴄᴏᴍᴍᴀɴᴅ: repo
│ 🏷️ ᴜsᴇ: prefix repo
╰─────────────────❖
╭────────❖
│ 🚫 ᴄᴏᴍᴍᴀɴᴅ: block
│ 🏷️ ᴜsᴇ: prefix block
╰─────────────────❖
╭────────❖
│ ✅ ᴄᴏᴍᴍᴀɴᴅ: unblock
│ 🏷️ ᴜsᴇ: prefix unblock
╰─────────────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: fullpp
│ 🏷️ ᴜsᴇ: prefix fullpp
╰─────────────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: setpp
│ 🏷️ ᴜsᴇ: prefix setpp
╰─────────────────❖
╭────────❖
│ 🔄 ᴄᴏᴍᴍᴀɴᴅ: restart
│ 🏷️ ᴜsᴇ: prefix restart
╰─────────────────❖
╭────────❖
│ ⏹️ ᴄᴏᴍᴍᴀɴᴅ: shutdown
│ 🏷️ ᴜsᴇ: prefix shutdown
╰─────────────────❖
╭────────❖
│ 🔄 ᴄᴏᴍᴍᴀɴᴅ: updatecmd
│ 🏷️ ᴜsᴇ: prefix updatecmd
╰─────────────────❖
╭────────❖
│ 💚 ᴄᴏᴍᴍᴀɴᴅ: alive
│ 🏷️ ᴜsᴇ: prefix alive
╰─────────────────❖
╭────────❖
│ 🏓 ᴄᴏᴍᴍᴀɴᴅ: ping
│ 🏷️ ᴜsᴇ: prefix ping
╰─────────────────❖
╭────────❖
│ 🆔 ᴄᴏᴍᴍᴀɴᴅ: gjid
│ 🏷️ ᴜsᴇ: prefix gjid
╰─────────────────❖
╭────────❖
│ 🆔 ᴄᴏᴍᴍᴀɴᴅ: jid
│ 🏷️ ᴜsᴇ: prefix jid
╰─────────────────❖
╰────────────────────────────╯



╭───『 𝗙𝘂𝗻 & 𝗘𝗺𝗼𝘁𝗶𝗼𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 』───╮
╭────────❖
│ 🤪 ᴄᴏᴍᴍᴀɴᴅ: shapar
│ 🏷️ ᴜsᴇ: prefix shapar
╰─────────────────❖
╭────────❖
│ ⭐ ᴄᴏᴍᴍᴀɴᴅ: rate
│ 🏷️ ᴜsᴇ: prefix rate
╰─────────────────❖
╭────────❖
│ 🤬 ᴄᴏᴍᴍᴀɴᴅ: insult
│ 🏷️ ᴜsᴇ: prefix insult
╰─────────────────❖
╭────────❖
│ 💻 ᴄᴏᴍᴍᴀɴᴅ: hack
│ 🏷️ ᴜsᴇ: prefix hack
╰─────────────────❖
╭────────❖
│ 💘 ᴄᴏᴍᴍᴀɴᴅ: ship
│ 🏷️ ᴜsᴇ: prefix ship
╰─────────────────❖
╭────────❖
│ 🎭 ᴄᴏᴍᴍᴀɴᴅ: character
│ 🏷️ ᴜsᴇ: prefix character
╰─────────────────❖
╭────────❖
│ 💌 ᴄᴏᴍᴍᴀɴᴅ: pickup
│ 🏷️ ᴜsᴇ: prefix pickup
╰─────────────────❖
╭────────❖
│ 😆 ᴄᴏᴍᴍᴀɴᴅ: joke
│ 🏷️ ᴜsᴇ: prefix joke
╰─────────────────❖
╭────────❖
│ ❤️ ᴄᴏᴍᴍᴀɴᴅ: hrt
│ 🏷️ ᴜsᴇ: prefix hrt
╰─────────────────❖
╭────────❖
│ 😊 ᴄᴏᴍᴍᴀɴᴅ: hpy
│ 🏷️ ᴜsᴇ: prefix hpy
╰─────────────────❖
╭────────❖
│ 😔 ᴄᴏᴍᴍᴀɴᴅ: syd
│ 🏷️ ᴜsᴇ: prefix syd
╰─────────────────❖
╭────────❖
│ 😠 ᴄᴏᴍᴍᴀɴᴅ: anger
│ 🏷️ ᴜsᴇ: prefix anger
╰─────────────────❖
╭────────❖
│ 😳 ᴄᴏᴍᴍᴀɴᴅ: shy
│ 🏷️ ᴜsᴇ: prefix shy
╰─────────────────❖
╭────────❖
│ 💋 ᴄᴏᴍᴍᴀɴᴅ: kiss
│ 🏷️ ᴜsᴇ: prefix kiss
╰─────────────────❖
╭────────❖
│ 🧐 ᴄᴏᴍᴍᴀɴᴅ: mon
│ 🏷️ ᴜsᴇ: prefix mon
╰─────────────────❖
╭────────❖
│ 😕 ᴄᴏᴍᴍᴀɴᴅ: cunfuzed
│ 🏷️ ᴜsᴇ: prefix cunfuzed
╰─────────────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: setpp
│ 🏷️ ᴜsᴇ: prefix setpp
╰─────────────────❖
╭────────❖
│ ✋ ᴄᴏᴍᴍᴀɴᴅ: hand
│ 🏷️ ᴜsᴇ: prefix hand
╰─────────────────❖
╭────────❖
│ 🏃 ᴄᴏᴍᴍᴀɴᴅ: nikal
│ 🏷️ ᴜsᴇ: prefix nikal
╰─────────────────❖
╭────────❖
│ 🤲 ᴄᴏᴍᴍᴀɴᴅ: hold
│ 🏷️ ᴜsᴇ: prefix hold
╰─────────────────❖
╭────────❖
│ 🤗 ᴄᴏᴍᴍᴀɴᴅ: hug
│ 🏷️ ᴜsᴇ: prefix hug
╰─────────────────❖
╭────────❖
│ 🎵 ᴄᴏᴍᴍᴀɴᴅ: hifi
│ 🏷️ ᴜsᴇ: prefix hifi
╰─────────────────❖
╭────────❖
│ 👉 ᴄᴏᴍᴍᴀɴᴅ: poke
│ 🏷️ ᴜsᴇ: prefix poke
╰─────────────────❖
╰────────────────────────────╯

╭───『 🔁 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿 & 𝗧𝗼𝗼𝗹𝘀 』───╮
╭────────❖
│ 🏷️ ᴄᴏᴍᴍᴀɴᴅ: sticker
│ 🏷️ ᴜsᴇ: prefix sticker
╰─────────────────❖
╭────────❖
│ 🏷️ ᴄᴏᴍᴍᴀɴᴅ: sticker2
│ 🏷️ ᴜsᴇ: prefix sticker2
╰─────────────────❖
╭────────❖
│ 😀 ᴄᴏᴍᴍᴀɴᴅ: emojimix
│ 🏷️ ᴜsᴇ: prefix emojimix
╰─────────────────❖
╭────────❖
│ ✨ ᴄᴏᴍᴍᴀɴᴅ: fancy
│ 🏷️ ᴜsᴇ: prefix fancy
╰─────────────────❖
╭────────❖
│ 🖼️ ᴄᴏᴍᴍᴀɴᴅ: take
│ 🏷️ ᴜsᴇ: prefix take
╰─────────────────❖
╭────────❖
│ 🎵 ᴄᴏᴍᴍᴀɴᴅ: tomp3
│ 🏷️ ᴜsᴇ: prefix tomp3
╰─────────────────❖
╭────────❖
│ 🗣️ ᴄᴏᴍᴍᴀɴᴅ: tts
│ 🏷️ ᴜsᴇ: prefix tts
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: trt
│ 🏷️ ᴜsᴇ: prefix trt
╰─────────────────❖
╭────────❖
│ 🔢 ᴄᴏᴍᴍᴀɴᴅ: base64
│ 🏷️ ᴜsᴇ: prefix base64
╰─────────────────❖
╭────────❖
│ 🔠 ᴄᴏᴍᴍᴀɴᴅ: unbase64
│ 🏷️ ᴜsᴇ: prefix unbase64
╰─────────────────❖
╭────────❖
│ 010 ᴄᴏᴍᴍᴀɴᴅ: binary
│ 🏷️ ᴜsᴇ: prefix binary
╰─────────────────❖
╭────────❖
│ 🔤 ᴄᴏᴍᴍᴀɴᴅ: dbinary
│ 🏷️ ᴜsᴇ: prefix dbinary
╰─────────────────❖
╭────────❖
│ 🔗 ᴄᴏᴍᴍᴀɴᴅ: tinyurl
│ 🏷️ ᴜsᴇ: prefix tinyurl
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: urldecode
│ 🏷️ ᴜsᴇ: prefix urldecode
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: urlencode
│ 🏷️ ᴜsᴇ: prefix urlencode
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: url
│ 🏷️ ᴜsᴇ: prefix url
╰─────────────────❖
╭────────❖
│ 🔁 ᴄᴏᴍᴍᴀɴᴅ: repeat
│ 🏷️ ᴜsᴇ: prefix repeat
╰─────────────────❖
╭────────❖
│ ❓ ᴄᴏᴍᴍᴀɴᴅ: ask
│ 🏷️ ᴜsᴇ: prefix ask
╰─────────────────❖
╭────────❖
│ 📖 ᴄᴏᴍᴍᴀɴᴅ: readmore
│ 🏷️ ᴜsᴇ: prefix readmore
╰────────────────────────────╯

╭───『 🤖 𝗔𝗜 𝗠𝗘𝗡𝗨 』───╮
╭────────❖
│ 🧠 ᴄᴏᴍᴍᴀɴᴅ: ai
│ 🏷️ ᴜsᴇ: prefix ai
╰─────────────────❖
╭────────❖
│ 🤖 ᴄᴏᴍᴍᴀɴᴅ: gpt3 / gpt2 / gptmini / gpt / gpt4
│ 🏷️ ᴜsᴇ: prefix gpt3
╰─────────────────❖
╭────────❖
│ 🔵 ᴄᴏᴍᴍᴀɴᴅ: meta
│ 🏷️ ᴜsᴇ: prefix meta
╰─────────────────❖
╭────────❖
│ 📦 ᴄᴏᴍᴍᴀɴᴅ: blackbox
│ 🏷️ ᴜsᴇ: prefix blackbox
╰─────────────────❖
╭────────❖
│ 🌈 ᴄᴏᴍᴍᴀɴᴅ: luma
│ 🏷️ ᴜsᴇ: prefix luma
╰─────────────────❖
╭────────❖
│ 🎧 ᴄᴏᴍᴍᴀɴᴅ: dj
│ 🏷️ ᴜsᴇ: prefix dj
╰─────────────────❖
╭────────❖
│ ⚡ ᴄᴏᴍᴍᴀɴᴅ: ai2
│ 🏷️ ᴜsᴇ: prefix ai2
╰─────────────────❖
╭────────❖
│ ✂️ ᴄᴏᴍᴍᴀɴᴅ: gemini2
│ 🏷️ ᴜsᴇ: prefix gemini2
╰─────────────────❖
╭────────❖
│ 🔍 ᴄᴏᴍᴍᴀɴᴅ: bing
│ 🏷️ ᴜsᴇ: prefix bing
╰─────────────────❖
╭────────❖
│ 🎨 ᴄᴏᴍᴍᴀɴᴅ: imagine / imagine2
│ 🏷️ ᴜsᴇ: prefix imagine
╰─────────────────❖
╭────────❖
│ 🤖 ᴄᴏᴍᴍᴀɴᴅ: copilot
│ 🏷️ ᴜsᴇ: prefix copilot
╰────────────────────────────╯

╭───『 ⚡ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 』───╮
╭────────❖
│ 🏓 ᴄᴏᴍᴍᴀɴᴅ: ping / ping2
│ 🏷️ ᴜsᴇ: prefix ping
╰─────────────────❖
╭────────❖
│ 🚀 ᴄᴏᴍᴍᴀɴᴅ: speed
│ 🏷️ ᴜsᴇ: prefix speed
╰─────────────────❖
╭────────❖
│ 📡 ᴄᴏᴍᴍᴀɴᴅ: live
│ 🏷️ ᴜsᴇ: prefix live
╰─────────────────❖
╭────────❖
│ 💚 ᴄᴏᴍᴍᴀɴᴅ: alive
│ 🏷️ ᴜsᴇ: prefix alive
╰─────────────────❖
╭────────❖
│ ⏱️ ᴄᴏᴍᴍᴀɴᴅ: runtime
│ 🏷️ ᴜsᴇ: prefix runtime
╰─────────────────❖
╭────────❖
│ ⏳ ᴄᴏᴍᴍᴀɴᴅ: uptime
│ 🏷️ ᴜsᴇ: prefix uptime
╰─────────────────❖
╭────────❖
│ 📦 ᴄᴏᴍᴍᴀɴᴅ: repo
│ 🏷️ ᴜsᴇ: prefix repo
╰─────────────────❖
╭────────❖
│ 👑 ᴄᴏᴍᴍᴀɴᴅ: owner
│ 🏷️ ᴜsᴇ: prefix owner
╰─────────────────❖
╭────────❖
│ 📜 ᴄᴏᴍᴍᴀɴᴅ: menu / menu2
│ 🏷️ ᴜsᴇ: prefix menu
╰─────────────────❖
╭────────❖
│ 🔄 ᴄᴏᴍᴍᴀɴᴅ: restart
│ 🏷️ ᴜsᴇ: prefix restart
╰────────────────────────────╯

╭───『 🎎 ANIME MENU 』───╮
╭────────❖
│ 🤬 ᴄᴏᴍᴍᴀɴᴅ: fack
│ 🏷️ ᴜsᴇ: prefix fack
╰─────────────────❖
╭────────❖
│ ✅ ᴄᴏᴍᴍᴀɴᴅ: truth
│ 🏷️ ᴜsᴇ: prefix truth
╰─────────────────❖
╭────────❖
│ 😨 ᴄᴏᴍᴍᴀɴᴅ: dare
│ 🏷️ ᴜsᴇ: prefix dare
╰─────────────────❖
╭────────❖
│ 🐶 ᴄᴏᴍᴍᴀɴᴅ: dog
│ 🏷️ ᴜsᴇ: prefix dog
╰─────────────────❖
╭────────❖
│ 🐺 ᴄᴏᴍᴍᴀɴᴅ: awoo
│ 🏷️ ᴜsᴇ: prefix awoo
╰─────────────────❖
╭────────❖
│ 👧 ᴄᴏᴍᴍᴀɴᴅ: garl
│ 🏷️ ᴜsᴇ: prefix garl
╰─────────────────❖
╭────────❖
│ 👰 ᴄᴏᴍᴍᴀɴᴅ: waifu
│ 🏷️ ᴜsᴇ: prefix waifu
╰─────────────────❖
╭────────❖
│ 🐱 ᴄᴏᴍᴍᴀɴᴅ: neko
│ 🏷️ ᴜsᴇ: prefix neko
╰─────────────────❖
╭────────❖
│ 🧙 ᴄᴏᴍᴍᴀɴᴅ: megnumin
│ 🏷️ ᴜsᴇ: prefix megnumin
╰─────────────────❖
╭────────❖
│ 👗 ᴄᴏᴍᴍᴀɴᴅ: maid
│ 🏷️ ᴜsᴇ: prefix maid
╰─────────────────❖
╭────────❖
│ 👧 ᴄᴏᴍᴍᴀɴᴅ: loli
│ 🏷️ ᴜsᴇ: prefix loli
╰─────────────────❖
╭────────❖
│ 🎎 ᴄᴏᴍᴍᴀɴᴅ: animegirl
│ 🏷️ ᴜsᴇ: prefix animegirl
╰─────────────────❖
╭────────❖
│ 🎬 ᴄᴏᴍᴍᴀɴᴅ: anime1
│ 🏷️ ᴜsᴇ: prefix anime1
╰─────────────────❖
╭────────❖
│ 🦊 ᴄᴏᴍᴍᴀɴᴅ: foxgirl
│ 🏷️ ᴜsᴇ: prefix foxgirl
╰─────────────────❖
╭────────❖
│ 🍥 ᴄᴏᴍᴍᴀɴᴅ: naruto
│ 🏷️ ᴜsᴇ: prefix naruto
╰────────────────────────────   

╭───『 ℹ️ OTHER MENU 』───╮
╭────────❖
│ 🕒 ᴄᴏᴍᴍᴀɴᴅ: timenow
│ 🏷️ ᴜsᴇ: prefix timenow
╰─────────────────❖
╭────────❖
│ 📅 ᴄᴏᴍᴍᴀɴᴅ: date
│ 🏷️ ᴜsᴇ: prefix date
╰─────────────────❖
╭────────❖
│ 🔢 ᴄᴏᴍᴍᴀɴᴅ: count
│ 🏷️ ᴜsᴇ: prefix count
╰─────────────────❖
╭────────❖
│ 🧮 ᴄᴏᴍᴍᴀɴᴅ: calculate
│ 🏷️ ᴜsᴇ: prefix calculate
╰─────────────────❖
╭────────❖
│ 🎲 ᴄᴏᴍᴍᴀɴᴅ: flip
│ 🏷️ ᴜsᴇ: prefix flip
╰─────────────────❖
╭────────❖
│ 🪙 ᴄᴏᴍᴍᴀɴᴅ: coinflip
│ 🏷️ ᴜsᴇ: prefix coinflip
╰─────────────────❖
╭────────❖
│ 🎨 ᴄᴏᴍᴍᴀɴᴅ: rcolor
│ 🏷️ ᴜsᴇ: prefix rcolor
╰─────────────────❖
╭────────❖
│ 🎲 ᴄᴏᴍᴍᴀɴᴅ: roll
│ 🏷️ ᴜsᴇ: prefix roll
╰─────────────────❖
╭────────❖
│ 💻 ᴄᴏᴍᴍᴀɴᴅ: cpp
│ 🏷️ ᴜsᴇ: prefix cpp
╰─────────────────❖
╭────────❖
│ 🎲 ᴄᴏᴍᴍᴀɴᴅ: rw
│ 🏷️ ᴜsᴇ: prefix rw
╰─────────────────❖
╭────────❖
│ 💑 ᴄᴏᴍᴍᴀɴᴅ: pair
│ 🏷️ ᴜsᴇ: prefix pair
╰─────────────────❖
╭────────❖
│ ✨ ᴄᴏᴍᴍᴀɴᴅ: fancy
│ 🏷️ ᴜsᴇ: prefix fancy
╰─────────────────❖
╭────────❖
│ 🎨 ᴄᴏᴍᴍᴀɴᴅ: logo <text>
│ 🏷️ ᴜsᴇ: prefix logo <text>
╰─────────────────❖
╭────────❖
│ 📖 ᴄᴏᴍᴍᴀɴᴅ: define
│ 🏷️ ᴜsᴇ: prefix define
╰─────────────────❖
╭────────❖
│ 📰 ᴄᴏᴍᴍᴀɴᴅ: news
│ 🏷️ ᴜsᴇ: prefix news
╰─────────────────❖
╭────────❖
│ 🎬 ᴄᴏᴍᴍᴀɴᴅ: movie
│ 🏷️ ᴜsᴇ: prefix movie
╰─────────────────❖
╭────────❖
│ ☀️ ᴄᴏᴍᴍᴀɴᴅ: weather
│ 🏷️ ᴜsᴇ: prefix weather
╰─────────────────❖
╭────────❖
│ 📦 ᴄᴏᴍᴍᴀɴᴅ: srepo
│ 🏷️ ᴜsᴇ: prefix srepo
╰─────────────────❖
╭────────❖
│ 🤬 ᴄᴏᴍᴍᴀɴᴅ: insult
│ 🏷️ ᴜsᴇ: prefix insult
╰─────────────────❖
╭────────❖
│ 💾 ᴄᴏᴍᴍᴀɴᴅ: save
│ 🏷️ ᴜsᴇ: prefix save
╰─────────────────❖
╭────────❖
│ 🌐 ᴄᴏᴍᴍᴀɴᴅ: wikipedia
│ 🏷️ ᴜsᴇ: prefix wikipedia
╰─────────────────❖
╭────────❖
│ 🔑 ᴄᴏᴍᴍᴀɴᴅ: gpass
│ 🏷️ ᴜsᴇ: prefix gpass
╰─────────────────❖
╭────────❖
│ 👤 ᴄᴏᴍᴍᴀɴᴅ: githubstalk
│ 🏷️ ᴜsᴇ: prefix githubstalk
╰─────────────────❖
╭────────❖
│ 🔍 ᴄᴏᴍᴍᴀɴᴅ: yts
│ 🏷️ ᴜsᴇ: prefix yts
╰─────────────────❖
╭────────❖
│ 📹 ᴄᴏᴍᴍᴀɴᴅ: ytv
│ 🏷️ ᴜsᴇ: prefix ytv
╰────────────────────────────╯
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖
        `.trim();

        // ✅ Random Voice Clip එකක් Select කරනවා
        const randomVoice = VOICE_CLIPS[Math.floor(Math.random() * VOICE_CLIPS.length)];

        // Check if video & voice URLs are valid
        if (!ALIVE_VIDEO || !ALIVE_VIDEO.startsWith("http")) {
            throw new Error("Invalid ALIVE_VIDEO URL. Please set a valid video URL.");
        }
        if (!randomVoice || !randomVoice.startsWith("http")) {
            throw new Error("Invalid Voice Clip URL. Please set a valid URL.");
        }

        // ✅ Random Voice Clip එක යවනවා
        await conn.sendMessage(from, {
            audio: { url: randomVoice },
            mimetype: 'audio/mp4', // MP3 / OGG formats සඳහා auto detect වේ
            ptt: true // 🎤 PTT (Push to Talk) වගේ play වේ
        }, { quoted: mek });

        // ✅ Video message with autoplay (GIF style)
        await conn.sendMessage(from, {
            video: { url: ALIVE_VIDEO }, // Video එකේ direct URL එක
            caption: formattedInfo,
            gifPlayback: true, // GIF වගේ autoplay වෙනවා (Sound play වෙන්නේ නැහැ)
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421846535301@newsletter',
                    newsletterName: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});
