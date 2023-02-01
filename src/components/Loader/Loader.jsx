import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeCircles
        height="40"
        width="40"
        color="pink"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </>
  );
};

export default Loader;
