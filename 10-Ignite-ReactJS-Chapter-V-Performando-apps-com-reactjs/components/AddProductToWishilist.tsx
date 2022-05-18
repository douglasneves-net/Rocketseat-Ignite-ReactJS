export interface AddProductToWishilistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishilist({
  onAddToWishlist,
  onRequestClose
}: AddProductToWishilistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos ?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}