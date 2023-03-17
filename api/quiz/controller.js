//Require node-fetch
const fetch = require('node-fetch');

exports.fetchData = async(req,res,next)=>{
    try {
        let quiz = await fetch('https://opentdb.com/api.php?amount=5');
        quiz = await quiz.json();
        const quizHolder = quiz.results
        for(let i=0; i<quizHolder.length; i++){
            quizHolder[i].id = i + 1
        }
        res.status(200).json({
            status:"SUCCESS",
            data:{quizHolder}
        })
    } catch (error) {
        throw error
    }
}