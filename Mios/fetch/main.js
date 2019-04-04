async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
  
    return users
  }

const mainLogic = async () => {
const users = await getUsers()
console.log('los usuarios son', users)
}

mainLogic()