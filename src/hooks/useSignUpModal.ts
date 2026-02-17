"use client";

import { createContext, useContext } from "react";

interface SignUpModalContextValue {
  isOpen: boolean;
  preselectedRallyPointId: string | null;
  open: (rallyPointId?: string) => void;
  close: () => void;
}

export const SignUpModalContext = createContext<SignUpModalContextValue>({
  isOpen: false,
  preselectedRallyPointId: null,
  open: () => {},
  close: () => {},
});

export function useSignUpModal() {
  return useContext(SignUpModalContext);
}
