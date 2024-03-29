"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Modal.module.css";
import Container from "../Container/Container";
import Title from "../Headers/Headers";
import Button from "../Button/Button";
import Image from "next/image";
import closeBtn from "../../../public/images/icons/closeBtn.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  modalTitle: string;
  body: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  large?: boolean;
  tagline?: string;
  secondaryTitle?: string;
  isPrimaryCenter?: boolean;
  isSecondaryCenter?: boolean;
  isTaglineCenter?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  modalTitle,
  body,
  actionLabel,
  disabled,
  large,
  secondaryTitle,
  tagline,
  isPrimaryCenter,
  isSecondaryCenter,
  isTaglineCenter,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (disabled) {
        return;
      }

      e.preventDefault();
      onSubmit();
    },
    [disabled, onSubmit]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`${!showModal && styles.closed} ${styles.modalContainer}`}
        onClick={handleClose}
      ></div>
      <div
        className={`${styles.modalContent} ${!showModal && styles.closed} ${
          large && styles.modalLarge
        }`}
      >
        {/* Modal Content */}
        <div className={styles.modalWrapper}>
          <div className={styles.modalTitle}>
            <Title secondary={modalTitle} isSecondaryCentre />
            {/* Modal Close Button Start */}
            <Image
              onClick={handleClose}
              src={closeBtn}
              alt="Close button"
              className={styles.modalCloseButton}
            />
            {/* Modal Close Button End */}
          </div>
          <Container>
            <form className={styles.modalBody} onSubmit={handleSubmit}>
              <Title secondary={secondaryTitle} tagline={tagline} />
              <div className={styles.bodyContainer}>{body}</div>
              <div className={styles.buttonWrapper}>
                <Button disabled={disabled} label={actionLabel} />
              </div>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Modal;
