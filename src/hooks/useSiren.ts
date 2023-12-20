import { useRef } from "react";

const useSiren = (document: HTMLAudioElement | null) => {
  const isError = useRef<string | null>(null);

  const playSiren = async () => {
    if (document && document.play) {
      try {
        await document.play();
      } catch (error) {
        isError.current = (error as Error).message;
      }
    } else {
      isError.current = "Audio playback is not supported.";
    }
  };

  const stopSiren = () => {
    try {
      document &&
        document.pause &&
        (() => {
          document.pause();
          document.currentTime = 0;
        })();
    } catch (error) {
      isError.current = (error as Error).message;
    }
  };

  return {
    playSiren,
    stopSiren,
    errorSiren: isError.current,
  };
};

export default useSiren;
