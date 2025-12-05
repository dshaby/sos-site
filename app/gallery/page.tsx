import type { Metadata } from "next";
import GalleryPageContent from "@/components/GalleryPageContent";

export const metadata: Metadata = {
  title: "Project Gallery | SOS Standing Ovation Surround Sound",
  description:
    "Browse real TV mounting, home theater, outdoor audio, security camera, and network projects across Los Angeles.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
