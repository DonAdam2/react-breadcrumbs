import { useParams } from 'react-router-dom';

const FirstLevel = () => {
  const params = useParams();

  return (
    <div>
      <p>
        First level page, the ID is <strong>{params.firstLevel}</strong>
      </p>
    </div>
  );
};

export default FirstLevel;
