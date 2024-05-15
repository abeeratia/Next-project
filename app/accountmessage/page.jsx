import Image from 'next/image'
import React from 'react'

function AccountMessage() {
  return (
    <div className="flex h-vh flex-col justify-center items-center ">
        <div className='w-[50px] h-[50px]'>
        <Image
      src="../../public/ant-design_like-outlined.svg"
      width={500}
      height={500}
      alt="Picture of the author"
      className="rounded-full "
    />
        </div>
        <div>
            <h1 >Your Account Have been Activated successfully</h1>
        </div>

    </div>
  )
}

export default AccountMessage