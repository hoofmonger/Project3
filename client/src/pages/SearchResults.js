import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SearchBar from '../components/SearchBar';

const SearchResults = ()=> {
    const {loading, data} = useQuery(QUERY_SEARCH)
    const productResults = data?.thoughts || [];

    return (
        <main>
            
        </main>
    )
} 