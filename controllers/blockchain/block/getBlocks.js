import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../../../constant/message";
import { blocks as data} from "../../../db/block/blocks";

export const getBlocks = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const _page = page ? parseInt(page) : 1; // whatever user sends or default value is 1
    const _limit = limit ? parseInt(limit) : 10; // whatever user sends or default value is 10

    const { blocks } = data;
    const descendingBlocks = blocks.reverse(); // latest block first

    const totalBlockCount = blocks?.length;
    const totalPages = Math.ceil(totalBlockCount / _limit);
    const next_page = _page < totalPages ? _page + 1 : false;
    const prev_page = _page > 1 ? page - 1 : false;

    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: SUCCESS_MESSAGE.LOAD_SUCCESS("Accounts"),
      data: {
        meta: {
          total: totalBlockCount,
          page: _page,
          per_page: _limit,
          total_pages: totalPages,
          count: totalBlockCount,
          has_next_page: _page < totalPages,
          next_page: next_page,
          prev_page: prev_page,
        },
        blocks:descendingBlocks,
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