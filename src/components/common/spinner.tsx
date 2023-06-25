import primarySpinner from '@assets/primarySpinner.json';
import seondarySpinner from '@assets/secondarySpinner.json';
import LottiePlayer from 'react-lottie-player';

const Spinner = ({
  variant = 'primary',
}: {
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <LottiePlayer
      loop
      animationData={variant === 'secondary' ? seondarySpinner : primarySpinner}
      play
      style={{ width: 150, height: 150 }}
    />
  );
};

export default Spinner;
