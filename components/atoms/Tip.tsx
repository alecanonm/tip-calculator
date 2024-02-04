const Tip = ({ text }: { text: String }) => (
  <button className='bg-veryDarkCyan text-white py-[7px] px-2 sm:w-24 w-[140px] rounded-md hover:bg-strongCyan'>
    {text}%
  </button>
)

export default Tip
