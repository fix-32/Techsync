const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭────⟮ ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ-ᴇɴᴠ ⟯───┈⊷
│▫╭──────────────⊷
│▫│๏ ᴇɴᴠ sᴇᴛᴛɪɴɢs 🗿
│▫┗──────────────⊷
┗────────────────┈⊷
╭───⟮ ᴇɴᴀʙʟᴇᴅ-ᴅɪsᴀʙʟᴇᴅ ᴇɴᴠ ⟯──┈⊷
│๏ sᴛᴀᴛᴜs ᴀᴜᴛᴏ ᴠɪᴇᴡ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ sᴛᴀᴛᴜs  ʀᴇᴘʟᴇʏ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴀᴜᴛᴏ ʀᴇᴘʟʏ : ᴅɪsᴀʙʟᴇᴅ
│๏ ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ : ᴅɪsᴀʙʟᴇᴅ
│๏ ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴄᴜsᴛᴏᴍ ʀᴇᴀᴄᴛ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴅᴇʟᴇᴛᴇ ʟɪɴᴋs : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴀɴᴛɪ-ʟɪɴᴋ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴀɴᴛɪ-ʙᴀᴅ ᴡᴏʀᴅs : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ : ᴅɪsᴀʙʟᴇᴅ
│๏ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ : ᴅɪsᴀʙʟᴇᴅ
│๏ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ : ᴇɴᴀʙʟᴇᴅ ✅️
│๏ ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ : ᴇɴᴀʙʟᴇᴅ ✅
│๏ ʀᴇᴀᴅ ᴍᴇssᴀɢᴇs : ᴅɪsᴀʙʟᴇᴅ 
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/sdv3qh.png' }, // Image URL
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: "ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴇᴠɴ sᴇᴛᴛɪɴɢs",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/fav.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});
