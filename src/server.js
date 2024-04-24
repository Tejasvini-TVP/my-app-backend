import express from 'express';

// PUT /articles/learn-react/upvote

let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    Comments: [],
},
 {
   name: 'learn-node',
   upvote: 0,
   Comments: [],
 },
{
    name: 'mongodb',
    upvote: 0,
    Comments: [],
}]
const app = express();
app.use(express.json());


// app.post('/hello', (req, res) => {
//    res.send(`Hello ${req.body.name}!`);
// });

// app.get('/hello/:name/goodbye/:otherName',(req,res) => {
//     // console.log(req.params);
//     const {name} = req.params;
//     res.send(`Hello ${name}!!`)
// })

app.put('/api/articles/:name/upvote', (req,res) => {
   const { name} = req.params;
   const article = articlesInfo.find(a => a.name === name);

   if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`)
   } else {
    res.send('That article doesn\'t exist');
   }
})

app.post('/api/articles/:name/comments',(req,res) => {
    const {name} = req.params;
    const {postedBy,text} = req.body;

    const article = articlesInfo.find(a => a.name === name);

    article.Comments.push({ postedBy,text});
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});