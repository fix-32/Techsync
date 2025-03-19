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


const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');



cmd({
  pattern: 'version2',
  react: '✔️',
  desc: 'Check the bot\'s version',
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const packageName = require('../package.json');
    const currentVersion = packageName.version;

    const apiUrl = 'https://raw.githubusercontent.com/mvelase-ofc/Techsync/master/package.json';
    const response = await axios.get(apiUrl);
    const data = response.data;
    const latestVersion = data.version;

    let message = '';
    if (currentVersion === latestVersion) {
      message = `*𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼 𝖬𝖣 𝖻𝗈𝗍 𝗂𝗌 𝗎𝗉-𝗍𝗈-𝖽𝖺𝗍𝖾! ⚙️n Current version is: ${currentVersion}*`;
    } else {
      message = `*𝖳𝖾𝖼𝗁𝗌𝗒𝗇𝖼 𝖬𝖣 𝖻𝗈𝗍 𝗂𝗌 𝗈𝗎𝗍-𝖽𝖺𝗍𝖾𝖽! ⚙️!\n\n 𝖢𝗎𝗋𝗋𝖾𝗇𝗍 𝖵𝖾𝗋𝗌𝗂𝗈𝗇 : ${currentVersion} \n 𝖫𝖺𝗍𝖾𝗌𝗍 𝖵𝖾𝗋𝗌𝗂𝗈𝗇 : ${latestVersion}*`;
    }

   // await reply(message);
    
 // } catch (error) {
  //  console.error('Error fetching version:', error);
   // await reply('Error fetching version. Please try again later.');
//  }
//});
       // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/sdv3qh.png` },  // Image URL
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411325763461@newsletter',
                    newsletterName: 'ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ᴠᴇʀsɪᴏɴ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in Techsync checking Version:", e);
        reply(`An error Occured Fetching Version 😕`);
    }
});
