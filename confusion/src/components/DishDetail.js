import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-sm-5">
      <Card>
        <CardImg
          top
          src={`${window.location.origin}/${dish.image}`}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const RenderComment = ({ comments }) => {
  const comment = comments.map((item) => {
    return (
      <div>
        <p>{item.comment}</p>
        <p>
          {item.author} {item.date}
        </p>
      </div>
    );
  });

  return (
    <div className="col-12 col-sm-7">
      <h2>Comments</h2>
      {comment}
    </div>
  );
};

const DishDetail = ({ dish, comments }) => {
  if (dish == null) return <div></div>;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComment comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
