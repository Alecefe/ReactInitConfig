/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  const state = { myList, trends, originals };
  return (
    <>
      <Search />
      {Object.keys(state)
        .map(category =>
          (state[category].length > 0) && (
            <Categories title={category}>
              <Carousel>
                {state[category].map(item => {
                  return (
                    <CarouselItem
                      key={item.id}
                      {...item}
                      isList={category === 'myList'}
                    />
                  );
                })}
              </Carousel>
            </Categories>
          ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);