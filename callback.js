const posts = [
    {title:'post one' ,body:'this is post one'},
    {title:'post two',body:'this is post two'}
];
function getPost(){
    setTimeout(()=> {
        let output ='';
        posts.forEach((post,index)=>{
            output= output+ `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}
getPost();
createPost({title:'post three',body:'this is  post three'},getPost);