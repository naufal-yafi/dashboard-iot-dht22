import { useEffect, useState } from "react";

const useSiren = () => {
  const [isError, setIsError] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio("/siren.mp3");
      setAudio(newAudio);
    }
  }, []);

  const playSiren = () => {
    if (audio && audio.play) {
      try {
        audio.play();
        setIsError(null);
      } catch (error) {
        setIsError((error as Error).message);
      }
    } else {
      setIsError("Audio playback is not supported.");
    }
  };

  const stopSiren = () => {
    if (audio && audio.pause) {
      try {
        audio.pause();
        audio.currentTime = 0;
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
