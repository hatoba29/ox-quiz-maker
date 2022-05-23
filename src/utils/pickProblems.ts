const pickProblems = (max: number, total: number): number[] => {
  const shuffled = [...Array(max).keys()].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, total)
}

export default pickProblems
