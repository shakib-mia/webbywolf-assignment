"use client";

import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";
import React from "react";

const Animation = () => {
  useHearthMotion();
  useLenis();
  return;
};

export default Animation;
