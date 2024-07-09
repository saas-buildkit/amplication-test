import { B2bSubmissionGogeta as TB2bSubmissionGogeta } from "../api/b2bSubmissionGogeta/B2bSubmissionGogeta";

export const B2BSUBMISSIONGOGETA_TITLE_FIELD = "id";

export const B2bSubmissionGogetaTitle = (
  record: TB2bSubmissionGogeta
): string => {
  return record.id?.toString() || String(record.id);
};
