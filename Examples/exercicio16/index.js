const dayjs = require('dayjs')



function aniversario(date){
    const birthday = dayjs(date)
    const today = dayjs()

    let age = today.diff(birthday, 'year')
    let nextBirthday = birthday.add(age + 1, 'year')
    let nextBirthdayInDays = nextBirthday.diff(today, 'day')
    console.log(`Idade: ${age}`)
    console.log(`Proximo aniversario: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${age + 1}: ${nextBirthdayInDays} `)

}
console.log(aniversario('08/19/2005'))

//dayjs().format() 
// current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

//dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'

//dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'

