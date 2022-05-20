const isValidProblems = (s: string): boolean => {
  let parsed

  // 1. is valid json?
  try {
    parsed = JSON.parse(s)
  } catch {
    return false
  }

  // 2. is array?
  if (!Array.isArray(parsed)) return false

  // 3. has valid structure?
  const sample = parsed[0]
  if (!Object.hasOwn(sample, 'problem')) return false
  if (!Object.hasOwn(sample, 'answer')) return false

  return true
}

export default isValidProblems
