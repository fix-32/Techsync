const config = require('../../config');
const { cmd, commands } = require('../../command');
const os = require("os");
const { runtime } = require('../../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🍁",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───⟮ *${config.BOT_NAME}* ⟯──┈⊷
│• ʜᴇʟʟᴏ 👋 *${m.pushName}*
┗─┬─⊷   
╭─┴─⊷
│⚙ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎. ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ʙᴏᴛ💫
┗─────────────────┈⊷
┏────────━━───────┈⊷
│• 📜ᴘʀᴇｆɪx : .
│• 🔊ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ
│• 🏀ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴅᴇ
│• 📝ᴘʟᴀᴛᴇƒᴏʀᴍ : ʟɪɴᴜx
│• ⏳️ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs
│• 🏷ʙᴏᴛ-ᴏᴡɴᴇʀ : ${config.OWNER_NAME}
│• 📼ʀᴀᴍ-ᴜsᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ
│• 🍁ʀᴜɴᴛɪᴍᴇ-ᴜᴘᴛɪᴍᴇ :  ${runtime(process.uptime())}
│• 📚ᴛᴇᴄʜsʏɴᴄ-ᴠᴇʀsɪᴏɴ : 2.5.0 ʙᴇᴛᴀ
│• 📆ᴅᴀᴛᴇ : *${currentDate}*
│• ⏰️ᴛɪᴍᴇ : *${currentTime}*
┗────────━━───────┈⊷
          
┏────❲ *ᴍᴇɴᴜ-ʟɪsᴛ* ❳───┈⊷
│✧┏─────────────┈⊷
│✧│ ᴍᴀɪᴍᴇɴᴜ
│✧│ ɢʀᴏᴜᴘᴍᴇɴᴜ
│✧│ ᴀɪᴍᴇɴᴜ
│✧│ ʀᴇᴀᴄᴛɪᴏɴs
│✧│ ᴀʟʟᴍᴇɴᴜ
│✧│ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
│✧│ ᴀɴɪᴍᴇᴍᴇɴᴜ
│✧│ ᴏᴛʜᴇʀᴍᴇɴᴜ
│✧│ ʟɪsᴛᴄᴍᴅ
│✧│ ᴘʀᴀʏᴇʀᴛɪᴍᴇ
│✧│ ƒᴜɴᴍᴇɴᴜ
│✧│ ᴅʟᴍᴇɴᴜ
│✧│ ᴏᴡɴᴇʀᴍᴇɴᴜ
│✧│ ʟᴏɢᴏ ⟮ᴛᴇxᴛ⟯
│✧│ ʀᴇᴘᴏ
│✧┗─────────────┈⊷
┗────────────────┈⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/refs/heads/main/data-base/Techsync-autovoice/owner.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `┏────❲ *ʀᴇᴀᴄᴛɪᴏɴs-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ʙᴜʟʟʏ
│➪│ ᴄᴜᴅᴅʟᴇ
│➪│ ᴄʀʏ 
│➪│ ʜᴜɢ 
│➪│ ᴀᴡᴏᴏ 
│➪│ ᴋɪss
│➪│ ʟɪᴄᴋ 
│➪│ ᴘsᴛ 
│➪│ sᴍᴜʜ
│➪│ ʙᴏɴᴋ 
│➪│ ʏᴇᴛ 
│➪│ ʙʟᴜsʜ 
│➪│ sᴍɪʟᴇ 
│➪│ ᴡᴀᴠᴇ 
│➪│ ʜɪɢʜƒɪᴠᴇ 
│➪│ ʜᴀɴᴅʜᴏʟᴅ 
│➪│ ɴᴏᴍ 
│➪│ ʙɪᴛᴇ 
│➪│ ɢʟᴏᴍᴘ 
│➪│ sʟᴀᴘ
│➪│ ᴋɪʟʟ 
│➪│ ʜᴀᴘᴘʏ 
│➪│ ᴡɪɴᴋ 
│➪│ ᴘᴏᴋᴇ 
│➪│ ᴅᴀɴᴄᴇ 
│➪│ ᴄʀɪɴɢᴇ 
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ʀᴇᴀᴄᴛɪᴏɴs',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴅᴏᴡɴʟᴏᴀᴅ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ƒᴀᴄᴇʙᴏᴏᴋ
│➪│ ᴛɪᴋᴛᴏᴋ
│➪│ ᴛᴡɪᴛᴛᴇʀ
│➪│ ɪɴsᴛᴀ
│➪│ ᴀᴘᴋ
│➪│ ᴘʟᴀʏᴘʀᴏ
│➪│ ɪᴍɢ
│➪│ ᴛᴛʀ
│➪│ ᴘɪɴs
│➪│ ᴀᴘᴋ2
│➪│ ᴍᴇᴅɪᴀFɪʀᴇ
│➪│ ƒʙ
│➪│ ᴘɪɴᴛᴇʀᴇsᴛ
│➪│ sᴘᴏᴛɪƒʏ
│➪│ ᴘʟᴀʏ
│➪│ ᴀᴜᴅɪᴏ
│➪│ ᴠɪᴅᴇᴏ
│➪│ ʏᴛᴍᴘ3
│➪│ ʏᴛᴘᴍ4
│➪│ ᴘʟᴀʏ22
│➪│ ᴘʟᴀʏᴘʀᴏ
│➪│ sᴏɴɢ
│➪│ ᴅᴏɢ
│➪│ ᴄᴀᴛ
│➪│ ᴅᴀʀᴀᴍᴀ
│➪│ ɢᴅʀɪᴠᴇ
│➪│ ssᴡᴇʙ
│➪│ ᴛɪᴋs
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴅʟᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `┏────❲ *ɢʀᴏᴜᴘ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ɢʀᴏᴜᴘʟɪɴᴋ
│➪│ ᴋɪᴄᴋᴀʟʟ
│➪│ ᴋɪᴠᴋᴀʟʟ2
│➪│ ᴋɪᴄᴋᴀʟʟ3
│➪│ ᴀᴅᴅ
│➪│ ʀᴇᴍᴏᴠᴇ
│➪│ ᴋɪᴄᴋ
│➪│ ᴘʀᴏᴍᴏᴛᴇ 
│➪│ ᴏᴘᴇɴᴛɪᴍᴇ
│➪│ ᴄʟᴏsᴇᴛɪᴍᴇ
│➪│ ᴅᴇᴍᴏᴛᴇ
│➪│ ᴅɪsᴍɪss
│➪│ ʀᴇᴠᴏᴋᴇ
│➪│ sᴇᴛɢᴏᴏᴅʙʏᴇ
│➪│ sᴇᴛᴡᴇʟʟᴄᴏᴍᴇ
│➪│ ᴅᴇʟᴇᴛᴇ 
│➪│ ɢᴇᴛᴘɪᴄ
│➪│ ɢɪɴFᴏ
│➪│ ᴅᴇʟᴇᴛᴇ 
│➪│ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ
│➪│ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏFF
│➪│ ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ,24ʜ
│➪│ ᴀʟʟʀᴇϙ
│➪│ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
│➪│ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴋ
│➪│ ᴊᴏɪɴʀᴇϙᴜᴇsᴛs
│➪│ sᴇɴᴅᴅᴍ
│➪│ ɴɪᴋᴀʟ
│➪│ ᴍᴜᴛᴇ
│➪│ ᴜɴᴍᴜᴛᴇ
│➪│ ʟᴏᴄᴋɢᴄ
│➪│ ᴜɴʟᴏᴄᴋɢᴄ
│➪│ ɪɴᴠɪᴛᴇ
│➪│ ᴛᴀɢ
│➪│ ʜɪᴅᴇᴛᴀɢ
│➪│ ᴛᴀɢᴀʟʟ
│➪│ ᴛᴀɢᴀᴅᴍɪɴs
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ɢʀᴏᴜᴘᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `┏────❲ *Fᴜɴ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ sʜᴀᴘᴀʀ
│➪│ ʀᴀᴛᴇ
│➪│ ɪɴsᴜʟᴛ
│➪│ ʜᴀᴄᴋ
│➪│ sʜɪᴘ
│➪│ ᴄʜᴀʀᴀᴄᴛᴇʀ
│➪│ ᴘɪᴄᴋᴜᴘ 
│➪│ ᴊᴏᴋᴇ
│➪│ ʜʀᴛ
│➪│ ʜʏᴘ
│➪│ sʏᴅ
│➪│ ᴀɴɢᴇʀ
│➪│ sʜʏ
│➪│ ᴋɪss
│➪│ ᴍᴏɴ
│➪│ ᴄᴏɴƒᴜɴᴄᴇᴅ
│➪│ sᴇᴛᴘᴘ
│➪│ ʜᴀɴᴅ
│➪│ ɴɪᴋᴀʟ
│➪│ ʜᴏʟƒ
│➪│ ʜᴜɢ
│➪│ ʜɪFɪ
│➪│ ᴘᴏᴋᴇ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ Fᴜɴᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴏᴛʜᴇʀ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ᴛɪᴍᴇɴᴏᴡ
│➪│ ᴅᴀᴛʀ
│➪│ ᴄᴏᴜɴᴛ
│➪│ ᴄᴀʟᴄᴜʟᴀᴛʀ
│➪│ ᴄᴏᴜɴᴛx
│➪│ ƒʟɪᴘ
│➪│ ᴄᴏɪɴƒʟɪᴘ
│➪│ ʀᴄᴏʟᴏᴜʀ
│➪│ ʀᴏʟʟ
│➪│ Fᴀᴄᴛ
│➪│ ᴄᴘᴘ
│➪│ ʀᴡ
│➪│ ᴘᴀɪʀ
│➪│ ᴘᴀɪʀ3
│➪│ ᴘᴀɪʀ4
│➪│ ƒᴀɴᴄʏ
│➪│ ʟᴏɢᴏ ⟮ᴛᴇxᴛ⟯
│➪│ ᴅᴇƒɪɴᴇ
│➪│ ɴᴇᴡs
│➪│ ᴍᴏᴠɪᴇ
│➪│ ᴡᴇᴀᴛʜᴇʀ
│➪│ sʀᴇᴘᴏ
│➪│ ɪɴsᴜʟᴛ
│➪│ sᴀᴠᴇ
│➪│ ᴡɪᴋɪᴘᴇᴅɪᴀ
│➪│ ɢᴘᴀss
│➪│ ɢɪᴛʜᴜɴsᴛᴀʟᴋ
│➪│ ʏᴛs
│➪│ ʏᴛᴠ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴏᴛʜᴇʀᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴍᴀɪɴ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ᴘɪɴɢ
│➪│ ᴘɪɴɢ2
│➪│ sᴘᴇᴇᴅ
│➪│ ʟɪᴠᴇ 
│➪│ ᴀʟɪᴠᴇ
│➪│ ᴀʟɪᴠᴇ2
│➪│ ᴀʟɪᴠᴇ3
│➪│ ʀᴜɴᴛɪᴍᴇ
│➪│ ʟɪsᴛᴘʟᴜɢɪɴs
│➪│ ᴘʟᴜɢɪɴ
│➪│ ᴠᴇʀsɪᴏɴ
│➪│ ᴠᴇʀsɪᴏɴ2
│➪│ ᴜᴘᴅᴀᴛᴇ
│➪│ ᴄʜᴇᴄᴋ
│➪│ ᴜᴘᴛɪᴍᴇ 
│➪│ ʀᴇᴘᴏ
│➪│ ᴏᴡɴᴇʀ
│➪│ ᴍᴇɴᴜ
│➪│ ᴍᴇɴᴜ2
│➪│ ᴍᴠᴇʟᴀsᴇ
│➪│ ʀᴇsᴛᴀʀᴛ
│➪│ sʏsᴛᴇᴍ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴍᴀɪɴᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴏᴡɴᴇʀ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ᴏᴡɴᴇʀ
│➪│ ᴍᴇɴᴜ
│➪│ ᴍᴇɴᴜ2
│➪│ ᴠᴠ
│➪│ ᴄᴍᴅᴜᴘᴅᴀᴛᴇ
│➪│ ʟɪsᴛᴄᴍᴅ
│➪│ ᴀʟʟᴍᴇɴᴜ
│➪│ ʀᴇᴘᴏ
│➪│ ʙʟᴏᴄᴋ
│➪│ ᴜɴʙʟᴏᴄᴋ
│➪│ ƒᴜʟʟᴘᴘ
│➪│ ᴍᴠᴇʟᴀsᴇ
│➪│ ɢɪᴛᴄʟᴏɴᴇ
│➪│ ᴄᴏᴜɴᴛʀʏɪɴƒᴏ
│➪│ sᴇᴛᴘᴘ
│➪│ ʀᴇsᴛᴀʀᴛ
│➪│ sʜᴜᴛᴅᴏᴡɴ
│➪│ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
│➪│ ᴠᴇʀsɪᴏɴ
│➪│ ᴠᴇʀsɪᴏɴ2
│➪│ ᴜᴘᴅᴀᴛᴇ
│➪│ ʟɪsᴛᴘʟᴜɢɪɴs
│➪│ ᴘʟᴜɢɪɴ
│➪│ ᴀʟɪᴠᴇ
│➪│ ᴀʟɪᴠᴇ2
│➪│ ᴀʟɪᴠᴇ3
│➪│ ᴘɪɴɢ
│➪│ ᴘɪɴɢ2
│➪│ ɢᴊɪᴅ
│➪│ ᴊɪᴅ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sdv3qh.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴏᴡɴᴇʀᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏────❲ *ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ sᴛɪᴄᴋᴇʀ
│➪│ sᴛɪᴄᴋᴇʀ 2
│➪│ ᴇᴍᴏᴊɪᴍɪᴄ
│➪│ ᴛᴀᴋᴇ
│➪│ ᴛᴏᴍᴘ3
│➪│ ᴛᴛs
│➪│ ᴛᴛʀ
│➪│ ʙᴀsᴇ64
│➪│ ᴜɴʙᴀsᴇ64
│➪│ ʙɪɴᴀʀʏ
│➪│ ᴅʙɪɴᴀʀʏ
│➪│ ᴛɪɴʏᴜʀʟ
│➪│ ᴜʀʟ
│➪│ ʀᴇᴘᴇᴀᴛ 
│➪│ ᴀsᴋ
│➪│ ʀᴇᴀᴅᴍᴏʀᴇ
│➪│ ᴄᴏɴᴠᴇʀᴛᴍᴏɴᴇʏ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync-menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `┏────❲ *ᴀɴɪᴍᴇ-ᴍᴇɴᴜ* ❳───┈⊷
│➪┏─────────────┈⊷
│➪│ ƒᴀᴄᴋ
│➪│ ᴛʀᴜᴛʜ
│➪│ ᴅᴀʀᴇ
│➪│ ᴅᴏɢ
│➪│ ᴀᴡᴏᴏ
│➪│ ɢᴀʀʟ
│➪│ ɴᴇᴋᴏ
│➪│ ᴍᴇɢɴᴜᴍɪɴ
│➪│ ɴᴇᴋᴏ
│➪│ ᴍᴀɪᴅ
│➪│ ʟᴏʟɪ
│➪│ ᴀɴɪᴍᴇɢɪʀʟ
│➪│ ᴀɴɪᴍᴇɢɪʀʟ1
│➪│ ᴀɴɪᴍᴇɢɪʀʟ2
│➪│ ᴀɴɪᴍᴇɢɪʀʟ3
│➪│ ᴀɴɪᴍᴇɢɪʀʟ4
│➪│ ᴀɴɪᴍᴇɢɪʀʟ5
│➪│ ᴀɴɪᴍᴇ1
│➪│ ᴀɴɪᴍᴇ2
│➪│ ᴀɴɪᴍᴇ3
│➪│ ᴀɴɪᴍᴇ4
│➪│ ᴀɴɪᴍᴇ5
│➪│ ᴀɴɪᴍᴇɴᴇᴡs
│➪│ ƒᴏxɢɪᴛʟ
│➪│ ɴᴀʀᴜᴛᴏ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync-menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴀɴɪᴍᴇᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏─────❲ *ᴀɪ-ᴍᴇɴᴜ* ❳────┈⊷
│➪┏─────────────┈⊷
│➪│ ᴀɪ
│➪│ ɢᴘᴛ1
│➪│ ɢᴘᴛ2
│➪│ ɢᴘᴛɢᴇᴍɪɴɪ
│➪│ ɢᴘᴛ
│➪│ ᴍᴇᴛᴀ
│➪│ ʙʟᴀᴄᴋʙᴏx
│➪│ ʟᴜᴍᴀ
│➪│ ᴅᴊ 
│➪│ ɢᴘᴛ4
│➪│ ʙɪɴɢ
│➪│ ɪᴍᴀɢɪɴᴇ 
│➪│ ɪᴍᴀɢɪɴᴇ2
│➪│ ᴄᴏᴘɪʟᴏᴛ
│➪┗─────────────┈⊷
┗────────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://raw.githubusercontent.com/mvelase-ofc/Techsync/main/assets/Techsync-menu.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴀɪᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
