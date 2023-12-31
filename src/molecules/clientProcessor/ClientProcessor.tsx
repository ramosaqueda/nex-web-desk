"use client";
import React, { useState, useEffect } from "react";
import ClientProcessorProps from "@molecules/clientProcessor/interfaces/clientProcessor.interface";
const ClientProcessor: React.FC<ClientProcessorProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div className="">{children}</div>;
};

export default ClientProcessor;