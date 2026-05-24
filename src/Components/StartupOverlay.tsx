"use client";

import React, { useState } from "react";
import StartupScreen from "./StartupScreen";

export default function StartupOverlay() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) return null;

  return <StartupScreen onFinish={() => setLoaded(true)} />;
}

