const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    alias: ["author", "Techsync"],
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync-menu.png' }, // Image URL from your request
            caption: `╭───⟮ ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ⟯───┈⊷
│⳺╭─────────────┈⊷
│⳺│☍ ʙᴏᴛ-ɴᴀᴍᴇ : ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ
│⳺│☍ ᴏᴡɴᴇʀ-ɴᴀᴍᴇ : *${ownerName}*
│⳺│☍ ᴏᴡɴᴇʀ-ɴᴜᴍʙᴇʀ * : *${ownerNumber}*
│⳺│☍ sᴘᴇᴇᴅ : *${ping}*ᴍs
│⳺┗─────────────┈⊷
┗────────────────┈⊷

> ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴏᴡɴᴇʀ`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411325763461@newsletter',
                    newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴏᴡɴᴇʀ🍁',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
