import React from 'react'
import img1 from "../../img/tv.png"
import img2 from "../../img/mobile-0819.jpg"
import img3 from "../../img/device-pile-in.png"
import img4 from "../../img/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png"

function Content() {
  return (
    <>
     <div class="content">
        <div class="content_card">
            <div class="card_wrap flex_row">
                <div class="card_text">
                    <h1 class="font">Enjoy on your TV.</h1>
                    <h3 class="font">Watch on smart TVs, PlayStation, Xbox Chromecast, Apple TV, Blu-ray players and  more.
                    </h3>
                </div>
                <img src={img1} alt="" class="img1"/>
            </div>
        </div>
        <div class="content_card ">
            <div class="card_wrap flex_row reverse_card ">
                <img src={img2} alt="" class="img2"/>
                <div class="card_text">
                    <h1 class="font">Download your shows to watch offline.</h1>
                    <h3 class="font">Save your favourites easily and always have  something to watch.</h3>
                </div>
            </div>
        </div>
        <div class="content_card">
            <div class="card_wrap flex_row">
                <div class="card_text">
                    <h1 class="font">Watch everywhere.</h1>
                    <h3 class="font">Stream unlimited movies and TV shows on  your phone, tablet, laptop, and TV..</h3>
                </div>
                <img src={img3} alt="" class="img3"/>
            </div>
        </div>
        <div class="content_card ">
            <div class="card_wrap flex_row reverse_card">
                <img src={img4}
                    alt="" class="img4"/>
                <div class="card_text">
                    <h1 class="font">Create profiles for children.</h1>
                    <h3 class="font">Send children on adventures with their favourite characters in a space made just for
                        them—free with your membership.</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content