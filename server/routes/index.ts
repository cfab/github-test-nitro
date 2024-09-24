export default eventHandler(async (event) => {
  assertMethod(event, 'POST');
  const body = await readBody(event);
  return body;
});
