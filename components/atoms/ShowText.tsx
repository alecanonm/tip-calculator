const ShowText = ({ text, price }: { text: String; price: String }) => {
  return (
    <div className='text-black flex items-center justify-between gap-20'>
      <p className='flex flex-col text-sm text-white'>
        <span>{text}</span>
        <span className='text-xs text-grayishCyan'>/ person</span>
      </p>
      <span className='text-4xl text-strongCyan'>${price}</span>
    </div>
  )
}

export default ShowText
