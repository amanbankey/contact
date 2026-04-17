const { sendEmail } = require('../utils/sendMail');


const sendContactMail = async (req, res) => {
  const { name, email, message, mobile } = req.body;

  try {
    
    // console.log('deta', name, email, message, mobile)
    if(!name  || !email || !message || !mobile) {
        return res.status(400).json({
             success: false, message: "Please provide full details" 
        });
    }
    
    await sendEmail(email, " " , message, name, mobile)
    res.status(200).json({
         success: true, message: "Mail sent successfully"
     });

  } catch (error) {
    res.status(500).json({ success: false, message: "Mail not sent" });
  }
};


module.exports = {sendContactMail}