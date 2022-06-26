//? const client = require('twilio')('TwilioSidValue', 'twilioAuthTokenValue');
const client = require('twilio')(
  'AC0a1bd7c763e760d3f977ccc73c1100e8',
  '897adf26cb838d956661b93843ee17f6'
);

const sendMessage = () => {
  client.messages
    .create({
      body: 'Hello from Node, Kshitiz Don haha',
      to: '+977 9816008152', //? Replace this ph no. with number to whom you want to send sms
      from: '+19897689220', //? this is our twilio number
    })
    .then((message: any) => {
      console.log(message.sid);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

module.exports = sendMessage;
