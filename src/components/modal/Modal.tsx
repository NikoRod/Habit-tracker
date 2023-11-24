interface Props {
  children: any;
  isOpen: any;
  closeModal: any;
}

export const Modal = ({ children, isOpen, closeModal }: Props) => {

  const handleModalClick = (e: { stopPropagation: () => any; }) => e.stopPropagation();

  return (

    <article 
    className={isOpen ? 'fixed z-50 top-0 left-0 w-full min-h-screen bg-[#000000bf] flex justify-center items-center' : 'hidden'}
    onClick={closeModal}
  >

    <div
      className='relative min-w-[500px] max-w-[600px] min-h-[320px] p-[1rem]flex flex-col justify-center items-center'
      onClick={handleModalClick}
    >

      {children}

    </div>

  </article>

  )
}