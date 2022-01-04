import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, Button, Form, Table } from 'react-bootstrap';
import './Detail.scss';
import { 재고context } from './App.js'
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
let 박스 = styled.div`
  padding : 30px;
`;
let 제목 = styled.h4`
font-size : 25px;
padding-bottom: 20px;
color : ${props => props.색상}
`
let Seen = styled.h5`
font-size :16px;
padding:15px 20px;
color: white;
`
function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  // let 재고 = useContext(재고context);

  useEffect(() => {
    let 타이머 = setTimeout(() => { alert변경(false) }, 2000);
    return () => { clearTimeout(타이머) }
  }, []);

  let { id } = useParams();
  // let 찾은상품 = props.shoes.find(function(상품){
  //   return 상품.id == id
  // });
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let history = useHistory();

  useEffect(() => {
    var arr = localStorage.getItem('watched');
    if (arr == null) { arr = [] } else { arr = JSON.parse(arr) };

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr));
  }, []);

  return (
    <div className="container">
      <div><Show shoes={props.shoes} arr={JSON.parse(localStorage.getItem('watched')) == null ? [] : JSON.parse(localStorage.getItem('watched'))}></Show></div>
      <박스>
        <제목 색상={'red'}>Detail</제목>
      </박스>
      {
        alert === true
          ? (<div className="my-alert alert alert-danger" role="alert">
            <p>재고가 얼마 남지 않았습나다</p>
          </div>)
          : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={require('./images/item' + (id) + '.jpg')} width="100%" />
        </div>
        <div className="col-md-6 mt-4 textDetail">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}₩</p>
          <Form.Select aria-label="Default select example" className="formStyle">
            <option>size</option>
            <option value="1">240</option>
            <option value="2">250</option>
            <option value="3">260</option>
            <option value="4">270</option>
            <option value="5">280</option>
          </Form.Select>
          <Info 재고={props.재고}></Info>
          <Button variant="dark" className="btn btns" onClick={() => {
            props.재고변경([3, 1, 2, 5, 8, 3, 4, 75, 4, 25, 57, 3, 4, 54]);
            props.dispatch({ type: '항목추가', 데이터: { id: 찾은상품.id, name: 찾은상품.title, quan: 찾은상품.quan, price: 찾은상품.price } });
            history.push('/Cart');
          }}>Buy {찾은상품.price}₩</Button>
          <Button variant="dark" className="btn btns" onClick={() => {
            history.goBack();
          }}>뒤로가기</Button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0) }}>Detail</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1) }}>Review</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  )
}
function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });
  if (props.누른탭 === 0) {
    return <div><Tab1></Tab1></div>
  } else if (props.누른탭 === 1) {
    return <div><Tab2></Tab2></div>
  }
}
function Tab1() {
  let [tabOpen, tabOpen변경] = useState(false);
  return (
    <Button className='mt-5' onClick={() => { tabOpen변경(false) }}>view Detail</Button>
  )
}
function Tab2(props) {
  let [good, good변경] = useState(0);
  return (
    <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>아이템</th>
          <th>상품명</th>
          <th>리뷰</th>
          <th>평점</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr>
            <td></td>
            <td></td>
            <td>Holy cow, these are great.</td>
            <td> <h3><span onClick={() => { good변경(good + 1) }}>👍</span> {good} </h3></td>
          </tr>
        }
      </tbody>
    </Table>
  )
}
function Show(props) {
  let history = useHistory();
  // console.log(props.shoes);  
  return (
    <div className='Show'>
      <Seen>Recently seen</Seen>
      {
        props.arr.map((value) => {
          return (
            <div className='show-product'>
              <p onClick={
                () => {
                  history.push('/detail/'+value);
                }
              }><img src={require('./images/item' + (value) + '.jpg')} width="50px" /></p>
            </div>
          )
        })
      }
    </div>
  )
}
function Info(props) {
  return (
    <p>재고: {props.재고[0]}</p>
  )
}
function state를props화(state) {
  return {
    state: state.reducer,
    alert열렸니: state.reducer2
  }
}
export default connect(state를props화)(Detail)