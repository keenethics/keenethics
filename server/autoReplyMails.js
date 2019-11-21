module.exports = () => {
  return {
    messageFromMax(name) {
      return `
        <div style="font-family:sans-serif;max-width:700px;margin-top:10px;margin-bottom:10px;margin-right:auto;margin-left:auto;" >
          <h1 style="font-weight:600;font-size:22px;text-align:center;padding-left:0;margin-left:0;" >Message from Max</h1>

          <p style="font-size:14px;" >Hello there ${name},</p>
        
          <p style="font-size:14px;" >
              Thank you for getting in touch!<br>
              My team will get back to you within <b>1-2 business days</b>. In case it is urgent, <br>
              feel free to reach me on <a href="https://api.whatsapp.com/send?phone=+380968147266">WhatsApp</a>.
          </p>
        
          <p style="font-size:14px;" >Don’t worry, I will deliver on your request ASAP.</p>
        
          <p style="font-size:14px;" >Thanks again,<br>Max</p>
          
          <p style="font-size:14px;" >--</p>
        
          <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;" >
            <li style="display:inline-block;margin-left:0;" >Max Savonin <span style="color:red;" >•</span></li>
            <li style="display:inline-block;margin-left:0;" >Chief Executive Officer <span style="color:red;" >•</span></li>
            <li style="display:inline-block;margin-left:0;" >maxim.savonin@keenethics.com <span style="color:red;" >•</span></li>
            <li style="display:inline-block;margin-left:0;" >Mobile: +38 (094) 710 61 05 <span style="color:red;" >•</span></li>
            <li style="display:inline-block;margin-left:0;" >Skype: maxsav28 <span style="color:red;" >•</span></li>
          </ul>

          <img src="cid:keenethics" style="height: 15px">
        </div>
      `;
    },
    messageFromPaul(name) {
      return `
      <div style="font-family:sans-serif;max-width:700px;margin-top:10px;margin-bottom:10px;margin-right:auto;margin-left:auto;" >
        <h1 style="font-weight:600;font-size:22px;text-align:center;" >Message from Paul</h1>
        
        <p style="font-size:14px;" >Hello there ${name},</p>
      
        <p style="font-size:14px;" >
            Thank you for getting in touch!<br>
            My team will get back to you within <b>1-2 business days</b>. In case it is urgent, <br>
            feel free to reach me on the phone at +31 20 262 0944.
        </p>
      
        <p style="font-size:14px;" >Don’t worry, I will deliver on your request ASAP.</p>
      
        <p style="font-size:14px;" >Thanks again,<br>Paul</p>
        
        <p style="font-size:14px;" >--</p>
      
        <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;" >
          <li style="display:inline-block;margin-left:0;" >Paul van Workum <span style="color:red;" >•</span></li>
          <li style="display:inline-block;margin-left:0;" >Business Partner <span style="color:red;" >•</span></li>
          <li style="display:inline-block;margin-left:0;" >paul.van.workum@keenethics.com <span style="color:red;" >•</span></li>
          <li style="display:inline-block;margin-left:0;" >Mobile: +31 20 262 0944 <span style="color:red;" >•</span></li>
        </ul>

        <img src="cid:keenethics" style="height: 15px">
      </div>
      `
    }, 
  }
}