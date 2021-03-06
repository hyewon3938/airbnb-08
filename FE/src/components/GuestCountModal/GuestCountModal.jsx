import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "@/actions/guestCountAction";
import GuestCount from "@GuestCountModal/GuestCount/GuestCount";
import ModalButtons from "@/components/ModalButtons";

const Modal = styled.div`
  position: absolute;
  width: 500px;
  height: 350px;
  top: 55px;
  left: 5px;
  background: white;
  border: solid 1px ${({ theme }) => theme.subColor};
  border-radius: 10px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuestCountModal = ({ closeClickHandler, modal }) => {
  const dispatch = useDispatch();

  const deleteClickHandler = () => {
    const actionObj = actions.deleteCount();
    dispatch(actionObj);
  };

  return (
    <>
      <Modal>
        <GuestCount ageType="adult" />
        <GuestCount ageType="children" />
        <GuestCount ageType="baby" />
        <ModalButtons
          deleteClickHandler={deleteClickHandler}
          closeClickHandler={closeClickHandler}
          modal={modal}
        />
      </Modal>
    </>
  );
};

export default GuestCountModal;
