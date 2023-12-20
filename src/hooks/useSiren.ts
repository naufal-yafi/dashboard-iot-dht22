import { useState } from "react";

const useSiren = (document: HTMLAudioElement | null) => {
  const [isError, setIsError] = useState<string | null>(null);

  const playSiren = () => {
    if (document && document.play) {
      try {
        document.play();
        setIsError(null);
      } catch (error) {
        setIsError((error as Error).message);
      }
    } else {
      setIsError("Audio playback is not supported.");
    }
  };

  const stopSiren = () => {
    if (document && document.pause) {
      try {
        document.pause();
        document.currentTime = 0;
        setIsError(null);
      } catch (error) {
        setIsError((error as Error).message);
      }
    } else {
      setIsError("Audio stopping is not supported.");
    }
  };

  return {
    playSiren,
    stopSiren,
    errorSiren: isError,
  };
};

export default useSiren;
