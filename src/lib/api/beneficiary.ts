import config from "../../config";
import { client } from "../client";

async function createBeneficiary(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/add-beneficiary`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

export { createBeneficiary };
