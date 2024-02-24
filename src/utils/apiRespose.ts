export const apiResponse = (message: any, statusCode: number) => {
  return new Response(JSON.stringify({ message: message }), {
    status: statusCode,
  });
};
