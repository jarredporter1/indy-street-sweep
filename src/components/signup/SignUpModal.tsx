"use client";

import { useSignUpModal } from "@/hooks/useSignUpModal";
import { useRallyPoints } from "@/hooks/useRallyPoints";
import type { RallyPointWithCount } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { SignUpForm } from "./SignUpForm";

interface SignUpModalProps {
  initialRallyPoints: RallyPointWithCount[];
}

export function SignUpModal({ initialRallyPoints }: SignUpModalProps) {
  const { isOpen, preselectedRallyPointId, close } = useSignUpModal();
  const rallyPoints = useRallyPoints(initialRallyPoints);

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <SignUpForm
        key={isOpen ? "open" : "closed"}
        rallyPoints={rallyPoints}
        preselectedRallyPointId={preselectedRallyPointId}
        onClose={close}
      />
    </Modal>
  );
}
