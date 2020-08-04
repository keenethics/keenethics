const moment = require('moment');

const renderPreFooter = (data) => `
<ol style="font-size:14px;margin:10px 0;list-style-type:decimal;">
  <li>Name: ${data.name || '-'}</li>
  <li>Email: ${data.email}</li>
  <li>Phone: ${data.phone}</li>
  <li>Selected date: ${moment(data.selectedDate).format('dddd, MMMM D, YYYY')}</li>
  <li>Selected time: ${data.selectedTime || '-'}</li>
  <li>Message: ${data.idea}</li>
</ol>
`;

// https://calendly.com/keenethics/30min

const thanksMessageFromUser = (data) => `
  <div style="font-fimily:sans-serif; max-width:700px;">
   <h1 style="text-align: center;">Message from Max</h1>
   <p>Hello ${data.name},
    <br>
    Thank you for getting in touch!
    <br> I am looking forward to talking to you
    ${moment(data.selectedDate).format('dddd, MMMM D, YYYY')}.
    <br>
    In case you will have a change of plans,
    feel free <a href="https://calendly.com/irene-keenethics">
    to reschedule the meeting with me.
    </a>
   </p>
   <p>
   Have in mind, you will receive additional questions because
   making software is close to rocket science and every detail counts.
   <br>
   Meanwhile, you can jump-start the rocket project by
    <a href="https://dochub.com/alex_pletnov/eBY7OkW/nda-with-keenethics-docx?dt=R_3JL7iV4EvycAPsm1is">
     signing the NDA.
    </a>
   </p>
   <p>Talk you soon,
    <br>
    Max
   </p>
   <p style="font-size:14px;margin: 10px 0 0;" >
    P.S. Just in case, here is the copy of your submission:
    ${renderPreFooter(data)}
   </p>
   <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;list-style-type:none;" >
    <li style="display:inline-block;margin-left:0;">Irene Krot <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Head of Engagement <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;"><a href="mailto:irene@keenethics.com">irene@keenethics.com</a> <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Mobile: <a href="tel:+380947106105">+38 (094) 710 61 05</a> <span style="color:red;" >•</span></li>
  </ul>

  <img src="cid:keenethics" width="110px" style="width: 110px;">
  </div>
  `;

module.exports = thanksMessageFromUser;
