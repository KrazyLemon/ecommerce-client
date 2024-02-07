import Banner from './components/banner';
import Card from './components/card';
import Footer from './components/footer';
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className='w-4/5 m-auto mt-9 p-0'>
          <section className='mt-5'>
            <h3 className='text-3xl font-bold '>Featured Products</h3>
            <section className='flex justify-around mt-9 p-1'>
              <Card
                name='Chocolate'
                price='20'
                image='/chocolate.png'
                description='Delicious chocolate with a lot of sugar and a lot of calories and a lot of fat ...'
                rating={4}
              />
              <Card
                name='Chocolate'
                price='20'
                image='/chocolate.png'
                description='Delicious chocolate'
                rating={4}
              />
              <Card
                name='Chocolate'
                price='20'
                image='/chocolate.png'
                description='Delicious chocolate'
                rating={4}
              />
              <Card
                name='Chocolate'
                price='20'
                image='/chocolate.png'
                description='Delicious chocolate'
                rating={4}
              />
            </section>
          </section>
        </div>
        <Footer />

      </main>
    </>
  );
}
