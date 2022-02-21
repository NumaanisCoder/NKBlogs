

function App() {
  return (
    <>
    <div id="home"></div>
    <h1 className="text-2xl text-center font-extrabold bg-white"> NK BLOGS</h1>
    <nav className="bg-blue-700 sticky top-0">
      <ul className="flex text-white justify-center p-3 font-bold">
        <li className="mx-3"><a href="#home">Home</a></li>
        <li className="mx-3"><a href="#trend">Trending Games</a></li>
        <li className="mx-3"><a href="#new">New Games</a></li>
      </ul>
    </nav>
    <br />
    <div className="p-2" id="container">
      <h2 className="text-3xl text-blue-700 text-center font-extrabold">Gaming New</h2>
      <br />
      <h3 className="text-xl text-center font-bold">Sony PlayStation 5 Goes for Pre-Order Again on February 22 at 12 Noon</h3>
      <br />
      <p className="my-2">It has been confirmed that the next PlayStation 5 restock is now scheduled for February 22, 2022, at 12 PM. The console will be available with retailers such as <b>Amazon, ShopatSC, and GamesTheShop</b> . This will be the second restock of the year 2022, with the last restock taking place in January.</p>
      <img src="https://twinfinite.net/wp-content/uploads/2020/06/PS5-4-scaled.jpg" alt="" />
      <br />
    </div>
    
    <hr />
    <div className="p-3 mx-5 xl:m-auto xl:w-1/2 xl:p-2" id="trend">
      <h1 className="text-3xl text-blue-700 text-center font-extrabold">Trending Games</h1>
      <br />
      <img className="" src="https://images6.alphacoders.com/108/thumb-1920-1082417.jpg" alt="" />
      <p className="text-center font-bold">Horizon Forbidden West</p>
      <br />
      <img src="https://www.theindianwire.com/wp-content/uploads/2019/12/Fortnite-The-Indian-Wire-1024x512.jpg" alt="" />
      <p className="text-center font-bold">Fortnite</p>
      <br />
      <img src="https://coolthemestores.com/wp-content/uploads/2021/06/valorant-wallpaper-background.jpg" alt="" />
      <p className="text-center font-bold">Valorant</p>
      <br />
      <img src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg" alt="" />
      <p className="text-center font-bold">Red dead Redemption <b className="text-red-700">2</b></p>
      <br />
      <img src="https://i.ytimg.com/vi/IfrfJn_-24g/maxresdefault.jpg" alt="" />
      <p className="text-center font-bold">Uncharted : Legacy of thieves</p>
    </div>
    <div className="my-8"></div>
    <hr />
    <div className="my-8"></div>
    <div className="my-4 mx-5  xl:m-auto xl:w-1/2 xl:p-2" id="new">
      <h1 className="text-2xl text-blue-700 text-center font-extrabold">NEW GAMES</h1>
      <br />
    <img src="https://pbs.twimg.com/media/FJo0YOlXoAEpoNh?format=jpg&name=4096x4096" alt="" />
    <p className="text-center font-bold">Elder rings</p>
    <br />
    <img className="" src="https://images6.alphacoders.com/108/thumb-1920-1082417.jpg" alt="" />
      <p className="text-center font-bold">Horizon Forbidden West</p>
      <br />
    <img src="https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-g1c-00-1920x1080-4d2155604622.jpg?h=720&resize=1&w=1280" alt="" />
    <p className="text-center font-bold">Dying Light <b className="text-red-600">2</b></p>
    <br />
    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1oH1jUZj1VZYxey5Mp8vYP/558408976d9552372a2cc3952db69458/page-meta_R6X.png" alt="" />
    <p className="text-center font-bold">RainbowSix <b className="bg-yellow-200">Extraction</b></p>
    <br />
    </div>

    <div id="ending">
      <h1 className="bg-blue-700 text-center text-white">Copyright© NK Corporation</h1>
    </div>
    </>
  );
}

export default App;
