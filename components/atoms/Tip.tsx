const Tip = ({ text }: { text: String }) => (
  <button className='bg-veryDarkCyan text-white py-[7px] px-2 w-24 rounded-md hover:bg-strongCyan'>
    {text}%
  </button>
)

export default Tip
