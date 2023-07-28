interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, price, onButtonClick, buttonText  }) => {

  const handleButtonClick = () => {
    // Handle button click logic here
    onButtonClick();
  };

  return (
    <>
     <h1>Card Component</h1>
     <img src={imageUrl} />
     <p>{title}</p>
     <p>{price}</p>
     <button onClick={handleButtonClick}>{buttonText}</button>
    </>
  );
}

export default Card;