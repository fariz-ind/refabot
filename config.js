global.owner = [
  "6285797208971",
  ""
]
global.namabot = "Refa"
global.ownername = "rzz"
global.pack = "Refa"
global.author = "Strange Universe!!"
global.channelname = "Info Bot Refa-Md"



global.public = true
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗lu bukan admin tot, gabisa pake ni fitur*_',
    OnlyOwner: '_*❗cuma fariz yg bisa make fitur ini!*_',
    OnlyGrup: '_*❗cuma bisa di gc ya!*_',
    private: '_(❗menu ini cuma bisa di private chat!*_',
    wait: '_*bentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*minggir lu miskin, fitur ini cuma buat member premium_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})