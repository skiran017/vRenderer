import ReactPlayer from 'react-player';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();

  const txID = searchParams.get('tx');
  return (
    <div
      style={{
        display: 'flex',
        widows: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <ReactPlayer
        controls={true}
        light={true}
        playing={true}
        url={`https://www.arweave.net/${txID}`}
        height={'620px'}
        width={'90%'}
        style={{
          border: '1px solid black',
          borderRadius: '6px',
        }}
      />
    </div>
  );
}

export default App;
