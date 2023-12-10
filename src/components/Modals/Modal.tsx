"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Modal.module.css";
import Container from "../Container/Container";
import Title from "../Title/Title";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
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
      <div className={`${styles.modalContent} ${!showModal && styles.closed}`}>
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
      </div>
    </>
  );
};

export default Modal;
