import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../../../constant/message";
import { transactions as data } from "../../../db/transactions";

export const getTransactions = async (req, res) => {
  try {
    const { address } = req.params;
    const { page, limit } = req.query;

    const _page = page ? parseInt(page) : 1; // whatever user sends or default value is 1
    const _limit = limit ? parseInt(limit) : 10; // whatever user sends or default value is 10

    const { transactions } = data;

    const totalTransactionsCount = transactions?.length;
    const totalPages = Math.ceil(totalTransactionsCount / _limit);
    const next_page = _page < totalPages ? _page + 1 : false;
    const prev_page = _page > 1 ? page - 1 : false;

    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: SUCCESS_MESSAGE.LOAD_SUCCESS("Transactions"),
      data: {
        meta: {
          total: totalTransactionsCount,
          page: _page,
          per_page: _limit,
          total_pages: totalPages,
          count: totalTransactionsCount,
          has_next_page: _page < totalPages,
          next_page: next_page,
          prev_page: prev_page,
        },
        transactions,
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
