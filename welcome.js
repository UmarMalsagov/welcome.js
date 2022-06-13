import os from 'os'
export default function sistema (){
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
console.log(sistema())