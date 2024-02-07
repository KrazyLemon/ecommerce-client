
export default function Card({ name, price, image, description, rating, color }) {
    return (
        <>
            <div className=' w-1/4 p-3 border rounded-xl mx-2 shadow-md '>
                <img src={image} alt="Imagen de un producto"  />
                <h3 className='text-3xl font-bold flex justify-center'>{name}</h3>
                <p className='text-gray-500'>{description}</p>
                <div className="flex align-middle m-1 justify-between">
                    <span className='font-bold text-2xl'>${price}</span>
                    {/* <div className='flex items-center '>
                        {Array.from({ length: rating }, (_, index) => (
                            <svg
                                key={index}
                                className='w-6 h-6 fill-current text-yellow-500'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 2L15.09 8.36L22 9.27L17 13.62L18.18 20L12 17.77L5.82 20L7 13.62L2 9.27L8.91 8.36L12 2Z' />
                            </svg>
                        ))}
                    </div> */}
                    <button className='flex bg-rose-500 text-white text-xl rounded-full p-3'>
                        <img src="/cartwhite.svg" alt="Icono de carrito de compras" width={25} />
                    </button>
                </div>
            </div>
        </>
    );
}