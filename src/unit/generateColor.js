export default function generateColor() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  let finalColor = '#'
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 16)
    finalColor += hexArr[randomNum]
  }
  return finalColor
}
