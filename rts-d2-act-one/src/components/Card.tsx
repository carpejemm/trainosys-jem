import { CardProps } from '../models'

// interface CardProps {
//   imageUrl: string;
//   title: string;
//   price: string;
//   buttonText: string;
// }

const Card: React.FC<CardProps> = ({ imageUrl, title, price, buttonText}) => {
  return (
    <>
      <h5>This is the Card Component</h5>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <button>{buttonText}</button>
    </>
  );
}

export default Card;