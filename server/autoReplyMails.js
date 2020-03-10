const renderPreFooter = (type, data) => {
  if (type === 'contacts') {
    return `
<ol style="font-size:14px;margin:10px 0;list-style-type:decimal;">
  <li>Name: ${data.name || '-'}</li>
  <li>Message: ${data.message || '-'}</li>
</ol>
`;
  }

  if (type === 'estimate') {
    return `
<ol style="font-size:14px;margin:10px 0;list-style-type:decimal;">
  <li>Name: ${data.name || '-'}</li>
  <li>Stage: ${data.stage}</li>
  <li>Services Needed: ${data.services}</li>
  <li>Project management: ${data.pm || '-'}</li>
  <li>Expected budget: ${data.budget || '-'}</li>
  <li>Timeframe: ${data.timeframe || '-'}</li>
  <li>Start: ${data.start || '-'}</li>
  <li>Your message: ${data.message || '-'}</li>
</ol>
`;
  }

  return '';
};

module.exports = {
  messageFromIrene(type, data) {
    return `
<div style="font-family:sans-serif;max-width:700px;margin-top:10px;margin-bottom:10px;margin-right:10px;color:#000;" >
  <p style="font-size:14px;" >
    Hello there ${data.name || ''},
  </p>
  <p style="font-size:14px;">
    Thank you for getting in touch!<br>
    I will get back to you <strong>within 23 hours</strong> but you can
    <a href="https://calendly.com/irene-keenethics" target="_blank">book a meeting with me</a>
    for the earliest time available.
  </p>
  <p style="font-size:14px;">
    Have in mind, you will receive additional questions because making software is
    close to rocket science and every detail counts.<br>
    Meanwhile, you can jump-start the <del>rocket</del> project by
    <a href="https://dochub.com/alex_pletnov/eBY7OkW/nda-with-keenethics-docx?dt=R_3JL7iV4EvycAPsm1is" target="_blank">
      signing the NDA
    </a>
  </p>
  <p style="font-size:14px;">
    Talk to you soon, <br>
    Irene
  </p>
  <p style="font-size:14px;margin: 10px 0 0;" >
    P.S. Just in case, here is the copy of your submission:
  </p>
  ${renderPreFooter(type, data)}
  <p style="font-size:14px;" >--</p>

  <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;list-style-type:none;" >
    <li style="display:inline-block;margin-left:0;">Irene Krot <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Head of Engagement <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;"><a href="mailto:irene@keenethics.com">irene@keenethics.com</a> <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Mobile: <a href="tel:+380947106105">+38 (094) 710 61 05</a> <span style="color:red;" >•</span></li>
  </ul>

  <img src="cid:keenethics" width="110px" style="width: 110px;">
</div>
    `;
  },
  messageFromPaul(type, data) {
    return `
    <div style="font-family:sans-serif;max-width:700px;margin-top:10px;margin-bottom:10px;margin-right:10px;color:#000;" >
    <p style="font-size:14px;">
      Hello there ${data.name || ''},
    </p>
    <p style="font-size:14px;">
      Thank you for getting in touch!<br>
      I will get back to you <strong>within 23 hours</strong> but you can reach me on the phone at
      <a href="tel:+31202620944" target="_blank">+31 20 262 0944</a>
      right now.
    </p>
    <p style="font-size:14px;">
      Have in mind, you will receive additional questions because making software is
      close to rocket science and every detail counts.<br>
      Meanwhile, you can jump-start the <del>rocket</del> project by
      <a href="https://dochub.com/alex_pletnov/eBY7OkW/nda-with-keenethics-docx?dt=R_3JL7iV4EvycAPsm1is" target="_blank">
        signing the NDA
      </a>
    </p>
    <p style="font-size:14px;">
      Talk to you soon,<br>Paul
    </p>
    <p style="font-size:14px;margin: 10px 0 0;" >
      P.S. Just in case, here is the copy of your submission:
    </p>
    ${renderPreFooter(type, data)}
    <p style="font-size:14px;" >--</p>

    <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;list-style-type:none;" >
      <li style="display:inline-block;margin-left:0;">Paul van Workum <span style="color:red;" >•</span></li>
      <li style="display:inline-block;margin-left:0;">Engagement Manager <span style="color:red;" >•</span></li>
      <li style="display:inline-block;margin-left:0;"><a href="mailto:paul.van.workum@keenethics.com">paul.van.workum@keenethics.com</a> <span style="color:red;" >•</span></li>
      <li style="display:inline-block;margin-left:0;">Mobile: <a href="tel:+31202620944">+31 20 262 0944</a> <span style="color:red;" >•</span></li>
    </ul>

    <img src="cid:keenethics" width="110px" style="width: 110px;">
  </div>
`;
  },
  messageFromJean(type, data) {
    return `
    <div style="font-family:sans-serif;max-width:700px;margin-top:10px;margin-bottom:10px;margin-right:10px;color:#000;" >
  <p style="font-size:14px;">
    Hello there ${data.name || ''},
  </p>
  <p style="font-size:14px;">
    Thank you for getting in touch!<br>
    I will get back to you <strong>within 23 hours</strong> but you can reach me on the phone at
    <a href="tel:+19292141392" target="_blank">+1 (929) 214 1392</a>
    right now.
  </p>
  <p style="font-size:14px;">
    Have in mind, you will receive additional questions because making software is
    close to rocket science and every detail counts.<br>
    Meanwhile, you can jump-start the <del>rocket</del> project by
    <a href="https://dochub.com/alex_pletnov/eBY7OkW/nda-with-keenethics-docx?dt=R_3JL7iV4EvycAPsm1is" target="_blank">
      signing the NDA
    </a>
  </p>
  <p style="font-size:14px;">
    Talk to you soon,<br>Jean-Marc
  </p>
  <p style="font-size:14px;margin: 10px 0 0;" >
    P.S. Just in case, here is the copy of your submission:
  </p>
  ${renderPreFooter(type, data)}
  <p style="font-size:14px;" >--</p>

  <ul style="font-size:14px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-left:0;list-style-type:none;" >
    <li style="display:inline-block;margin-left:0;">Jean-Marc Arsan <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Technical Engagement Manager <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;"><a href="mailto:jean.marc.arsan@keenethics.com">jean.marc.arsan@keenethics.com</a> <span style="color:red;" >•</span></li>
    <li style="display:inline-block;margin-left:0;">Mobile: <a href="tel:+19292141392">+1 (929) 214 1392</a> <span style="color:red;" >•</span></li>
  </ul>

  <img src="cid:keenethics" width="110px" style="width: 110px;">
</div>
`;
  },
};
