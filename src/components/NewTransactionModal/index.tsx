import ReactModal from "react-modal";
import { Container } from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>New Transaction</h1>

        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <input type="submit" value="Cadastrar" />
      </Container>
    </ReactModal>
  );
}
