import type { Metadata } from "next"
import GalleryClient from "./GalleryClient"

export const metadata: Metadata = {
  title: "Gallery - Dolphin Public School",
  description: "Photos from events, activities, and campus life at Dolphin Public School",
}

export default function GalleryPage() {
  return <GalleryClient />
}
