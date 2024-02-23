import type { Project } from "../entities"
import { AsyncTaskResult } from "../types"

/**
 * # Create a new Project
 *
 * Check that there are less than 3 existing projects, and create a new project.
 *
 * @param newProject
 * @param projectRepository
 * @returns result
 */
export async function createNewProject(
  newProject: Project.NewEntity,
  projectRepository: Project.Repository
): AsyncTaskResult<Project.Entity> {
  return projectRepository.transact(async (tx) => {
    const result = await tx.getAll()

    if (!result.success)
      return {
        success: false,
        error: { code: "SERVER_ERROR", message: "Failed to load projects." }
      }

    if (result.data.length >= 3)
      return {
        success: false,
        error: {
          code: "NOT_ALLOWED",
          message: "There are too many projects. Delete one and try again."
        }
      }

    return await tx.create({ name: newProject.name })
  })
}
