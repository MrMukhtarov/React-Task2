import React from 'react'

const ProductList = ({title,price,description,category,image}) => {
  return (
    <section id="card">
    <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <table id="tbl" class="table table-striped">
                        <thead>
                            <tr>
                                <th className='col-lg-2 h-25'></th>
                                <th className='col-lg-2'></th>
                                <th className='col-lg-2'></th>
                                <th className='col-lg-5'></th>
                                <th className='col-lg-2'></th>
                            </tr>
                        </thead>
                        <tbody id="table">
                         <tr>
                            <td><img src={image} alt="" /></td>
                            <td>{title}</td>
                            <td>${price}</td>
                            <td>{description}</td>
                            <td>{category}</td>
                        </tr>
                      </tbody>
                    </table>                  
                </div>
        </div>
    </div>
  </section>

   
  )
}

export default ProductList