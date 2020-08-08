/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const [videos, categories] = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {categories
        .map(category =>
          (videos[category].length > 0) && (
            <Categories title={category}>
              <Carousel>
                {videos[category].map(video =>
                  <CarouselItem key={video.id} {...video} />)}
              </Carousel>
            </Categories>
          ))}
      <Footer />
    </div>
  );
};

export default App;
