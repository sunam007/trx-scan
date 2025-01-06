import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../../../constant/message";
import { accountDetails} from "../../../db/accountDetails";

export const getRegularAccount = async (req, res) => {
  try {
    const { address } = req.params;

    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: SUCCESS_MESSAGE.LOAD_SUCCESS("Account details"),
      data: {
        meta: null,
        accountDetails,
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