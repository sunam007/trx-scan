import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../../../utils/response";
import { accounts } from "../../../db/accounts";

export const getAccounts = async (req, res) => {
  try {
    console.log(accounts);
    return ResponseSuccess(HttpStatusCode.Ok, {
      res,
      message: "Successfully fetched accounts",
      data: {
        // meta: {
        //   total: totalOrdersCount,
        //   page: _page,
        //   per_page: _limit,
        //   total_pages: totalPages,
        //   count: totalOrdersCount ? totalOrdersCount : orders?.length,
        //   has_next_page: _page < totalPages,
        //   next_page: next_page,
        //   prev_page: prev_page,
        // },
        accounts,
      },
    });
  } catch (error) {
    return ResponseError(HttpStatusCode.InternalServerError, {
      res,
      message: "Internal Server Error",
      errors: "An error occurred while fetching accounts",
    });
  }
};
