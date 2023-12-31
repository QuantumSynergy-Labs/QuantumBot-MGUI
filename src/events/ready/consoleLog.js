// This event is called when the bot is ready and logged in.
module.exports = (client) => {
  const axios = require('axios');
  const currentDate = new Date();

  console.log(`----------------------------------------------------------------------------------------------------------------------------------------------`);
  console.log(`
        ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗████████╗██╗   ██╗███╗   ███╗███████╗██╗   ██╗███╗   ██╗███████╗██████╗  ██████╗██╗   ██╗
       ██╔═══██╗██║   ██║██╔══██╗████╗  ██║╚══██╔══╝██║   ██║████╗ ████║██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
       ██║   ██║██║   ██║███████║██╔██╗ ██║   ██║   ██║   ██║██╔████╔██║███████╗ ╚████╔╝ ██╔██╗ ██║█████╗  ██████╔╝██║  ███╗╚████╔╝ 
       ██║▄▄ ██║██║   ██║██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╔╝██║╚════██║  ╚██╔╝  ██║╚██╗██║██╔══╝  ██╔══██╗██║   ██║ ╚██╔╝  
       ╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚═╝ ██║███████║   ██║   ██║ ╚████║███████╗██║  ██║╚██████╔╝  ██║   
        ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                                                                                                    
                                               ██╗      █████╗ ██████╗ ███████╗                                                     
                                               ██║     ██╔══██╗██╔══██╗██╔════╝                                                     
                                               ██║     ███████║██████╔╝███████╗                                                     
                                               ██║     ██╔══██║██╔══██╗╚════██║                                                     
                                               ███████╗██║  ██║██████╔╝███████║                                                     
                                               ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝                                        
  [INFO]: This is the QuantumSynergy Labs MGUI bot interface. You will be able to see all of your bot logs here.
  [SUPPORT]: support@quantumsynergylabs.tech
  [DOCS]: https://docs.quantumsynergylabs.tech
  \x1b[32m[MONGODB]:\x1b[0m Connected to the database!
  \x1b[32m[INFO]:\x1b[0m Logged in as ${client.user.tag}!
  [CREDITS]: All rights reserved. QuantumSynergy Labs 2023.
-----------------------------------------------------------------------------------------------------------------------------------------------------------`);
};
