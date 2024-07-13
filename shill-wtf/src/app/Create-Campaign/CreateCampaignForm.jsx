import React from 'react'
import Image from 'next/image'

const CreateCampaignForm = () => {
return (
    <div className="flex flex-col justify-center items-center p-5 m-5 h-[480px] w-[800px]">
        <div className="w-90 h-90" style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <Image src="/CreateCampaign/DoubleBox.png" alt="Group 51" layout="fill" objectFit="contain" />
        </div>
    </div>
)
}

export default CreateCampaignForm