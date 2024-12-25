'use client';
import React, { useEffect } from 'react';

//? hooks => react function which starts with "use" keyword
//? e.g useState, useEffect, useMemo, useCallback, useRef
//? third party hooks => useQuery, useSelector, useDispatch, useMutation
//? we can also create custom hooks
//? useState => like variable which holds value and also tracks were to paint the value in dom
//? useEffect => react lifecycle (mounting, updating, unmounting)

//syntax
// useEffect(callback function)
// useEffect(callback function ,[])
// useEffect(callback function ,[value])
// useEffect(callback function ,[value1,value2,...])

//? popular uses => data fetching, updating dom based upon condition

const Tab = () => {
  useEffect(() => {
    console.log('Hello World');
  });
  return (
    <div>
      <p className="text-">Use effect</p>
    </div>
  );
};

export default Tab;
