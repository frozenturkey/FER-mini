import React from 'react';
import './Menu.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="400px" height="auto" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = (props) => {
  const { dishes, onClick } = props;

  const menu = dishes.map((dish) => (
    <div className="col-12 col-md-5">
      <div key={dish.id}>
        <RenderMenuItem dish={dish} onClick={onClick} />
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row d-flex gap-2">{menu}</div>
    </div>
  );
};

export default Menu;
