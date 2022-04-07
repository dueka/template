import { useQuery } from "react-query";
import { approvalListInterface } from "../../interfaces/approval";
import * as approval from "../api/approval";

function useGetApprovalList(options: {}) {
  const { data, status } = useQuery<approvalListInterface>(
    ["approval-list"],
    approval.approvalList,
    {
      ...options,
      retry: false
    }
  );

  return { data, status };
}

export { useGetApprovalList };
