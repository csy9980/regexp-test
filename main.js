let str = `
010-1234-5678
csy9980@gmail.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi') //gi 에서 i 대문자 소문자 구분x
// const regexp = /the/gi
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA')
// console.log(str)


// console.log(
//   str.match(/\.$/gim)
// )
// 이스케이프 문자. \(백슬래시)기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[0-9]{1,}/g)
// )

// console.log(
//   str.match(/\bf\w{1,}/g) 
// )
// // 63개가 아닌 경계에서 시작하고, f로 시작하는 63개문자 중 1개 이상 연속 일치

// const h = ` the hello world !


// `
// console.log(
//   h.replace(/\s/g, '') 
// )
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)
