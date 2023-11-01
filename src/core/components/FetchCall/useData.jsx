import React from 'react';
import useReadFile  from './useReadFile';

export const useData = () => {
  
    const [cosas] = useReadFile("https://docs.google.com/spreadsheets/d/e/2PACX-1vQYu8Sb2APHli-c2m9ysCXz-xSFrlz4OLTTDuMRR8KDOjeiYieRlsZOVB33TABV4PT_nvF0NSJEviuq/pub?gid=0&single=true&output=csv");
    return (
    [cosas]
    )
}
