const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nairobi/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© MeshTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707541188,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_04_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1vYmRZcDFHdWlqNnNFQTJpUzNoVzVnbUJrbEZIUFhiZ0xROC83Z2E5VGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm51T01UNEd3UWJpNmo4M3pQdlpfRVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjVkYTIyNDItZmQyMC00YTM4LWIzNWUtMjU3ODAzNDkyNmRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE1MCxcbiAgICAgIDMwLFxuICAgICAgMjE2LFxuICAgICAgMjEyLFxuICAgICAgMTkyLFxuICAgICAgMTQ5LFxuICAgICAgMjExLFxuICAgICAgMjQwLFxuICAgICAgMTM4LFxuICAgICAgMjIsXG4gICAgICAxODgsXG4gICAgICA1MixcbiAgICAgIDQyLFxuICAgICAgMTY3LFxuICAgICAgMjI1LFxuICAgICAgMjQyLFxuICAgICAgMjcsXG4gICAgICA1OCxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAxOTEsXG4gICAgICAxMTQsXG4gICAgICAyNDEsXG4gICAgICA5MixcbiAgICAgIDE3NCxcbiAgICAgIDEzOCxcbiAgICAgIDEzMSxcbiAgICAgIDI1MixcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgMTYwLFxuICAgICAgMjAzLFxuICAgICAgMTYsXG4gICAgICA3LFxuICAgICAgODAsXG4gICAgICAxMzMsXG4gICAgICAxOCxcbiAgICAgIDk1LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdRNkE4UlJSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDc1NDExODg6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzYzMjA1Njk5NjA3Nzo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZVgxK0VFRUpDanA3a0dHRHNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpKMXZ3bHdLTjdrOFJIMVc2dEZXWlExR0dOQzhNQkZIQjhCQjVqbGJvSFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS2dBRGpVQXBWZm96alY1YTdmbFlNTzZVUk9DWWtZUlpFOCtwQlRKeXFteHAzbnUzL0M2am5wZGRFK3lyN0tCS2hZQnhLa2dqWDZIVjRhMGUrUEFlQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHRZeTNrNlRJVnViWCtzZ0pOamtIUnlhTGlrZDJwOExyN0RUM0pvNWhhMjdMS1RqOEdQQk9lSHBVWFpaSWhiZEFvZGdTY2RoUVZSSk43YXlHVFNXaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA3NTQxMTg4OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzkzODc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1cvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPVy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MeshTechInfo ® 』```", //*『MESH KE』*\n youtube.com/@MeshKip"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MESH-MD",
  ownername:process.env.OWNER_NAME|| "MESH KE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
