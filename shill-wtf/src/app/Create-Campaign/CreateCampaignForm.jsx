import React from 'react'
import {useState} from 'react'
import Image from 'next/image'


const CreateTokenForm = () => {
  const [handle, setHandle] = useState("...");
  const [tokenName, setTokenName] = useState("...");
  const [ticker, setTicker] = useState("...");
  const [totalSupply, setTotalSupply] = useState(0);
  const [allocation, setAllocation] = useState(10);
  const [liquidity, setLiquidity] = useState(0);

  return (
    <div className="  rounded-lg  w-full max-w-md mx-auto my-10 relative" style={{scale: "1.1", paddingTop: "30px"}}>
      <form className="relative">
        <div className="mb-10 relative">
          <input type="text" id="x_handle"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
                        style={{paddingLeft:"120px"}} value={handle} onChange={(e) => {setHandle(e.target.value)}}
                    />
          <label htmlFor="x_handle" className="absolute left-0 transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">HANDLE</label>
        </div>
        <div className="mb-10 relative">
          <input type="text" id="token_name"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
                        style={{paddingLeft:"120px"}} value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                    />
          <label htmlFor="token_name" className="absolute left-0 transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">TOKEN NAME</label>
        </div>
        <div className="mb-10 relative">
          <input type="text" id="ticker"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
                        style={{paddingLeft:"120px"}}
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                    />
          <label htmlFor="ticker" className="absolute left-0  transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">TICKER</label>
        </div>
        <div className="mb-10 relative">
          <input type="number" id="total_supply"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
                        value={totalSupply}
                        onChange={(e) => setTotalSupply(e.target.value)}
                        style={{paddingLeft:"120px"}}
                    />
          <label htmlFor="total_supply" className="absolute left-0  transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">TOTAL SUPPLY</label>
        </div>
        <div className="mb-10 relative">
          <div style={{paddingLeft: "150px", display: "flex"}}>
              <input type="range" id="shillers_allocation" min="0" max="100" 
                            value={allocation}
                            onChange={(e) => setAllocation(e.target.value)}
                            style={{width: "200px"}}/>
            <p className="font-sans" style={{paddingLeft: "40px"}}>{allocation}</p>
          </div>
          <label htmlFor="shillers_allocation" className="absolute left-0 -top-5 transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">SHILLERS ALLOCATION</label>
        </div>
        <div className="mb-10 relative">
          <input type="number" id="liquidity"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
                            value={liquidity}
                            onChange={(e) => setLiquidity(e.target.value)}
                        style={{paddingLeft:"120px"}}

                    />
          <label htmlFor="liquidity" className="absolute left-0 transform translate-y-1/2 bg-yellow-300 px-2 py-1 rounded-full text-gray-700 font-bold">LIQUIDITY</label>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

const a = () => {
    return (
            <form onSubmit={() => {}}>
                <div style={{display: "flex", flexDirection:"column", paddingLeft:"80px"}}>
                    <div style={{width:"90%"}}>
                        <div> 
                        <input type="text" name="name" style={{borderBottom: "1px solid black"}} />
                        </div> 
                    </div>
                    <input type="text" name="name" style={{borderBottom: "1px solid black"}} />
                    <input type="text" name="name" style={{borderBottom: "1px solid black"}} />
                    <button type="submit">Submit</button>
                </div>
            </form> 
    )
}


const CreateCampaignForm = () => {
return (
    <div style={{position: "absolute", top:"80px" }}>
        <img src="/CreateCampaign/create-campaign-form-box.png" alt="Group 51" width="700" height="600" style={{position: "relative", zIndex: "1"}}/>
        <div style={{position: "relative", zIndex: "2", top: "-700px", display:"flex", flexDirection:"column"}}>
            <CreateTokenForm/>
        </div>
    </div>
)
}

export default CreateCampaignForm
