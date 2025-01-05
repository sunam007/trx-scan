import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../../../constant/message";
import { accounts as data } from "../../../db/accounts";

export const getAccounts = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const _page = page ? parseInt(page) : 1; // whatever user sends or default value is 1
    const _limit = limit ? parseInt(limit) : 10; // whatever user sends or default value is 10

    const { accounts } = data;

    const totalAccountsCount = accounts?.length;
    const totalPages = Math.ceil(totalAccountsCount / _limit);
    const next_page = _page < totalPages ? _page + 1 : false;
    const prev_page = _page > 1 ? page - 1 : false;

    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: SUCCESS_MESSAGE.LOAD_SUCCESS("Accounts"),
      data: {
        meta: {
          total: totalAccountsCount,
          page: _page,
          per_page: _limit,
          total_pages: totalPages,
          count: totalAccountsCount,
          has_next_page: _page < totalPages,
          next_page: next_page,
          prev_page: prev_page,
        },
        accounts,
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
