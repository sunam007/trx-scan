import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../../../constant/message";
import { accountSummary as data } from "../../../db/accounts";

export const getAccountSummary = async (req, res) => {
  try {

    const { accountSummary } = data;
    console.log("🚀 ~ getAccounts ~ accountSummary:", accountSummary);

    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: SUCCESS_MESSAGE.LOAD_SUCCESS("Accounts Summary"),
      data: {
        meta: null,
        accountSummary,
      },
    });
  } catch (error) {
    return ResponseError(HttpStatusCode.InternalServerError, {
      res,
      message: ERROR_MESSAGES.SERVER_ERROR,
      errors: [{ message: ERROR_MESSAGES.SERVER_ERROR }],
    });
  }
};
