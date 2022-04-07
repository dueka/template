import { useMutation } from "react-query";
import * as beneficiary from "../api/beneficiary";

function useCreateBeneficary(options = {}) {
  return useMutation(beneficiary.createBeneficiary, options);
}

export { useCreateBeneficary };
