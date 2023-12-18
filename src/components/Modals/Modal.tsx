"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Modal.module.css";
import Container from "../Container/Container";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Image from "next/image";
import closeBtn from "../../../public/images/icons/closeBtn.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  large?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
  large,
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

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

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
            <Title primaryTitle={title} />
          </div>
          <Container>
            <div>{body}</div>
            <div className={styles.buttonWrapper}>
              {secondaryAction && secondaryLabel && (
                <Button
                  outline
                  disabled={disabled}
                  label={secondaryLabel}
                  onClick={handleSecondaryAction}
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
          </Container>

          {/* Modal Close Button Start */}
          <Image
            onClick={handleClose}
            src={closeBtn}
            alt="Close button"
            className={styles.modalCloseButton}
          />
          {/* Modal Close Button End */}
        </div>
      </div>
    </>
  );
};

export default Modal;
