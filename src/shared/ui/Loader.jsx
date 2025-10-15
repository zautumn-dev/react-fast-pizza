import React from 'react'

function Loader() {
  return (
    //  inset 位置 设置
    // https://tailwindcss.com/docs/top-right-bottom-left#basic-example
    // backdrop-blur 模糊
    // https://tailwindcss.com/docs/backdrop-filter-blur#using-a-custom-value
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/40 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  )
}

export default Loader
