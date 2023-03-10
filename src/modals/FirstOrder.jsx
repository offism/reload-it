import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalBox, ModalBoxHeader, ModalCloseBtn,ModalTextHeader,ModalText,ModalTitle,ModalForm, ModalInput,ModalSubmitBtn} from './firstOrder.js'
function FirstOrder({btnText, btnClass,modalTitle1,modalTitle2,modalTitleText}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
      <Button className={btnClass} onClick={handleShow}>
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalBox>
          <ModalBoxHeader>
            <ModalCloseBtn onClick={handleClose}><i className="uil uil-multiply"></i></ModalCloseBtn>
          </ModalBoxHeader>
          <ModalTextHeader>
            <ModalTitle><span className='modalSpan'>{modalTitle1}</span> {modalTitle2}</ModalTitle>
            <ModalText>{modalTitleText}</ModalText>
          </ModalTextHeader>
          <ModalForm>
            <ModalInput type={'text'} placeholder={'имя'}/>
            <ModalInput type={'phone'} placeholder={'номер телефона'}/>
            <ModalInput type={'text'} placeholder={'telegram username'}/>
            <ModalSubmitBtn onClick={handleClose}>Отправить</ModalSubmitBtn>
          </ModalForm>
        </ModalBox>
      </Modal>
    </>
  );
}

export default FirstOrder