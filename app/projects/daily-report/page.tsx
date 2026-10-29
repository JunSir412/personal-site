import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
export default function DailyReportPage() {
  const project = projects.find((item) => item.slug === "daily-report");
  if (!project) {
    notFound();
  }
  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
    </main>
  );
}
