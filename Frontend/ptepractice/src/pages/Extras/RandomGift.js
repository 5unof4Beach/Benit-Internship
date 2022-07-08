import React from "react";

function Gift(){
    const [gift, setGift] = React.useState("No gift pick yet")

    const giftList = ['gift1','gift2','gift3','gift4','gift5']

    function handleGiftPick(){
        setGift(prev => {
            let n = Math.floor(Math.random()*giftList.length)
            prev = giftList[n]
            return prev
        })
    }

    return(
        <React.Fragment>
            <p>{gift}</p>
            <button onClick={handleGiftPick}>Pick Gift</button>
        </React.Fragment>
    )

}

export {Gift}