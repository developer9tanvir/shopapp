
import React, { useEffect, useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Tag = () => {

  // slug Genarete
   const makeSlug = (data) => {
    let arr = data.split(' ');
    return arr.join('-').toLowerCase();
  }

  // Edit tag state
  const [tag, setTag] = useState({
    name: '',
    id : ''
  });
  const [tagUpdateForm, setTagUpdateForm] = useState(false);
  
  //tag state
  const [tags, setTags ] = useState([]);

  // tag delete handler
  const handletagDelete = (id) => {
    axios.delete('http://localhost:5050/Tags/' + id);
  }

  // handle tag edit
  const handletagEdit = (id) => {
    setTagUpdateForm(true);
    axios.get('http://localhost:5050/Tags/' + id).then(res => {
      setTag({
        name : res.data.name,
        id : res.data.id,
      });
      
    });

  }

  // Form submit handler
  const handelFormSubmit = (e) => { 
    e.preventDefault();

    let slug = makeSlug(tag.name)

    axios.patch('http://localhost:5050/Tags/' + tag.id, {
      name : tag.name,
      slug : slug
     }).then( res => {
       setTagUpdateForm(false)
     })

  }

 
  


  useEffect(() => {

    axios.get('http://localhost:5050/Tags').then(res => {
      setTags(res.data);
    });


  }, [tags]);

    


  return (
    <>
    <h2>Tag</h2>
    <hr />
    <Link className='btn btn-primary btn-sm' to="/admin/add-tag" >Add New Tag</Link>
    <hr />
    <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>



          {
            tags.map((data, index) => 

            <tr>
            <td>{index + 1}</td>
            <td>{ data.name }</td>
            <td>{ data.slug }</td>
            <td>
              
              <Button variant='warning' onClick={ () => handletagEdit(data.id)} className='btn-sm' >Edit</Button>
              <Button variant='danger' onClick={ () => handletagDelete(data.id)} className='btn-sm' >Delete</Button>
            </td>
          </tr>

            )
          }



          
        </tbody>
      </Table>

      {
          tagUpdateForm &&

          <>
              <h3>Edit Tag Data</h3>
              <hr />  
              <Form onSubmit={ handelFormSubmit }>
                <Form.Group my={ 3 }>
                    <Form.Control type='text' value={tag.name} onChange={ e => setTag({...tag, name : e.target.value  }) } placeholder='Tag Name' />
                 </Form.Group>
                <Form.Group my={ 3 }>
                    <Form.Control type='text' value={tag.id} onChange={ e => setTag(e.target.value) } placeholder='Tag Name' />
                </Form.Group>
                <Form>
                <br />
                <Form.Group my={ 3 }>
                    <Button type='submit' variant='success' >Update</Button>
                </Form.Group>
              </Form>
              </Form>
              {/* <Form onSubmit={ handelFormSubmit }>
                <Form.Group>
                  <Form.Control>
                    <input  type="text" />
                  </Form.Control>
                </Form.Group>
              </Form> */}
          </>

          
        }
          

    </>
  )
};

export default Tag;