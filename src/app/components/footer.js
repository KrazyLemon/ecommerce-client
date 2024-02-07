export default function Footer() {
    return (
        <>
            <footer className='bg-gray-800 text-white p-5 mt-3'>
                <div className='flex justify-between p-5'>
                    <div>
                        <h3 className='text-2xl font-bold'>Ecommerce</h3>
                        <p>Find the best products here</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>About Us</h3>
                        <p>Our company</p>
                        <p>Our team</p>
                        <p>Our blog</p>
                        
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Contact</h3>
                        <p>email:sales@example.com</p>
                        <p>phone:1234567890  </p>

                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Social Media</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </footer>
        </>
    );
}