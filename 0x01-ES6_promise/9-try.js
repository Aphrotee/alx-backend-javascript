export default function guardrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
  } catch (err) {
    result = `Error: ${err.message}`;
  }
  queue.push(result);
  queue.push('Guardrail was processed');
  return queue;
}
