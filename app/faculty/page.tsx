import type { Metadata } from "next"
import FacultyClientPage from "./FacultyClientPage"

export const metadata: Metadata = {
  title: "Faculty - Dolphin Public School",
  description: "Meet our experienced and dedicated faculty members at Dolphin Public School",
}

export default function FacultyPage() {
  return <FacultyClientPage />
}
