const getFileName = (s: string): string => {
  const matches = s.match(/.*(?=\.json)/)
  return matches !== null ? matches[0] : ''
}

export default getFileName
