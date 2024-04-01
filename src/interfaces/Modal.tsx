import BookInterface from "./Book";

export default interface ModalBodyInterface {
    id?: number,
    book?: BookInterface,
    onClose: () => void;
}