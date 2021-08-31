import ReactModal from "react-modal";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>New Transaction</h1>
    </ReactModal>
  );
}
