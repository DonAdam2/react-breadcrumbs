import { useParams } from 'react-router-dom';

const SecondLevel = () => {
  const params = useParams();

  return (
    <div>
      Second level page, the ID is <strong>{params.secondLevel}</strong>
    </div>
  );
};

export default SecondLevel;
