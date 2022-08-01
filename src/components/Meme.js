import React from 'react';
import '../index.css';

function Meme(){
    const [meme, memeFunc] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [])

    function getMeme(){
        const memesArray = allMeme.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let newUrl = memesArray[randomNumber].url

        memeFunc(oldValue => (
            {
                ...oldValue,
                randomImage: newUrl
            }
        ))

        meme.topText = "";
        meme.bottomText = "";
       
    }

    function handleChange(event){
        console.log(event.target)
        const {name, value} = event.target
        memeFunc(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return(
        <div>
            <form >
                <div className='inputs'>
                    <input 
                        type='text' 
                        placeholder='Top text'  
                        value={meme.topText}
                        name='topText'
                        onChange={handleChange}
                    />
                    <input 
                        type='text' 
                        placeholder='Bottom text'
                        value={meme.bottomText}
                        name='bottomText'
                        onChange={handleChange}
                    />
                </div>
                <button type='button' onClick={getMeme}>Get a new meme image 🖼</button>
            </form>
            <div className='meme--container'>
                <img src={meme.randomImage} className='meme' alt=''/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme

