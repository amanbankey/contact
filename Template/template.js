

const contactTemplate = (name, email, mobile, body) => {
    return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
      
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        
        <div style="background: linear-gradient(90deg, #ff7a18, #007bff); padding: 20px; text-align: center;">
          <h2 style="color: white; margin: 0;">New Contact Form</h2>
        </div>
  
        <div style="padding: 20px; color: #333;">
          <p>You received a new message:</p>
  
          <table style="width: 100%;">
            <tr>
              <td><b>Name:</b></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><b>Email:</b></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><b>Mobile:</b></td>
              <td>${mobile}</td>
            </tr>
          </table>
  
          <div style="margin-top: 20px;">
            <p><b>Message:</b></p>
            <div style="background: #f1f5ff; padding: 15px; border-radius: 10px; ">
              ${body}
            </div>
          </div>
        </div>
  
        <div style="text-align:center; padding:10px; font-size:12px;">
          © ${new Date().getFullYear()}
        </div>
  
      </div>
    </div>
    `;
  };
  
  module.exports = contactTemplate;