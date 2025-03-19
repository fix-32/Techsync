/*
       𓋜  ＢＯＴ ＮＡＭＥ ⇩
         
        Ｔｅｃｈｓｙｎｃ
         
       𓋜 ＢＯＴ ＯＷＮＥＲ ⇩
         
         Ｋｈｕｌｅｋａｎｉ Ｍｖｅｌａｓｅ
         
       𓋜 ＤＥＶＥＬＯＰＥＲ ⇩
         
         Ｍｖｅｌａｓｅ Ｔｅｃｈｎｏｌｏｇｙ
         
       𓋜 ＤＥＶ ＬＯＣＡＴＩＯＮ ⇩
         
         Ｚｉｍｂａｂｗｅ,Ｂｕｌａｗａｙｏ
         
       𓋜 ＴＥＡＭ ＮＡＭＥ ⇩
         
         Ｔｅｃｈｇｕｙｓ
         
*/



const { cmd } = require("../../command");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot
const ALIVE_IMG = "https://files.catbox.moe/sdv3qh.png"; // paste your alive message here

cmd({
    pattern: "alive3",
    desc: "Check if the bot is active.",
    category: "info",
    react: "💡",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User"; // Nom de l'utilisateur ou valeur par défaut
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `
🌟 *𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼-𝖬𝖣 𝖲𝖳𝖠𝖳𝖴𝖲* 🌟

𝖧𝖤𝖫𝖫𝖮 *${pushname}*

🕒 *𝖳𝖨𝖬𝖤*: ${currentTime}
📅 *𝖣𝖠𝖳𝖤*: ${currentDate}
⏳ *𝖴𝖯𝖳𝖨𝖬𝖤*: ${runtimeHours} 𝖧𝖮𝖴𝖱𝖲, ${runtimeMinutes} minutes, ${runtimeSeconds} 𝖲𝖤𝖢𝖮𝖭𝖣𝖲

> 🤖 *𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼 𝗂𝗌 𝖺𝗅𝗂𝗏𝖾 𝗇𝗈𝗐 𝖺𝗇𝖽 𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋 𝗎𝗌𝖾*

> 🎉 *𝖤𝗇𝗃𝗈𝗒 𝗍𝗁𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾!*
        `.trim();

        // Vérifier si l'image est définie
        if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
            throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
        }

        // Envoyer le message avec image et légende
        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG }, // Assurez-vous que l'URL est valide
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411325763461@newsletter',
                    newsletterName: '𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃 𝐀𝐋𝐈𝐕𝐄☠️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
        
        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/alive.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411325763461@newsletter',
                    newsletterName: '𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃 𝐀𝐋𝐈𝐕𝐄☠️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        // Répondre avec des détails de l'erreur
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});