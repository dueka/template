import config from "../../config";
import { client } from "../client";

async function createProject(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/project/add-project`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

export { createProject };
