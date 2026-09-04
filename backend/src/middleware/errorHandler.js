export function errorHandler(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;
  if (statusCode === 500) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  res.status(statusCode).json({
    ok: false,
    error: err.message || 'Internal server error',
  });
}
