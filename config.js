/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'bebabea256e0571f753676df' // LOLHUMAN Isi pake apikey lu agar Fitur confess bisa diakses
global.rosekey = '-' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Amura - MD'
global.namaowner = 'HenzzXD'

//—————「 Setting Owner 」—————//
global.owner = ['6285711324080']
global.nomerowner = '6285711324080'
global.premium = ['6285711324080']

//—————「 Set Wm 」—————//
global.packname = 'By HenzzXD\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴\n𝚈𝚃:HenzzXD'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, sayangg~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner HenzzXD ganteng !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses sayangg tunggu ya !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "HenzzXD",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/eaa7c5380b33a8e77bd6f.jpg'
global.link = 'https://youtube.com/@HenzzXD'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
