
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميتسوري$/i.test(m.text)) { 
     responses = [ 
 '*هــا؟!*'  
     ];
        }else if (/^سلام عليكم$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ];
        }else if (/^هلا$/i.test(m.text)) { 
     responses = [ 
       '*هلا*',  
     ];
    }else if (/^🗿🗿🗿$/i.test(m.text)) { 
     responses = [ 
       '*🗿🗿🗿🗿🗿🗿*',  
     ];
    }else if (/^لا$/i.test(m.text)) { 
     responses = [ 
       '*م بمزاجك*',  
     ];
    }else if (/^🗿$/i.test(m.text)) { 
     responses = [ 
       '*🗿🗿*',  
     ];
    }else if (/^🗿🗿$/i.test(m.text)) { 
     responses = [ 
       '*🗿🗿🗿🗿*',  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
       '*اجي احط ايدي ف بوقك*',  
     ];
        }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*شلحها🐦*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
    }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*شــوفــلــك كــلـــبــه*',  
     ];

       
       
    }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
       '*حبك برص احول🦎*',  
     ];
        }else if (/^بنتي$/i.test(m.text)) { 
     responses = [ 
       '*انا بنت اكيرا*',  
     ];
        }else if (/^منور$/i.test(m.text)) { 
     responses = [ 
       '*بــــنــــوري*',  
     ];
    
       }else if (/^🐦$/i.test(m.text)) { 
     responses = [ 
       '*🐦🐦*',  
     ];
    }else if (/^🐦🐦$/i.test(m.text)) { 
     responses = [ 
       '*🐦🐦🐦🐦*',  
     ];
    }else if (/^🐦🐦🐦$/i.test(m.text)) { 
     responses = [ 
       '*🐦🐦🐦🐦🐦🐦*',  
     ];
    }else if (/^🐦🐦🐦🐦$/i.test(m.text)) { 
     responses = [ 
       '*🐦🐦🐦🐦🐦🐦🐦🐦*',  
     ];
}else if (/^🐦🐦🐦🐦🐦$/i.test(m.text)) { 
     responses = [ 
       '*🐦🐦🐦🐦🐦🐦🐦🐦🐦🐦*',  
     ];
    }else if (/^سلام عليكم$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام و رحمة الله وبركاته*',  
     ];
    
     
          }else if (/^.مهام$/i.test(m.text)) { 
     responses = [ 
       '.المهام',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
