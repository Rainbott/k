exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return '```Tunggu Sebentar Sayang !```'
}
exports.ok = () => {
    return '```Done Sayang !```'
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Alphabot-Md :*

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}nsfw
├ ${prefix}mute
├ ${prefix}banchat
├ ${prefix}unbanchat
├ ${prefix}autorespond
├ ${prefix}antiviewonce
├ ${prefix}join 
├ ${prefix}self
├ ${prefix}public
├ ${prefix}del
╰❒ ${prefix}setppbot

╭─❒ 「 Store Menu 」
├ ${prefix}list
├ ${prefix}addlist
├ ${prefix}dellist 
├ ${prefix}update
├ ${prefix}store
├ ${prefix}kali
├ ${prefix}bagi
├ ${prefix}tambah
├ ${prefix}kurang
├ ${prefix}kalkulator
├ ${prefix}proses
╰❒ ${prefix}done


╭─❒ 「 Database 」 
├ ${prefix}setcmd
├ ${prefix}delcmd
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg
├ ${prefix}getmsg
├ ${prefix}listmsg
╰❒ ${prefix}delmsg


╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm
├ ${prefix}infochat
├ ${prefix}setdesk
├ ${prefix}setppgrup
├ ${prefix}antilink
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}take
├ ${prefix}group
├ ${prefix}tagall
╰❒ ${prefix}hidetag

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime l
├ ${prefix}manga
╰❒ ${prefix}character

╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag 
├ ${prefix}vntag 
╰❒ ${prefix}imagetag 

╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch
├ ${prefix}wallpaper
├ ${prefix}google 
├ ${prefix}wikimedia 
├ ${prefix}hentai
├ ${prefix}wattpad 
├ ${prefix}webtoons 
├ ${prefix}drakor 
╰❒ ${prefix}pinterest 


╭─❒ 「 Converter 」
├ ${prefix}toaudio
├ ${prefix}tomp3
├ ${prefix}tovn
├ ${prefix}stiker
├ ${prefix}tourl
├ ${prefix}togif
├ ${prefix}tomp4
╰❒${prefix}toimg

╭─❒ 「 Image Effect 」 
├ ${prefix}wanted
├ ${prefix}utatoo 
├ ${prefix}unsharpen 
├ ${prefix}thanos 
├ ${prefix}sniper 
├ ${prefix}sharpen 
├ ${prefix}sepia 
├ ${prefix}scary 
├ ${prefix}rip 
├ ${prefix}redple 
├ ${prefix}rejected 
├ ${prefix}posterize 
├ ${prefix}ps4 
├ ${prefix}pixelize 
├ ${prefix}missionpassed 
├ ${prefix}moustache 
├ ${prefix}lookwhatkarenhave 
├ ${prefix}jail 
├ ${prefix}invert 
├ ${prefix}instagram
├ ${prefix}greyscale 
├ ${prefix}glitch 
├ ${prefix}gay 
├ ${prefix}frame 
├ ${prefix}fire
├ ${prefix}distort 
├ ${prefix}dictator
├ ${prefix}deepfry 
├ ${prefix}ddungeon 
├ ${prefix}circle 
├ ${prefix}challenger 
├ ${prefix}burn 
├ ${prefix}brazzers 
╰❒ ${prefix}beautiful 


╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail 
├ ${prefix}red 
├ ${prefix}gay 
├ ${prefix}bloo 
├ ${prefix}blue 
├ ${prefix}sepia 
├ ${prefix}green
├ ${prefix}glass 
├ ${prefix}invert 
├ ${prefix}blurple 
├ ${prefix}blurple2
├ ${prefix}wasted
├ ${prefix}passed 
├ ${prefix}triggered 
├ ${prefix}comrade 
├ ${prefix}greyscale 
├ ${prefix}threshold 
├ ${prefix}brightness 
╰❒ ${prefix}invertgreyscale 


╭─❒ 「 Download 」 
├ ${prefix}tiktok 
├ ${prefix}tiktoknowm 
├ ${prefix}tiktokwm 
├ ${prefix}tiktokaudio 
├ ${prefix}ytdl 
├ ${prefix}play
├ ${prefix}ytmp3
├ ${prefix}ytshortmp3
├ ${prefix}ytmp4 
├ ${prefix}ytshorts 
├ ${prefix}facebook 
├ ${prefix}facebooksd 
├ ${prefix}facebookhd 
├ ${prefix}fbaudio 
├ ${prefix}igstory
├ ${prefix}igdl 
├ ${prefix}igphoto
├ ${prefix}igvideo
├ ${prefix}igreels
├ ${prefix}igtv
├ ${prefix}soundcloud
├ ${prefix}gitclone 
├ ${prefix}gitrepo
├ ${prefix}mediafire
╰❒ ${prefix}twitter 

╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki 887435047326
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio

╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold
├ ${prefix}youtubesilver
├ ${prefix}facebookgold
├ ${prefix}facebooksilver
├ ${prefix}instagramgold
├ ${prefix}instagramsilver
├ ${prefix}twittergold
├ ${prefix}twittersilver
├ ${prefix}retrotext
├ ${prefix}halloweenbats
├ ${prefix}texthalloween
├ ${prefix}cardhalloween
├ ${prefix}birthdaycake
├ ${prefix}thundertext
├ ${prefix}icetext
├ ${prefix}milkcake
├ ${prefix}snowontext
├ ${prefix}metalstar
├ ${prefix}dragonfire
├ ${prefix}zombie3d
├ ${prefix}merrycard
├ ${prefix}generalexam 
├ ${prefix}viettel
├ ${prefix}embroider
├ ${prefix}graffititext
├ ${prefix}graffititext2
├ ${prefix}graffititext3
├ ${prefix}covergraffiti
├ ${prefix}moderngold
├ ${prefix}capercut
├ ${prefix}lovecard
├ ${prefix}heartflashlight
├ ${prefix}heartcup
├ ${prefix}sunglightshadow
├ ${prefix}graffiti3d
├ ${prefix}moderngoldsilver
├ ${prefix}moderngold2
├ ${prefix}moderngold3
├ ${prefix}fabrictext
├ ${prefix}masteryavatar
├ ${prefix}messagecoffee
├ ${prefix}announofwin
├ ${prefix}writeblood
├ ${prefix}horrorletter
├ ${prefix}writehorror
├ ${prefix}shirtclub
├ ${prefix}angelwing
├ ${prefix}christmasseason
├ ${prefix}projectyasuo
├ ${prefix}lovelycute
├ ${prefix}womansday
├ ${prefix}covergamepubg
├ ${prefix}nameonheart
├ ${prefix}funnyhalloween
├ ${prefix}lightningpubg
├ ${prefix}greetingcardvideo 
├ ${prefix}christmascard 
├ ${prefix}galaxybat
├ ${prefix}writegalaxy
├ ${prefix}starsnight
├ ${prefix}noeltext
├ ${prefix}textcakes
├ ${prefix}pubgbirthday
├ ${prefix}galaxywallpaper
├ ${prefix}pubgglicthvideo 
├ ${prefix}pubgmascotlogo
├ ${prefix}realembroidery
├ ${prefix}vintagetelevision
├ ${prefix}funnyanimations
├ ${prefix}glowingtext
├ ${prefix}textonglass
├ ${prefix}cartoonstyle
├ ${prefix}multicolor
├ ${prefix}watercolor2
├ ${prefix}textsky
├ ${prefix}summerbeach
├ ${prefix}1917text
├ ${prefix}puppycute
╰❒ ${prefix}rosebirthday


╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 
├ ${prefix}horror 
├ ${prefix}game8bit 
├ ${prefix}layered 
├ ${prefix}glitch2 
├ ${prefix}coolg 
├ ${prefix}coolwg 
├ ${prefix}realistic 
├ ${prefix}space3d 
├ ${prefix}gtiktok 
├ ${prefix}stone 
├ ${prefix}marvel 
├ ${prefix}marvel2 
├ ${prefix}pornhub 
├ ${prefix}avengers 
├ ${prefix}metalr 
├ ${prefix}metalg 
├ ${prefix}metalg2 
├ ${prefix}halloween2
├ ${prefix}lion 
├ ${prefix}wolf_bw 
├ ${prefix}wolf_g 
├ ${prefix}ninja 
├ ${prefix}3dsteel 
├ ${prefix}horror2
├ ${prefix}lava 
├ ${prefix}bagel 
├ ${prefix}blackpink
├ ${prefix}rainbow2 
├ ${prefix}water_pipe
├ ${prefix}halloween 
├ ${prefix}sketch 
├ ${prefix}sircuit 
├ ${prefix}discovery 
├ ${prefix}metallic2 
├ ${prefix}fictio
├ ${prefix}demon 
├ ${prefix}transformer 
├ ${prefix}berry 
├ ${prefix}thunder
├ ${prefix}magma 
├ ${prefix}3dstone 
├ ${prefix}neon 
├ ${prefix}glitch
├ ${prefix}harry_potter 
├ ${prefix}embossed 
├ ${prefix}broken 
├ ${prefix}papercut 
├ ${prefix}gradient 
├ ${prefix}glossy 
├ ${prefix}watercolor 
├ ${prefix}multicolor 
├ ${prefix}neon_devil
├ ${prefix}underwater 
├ ${prefix}bear 
├ ${prefix}wonderfulg 
├ ${prefix}christmas 
├ ${prefix}neon_light 
├ ${prefix}snow
├ ${prefix}cloudsky 
├ ${prefix}luxury2 
├ ${prefix}gradient2 
├ ${prefix}summer 
├ ${prefix}writing 
├ ${prefix}engraved 
├ ${prefix}summery 
├ ${prefix}3dglue 
├ ${prefix}metaldark 
├ ${prefix}neonlight 
├ ${prefix}oscar 
├ ${prefix}minion 
├ ${prefix}holographic 
├ ${prefix}purple
├ ${prefix}glossyb 
├ ${prefix}deluxe2 
├ ${prefix}glossyc 
├ ${prefix}fabric 
├ ${prefix}neonc 
├ ${prefix}newyear 
├ ${prefix}newyear2 
├ ${prefix}metals 
├ ${prefix}xmas 
├ ${prefix}blood 
├ ${prefix}darkg 
├ ${prefix}joker 
├ ${prefix}wicker 
├ ${prefix}natural 
├ ${prefix}firework 
├ ${prefix}skeleton 
├ ${prefix}balloon 
├ ${prefix}balloon2 
├ ${prefix}balloon3 
├ ${prefix}balloon4 
├ ${prefix}balloon5 
├ ${prefix}balloon6
├ ${prefix}balloon7 
├ ${prefix}steel 
├ ${prefix}gloss 
├ ${prefix}denim 
├ ${prefix}decorate 
├ ${prefix}decorate2 
├ ${prefix}peridot 
├ ${prefix}rock 
├ ${prefix}glass 
├ ${prefix}glass2
├ ${prefix}glass3 
├ ${prefix}glass4 
├ ${prefix}glass5 
├ ${prefix}glass6 
├ ${prefix}glass7 
├ ${prefix}glass8 
├ ${prefix}captain_as2 
├ ${prefix}robot 
├ ${prefix}equalizer 
├ ${prefix}toxic 
├ ${prefix}sparkling 
├ ${prefix}sparkling2 
├ ${prefix}sparkling3 
├ ${prefix}sparkling4 
├ ${prefix}sparkling5 
├ ${prefix}sparkling6 
├ ${prefix}sparkling7 
├ ${prefix}decorative 
├ ${prefix}chocolate 
├ ${prefix}strawberry 
├ ${prefix}koifish 
├ ${prefix}bread 
├ ${prefix}matrix 
├ ${prefix}blood2 
├ ${prefix}neonligth2 
├ ${prefix}thunder2 
├ ${prefix}3dbox 
├ ${prefix}neon2 
├ ${prefix}roadw 
├ ${prefix}bokeh 
├ ${prefix}gneon 
├ ${prefix}advanced 
├ ${prefix}dropwater 
├ ${prefix}wall 
├ ${prefix}chrismast 
├ ${prefix}honey 
├ ${prefix}drug 
├ ${prefix}marble 
├ ${prefix}marble2 
├ ${prefix}ice 
├ ${prefix}juice 
├ ${prefix}rusty
├ ${prefix}abstra 
├ ${prefix}biscuit 
├ ${prefix}wood 
├ ${prefix}scifi 
├ ${prefix}metalr 
├ ${prefix}purpleg 
├ ${prefix}shiny  
├ ${prefix}jewelry 
├ ${prefix}jewelry2 
├ ${prefix}jewelry3 
├ ${prefix}jewelry4
├ ${prefix}jewelry5
├ ${prefix}jewelry6
├ ${prefix}jewelry7 
├ ${prefix}jewelry8 
├ ${prefix}metalh 
├ ${prefix}golden 
├ ${prefix}glitter 
├ ${prefix}glitter2 
├ ${prefix}glitter3 
├ ${prefix}glitter4 
├ ${prefix}glitter5 
├ ${prefix}glitter6 
├ ${prefix}glitter7 
├ ${prefix}metale
├ ${prefix}carbon
├ ${prefix}candy
├ ${prefix}metalb
├ ${prefix}gemb
├ ${prefix}3dchrome
├ ${prefix}metalb2
├ ${prefix}metalg
╰❒ ${prefix}metalg


╭─❒ 「 Others 」
├ ${prefix}afk
├ ${prefix}translate kode_bahasa
├ ${prefix}kalkulator
├ ${prefix}smeme
├ ${prefix}smeme2
├ ${prefix}memegen
╰❒

╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni

╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
├ 𝖴𝗆𝗎𝗋 :
├ 𝖦𝖾𝗇𝖽𝖾𝗋 :
├ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}nsfw
├ ${prefix}mute
├ ${prefix}banchat
├ ${prefix}unbanchat
├ ${prefix}autorespond
├ ${prefix}antiviewonce
├ ${prefix}join
├ ${prefix}self
├ ${prefix}public
├ ${prefix}del
╰❒ ${prefix}setppbot
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd
├ ${prefix}delcmd
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg
├ ${prefix}getmsg
├ ${prefix}listmsg
╰❒ ${prefix}delmsg
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm
├ ${prefix}infochat
├ ${prefix}setdesk
├ ${prefix}setppgrup
├ ${prefix}antilink
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}take
├ ${prefix}group
├ ${prefix}tagall
╰❒ ${prefix}hidetag
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime
├ ${prefix}manga
╰❒ ${prefix}character
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag
├ ${prefix}vntag
╰❒ ${prefix}imagetag
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk
├ ${prefix}ghstalk
╰❒ ${prefix}ytstalk
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch
├ ${prefix}wallpaper
├ ${prefix}google
├ ${prefix}wikimedia
├ ${prefix}hentai
├ ${prefix}wattpad
├ ${prefix}webtoons
├ ${prefix}drakor
╰❒ ${prefix}pinterest
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}toaudio
├ ${prefix}tomp3
├ ${prefix}tovn
├ ${prefix}stiker
├ ${prefix}tourl
├ ${prefix}togif
├ ${prefix}tomp4
╰❒${prefix}toimg
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted
├ ${prefix}utatoo
├ ${prefix}unsharpen
├ ${prefix}thanos
├ ${prefix}sniper
├ ${prefix}sharpen
├ ${prefix}sepia
├ ${prefix}scary
├ ${prefix}rip
├ ${prefix}redple
├ ${prefix}rejected
├ ${prefix}posterize
├ ${prefix}ps4
├ ${prefix}pixelize
├ ${prefix}missionpassed
├ ${prefix}moustache
├ ${prefix}lookwhatkarenhave
├ ${prefix}jail
├ ${prefix}invert
├ ${prefix}instagram
├ ${prefix}greyscale
├ ${prefix}glitch
├ ${prefix}gay
├ ${prefix}frame
├ ${prefix}fire
├ ${prefix}distort
├ ${prefix}dictator
├ ${prefix}deepfry
├ ${prefix}ddungeon
├ ${prefix}circle
├ ${prefix}challenger
├ ${prefix}burn
├ ${prefix}brazzers
╰❒ ${prefix}beautiful
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail
├ ${prefix}red
├ ${prefix}gay
├ ${prefix}bloo
├ ${prefix}blue
├ ${prefix}sepia
├ ${prefix}green
├ ${prefix}glass
├ ${prefix}invert
├ ${prefix}blurple 
├ ${prefix}blurple2 
├ ${prefix}wasted 
├ ${prefix}passed 
├ ${prefix}triggered 
├ ${prefix}comrade
├ ${prefix}greyscale 
├ ${prefix}threshold 
├ ${prefix}brightness 
╰❒ ${prefix}invertgreyscale
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok
├ ${prefix}tiktoknowm
├ ${prefix}tiktokwm
├ ${prefix}tiktokaudio
├ ${prefix}ytdl
├ ${prefix}play
├ ${prefix}ytmp3
├ ${prefix}ytshortmp3
├ ${prefix}ytmp4
├ ${prefix}ytshorts
├ ${prefix}facebook
├ ${prefix}facebooksd
├ ${prefix}facebookhd
├ ${prefix}fbaudio
├ ${prefix}igstory
├ ${prefix}igdl
├ ${prefix}igphot/o
├ ${prefix}igvideo
├ ${prefix}igreels
├ ${prefix}igtv 
├ ${prefix}soundcloud
├ ${prefix}gitclone
├ ${prefix}gitrepo
├ ${prefix}mediafire
╰❒ ${prefix}twitter
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2
├ ${prefix}horror
├ ${prefix}game8bit
├ ${prefix}layered
├ ${prefix}glitch2
├ ${prefix}coolg
├ ${prefix}coolwg
├ ${prefix}realistic
├ ${prefix}space3d
├ ${prefix}gtiktok
├ ${prefix}stone
├ ${prefix}marvel
├ ${prefix}marvel2
├ ${prefix}pornhub
├ ${prefix}avengers
├ ${prefix}metalr
├ ${prefix}metalg
├ ${prefix}metalg2
├ ${prefix}halloween2
├ ${prefix}lion
├ ${prefix}wolf_bw
├ ${prefix}wolf_g
├ ${prefix}ninja
├ ${prefix}3dsteel
├ ${prefix}horror2
├ ${prefix}lava
├ ${prefix}bagel
├ ${prefix}blackpink
├ ${prefix}rainbow2
├ ${prefix}water
├ ${prefix}halloween
├ ${prefix}sketch
├ ${prefix}sircuit
├ ${prefix}discovery
├ ${prefix}metallic2
├ ${prefix}fiction
├ ${prefix}demon
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dstone
├ ${prefix}neon
├ ${prefix}glitch
├ ${prefix}harry_potter
├ ${prefix}embossed
├ ${prefix}broken
├ ${prefix}papercut
├ ${prefix}gradient
├ ${prefix}glossy
├ ${prefix}watercolor
├ ${prefix}multicolor
├ ${prefix}neon_devil
├ ${prefix}underwater
├ ${prefix}bear
├ ${prefix}wonderfulg
├ ${prefix}christmas
├ ${prefix}neon_light
├ ${prefix}snow
├ ${prefix}cloudsky
├ ${prefix}luxury2
├ ${prefix}gradient2
├ ${prefix}summer
├ ${prefix}writing
├ ${prefix}engraved
├ ${prefix}summery
├ ${prefix}3dglue
├ ${prefix}metaldark
├ ${prefix}neonlight
├ ${prefix}oscar
├ ${prefix}minion
├ ${prefix}holographic
├ ${prefix}purple
├ ${prefix}glossyb
├ ${prefix}deluxe2
├ ${prefix}glossyc
├ ${prefix}fabric
├ ${prefix}neonc
├ ${prefix}newyear
├ ${prefix}newyear2
├ ${prefix}metals
├ ${prefix}xmas
├ ${prefix}blood
├ ${prefix}darkg
├ ${prefix}joker
├ ${prefix}wicker
├ ${prefix}natural
├ ${prefix}firework
├ ${prefix}skeleton
├ ${prefix}balloon
├ ${prefix}balloon2
├ ${prefix}balloon3
├ ${prefix}balloon4
├ ${prefix}balloon5
├ ${prefix}balloon6
├ ${prefix}balloon7
├ ${prefix}steel
├ ${prefix}gloss
├ ${prefix}denim
├ ${prefix}decorate
├ ${prefix}decorate2
├ ${prefix}peridot
├ ${prefix}rock
├ ${prefix}glass
├ ${prefix}glass2
├ ${prefix}glass3
├ ${prefix}glass4
├ ${prefix}glass5
├ ${prefix}glass6
├ ${prefix}glass7
├ ${prefix}glass8
├ ${prefix}captain_as2
├ ${prefix}robot
├ ${prefix}equalizer
├ ${prefix}toxic
├ ${prefix}sparkling
├ ${prefix}sparkling2
├ ${prefix}sparkling3
├ ${prefix}sparkling4
├ ${prefix}sparkling5
├ ${prefix}sparkling6
├ ${prefix}sparkling7
├ ${prefix}decorative
├ ${prefix}chocolate
├ ${prefix}strawberry
├ ${prefix}koifish
├ ${prefix}bread
├ ${prefix}matrix
├ ${prefix}blood2
├ ${prefix}neonligth2
├ ${prefix}thunder2
├ ${prefix}3dbox
├ ${prefix}neon2
├ ${prefix}roadw
├ ${prefix}bokeh
├ ${prefix}gneon
├ ${prefix}advanced
├ ${prefix}dropwater
├ ${prefix}wall
├ ${prefix}chrismast
├ ${prefix}honey
├ ${prefix}drug
├ ${prefix}marble
├ ${prefix}marble2
├ ${prefix}ice
├ ${prefix}juice
├ ${prefix}rusty
├ ${prefix}abstra
├ ${prefix}biscuit
├ ${prefix}wood
├ ${prefix}scifi
├ ${prefix}metalr
├ ${prefix}purpleg
├ ${prefix}shiny
├ ${prefix}jewelry
├ ${prefix}jewelry2
├ ${prefix}jewelry3
├ ${prefix}jewelry4
├ ${prefix}jewelry5
├ ${prefix}jewelry6
├ ${prefix}jewelry7
├ ${prefix}jewelry8
├ ${prefix}metalh
├ ${prefix}golden
├ ${prefix}glitter
├ ${prefix}glitter2
├ ${prefix}glitter3
├ ${prefix}glitter4
├ ${prefix}glitter5
├ ${prefix}glitter6
├ ${prefix}glitter7
├ ${prefix}metale
├ ${prefix}carbon
├ ${prefix}candy
├ ${prefix}metalb
├ ${prefix}gemb
├ ${prefix}3dchrome
├ ${prefix}metalb2
├ ${prefix}metalg
╰❒ ${prefix}metalg
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp
├ ${prefix}attp
├ ${prefix}afk 
├ ${prefix}translate kode_bahasa
├ ${prefix}kalkulator
├ ${prefix}smeme
├ ${prefix}smeme2
╰❒ ${prefix}memegen
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold
├ ${prefix}youtubesilver
├ ${prefix}facebookgold
├ ${prefix}facebooksilver
├ ${prefix}instagramgold
├ ${prefix}instagramsilver
├ ${prefix}twittergold
├ ${prefix}twittersilver
├ ${prefix}retrotext
├ ${prefix}halloweenbats
├ ${prefix}texthalloween
├ ${prefix}cardhalloween
├ ${prefix}birthdaycake
├ ${prefix}thundertext
├ ${prefix}icetext
├ ${prefix}milkcake
├ ${prefix}snowontext
├ ${prefix}metalstar
├ ${prefix}dragonfire
├ ${prefix}zombie3d
├ ${prefix}merrycard
├ ${prefix}generalexam
├ ${prefix}viettel
├ ${prefix}embroider
├ ${prefix}graffititext
├ ${prefix}graffititext2
├ ${prefix}graffititext3
├ ${prefix}covergraffiti
├ ${prefix}moderngold
├ ${prefix}capercut
├ ${prefix}lovecard
├ ${prefix}heartflashlight
├ ${prefix}heartcup
├ ${prefix}sunglightshadow
├ ${prefix}graffiti3d
├ ${prefix}moderngoldsilver
├ ${prefix}moderngold2
├ ${prefix}moderngold3
├ ${prefix}fabrictext
├ ${prefix}masteryavatar
├ ${prefix}messagecoffee
├ ${prefix}announofwin
├ ${prefix}writeblood
├ ${prefix}horrorletter
├ ${prefix}writehorror
├ ${prefix}shirtclub
├ ${prefix}angelwing
├ ${prefix}christmasseason
├ ${prefix}projectyasuo
├ ${prefix}lovelycute
├ ${prefix}womansday
├ ${prefix}covergamepubg
├ ${prefix}nameonheart
├ ${prefix}funnyhalloween
├ ${prefix}lightningpubg
├ ${prefix}greetingcardvideo
├ ${prefix}christmascard
├ ${prefix}galaxybat
├ ${prefix}writegalaxy
├ ${prefix}starsnight
├ ${prefix}noeltext
├ ${prefix}textcakes
├ ${prefix}pubgbirthday
├ ${prefix}galaxywallpaper
├ ${prefix}pubgglicthvideo
├ ${prefix}pubgmascotlogo
├ ${prefix}realembroidery
├ ${prefix}vintagetelevision
├ ${prefix}funnyanimations
├ ${prefix}glowingtext
├ ${prefix}textonglass
├ ${prefix}cartoonstyle
├ ${prefix}multicolor
├ ${prefix}watercolor2
├ ${prefix}textsky
├ ${prefix}summerbeach
├ ${prefix}1917text
├ ${prefix}puppycute
├ ${prefix}rosebirthday
├ ${prefix}steellettering
├ ${prefix}letterstext
├ ${prefix}barcashirt
├ ${prefix}premiercup
├ ${prefix}stylepoligon
├ ${prefix}lifebuoys
╰❒ ${prefix}juventusshirt`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
├ ${prefix}coverbannerlol
├ ${prefix}pubglogomaker
├ ${prefix}colorfulpubg
├ ${prefix}astronotspace
├ ${prefix}wallpaperaov
├ ${prefix}maketeamlogo
├ ${prefix}circlemarcotteam
├ ${prefix}wallpaperml
├ ${prefix}dragonballfb
├ ${prefix}bannerofaov
├ ${prefix}effect3donbeach
├ ${prefix}cutegirlgamer
├ ${prefix}footballteam
├ ${prefix}beautifulshimmering
├ ${prefix}pubgcutelogo
├ ${prefix}elegantrotation
├ ${prefix}logogamingassasin
├ ${prefix}introvideomaker
├ ${prefix}gaminglogo4fvs
├ ${prefix}blueneon
├ ${prefix}metalmascot
├ ${prefix}anonymous
├ ${prefix}lolpentakill
├ ${prefix}avatarleagueofking
├ ${prefix}avatarff
├ ${prefix}overwatchwallpaper
├ ${prefix}rovwallpaperhd
├ ${prefix}rovwallpaper
├ ${prefix}beautifulgalaxylol
├ ${prefix}crossfirecover
├ ${prefix}lolwallpaper
├ ${prefix}coverdota2
├ ${prefix}coverleagueofking
├ ${prefix}avatar3q360
├ ${prefix}coverofwarface
├ ${prefix}newlolavatar
├ ${prefix}csgocover
├ ${prefix}coverloknew
├ ${prefix}coverfblol
├ ${prefix}overwatchcover
├ ${prefix}crossfirestyle
├ ${prefix}avatarlolbyname
├ ${prefix}lolcoverbyname
├ ${prefix}cyberhunterfb
├ ${prefix}coverfreefirefb
├ ${prefix}gamingmascot
├ ${prefix}coveronepiecefb
├ ${prefix}bannerytcsgo
├ ${prefix}fbgamepubgcover
├ ${prefix}banneroflol
├ ${prefix}bannerofaov2
├ ${prefix}teamlogo
├ ${prefix}companylogo2
├ ${prefix}companylogo
├ ${prefix}gradientlogo
├ ${prefix}pencilsketch
├ ${prefix}gunlogogaming
├ ${prefix}banneroffreefire
├ ${prefix}letterlogos
├ ${prefix}bannerofoverwatch
├ ${prefix}bannerofapex
├ ${prefix}bannerofpubg
├ ${prefix}mascotstyle
├ ${prefix}logoaccording
╰❒ ${prefix}avataroverwatch
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
├ ${prefix}asmaulhusna
├ ${prefix}kisahnabi
├ ${prefix}jadwalshalat
├ ${prefix}randomquran
├ ${prefix}randomquran2
├ ${prefix}listsurah
├ ${prefix}tafsirsurah
╰❒ ${prefix}alquranaudio
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
├ ${prefix}list
├ ${prefix}addlist
├ ${prefix}dellist
├ ${prefix}update
├ ${prefix}store
├ ${prefix}kali
├ ${prefix}bagi
├ ${prefix}tambah
├ ${prefix}kurang
├ ${prefix}kalkulator
├ ${prefix}proses
╰❒ ${prefix}done
`
}


exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
├ ${prefix}sound1
├ ${prefix}sound2
├ ${prefix}sound3
├ ${prefix}sound4
├ ${prefix}sound5
├ ${prefix}sound6
├ ${prefix}sound7
├ ${prefix}sound8
├ ${prefix}sound9
├ ${prefix}sound10
├ ${prefix}sound11
├ ${prefix}sound12
├ ${prefix}sound13
├ ${prefix}sound14
├ ${prefix}sound15
├ ${prefix}sound16
├ ${prefix}sound17
├ ${prefix}sound18 
├ ${prefix}sound19
├ ${prefix}sound20
├ ${prefix}sound21
├ ${prefix}sound22
├ ${prefix}sound23
├ ${prefix}sound24
├ ${prefix}sound25
├ ${prefix}sound26
├ ${prefix}sound27
├ ${prefix}sound28
├ ${prefix}sound29
├ ${prefix}sound30
├ ${prefix}sound31
├ ${prefix}sound32
├ ${prefix}sound33
├ ${prefix}sound34
├ ${prefix}sound35
├ ${prefix}sound36
├ ${prefix}sound37
├ ${prefix}sound38
├ ${prefix}sound39
├ ${prefix}sound40
├ ${prefix}sound41
├ ${prefix}sound42
├ ${prefix}sound43
├ ${prefix}sound44
├ ${prefix}sound45
├ ${prefix}sound46
├ ${prefix}sound47
├ ${prefix}sound48
├ ${prefix}sound49
├ ${prefix}sound50
├ ${prefix}sound51
├ ${prefix}sound52
├ ${prefix}sound53
├ ${prefix}sound54
├ ${prefix}sound55
├ ${prefix}sound56
├ ${prefix}sound57
├ ${prefix}sound58
├ ${prefix}sound59
├ ${prefix}sound60
├ ${prefix}sound61
├ ${prefix}sound62
├ ${prefix}sound63
├ ${prefix}sound64
├ ${prefix}sound65
├ ${prefix}sound66
├ ${prefix}sound67
├ ${prefix}sound68
├ ${prefix}sound69
╰❒ ${prefix}sound70
`
}
