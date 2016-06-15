import React from 'react';

export default class Modal extends React.Component {
  static show(msg) {
    $('#sendEmailMessage').html(msg);
    $('#sendEmailPopup').modal('show');
  }

  static hide() {
    $('#sendEmailPopup').modal('hide');
  }

  render() {
    return(
      <div id="sendEmailPopup" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <span id="sendEmailMessage"></span>
              <div className="pull-right">
                <button type="button" id="ok-modal" className="button" onClick={Modal.hide}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
