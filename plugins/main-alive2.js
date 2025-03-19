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


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "alive2",
    react: "🌐",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



