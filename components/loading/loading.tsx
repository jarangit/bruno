import Image from 'next/image'
import React from 'react'
import ReactLoading from 'react-loading'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="w-full flex justify-center h-[300px]  items-center ">
      <ReactLoading type={"spin"} color="#fff" />
    </div>
  )
}

export default Loading