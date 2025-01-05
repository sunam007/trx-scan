export const ResponseSuccess = (code = 200, { res, message, data = null }) => {
  return res.status(code).json({
    status: true,
    message,
    ...(data && { data }),
  });
};

export const ResponseError = (
  code = 200,
  { res, message, errors = null, data = null }
) => {
  return res.status(code).json({
    status: false,
    message,
    ...(errors && { errors }),
    ...(data && { data }),
  });
};
