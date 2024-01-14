import React, { useEffect, useState } from "react";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#FFAF1B] text-6xl text-[#DE711D]">
      <span className="animate-pulse">LoadingPage</span>
    </div>
  );
};

export default LoadingPage;
