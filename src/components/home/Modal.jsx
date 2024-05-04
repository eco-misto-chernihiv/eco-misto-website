import * as Dialog from "@radix-ui/react-dialog";
import styles from "@styles/react/Modal.module.css";

export default function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({ children }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.backdrop} />
      <Dialog.Close className={styles.close}>X</Dialog.Close>
      <Dialog.Content className={styles.content}>{children}</Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Close = Dialog.Close;
