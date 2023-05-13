import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/ContactPage/Contact';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import AllBlog from './Pages/BlogsPages/AllBlogPage/AllBlog';
import OneBlog from './Pages/BlogsPages/OneBlogPage/OneBlog';
import OneEvent from './Pages/EventsPage/OneEventPage/OneEvent';
import AllEvents from './Pages/EventsPage/AllEventPage/AllEvents';
import OneCourse from './Pages/CoursesPage/OneCoursePage/OneCourse';
import CoursesPage from './Pages/CoursesPage/AllCoursesPage/CoursesPage';

import './Styles/main.scss';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />

        <Route path='Courses' element={<CoursesPage />} />
        <Route path='oneCourse/:id' element={<OneCourse />} />

        <Route path='Events' element={<AllEvents />} />
        <Route path='oneEvent/:id' element={<OneEvent />} />

        <Route path='Blog' element={<AllBlog />} />
        <Route path='oneBlog/:id' element={<OneBlog />} />

        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Contacts' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default observer(App);