import React, { useEffect, useState } from "react";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex h-dvh w-screen items-center justify-center bg-[#FFAF1B] text-6xl text-[#DE711D]">
      <span className="animate-pulse">Loading...</span>
    </div>
  );
};

export default LoadingPage;
