import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-native';
import ReviewForm from './ReviewForm';
import useReview from '../hooks/useReview';

const initialValues = {
  username: '',
  repository: '',
  rating: '',
  review: ''
};

//.string().matches(/^[0-9]+$/, "Must be only digits").min(5, 'Must be exactly 5 digits')
//.test('len', 'Must be exactly 5 characters', val => val.length === 5)
const validationSchema = yup.object().shape({
  username: yup.string().required('Repository owner name is required'),
  repository: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is required').positive().integer().min(0).max(100),
});

const Review = () => {
  //let history = useHistory();
  const [ createReview, result ] = useReview();

  const onSubmit = async (values) => {
    const { username, repository, rating, review } = values;

    try {
      await createReview({ username, repository, rating, review });
      console.log(result);
      //history.push(`/${repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
 
export default Review;