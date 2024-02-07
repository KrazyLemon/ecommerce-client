export default function Banner() {
    return (
        <>
            <main>
               <section className="gradient relative">
                    <div className="flex justify-around ">
                        <div className="mt-28 p-3">
                            <h1 className="text-5xl text-white font-bold mb-2">Welcome to Sweet Delights Online!</h1>
                            <p className="text-white font-semibold text-xl">Indulge your sweet tooth in our online store filled with irresistible treats.<br />From exquisite chocolates to colorful candies, we've got a delightful selection to satisfy your cravings and sweeten your moments.</p>
                            <p className="text-white font-semibold text-xl">Explore our curated collection of high-quality sweets from around the world. We believe every bite should be a delicious experience.</p>
                            <button className="bg-white text-rose-500 text-xl rounded-md 2 mt-3 p-2">Shop</button>
                        </div>
                        <img src="img0001-removebg.png" alt="imagen niña saltando"></img>
                    </div>
               </section>
            </main>
        </>
    );
}