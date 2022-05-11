import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <hr />
      <Button variant='primary' className='btn-sm' >Add New Product</Button>
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
          <tr>
            <td>1</td>
            <td>Men</td>
            <td>Men</td>
            <td>
              <Button variant='info' className='btn-sm' >View</Button>
              <Button variant='warning' className='btn-sm' >Edit</Button>
              <Button variant='danger' className='btn-sm' >Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

export default Products;