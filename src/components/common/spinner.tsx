import spinner from '@assets/spinner.json';
import LottiePlayer from 'react-lottie-player';

const Spinner = () => {
  return (
    <LottiePlayer
      loop
      animationData={spinner}
      play
      style={{ width: 150, height: 150 }}
    />
  );
};

export default Spinner;
