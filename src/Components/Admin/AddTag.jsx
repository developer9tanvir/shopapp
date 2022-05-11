import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddTag = () => {

    const [tag, setTag] = useState();


      // slug Genarete
      const makeSlug = (data) => {
          let arr = data.split(' ');
          return arr.join('-').toLowerCase();
      }

      // Add Tag
        const handletagAdd = (e) => {
            e.preventDefault();

            let slug = makeSlug(tag);
            axios.post('http://localhost:5050/tags',{
                id   : '',
                name : tag,
                slug : slug


            }).then( res => {
              setTag('');
            });


        }



  return (
    <>
    <h2>Add New Tag</h2>
    <hr />
    <Link className='btn btn-primary btn-sm' to="/admin/tag" >All Tag</Link>
    <hr />
      <Form onSubmit={ handletagAdd }>
        <Form.Group my={ 3 }>
            <Form.Control type='text' value={tag} onChange={ e => setTag(e.target.value) } placeholder='Tag Name' />
        </Form.Group>
        <br />
        <Form.Group my={ 3 }>
            <Button type='submit' variant='success' >Add</Button>
        </Form.Group>
      </Form>
    </>
  )
};

export default AddTag;