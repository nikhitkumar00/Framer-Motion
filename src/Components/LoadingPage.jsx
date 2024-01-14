import React, { useEffect, useState } from "react";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  if (!loading) return;

  return (
    <div className="fixed inset-0 z-[9999] animate-pulse flex h-screen w-screen items-center justify-center bg-[#FFAF1B] text-6xl text-[#DE711D]">
      LoadingPage
    </div>
  );
};

export default LoadingPage;
