"use client"

import { Project } from "@repo/domain/entities"

import { Button } from "./ui/button"

export function ProjectCard({
  project,
  deleteAction
}: {
  project: Project.Entity
  deleteAction: Project.Repository["delete"]
}) {
  return (
    <div className="item-center flex w-full flex-row gap-2">
      <div className="grid flex-1 place-items-center rounded-md border bg-white">
        <span className="">{project.name}</span>
      </div>

      <Button variant={"destructive"} onClick={() => deleteAction(project.id)}>
        X
      </Button>
    </div>
  )
}
