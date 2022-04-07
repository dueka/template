import config from "../../config";
import { client } from "../client";

async function approvalList() {
  const response = await client<any>(
    `${config.API_ENDPOINT}/approval-workflow/list-paginated/${0}/${20}`,
    "GET"
  );
  return response;
}

export { approvalList };
