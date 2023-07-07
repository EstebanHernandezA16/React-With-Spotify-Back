import jwt from 'jsonwebtoken'

export const SECRET_KEY = 'JxmxSyNxV5HQtZdvqdjg1zgQxG8CEH4w4bU36swBXsM='
export const signToken = (tokenInfo) =>{
    const header = {
        algorithm: 'HS256',
      }
     
      const token = jwt.sign(tokenInfo, SECRET_KEY, header)

      return token

}
