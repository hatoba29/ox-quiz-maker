const humanizeTime = (t: number): string => {
  const M_TO_MS = 60000
  const S_TO_MS = 1000

  const m = Math.floor(t / M_TO_MS)
  const s = Math.floor(t / S_TO_MS)

  if (m === 0) {
    return `${s}초`
  }
  return `${m}분 ${s}초`
}

export default humanizeTime
