interface Props {
  name: string;
  age: number;
}


const Sample: React.FC<Props> = ({ name, age}) => {
  return(
    <>
      Sample Component
      <h1>{name}</h1>
      <h1>{age}</h1>
    </>
  );
}

export default Sample;