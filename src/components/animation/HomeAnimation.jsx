import Lottie from "lottie-react";

import homeAnimation from "../../assets/animation/homeLoader.json";

function HomeAnimation() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6px)]">
      <Lottie animationData={homeAnimation} loop={true} />
    </div>
  );
}

export default HomeAnimation;
