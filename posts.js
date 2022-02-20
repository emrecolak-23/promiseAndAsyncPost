const posts = [
  {title:"Post1", body:"Bu birinci post"},
  {title:"Post2", body:"Bu ikinci post"},
  {title:"Post3", body:"Bu üçüncü post"}
]

const listOfPosts = () => {
  posts.forEach(post => {
    console.log(post.title);
    console.log(post.body);
  })
}

const addNewPost = (post) => {
  return new Promise((resolve,reject)=> {

    if (post) {
      posts.push(post);
      resolve("Post Eklendi.");
    } else {
      reject("Yeni Post Bulunamadı.")
    }

  })
}
listOfPosts();
async function processPost() {
  try {
    await addNewPost({title:"Post 4", body:"Bu dördüncü post"});
    console.log("Yeni Post Eklendi")
    listOfPosts()
  } catch (error) {
    console.log(error)
  }
}
processPost();