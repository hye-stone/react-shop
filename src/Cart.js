import React, { useState } from 'react';
import './Cart.css'
import { Table, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect, useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
function Cart(props) {
  let state = useSelector((state) => state);
  let alert열렸니 = useSelector((alert열렸니) => state.reducer2);
  let dispatch = useDispatch();
  return (
    <div>
      <Table striped bordered hover className='tabled'>
        <thead>
          <tr>
            <th>아이템</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td><img src={require('./images/item' + (a.id) + '.jpg')} width="90px" /></td>
                  <td>{a.name}</td>
                  <td>
                    <Button className='alertBtn' variant="outline-dark" onClick={() => { dispatch({ type: '수량증가', 데이터: a.id }) }}>+</Button>
                    <p className='ap'>{a.quan}</p>
                    <Button className='alertBtn' variant="outline-dark" onClick={() => { dispatch({ type: '수량감소', 데이터: a.id }) }}>-</Button>
                  </td>
                  <td>
                    <NumberFormat value={a.price * a.quan} displayType={'text'} thousandSeparator={true} prefix={'₩'} />
                  </td>
                  <td>
                    <button className="btn btn-default" onClick={() => { dispatch({ type: '상품삭제', 데이터: a.id }) }}>
                      <img src={require('./images/trashcan.png')} />
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      {
        alert열렸니 === true
          ? (<div className='my-alert alert alert-warning' role="alert">
            <p>지금 구매하시면 신규할인 20%</p>
            <Button variant="outline-secondary" onClick={() => { dispatch({ type: 'alert닫기' }) }}>x</Button>
          </div>)
          : null
      }
    </div >
  )
}
export default Cart