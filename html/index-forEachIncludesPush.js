const posts = ['Hi', 'Hello', 'Bye']

posts.forEach(post => console.log(post))

posts.push('new')

console.log(posts)

if(!posts.includes('Howdy')){
    posts.push('Howdy')
}

console.log(posts)
