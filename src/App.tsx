import ReactPlayer from 'react-player';
import { useSearchParams } from 'react-router-dom';

// const txID = 'IL5nfhl96Tvhxq0GpV7opSbX88T2l5eFJDaNudORbDs';

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
        // url={txId ? `${HOST_URL}${txId}` : 'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
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
