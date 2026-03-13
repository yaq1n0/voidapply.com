import type { RejectionMode } from "@/types";

export const rejectionModes: RejectionMode[] = [
  {
    id: "dev-null",
    name: "/dev/null",
    description: "Your application gets piped directly to the void.",
    isGeneric: true,
  },
  {
    id: "ghost",
    name: "The Ghost",
    description: "Submit and... nothing. The most realistic mode.",
    isGeneric: true,
  },
  {
    id: "speedrun",
    name: "Speedrun Rejection",
    description: "How fast can we reject you? World record pace.",
    isGeneric: true,
  },
  {
    id: "fake-email",
    name: "Rejection Email",
    description: "A lovingly crafted corporate rejection email.",
    isGeneric: false,
  },
  {
    id: "ats-score",
    name: "ATS Score",
    description: "Watch AI grade your application into oblivion.",
    isGeneric: false,
  },
];
