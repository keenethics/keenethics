import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { ContactUsContext } from '../context/contacts-context';
import Person from '../person';
import Checkbox from '../form/checkbox';
import { MaxS, PaulW, JeanA } from '../../static/contacts/contacts-data';
import FileUpload from '../form/upload-file-btn';

const handleStatusResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const ContactForm = () => {
  const {
    isPending,
    setIsPending,
    setStatus,
    setNotifyMessage,
    selectedCountry,
  } = useContext(ContactUsContext);
  let person;
  if (selectedCountry === 'NL') person = PaulW;
  else if (selectedCountry === 'US') person = JeanA;
  else person = MaxS;
  const [firstname, setFirstname] = useState({
    value: '',
    error: false,
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
  });
  const [message, setMessage] = useState({
    value: '',
    error: false,
  });
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [hasDiscount] = useState(false);
  const [file, setFile] = useState({
    value: '',
    error: false,
  });
  const [fileName, setFileName] = useState('Attach you file');
  const [fileSize, setFileSize] = useState('up to 10MB');

  const setInitialState = () => {
    setFirstname({ value: '', error: false });
    setEmail({ value: '', error: false });
    setMessage({ value: '', error: false });
    setFile({ value: '', error: false });
    setFileName('Attach you file');
    setFileSize('up to 10MB');
  };

  const unattachFile = (err) => {
    setFile(err);
    setFileName('Attach you file');
    setFileSize('up to 10MB');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify({
      firstname,
      email,
      message,
      lastname: { value: 'mockedLastname', error: '' },
      phone: { value: '123456789', error: '' },
      isSubscriber,
      hasDiscount,
      selectedCountry,
    }));

    fetch('/contact', {
      method: 'POST',
      body: formData,
    })
      .then(handleStatusResponse)
      .then((response) => response.json())
      .then((json) => {
        if (json && json.errorField) {
          setNotifyMessage(json.status.toString());
          if (json.errorField === 'firstname') setFirstname(json);
          if (json.errorField === 'email') setEmail(json);
          if (json.errorField === 'message') setMessage(json);
          if (json.errorField === 'file') unattachFile(json);
        }

        setIsPending(false);
        setStatus(json.status.toString());

        if (json.status.toString() === 'Message sent') {
          setInitialState();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="contacts-form">
      <form onSubmit={onSubmit}>
        {Person({
          ...person,
          wrapperClassnames: 'display-flex-md',
        })}
        <div className="input-cols">
          <div className="input-wrap">
            <input
              className={classnames({ error: firstname.error })}
              name="firstname"
              id="firstname"
              type="text"
              onChange={(event) => {
                setFirstname({
                  value: event.target.value,
                  error: '',
                });
              }}
              required
              value={firstname.value}
            />
            <span className="highlight" />
            <label htmlFor="firstname">Name</label>
          </div>
          <div className={firstname.errorField ? 'error-message' : 'error-none'}>
            {firstname.status}
          </div>
        </div>
        <div className="input-cols">
          <div className="input-wrap">
            <div className="input-email">
              <input
                className={classnames({ error: email.error })}
                name="email"
                id="email"
                type="email"
                onChange={(event) => {
                  setEmail({
                    value: event.target.value,
                    error: '',
                  });
                }}
                required
                value={email.value}
              />
              <span className="highlight" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className={email.errorField ? 'error-message' : 'error-none'}>
            {email.status}
          </div>
        </div>
        <div className="input-wrap">
          <textarea
            className={classnames({
              'message-textarea': true,
              error: message.error,
            })}
            name="message"
            placeholder="Your message"
            onChange={(event) => {
              setMessage({
                value: event.target.value,
                error: '',
              });
            }}
            value={message.value}
          />
        </div>
        <div className={message.errorField ? 'error-message' : 'error-none'}>
          {message.status}
        </div>
        <div className="input-cols">
          <FileUpload
            text={(fileName.length > 10 && fileName !== 'Attach you file')
              ? fileName.substring(0, 10).concat('...')
              : fileName}
            limit={fileSize}
            allowedExts=".pdf, doc, docx, jpeg, jpg, png, xls, xlsx, ppt, pptx"
            onChange={
              (e) => {
                setFile(e.target.files[0]);
                setFileName(e.target.files[0].name);
                setFileSize(` ${Math.round(e.target.files[0].size / 10000) / 100} MB `); // 1mb = 1000000
              }
            }
          />
          <div className={file.errorField ? 'error-message' : 'error-none'}>
            {file.status}
          </div>
        </div>
        <div className="grey-checkbox-wrapper">
          <Checkbox
            className="grey"
            text={(
              <>
I want to use a&nbsp;
                <a href="https://mailchi.mp/keenethics/offers-for-keen-subscribers" target="blanck" className="grey sub-dis">subscriber discount</a>
              </>
)}
            name="estimateFormIsSubscriber"
            id="estimateFormIsSubscriber"
            value="estimateFormIsSubscriber"
            onChange={() => {
              setIsSubscriber(!isSubscriber);
            }}
            isChecked={isSubscriber}
          />
        </div>
        <div className="submit-btn">
          <button
            type="submit"
            className={
              isPending ? 'button button-send pending' : 'button button-send'
            }
          >
            Let&apos;s talk
          </button>
        </div>
        <div className="privacy-policy">
            By submitting, I agree to KeenEthics’&nbsp;
          <a href="/privacy-policy" target="blanc" classNamve="">Privacy Policy</a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
