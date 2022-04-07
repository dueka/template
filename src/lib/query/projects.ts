import { useMutation } from "react-query";
import * as projects from "../api/project";

function useCreateProject(options = {}) {
  return useMutation(projects.createProject, options);
}

export { useCreateProject };
